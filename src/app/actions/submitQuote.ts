"use server";

import { createClient } from "@/lib/supabase/server";
import type { QuoteRequestInsert } from "@/types/database";

// ─────────────────────────────────────────────────────────
// Configuration check helper
// ─────────────────────────────────────────────────────────

function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return false;
  if (
    url.includes("your-project-id") ||
    url.includes("your-project") ||
    key.includes("your-supabase")
  ) {
    return false;
  }

  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

// ─────────────────────────────────────────────────────────
// Validation helpers
// ─────────────────────────────────────────────────────────

function isValidWa(wa: string): boolean {
  // Bersihkan karakter spasi, strip, tanda kurung
  const cleaned = wa.replace(/[\s\-()]/g, "");
  // Format nomor WhatsApp Indonesia: 08xxx, 628xxx, +628xxx (8 s.d 15 digit)
  return /^(\+?62|0)[0-9]{7,13}$/.test(cleaned);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeText(val: string): string {
  return val.trim().replace(/\s+/g, " ");
}

// Simple hash for rate-limit key (deduplikasi per jam)
function roughHash(input: string): string {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (Math.imul(31, h) + input.charCodeAt(i)) | 0;
  }
  return `${Math.abs(h).toString(16)}`;
}

// ─────────────────────────────────────────────────────────
// Rate limit check (maksimal 3 pengajuan per nomor WA per jam)
// ─────────────────────────────────────────────────────────

async function checkRateLimit(waNumber: string): Promise<{ ok: boolean; message?: string }> {
  try {
    const supabase = await createClient();
    const key = roughHash(waNumber.replace(/\D/g, ""));
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

    const { count } = await (supabase.from("rate_limit_log") as any)
      .select("id", { count: "exact", head: true })
      .eq("lookup_key", key)
      .eq("action", "quote_request")
      .gte("created_at", oneHourAgo);

    if (count !== null && count >= 3) {
      return {
        ok: false,
        message:
          "Terlalu banyak permintaan dari nomor ini dalam 1 jam terakhir. Silakan coba kembali nanti atau hubungi kami langsung via WhatsApp.",
      };
    }

    // Catat percobaan pengajuan
    await (supabase.from("rate_limit_log") as any).insert({
      lookup_key: key,
      action: "quote_request",
    });

    return { ok: true };
  } catch {
    // Jika tabel rate_limit_log belum dibuat atau database dalam setup, jangan halangi proses pengajuan
    return { ok: true };
  }
}

// ─────────────────────────────────────────────────────────
// Server Action: Submit quote request
// ─────────────────────────────────────────────────────────

export interface SubmitQuoteResult {
  success: boolean;
  message: string;
  referenceId?: string;
  details?: string;
}

export async function submitQuoteRequest(formData: FormData): Promise<SubmitQuoteResult> {
  try {
    // ── 0. Cek konfigurasi koneksi Supabase ─────────────────
    if (!isSupabaseConfigured()) {
      return {
        success: false,
        message:
          "Koneksi database Supabase belum terkonfigurasi di server (masih menggunakan konfigurasi bawaan / placeholder di .env.local). Silakan hubungi kami langsung via WhatsApp di +62 812-3505-0097 untuk mendapatkan penawaran cepat.",
        details: "Supabase credentials are placeholders in .env.local",
      };
    }

    const supabase = await createClient();

    // ── 1. Ekstrak dan sanitasi data form ───────────────────
    const customerName = sanitizeText((formData.get("customer_name") as string) ?? "");
    const whatsappNumber = sanitizeText((formData.get("whatsapp_number") as string) ?? "");
    const email = sanitizeText((formData.get("email") as string) ?? "");
    const companyName = sanitizeText((formData.get("company_name") as string) ?? "");
    const productCategory = sanitizeText((formData.get("product_category") as string) ?? "");
    const productType = sanitizeText((formData.get("product_type") as string) ?? "");
    const quantityRaw = (formData.get("quantity") as string) ?? "0";
    const material = sanitizeText((formData.get("material") as string) ?? "");
    const color = sanitizeText((formData.get("color") as string) ?? "");
    const sizes = sanitizeText((formData.get("sizes") as string) ?? "");
    const finishing = sanitizeText((formData.get("finishing") as string) ?? "");
    const targetDeadline = (formData.get("target_deadline") as string) ?? "";
    const notes = sanitizeText((formData.get("notes") as string) ?? "");

    // Ambil file lampiran desain
    const rawDesignFile = formData.get("design_file");
    const hasDesignFile =
      rawDesignFile instanceof File &&
      typeof rawDesignFile.size === "number" &&
      rawDesignFile.size > 0 &&
      typeof rawDesignFile.name === "string" &&
      rawDesignFile.name.trim().length > 0 &&
      rawDesignFile.name !== "undefined";

    const designFile = hasDesignFile ? (rawDesignFile as File) : null;

    // ── 2. Validasi sisi server ─────────────────────────────
    if (!customerName || customerName.length < 2) {
      return {
        success: false,
        message: "Nama pelanggan wajib diisi minimal 2 karakter.",
      };
    }

    if (!whatsappNumber || !isValidWa(whatsappNumber)) {
      return {
        success: false,
        message:
          "Nomor WhatsApp tidak valid. Masukkan nomor aktif Indonesia (contoh: 08123456789 atau +628123456789).",
      };
    }

    if (email && !isValidEmail(email)) {
      return {
        success: false,
        message: "Format email tidak valid. Masukkan alamat email yang benar atau kosongkan kolom ini.",
      };
    }

    if (!productCategory) {
      return {
        success: false,
        message: "Silakan pilih salah satu kategori produk.",
      };
    }

    if (!productType || productType.length < 2) {
      return {
        success: false,
        message: "Jenis atau model produk wajib diisi (contoh: Kaos Polo Bordir, Seragam Kerja PDL).",
      };
    }

    const quantity = parseInt(quantityRaw, 10);
    if (isNaN(quantity) || quantity < 1) {
      return {
        success: false,
        message: "Jumlah pesanan harus berupa angka bulat lebih dari 0.",
      };
    }

    // ── 3. Validasi file desain (jika dilampirkan) ───────────
    const ALLOWED_MIME = ["image/jpeg", "image/png", "application/pdf"];
    const ALLOWED_EXT = ["jpg", "jpeg", "png", "pdf"];
    const MAX_SIZE = 10 * 1024 * 1024; // 10MB

    let fileExt = "";
    if (designFile) {
      fileExt = (designFile.name.split(".").pop() || "").toLowerCase();

      const isValidExt = ALLOWED_EXT.includes(fileExt);
      const isValidMime = !designFile.type || ALLOWED_MIME.includes(designFile.type);

      if (!isValidExt || !isValidMime) {
        return {
          success: false,
          message:
            "Format berkas desain tidak didukung. Format yang diperbolehkan hanya JPG, JPEG, PNG, atau PDF.",
        };
      }

      if (designFile.size > MAX_SIZE) {
        return {
          success: false,
          message: "Ukuran berkas desain melebihi batas maksimal 10 MB.",
        };
      }
    }

    // ── 4. Rate limiting check ──────────────────────────────
    const rateCheck = await checkRateLimit(whatsappNumber);
    if (!rateCheck.ok) {
      return { success: false, message: rateCheck.message! };
    }

    // ── 5. Upload file desain asli ke bucket privat ─────────
    let designFilePath: string | null = null;
    let designFileName: string | null = null;

    if (designFile) {
      const timestamp = Date.now();
      const randomSuffix = Math.random().toString(36).slice(2, 8);
      const safeExt = fileExt || "png";
      const targetPath = `submissions/${timestamp}-${randomSuffix}.${safeExt}`;

      // Tentukan content type yang tepat
      let resolvedContentType = designFile.type;
      if (!resolvedContentType || resolvedContentType === "application/octet-stream") {
        if (safeExt === "pdf") {
          resolvedContentType = "application/pdf";
        } else if (safeExt === "jpg" || safeExt === "jpeg") {
          resolvedContentType = "image/jpeg";
        } else if (safeExt === "png") {
          resolvedContentType = "image/png";
        }
      }

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("quote-attachments")
        .upload(targetPath, designFile, {
          contentType: resolvedContentType,
          upsert: false,
        });

      if (uploadError) {
        console.error("Gagal mengunggah berkas desain ke Storage:", uploadError.message);
        return {
          success: false,
          message: `Gagal mengunggah berkas desain (${uploadError.message}). Silakan periksa berkas Anda dan coba lagi, atau kirim formulir tanpa berkas dan kirimkan desain via WhatsApp.`,
        };
      }

      designFilePath = uploadData?.path || targetPath;
      designFileName = designFile.name;
    }

    // ── 6. Simpan permintaan ke database ────────────────────
    const quoteId = crypto.randomUUID();

    const payload: QuoteRequestInsert = {
      id: quoteId,
      customer_name: customerName,
      whatsapp_number: whatsappNumber,
      email: email || null,
      company_name: companyName || null,
      product_category: productCategory,
      product_type: productType,
      quantity,
      material: material || null,
      color: color || null,
      sizes: sizes || null,
      finishing: finishing || null,
      target_deadline: targetDeadline || null,
      design_file_path: designFilePath,
      design_file_name: designFileName,
      notes: notes || null,
      status: "pending",
    };

    const { error: insertError } = await (supabase
      .from("quote_requests") as any)
      .insert(payload);

    if (insertError) {
      console.error("Gagal insert ke quote_requests:", insertError.message);

      // Jika file sempat terunggah tetapi insert ke DB gagal, bersihkan file yatim
      if (designFilePath) {
        try {
          await supabase.storage.from("quote-attachments").remove([designFilePath]);
          console.log("File yatim berhasil dibersihkan:", designFilePath);
        } catch (cleanupErr) {
          console.warn("Gagal membersihkan file yatim:", cleanupErr);
        }
      }

      return {
        success: false,
        message: `Terjadi kendala saat menyimpan permintaan (${insertError.message}). Data formulir Anda tetap tersimpan, silakan coba kirim kembali.`,
      };
    }

    const referenceCode = quoteId.slice(0, 8).toUpperCase();

    return {
      success: true,
      message:
        "Permintaan penawaran berhasil dikirim! Tim CV. QEE BEE akan segera menindaklanjuti pengajuan Anda.",
      referenceId: referenceCode,
    };
  } catch (err: any) {
    console.error("Terjadi exception tak terduga di submitQuoteRequest:", err);
    const rawMsg = err?.message || String(err);
    const isNetworkError = rawMsg.includes("fetch failed") || rawMsg.includes("ENOTFOUND");

    return {
      success: false,
      message: isNetworkError
        ? "Koneksi ke database tidak dapat dijangkau. Silakan hubungi kami langsung melalui WhatsApp di +62 812-3505-0097 untuk respon cepat."
        : `Permintaan belum berhasil dikirim (${rawMsg}). Silakan periksa kembali data Anda dan coba lagi.`,
    };
  }
}
