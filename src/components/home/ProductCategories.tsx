import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PRODUCT_CATEGORIES } from "@/constants/products";
import { ArrowRight } from "lucide-react";

export const ProductCategories: React.FC = () => {
  return (
    <section id="produk" className="py-14 sm:py-20 bg-[#F5F5F5]">
      <Container className="space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-row items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
              KATEGORI PRODUK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight">
              Pilihan Produk Kami
            </h2>
          </div>

          <Link
            href="/produk"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-[#FF6A00] transition-colors shrink-0 pb-1"
          >
            <span>Lihat Semua</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>

        {/* 10 Category Cards Grid: 5 cols desktop, 3 cols tablet, 2 cols mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {PRODUCT_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/produk`}
              className="group bg-white rounded-xl border border-[#E5E5E5] overflow-hidden hover:border-[#FF6A00]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full bg-[#F9F9F9] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`${cat.name} CV QEE BEE`}
                  fill
                  className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>

              {/* Bottom Label & Arrow Indicator */}
              <div className="p-3 sm:p-4 bg-white border-t border-[#F0F0F0] flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#FF6A00] transition-colors truncate">
                  {cat.name}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FF6A00] group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductCategories;
