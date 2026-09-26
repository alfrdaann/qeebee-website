import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PRODUCT_CATEGORIES } from "@/constants/products";
import { ArrowRight } from "lucide-react";

export const ProductCategories: React.FC = () => {
  return (
    <section id="produk" className="py-16 sm:py-24 bg-[#F5F5F5]">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-block text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
            Katalog Konveksi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight">
            Kategori Produk Kami
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Berbagai pilihan apparel dan kebutuhan konveksi yang dapat disesuaikan dengan kebutuhan Anda.
          </p>
        </div>

        {/* 9 Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-xl border border-[#E5E5E5] overflow-hidden hover:border-[#FF6A00]/50 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Product Image with Consistent Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full bg-[#F5F5F5] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`${cat.name} CV QEE BEE`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#FF6A00] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Subtle Action Link */}
                <div className="pt-2 border-t border-[#E5E5E5]">
                  <a
                    href="#produk"
                    className="inline-flex items-center text-xs font-semibold text-[#111111] group-hover:text-[#FF6A00] transition-colors gap-1.5"
                  >
                    <span>Lihat Produk</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductCategories;
