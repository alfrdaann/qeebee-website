import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";
import { ArrowRight } from "lucide-react";

export const CompanyValue: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-16 sm:py-24 bg-[#111111] text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Company Description, Orange CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
                TENTANG KAMI
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                CV. QEE BEE Supplier & Trading
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              CV. QEE BEE adalah perusahaan yang bergerak di bidang penyediaan dan produksi apparel custom serta konveksi berkualitas, berdiri sejak tahun {COMPANY_INFO.established}. Kami berkomitmen memberikan hasil terbaik dengan mengutamakan kualitas, ketepatan waktu, dan kepuasan pelanggan.
            </p>

            <div className="pt-2">
              <Button
                href="/tentang-kami"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Selengkapnya
              </Button>
            </div>
          </div>

          {/* Right Column: Factory Floor / Workshop Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-[#1A1A1A] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full">
              <Image
                src="/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.17.jpeg"
                alt="Produksi Apparel & Convection CV QEE BEE Sidoarjo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300 bg-black/60 backdrop-blur-xs p-3 rounded-lg border border-white/10 flex items-center justify-between">
                <span>Workshop Konveksi Sidoarjo</span>
                <span className="text-[#FF6A00] font-semibold">Est. {COMPANY_INFO.established}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyValue;
