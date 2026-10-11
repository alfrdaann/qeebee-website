import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";
import { MessageCircle, FileText } from "lucide-react";

export const RequestQuoteCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-20 lg:py-24">
      {/* Background Image */}
      <Image
        src="/assets/hero/qeebee-apparel-hero.png"
        alt=""
        fill
        className="object-cover opacity-30"
        sizes="100vw"
        priority={false}
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 pointer-events-none" />

      {/* Orange accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6A00] via-[#FF6A00]/50 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl space-y-5 text-center lg:text-left">
            <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider block">
              HUBUNGI KAMI
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Siap Membuat Apparel Custom untuk Kebutuhan Anda?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Konsultasikan kebutuhan apparel Anda sekarang juga. Tim kami siap membantu memberikan solusi terbaik untuk bisnis, komunitas, maupun acara Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
              <Button
                href="/request-quote"
                variant="primary"
                size="lg"
                leftIcon={<FileText className="w-4 h-4" />}
              >
                Request Penawaran
              </Button>
              <Button
                href={COMPANY_INFO.whatsappUrl}
                variant="whatsapp"
                size="lg"
                leftIcon={<MessageCircle className="w-4 h-4" />}
              >
                Konsultasi WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Decorative - Desktop only */}
          <div className="hidden lg:flex flex-col items-end gap-6 shrink-0">
            <div className="text-right">
              <p
                className="text-3xl xl:text-4xl italic text-[#FF6A00]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Custom Now,
              </p>
              <p
                className="text-3xl xl:text-4xl italic text-[#FF6A00]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Wear Your Identity
              </p>
            </div>
            <div className="relative h-14 w-48">
              <Image
                src={COMPANY_INFO.logoPath}
                alt={COMPANY_INFO.name}
                fill
                className="object-contain object-right"
                sizes="192px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RequestQuoteCTA;
