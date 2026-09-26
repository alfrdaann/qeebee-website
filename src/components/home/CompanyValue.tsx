import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";
import { MessageCircle, Check, MapPin, Truck, Calendar } from "lucide-react";

export const CompanyValue: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Company Description, Bullets, Orange CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
                Profil & Dedikasi
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight leading-tight">
                Produksi Apparel untuk Berbagai Kebutuhan
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              CV. QEE BEE didirikan pada tahun {COMPANY_INFO.established} di Kabupaten Sidoarjo, Jawa Timur. Sebagai badan usaha yang bergerak di bidang supplier & trading konveksi, kami fokus melayani produksi berbagai kebutuhan pakaian dan merchandise custom dengan standar kualitas yang konsisten.
            </p>

            {/* Factual Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#FF6A00]/10 text-[#FF6A00] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-neutral-700">
                  Pengalaman konveksi sejak {COMPANY_INFO.established}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#FF6A00]/10 text-[#FF6A00] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-neutral-700">
                  Desain dan spesifikasi dapat disesuaikan
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#FF6A00]/10 text-[#FF6A00] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-neutral-700">
                  Workshop berdomisili di Sidoarjo, Jawa Timur
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#FF6A00]/10 text-[#FF6A00] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-neutral-700">
                  Jangkauan pengiriman ke seluruh Indonesia
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                href={COMPANY_INFO.whatsappUrl}
                variant="primary"
                size="lg"
                leftIcon={<MessageCircle className="w-4 h-4" />}
              >
                Konsultasi Produksi Sekarang
              </Button>
            </div>
          </div>

          {/* Right Column: Real Apparel / Production-Related Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5] shadow-xs group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.17.jpeg"
                  alt="Produksi Seragam CV QEE BEE"
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Informative overlay tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-[#E5E5E5] flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#111111]">CV. QEE BEE Sidoarjo</div>
                  <div className="text-neutral-500">Kecamatan Candi, Jawa Timur</div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#FF6A00]/10 text-[#FF6A00] font-semibold text-[11px]">
                  Est. {COMPANY_INFO.established}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyValue;
