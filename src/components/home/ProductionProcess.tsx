import React from "react";
import { Container } from "@/components/ui/Container";
import { PRODUCTION_STEPS } from "@/constants/products";

export const ProductionProcess: React.FC = () => {
  return (
    <section id="alur-produksi" className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
      <Container className="space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
            Alur Kerja
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight">
            Tahapan Proses Produksi
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Alur kerja yang jelas dan terstruktur dari awal konsultasi hingga pesanan apparel selesai dikirimkan ke alamat Anda.
          </p>
        </div>

        {/* 7-Step Process Cards with Large Orange Numbers & Connecting Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PRODUCTION_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className={`p-6 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#FF6A00]/50 transition-all duration-200 flex flex-col justify-between relative ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-3">
                {/* Large Orange Number */}
                <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#FF6A00] tracking-tight">
                    {stepItem.step}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Langkah
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#111111]">
                  {stepItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductionProcess;
