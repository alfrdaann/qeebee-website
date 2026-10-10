"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Loader2,
  AlertCircle,
  Upload,
  X,
  MessageCircle,
  ArrowLeft,
  RotateCcw,
  FileText,
  FileImage,
} from "lucide-react";
import { submitQuoteRequest, type SubmitQuoteResult } from "@/app/actions/submitQuote";
import { PRODUCT_CATEGORIES } from "@/constants/products";
import { COMPANY_INFO } from "@/constants/company";

// ─────────────────────────────────────────────────────────
// Styling Helpers
// ─────────────────────────────────────────────────────────
const fieldClass =
  "w-full rounded-lg border border-[#E5E5E5] bg-white px-4 py-2.5 text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/40 focus:border-[#FF6A00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
const labelClass = "block text-xs font-semibold text-[#111111] mb-1.5";
const requiredStar = <span className="text-[#FF6A00] ml-0.5">*</span>;

export interface QuoteRequestFormProps {
  initialCategory?: string;
}

// ─────────────────────────────────────────────────────────
// Success Confirmation Screen
// ─────────────────────────────────────────────────────────
interface SuccessViewProps {
  referenceId?: string;
  customerName?: string;
  productCategory?: string;
  onReset: () => void;
}

function SuccessView({ referenceId, customerName, productCategory, onReset }: SuccessViewProps) {
  const refText = referenceId ? ` (Ref: #${referenceId})` : "";
  const catText = productCategory ? ` untuk ${productCategory}` : "";
  const nameText = customerName ? ` atas nama ${customerName}` : "";

  const waMsg = encodeURIComponent(
    `Halo ${COMPANY_INFO.name}, saya telah mengirimkan formulir permintaan penawaran harga apparel${catText}${nameText}${refText}. Mohon dibantu untuk estimasi biaya dan waktu pengerjaannya. Terima kasih.`
  );

  return (
    <div className="py-8 sm:py-12 px-4 max-w-xl mx-auto text-center space-y-6 animate-fade-in">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500/20 flex items-center justify-center text-emerald-600 shadow-xs">
          <CheckCircle2 className="w-9 h-9" />
        </div>
      </div>

      {/* Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
          Pengajuan Diterima
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
          Permintaan Penawaran Berhasil Dikirim!
        </h2>
        <p className="text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
          Terima kasih telah mempercayakan kebutuhan apparel kepada{" "}
          <strong className="text-[#111111]">{COMPANY_INFO.name}</strong>. Tim spesialis kami akan segera meninjau spesifikasi pesanan Anda dan menghubungi via WhatsApp.
        </p>
      </div>

      {/* Reference Card */}
      {referenceId && (
        <div className="bg-[#FFF8F2] border border-[#FF6A00]/25 rounded-2xl p-5 space-y-1.5 text-left max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Nomor Referensi Pengajuan
            </span>
            <span className="text-[11px] font-bold text-[#FF6A00] bg-[#FF6A00]/10 px-2 py-0.5 rounded">
              Simpan Kode Ini
            </span>
          </div>
          <div className="text-2xl font-mono font-bold text-[#111111] tracking-wider">
            #{referenceId}
          </div>
          <p className="text-xs text-neutral-600 pt-1 border-t border-[#FF6A00]/15">
            Sebutkan kode referensi ini saat berkoordinasi via WhatsApp untuk respon yang lebih cepat.
          </p>
        </div>
      )}

      {/* Next Step Info */}
      <div className="bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl p-4 text-xs text-neutral-600 text-left max-w-md mx-auto space-y-2">
        <strong className="text-[#111111] block font-semibold">Langkah Selanjutnya:</strong>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>Tim kami memeriksa ketersediaan bahan, teknik aplikasi (bordir/sablon), serta jadwal produksi.</li>
          <li>Kami akan mengirimkan rincian kalkulasi estimasi harga resmi langsung ke WhatsApp Anda.</li>
          <li>Jam layanan aktif: <strong>{COMPANY_INFO.operatingHours} WIB</strong>.</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2 max-w-md mx-auto">
        <a
          href={`${COMPANY_INFO.whatsappUrl}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-xl bg-[#25D366] text-white text-sm font-bold hover:bg-[#20ba5a] transition-colors shadow-sm"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Konfirmasi Cepat via WhatsApp</span>
        </a>

        <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-1/2 px-4 py-2.5 rounded-xl border border-[#E5E5E5] bg-white text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-neutral-500" />
            <span>Buat Pengajuan Baru</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-1/2 px-4 py-2.5 rounded-xl border border-[#E5E5E5] bg-white text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-neutral-500" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Main Form Component
// ─────────────────────────────────────────────────────────
export function QuoteRequestForm({ initialCategory }: QuoteRequestFormProps) {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitQuoteResult | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const [clientError, setClientError] = useState<string>("");

  // Captured form values for success screen personalization
  const [submittedMeta, setSubmittedMeta] = useState<{
    customerName?: string;
    productCategory?: string;
  }>({});

  // Auto-detect selected category from prop or query param (e.g. ?kategori=kaos)
  const categoryParam = searchParams.get("kategori") || searchParams.get("produk") || initialCategory || "";
  const matchedCategory = PRODUCT_CATEGORIES.find(
    (c) =>
      c.name.toLowerCase() === categoryParam.toLowerCase() ||
      c.id.toLowerCase() === categoryParam.toLowerCase()
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(
    matchedCategory ? matchedCategory.name : ""
  );

  useEffect(() => {
    if (categoryParam) {
      const match = PRODUCT_CATEGORIES.find(
        (c) =>
          c.name.toLowerCase() === categoryParam.toLowerCase() ||
          c.id.toLowerCase() === categoryParam.toLowerCase()
      );
      if (match) {
        setSelectedCategory(match.name);
      }
    }
  }, [categoryParam]);

  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const ALLOWED_TYPES = ["image/jpeg", "image/png", "application/pdf"];
  const MAX_SIZE = 10 * 1024 * 1024; // 10MB

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFileError("");
    const file = e.target.files?.[0] ?? null;
    if (!file) {
      setSelectedFile(null);
      return;
    }

    const fileExt = (file.name.split(".").pop() || "").toLowerCase();
    const isAllowedExt = ["jpg", "jpeg", "png", "pdf"].includes(fileExt);
    const isAllowedType = ALLOWED_TYPES.includes(file.type);

    if (!isAllowedExt && !isAllowedType) {
      setFileError("Format file tidak didukung. Harap pilih berkas JPG, JPEG, PNG, atau PDF.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSelectedFile(null);
      return;
    }

    if (file.size > MAX_SIZE) {
      setFileError("Ukuran file terlalu besar. Maksimal ukuran berkas adalah 10 MB.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  }

  function clearFile() {
    setSelectedFile(null);
    setFileError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleReset() {
    setResult(null);
    setSelectedFile(null);
    setFileError("");
    setClientError("");
    setSubmittedMeta({});
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    formRef.current?.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setClientError("");
    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Pastikan berkas terpilih benar-benar terlampir di FormData
    if (selectedFile) {
      formData.set("design_file", selectedFile);
    } else {
      formData.delete("design_file");
    }

    // Client-side pre-validation for instant feedback
    const name = ((formData.get("customer_name") as string) || "").trim();
    const wa = ((formData.get("whatsapp_number") as string) || "").trim();
    const cat = ((formData.get("product_category") as string) || "").trim();
    const type = ((formData.get("product_type") as string) || "").trim();
    const qty = parseInt((formData.get("quantity") as string) || "0", 10);

    if (name.length < 2) {
      setClientError("Harap isi Nama Lengkap pemesan (minimal 2 karakter).");
      notificationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (wa.replace(/\D/g, "").length < 8) {
      setClientError("Harap isi Nomor WhatsApp aktif yang valid (minimal 8 digit).");
      notificationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (!cat) {
      setClientError("Harap pilih Kategori Produk yang diinginkan.");
      notificationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (type.length < 2) {
      setClientError("Harap isi Jenis / Model Produk yang dipesan.");
      notificationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (isNaN(qty) || qty < 1) {
      setClientError("Jumlah pesanan harus berupa angka minimal 1.");
      notificationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Capture metadata for personalized success view
    setSubmittedMeta({
      customerName: name,
      productCategory: cat,
    });

    setIsSubmitting(true);

    try {
      const res = await submitQuoteRequest(formData);
      setResult(res);

      if (res.success) {
        // Scroll to top to display confirmation
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Scroll to error message
        setTimeout(() => {
          notificationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    } catch (err: any) {
      console.error("Kesalahan saat pengiriman formulir:", err);
      const rawMsg = err?.message || String(err);
      const isFetchErr = rawMsg.includes("Failed to fetch") || rawMsg.includes("fetch failed");
      setResult({
        success: false,
        message: isFetchErr
          ? "Gagal menghubungi server aplikasi atau ukuran data melebihi batas. Silakan periksa koneksi internet Anda atau hubungi kami langsung via WhatsApp di +62 812-3505-0097."
          : `Gagal mengirim pengajuan (${rawMsg}). Silakan coba kembali atau hubungi kami langsung via WhatsApp di +62 812-3505-0097.`,
      });
      setTimeout(() => {
        notificationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Tampilkan layar sukses apabila pengajuan berhasil tersimpan
  if (result?.success) {
    return (
      <SuccessView
        referenceId={result.referenceId}
        customerName={submittedMeta.customerName}
        productCategory={submittedMeta.productCategory}
        onReset={handleReset}
      />
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* ── Status Notification Target Anchor ── */}
      <div ref={notificationRef} />

      {/* ── Client Validation Alert ── */}
      {clientError && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-300 text-sm text-amber-900 animate-shake">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <strong className="font-semibold block">Perhatian:</strong>
            <span>{clientError}</span>
          </div>
        </div>
      )}

      {/* ── Server Error Banner ── */}
      {result && !result.success && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-50 border border-rose-300 text-sm text-rose-900">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-semibold block">Permintaan Belum Berhasil Dikirim</strong>
            <p className="leading-relaxed">{result.message}</p>
            <p className="text-xs text-rose-700 pt-1 border-t border-rose-200">
              Data yang Anda ketik tetap tersimpan di bawah ini. Anda dapat memeriksa berkas atau isian formulir, lalu mencoba mengirim kembali.
            </p>
          </div>
        </div>
      )}

      {/* ── Category Notice if prefilled ── */}
      {matchedCategory && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-xs text-[#111111]">
          <FileText className="w-4 h-4 text-[#FF6A00] shrink-0" />
          <span>
            Kategori produk telah otomatis dipilih: <strong>{matchedCategory.name}</strong>. Anda tetap dapat mengubahnya sesuai kebutuhan.
          </span>
        </div>
      )}

      {/* ── Section 1: Identitas Pelanggan ── */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#E5E5E5] flex items-center justify-between">
          <span>1. Identitas Pelanggan</span>
          <span className="text-[11px] text-neutral-400 font-normal lowercase tracking-normal">
            kolom bertanda (*) wajib
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="customer_name" className={labelClass}>
              Nama Lengkap {requiredStar}
            </label>
            <input
              id="customer_name"
              name="customer_name"
              type="text"
              required
              minLength={2}
              maxLength={120}
              autoComplete="name"
              placeholder="Contoh: Budi Santoso"
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="whatsapp_number" className={labelClass}>
              Nomor WhatsApp Aktif {requiredStar}
            </label>
            <input
              id="whatsapp_number"
              name="whatsapp_number"
              type="tel"
              required
              maxLength={20}
              autoComplete="tel"
              placeholder="Contoh: 08123456789"
              className={fieldClass}
              disabled={isSubmitting}
            />
            <p className="text-[11px] text-neutral-500 mt-1">
              Nomor ini akan digunakan tim kami untuk mengirimkan penawaran harga resmi.
            </p>
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Alamat Email <span className="text-neutral-400 font-normal">(opsional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              maxLength={150}
              autoComplete="email"
              placeholder="budi@perusahaan.com"
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="company_name" className={labelClass}>
              Instansi / Nama Perusahaan / Komunitas <span className="text-neutral-400 font-normal">(opsional)</span>
            </label>
            <input
              id="company_name"
              name="company_name"
              type="text"
              maxLength={150}
              placeholder="PT / CV / Instansi / Komunitas Anda"
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>

      {/* ── Section 2: Detail Produk ── */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#E5E5E5]">
          2. Detail Produk
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="product_category" className={labelClass}>
              Kategori Produk {requiredStar}
            </label>
            <select
              id="product_category"
              name="product_category"
              required
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={fieldClass}
              disabled={isSubmitting}
            >
              <option value="" disabled>Pilih kategori...</option>
              {PRODUCT_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="product_type" className={labelClass}>
              Jenis / Model Produk {requiredStar}
            </label>
            <input
              id="product_type"
              name="product_type"
              type="text"
              required
              maxLength={150}
              placeholder="Contoh: Kaos Polo Wangki, Kemeja PDL, Jaket Bomber"
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="quantity" className={labelClass}>
              Jumlah Pesanan (Pcs) {requiredStar}
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              required
              min={1}
              max={100000}
              placeholder="Contoh: 50"
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="target_deadline" className={labelClass}>
              Target Tanggal Diperlukan <span className="text-neutral-400 font-normal">(opsional)</span>
            </label>
            <input
              id="target_deadline"
              name="target_deadline"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>

      {/* ── Section 3: Spesifikasi ── */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#E5E5E5]">
          3. Spesifikasi Bahan &amp; Aplikasi
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="material" className={labelClass}>
              Pilihan Bahan <span className="text-neutral-400 font-normal">(opsional)</span>
            </label>
            <input
              id="material"
              name="material"
              type="text"
              maxLength={200}
              placeholder="Contoh: Cotton Combed 30s, Drill, Lacoste, Fleece"
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="color" className={labelClass}>
              Pilihan Warna <span className="text-neutral-400 font-normal">(opsional)</span>
            </label>
            <input
              id="color"
              name="color"
              type="text"
              maxLength={200}
              placeholder="Contoh: Navy Blue, Hitam, Abu Misty, Merah Maroon"
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="sizes" className={labelClass}>
              Rincian Ukuran <span className="text-neutral-400 font-normal">(opsional)</span>
            </label>
            <input
              id="sizes"
              name="sizes"
              type="text"
              maxLength={200}
              placeholder="Contoh: S: 10, M: 20, L: 15, XL: 5 (atau sertakan size chart)"
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="finishing" className={labelClass}>
              Aplikasi Logo / Finishing <span className="text-neutral-400 font-normal">(opsional)</span>
            </label>
            <input
              id="finishing"
              name="finishing"
              type="text"
              maxLength={200}
              placeholder="Contoh: Bordir komputer 2 titik, Sablon Plastisol"
              className={fieldClass}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>

      {/* ── Section 4: File Desain (Persistent DOM input) ── */}
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#E5E5E5]">
          4. Lampiran Desain / Contoh{" "}
          <span className="text-neutral-400 font-normal normal-case tracking-normal">(opsional)</span>
        </h3>

        {/* Input file selalu berada di DOM agar tidak pernah ter-unmount saat form disubmit */}
        <input
          ref={fileInputRef}
          id="design_file"
          name="design_file"
          type="file"
          className="sr-only"
          accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
          onChange={handleFileChange}
          disabled={isSubmitting}
        />

        {!selectedFile ? (
          <label
            htmlFor="design_file"
            className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[#E5E5E5] rounded-xl p-6 cursor-pointer hover:border-[#FF6A00]/50 hover:bg-[#FFF8F2] transition-colors ${
              isSubmitting ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00]">
              <Upload className="w-5 h-5" />
            </div>
            <div className="text-center space-y-1">
              <span className="text-xs text-neutral-600 font-medium block">
                Seret berkas desain ke sini atau{" "}
                <span className="text-[#FF6A00] font-bold underline">klik untuk memilih berkas</span>
              </span>
              <span className="text-[11px] text-neutral-400 block">
                Format yang didukung: JPG, JPEG, PNG, atau PDF (maks. 10 MB)
              </span>
            </div>
          </label>
        ) : (
          <div className="flex items-center justify-between gap-3 p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                <FileImage className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-[#111111] font-bold block truncate">
                  {selectedFile.name}
                </span>
                <span className="text-[11px] text-neutral-500">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Berkas siap diunggah
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-2.5 py-1 text-xs font-semibold text-neutral-600 hover:text-[#111111] hover:bg-neutral-200/60 rounded-md transition-colors"
                disabled={isSubmitting}
              >
                Ganti
              </button>
              <button
                type="button"
                onClick={clearFile}
                className="p-1.5 rounded-lg hover:bg-rose-100 text-neutral-500 hover:text-rose-600 transition-colors"
                disabled={isSubmitting}
                aria-label="Hapus berkas"
                title="Hapus berkas"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {fileError && (
          <p className="text-xs text-rose-600 flex items-center gap-1.5 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{fileError}</span>
          </p>
        )}
        <p className="text-[11px] text-neutral-400">
          Berkas tersimpan di storage privat dan hanya dapat diakses oleh tim produksi CV. QEE BEE.
        </p>
      </div>

      {/* ── Section 5: Catatan Tambahan ── */}
      <div>
        <label htmlFor="notes" className={labelClass}>
          5. Catatan / Keterangan Tambahan <span className="text-neutral-400 font-normal">(opsional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          maxLength={1000}
          placeholder="Tuliskan spesifikasi khusus lainnya seperti posisi bordir, kemasan, instruksi pengiriman, dll."
          className={`${fieldClass} resize-none`}
          disabled={isSubmitting}
        />
      </div>

      {/* ── Submit Area & Status Feedback ── */}
      <div className="pt-2 space-y-3">
        {/* Real-time Submitting Feedback */}
        {isSubmitting && (
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-900 font-medium">
            <Loader2 className="w-4 h-4 animate-spin text-[#FF6A00]" />
            <span>
              {selectedFile
                ? "Sedang mengunggah berkas desain dan menyimpan pengajuan..."
                : "Sedang memproses dan menyimpan pengajuan penawaran Anda..."}
            </span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !!fileError}
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#FF6A00] text-white text-base font-bold hover:bg-[#e55f00] active:bg-[#cc5400] disabled:opacity-60 disabled:pointer-events-none transition-colors shadow-sm cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Mengirim Permintaan Penawaran...</span>
            </>
          ) : (
            <>
              <FileText className="w-5 h-5" />
              <span>Kirim Permintaan Penawaran</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-neutral-500 text-center leading-relaxed">
          Dengan mengirim formulir, data Anda akan diproses untuk keperluan penawaran harga. Tim kami akan menghubungi via WhatsApp dalam jam kerja ({COMPANY_INFO.operatingHours} WIB).
        </p>
      </div>
    </form>
  );
}

export default QuoteRequestForm;
