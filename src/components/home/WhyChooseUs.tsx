import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  ShieldCheck,
  Package,
  SlidersHorizontal,
  Scissors,
  Users,
  Truck,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#FF6A00]" />,
      title: "Berpengalaman sejak 2005",
    },
    {
      icon: <Package className="w-5 h-5 text-[#FF6A00]" />,
      title: "Beragam pilihan produk",
    },
    {
      icon: <SlidersHorizontal className="w-5 h-5 text-[#FF6A00]" />,
      title: "Spesifikasi dapat disesuaikan",
    },
    {
      icon: <Scissors className="w-5 h-5 text-[#FF6A00]" />,
      title: "Proses produksi jahit",
    },
    {
      icon: <Users className="w-5 h-5 text-[#FF6A00]" />,
      title: "Melayani berbagai kebutuhan",
    },
    {
      icon: <Truck className="w-5 h-5 text-[#FF6A00]" />,
      title: "Pengiriman seluruh Indonesia",
    },
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-[#111111] text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & 2x3 Features Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
                KEUNGGULAN KAMI
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Mengapa Memilih CV. QEE BEE?
              </h2>
            </div>

            {/* 2x3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="interactive-card-dark flex items-start gap-3.5 p-4 rounded-xl bg-[#1A1A1A] border border-neutral-800"
                >
                  <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 shrink-0 mt-0.5 border border-[#FF6A00]/20">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-white leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Highlighting Custom Apparel / Cap Embroidery */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-[#161616] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full">
              <Image
                src="/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.13 (2).jpeg"
                alt="Produksi Apparel Custom CV QEE BEE"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300 bg-black/70 backdrop-blur-xs p-3 rounded-lg border border-white/10 flex items-center justify-between">
                <span className="font-medium text-white">Custom Bordir &amp; Jahit Presisi</span>
                <span className="text-[#FF6A00] font-semibold">QEE BEE</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
