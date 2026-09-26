import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";
import {
  CheckCircle2,
  Layers,
  Palette,
  Component,
  Image as ImageIcon,
  MessageCircle,
  Clock,
  MapPin,
  Truck,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  return (
    <div className="py-12 sm:py-16 bg-[#F5F5F5]">
      <Container className="space-y-12">
        {/* Phase 1 Verification Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E5E5] shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E5E5E5]">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6A00]/10 text-[#FF6A00] border border-[#FF6A00]/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Phase 1 Foundation Setup Complete
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                {COMPANY_INFO.name} — Web Foundation
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                Arsitektur dasar proyek Next.js + TypeScript, Tailwind CSS, token warna global, tipografi, reusable components (Container & Button), layout, responsive Navbar & Footer, serta pengorganisasian aset resmi telah siap untuk Phase 2.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
              <Button
                href={COMPANY_INFO.whatsappUrl}
                variant="whatsapp"
                size="md"
                leftIcon={<MessageCircle className="w-4 h-4" />}
              >
                Test WhatsApp CTA
              </Button>
            </div>
          </div>

          {/* Quick Company Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5]">
              <div className="text-xs text-neutral-500 uppercase font-semibold">Tahun Berdiri</div>
              <div className="text-lg font-bold text-[#111111] mt-1">{COMPANY_INFO.established}</div>
              <div className="text-xs text-neutral-500 mt-0.5">Pengalaman 20+ tahun</div>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5]">
              <div className="text-xs text-neutral-500 uppercase font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF6A00]" />
                Jam Operasional
              </div>
              <div className="text-lg font-bold text-[#111111] mt-1">{COMPANY_INFO.operatingHours}</div>
              <div className="text-xs text-neutral-500 mt-0.5">Senin - Sabtu</div>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5]">
              <div className="text-xs text-neutral-500 uppercase font-semibold flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#FF6A00]" />
                Jangkauan Pengiriman
              </div>
              <div className="text-lg font-bold text-[#111111] mt-1">{COMPANY_INFO.shipping}</div>
              <div className="text-xs text-neutral-500 mt-0.5">Ekspedisi terpercaya</div>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5]">
              <div className="text-xs text-neutral-500 uppercase font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF6A00]" />
                Domisili Workshop
              </div>
              <div className="text-sm font-bold text-[#111111] mt-1 truncate">Sidoarjo, Jawa Timur</div>
              <div className="text-xs text-neutral-500 mt-0.5">Kec. Candi, 61271</div>
            </div>
          </div>
        </div>

        {/* Global Color Tokens & Typography */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E5E5] shadow-xs space-y-6">
          <div className="flex items-center gap-2.5">
            <Palette className="w-5 h-5 text-[#FF6A00]" />
            <h2 className="text-lg sm:text-xl font-bold text-[#111111]">
              Global Color Tokens & Tipografi
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl border border-[#E5E5E5] space-y-3">
              <div className="h-16 rounded-lg bg-[#FF6A00] shadow-inner" />
              <div>
                <div className="text-xs font-semibold text-[#111111]">Brand Orange</div>
                <div className="text-xs text-neutral-500 font-mono">#FF6A00</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#E5E5E5] space-y-3">
              <div className="h-16 rounded-lg bg-[#111111] shadow-inner" />
              <div>
                <div className="text-xs font-semibold text-[#111111]">Brand Black</div>
                <div className="text-xs text-neutral-500 font-mono">#111111</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#E5E5E5] space-y-3">
              <div className="h-16 rounded-lg bg-[#FFFFFF] border border-[#E5E5E5] shadow-xs" />
              <div>
                <div className="text-xs font-semibold text-[#111111]">Brand White</div>
                <div className="text-xs text-neutral-500 font-mono">#FFFFFF</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#E5E5E5] space-y-3">
              <div className="h-16 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5]" />
              <div>
                <div className="text-xs font-semibold text-[#111111]">Light Gray</div>
                <div className="text-xs text-neutral-500 font-mono">#F5F5F5</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#E5E5E5] space-y-3 col-span-2 sm:col-span-1">
              <div className="h-16 rounded-lg bg-[#E5E5E5] border border-[#D4D4D4]" />
              <div>
                <div className="text-xs font-semibold text-[#111111]">Border</div>
                <div className="text-xs text-neutral-500 font-mono">#E5E5E5</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reusable Button Component Showcase */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E5E5] shadow-xs space-y-6">
          <div className="flex items-center gap-2.5">
            <Component className="w-5 h-5 text-[#FF6A00]" />
            <h2 className="text-lg sm:text-xl font-bold text-[#111111]">
              Reusable Button Component Showcase
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary (#FF6A00)</Button>
            <Button variant="secondary">Secondary (#111111)</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button
              variant="whatsapp"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              WhatsApp
            </Button>
            <Button variant="primary" size="sm">
              Small Button
            </Button>
            <Button variant="primary" size="lg">
              Large Button
            </Button>
          </div>
        </div>

        {/* Asset Loading Verification (Real QEE BEE Assets) */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E5E5] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ImageIcon className="w-5 h-5 text-[#FF6A00]" />
              <h2 className="text-lg sm:text-xl font-bold text-[#111111]">
                Verifikasi Pemuatan Aset Asli QEE BEE
              </h2>
            </div>
            <span className="text-xs text-neutral-500">96 aset tersusun di public/assets</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo Asset */}
            <div className="p-4 rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] flex flex-col justify-between">
              <div className="relative h-32 w-full bg-white rounded-lg p-2 flex items-center justify-center border border-[#E5E5E5]">
                <Image
                  src={COMPANY_INFO.logoPath}
                  alt="QEE BEE Logo Preview"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-3">
                <div className="text-xs font-bold text-[#111111]">Logo Resmi CV. QEE BEE</div>
                <div className="text-[11px] text-neutral-500 font-mono truncate">{COMPANY_INFO.logoPath}</div>
              </div>
            </div>

            {/* Product Sample 1 */}
            <div className="p-4 rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] flex flex-col justify-between">
              <div className="relative h-44 w-full bg-white rounded-lg overflow-hidden border border-[#E5E5E5]">
                <Image
                  src="/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.28.48.jpeg"
                  alt="Sample Polo Shirt"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-3">
                <div className="text-xs font-bold text-[#111111]">Portofolio Produk: Polo Konveksi</div>
                <div className="text-[11px] text-neutral-500 font-mono truncate">batch-1/07.28.48.jpeg</div>
              </div>
            </div>

            {/* Product Sample 2 */}
            <div className="p-4 rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] flex flex-col justify-between">
              <div className="relative h-44 w-full bg-white rounded-lg overflow-hidden border border-[#E5E5E5]">
                <Image
                  src="/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.28.49.jpeg"
                  alt="Sample Kemeja Putih"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-3">
                <div className="text-xs font-bold text-[#111111]">Portofolio Produk: Kemeja Kerja</div>
                <div className="text-[11px] text-neutral-500 font-mono truncate">batch-1/07.28.49.jpeg</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
