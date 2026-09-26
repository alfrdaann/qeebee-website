import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#111111] text-white overflow-hidden">
      {/* Background Apparel Image with Darkened Technical Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.17.jpeg"
          alt="CV QEE BEE Apparel Production"
          fill
          priority
          className="object-cover object-center opacity-25 scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90" />
      </div>

      <Container className="relative z-10 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Subtle Tag / Established Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FF6A00]/20 text-[#FF6A00] border border-[#FF6A00]/30 tracking-wide uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            Supplier & Trading Konveksi Sidoarjo &bull; Est. {COMPANY_INFO.established}
          </div>

          {/* Large Left-Aligned White Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            Solusi Apparel Custom untuk Berbagai Kebutuhan
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal max-w-2xl">
            CV. QEE BEE melayani kebutuhan apparel dan konveksi custom untuk berbagai kebutuhan dengan produk yang dapat disesuaikan.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Button
              href="#produk"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Lihat Produk
            </Button>
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="outline"
              size="lg"
              className="bg-transparent border-neutral-700 text-white hover:bg-white/10 hover:text-white hover:border-white"
              leftIcon={<MessageCircle className="w-4 h-4 text-[#FF6A00]" />}
            >
              Konsultasi Sekarang
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
