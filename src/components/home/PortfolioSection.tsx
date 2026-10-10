import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PORTFOLIO_ITEMS } from "@/constants/products";
import { ArrowRight } from "lucide-react";

export const PortfolioSection: React.FC = () => {
  // Use first 6 distinct curated portfolio items
  const featuredItems = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <section id="portofolio" className="py-14 sm:py-20 bg-white border-b border-[#E5E5E5]">
      <Container className="space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-row items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
              PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight">
              Hasil Karya Kami
            </h2>
          </div>

          <Link
            href="/portofolio"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-[#FF6A00] transition-colors shrink-0 pb-1"
          >
            <span>Lihat Semua</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>

        {/* 6 Curated Showcase Grid: 6 cols desktop, 3 cols tablet, 2 cols mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {featuredItems.map((item) => (
            <Link
              key={item.id}
              href="/portofolio"
              className="group bg-[#F9F9F9] rounded-xl border border-[#E5E5E5] overflow-hidden hover:border-[#FF6A00]/50 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="relative aspect-square w-full bg-[#F5F5F5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
