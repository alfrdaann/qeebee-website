import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#111111] text-white overflow-hidden">
      {/* Full-width apparel photography with a subtle readability overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero/qeebee-apparel-hero.png"
          alt="Koleksi apparel custom CV QEE BEE yang digantung pada rak"
          fill
          priority
          className="object-cover object-right lg:object-[70%_center]"
          sizes="100vw"
        />
        {/* Subtle horizontal gradient: dark enough for text on the left, garments stay bright on the right */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(10,10,10,0.30) 0%, rgba(10,10,10,0.12) 45%, rgba(10,10,10,0.02) 100%)",
          }}
        />
        {/* Slightly stronger veil on mobile where text sits directly over the garments */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 55%, rgba(10,10,10,0.15) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10 flex min-h-[560px] sm:min-h-[600px] lg:min-h-[640px] items-center py-16 sm:py-20 lg:py-16">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
          {/* Subtle Tag / Established Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FF6A00]/20 text-[#FF6A00] border border-[#FF6A00]/30 tracking-wide uppercase backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            Supplier & Trading Konveksi Sidoarjo &bull; Est. {COMPANY_INFO.established}
          </div>

          {/* Large Left-Aligned White Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-shadow-[0_1px_3px_rgba(0,0,0,0.45)]">
            Solusi Apparel Custom untuk Berbagai Kebutuhan
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed font-normal max-w-2xl text-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
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
              className="bg-black/40 backdrop-blur-sm border-neutral-600 text-white hover:bg-black/60 hover:text-white hover:border-white"
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
