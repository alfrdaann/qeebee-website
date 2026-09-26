"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_ITEMS } from "@/constants/products";
import { COMPANY_INFO } from "@/constants/company";
import { MessageCircle, ExternalLink } from "lucide-react";

const CATEGORIES = [
  "Semua",
  "Kaos",
  "Polo",
  "Jaket",
  "Training",
  "Kemeja",
  "Jersey",
  "Topi",
  "Tas",
  "Rompi",
];

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [showAll, setShowAll] = useState(false);

  const filteredItems = activeCategory === "Semua"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="portofolio" className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
      <Container className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
              Galeri Portofolio
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight">
              Hasil Produksi Kami
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Dokumentasi nyata hasil produksi apparel dan pesanan seragam instansi, perusahaan, serta komunitas yang telah kami selesaikan.
            </p>
          </div>

          <Button
            href={COMPANY_INFO.whatsappUrl}
            variant="outline"
            size="md"
            leftIcon={<MessageCircle className="w-4 h-4 text-[#FF6A00]" />}
          >
            Tanya Pesanan Khusus
          </Button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#FF6A00] text-white shadow-xs"
                    : "bg-[#F5F5F5] text-neutral-700 hover:bg-[#E5E5E5] hover:text-[#111111]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-[#E5E5E5] overflow-hidden hover:border-[#FF6A00]/40 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full bg-[#F5F5F5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 text-[#111111] shadow-xs border border-[#E5E5E5]">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#111111] group-hover:text-[#FF6A00] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  {item.client && (
                    <p className="text-xs text-neutral-500 mt-1">
                      Kategori: {item.category} &bull; {item.client}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-[#E5E5E5]">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF6A00] hover:text-[#e55f00] transition-colors"
                  >
                    <span>Pesan Model Serupa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA / Load More Toggle */}
        <div className="text-center pt-6">
          {!showAll && filteredItems.length > 6 ? (
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
            >
              Lihat Semua Portofolio ({filteredItems.length} Produk)
            </Button>
          ) : (
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="primary"
              size="lg"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              Lihat Semua Portofolio via WhatsApp
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
