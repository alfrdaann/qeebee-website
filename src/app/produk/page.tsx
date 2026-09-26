import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PRODUCT_CATEGORIES } from "@/constants/products";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = {
  title: `Katalog Produk | ${COMPANY_INFO.name} - Konveksi & Apparel Custom Sidoarjo`,
  description: `Katalog lengkap ${COMPANY_INFO.name}: kaos, polo, jaket & hoodie, training pack, kemeja seragam, jersey, topi, tas, dan rompi custom. Produksi konveksi Sidoarjo sejak ${COMPANY_INFO.established}, pengiriman ${COMPANY_INFO.shipping}.`,
  keywords: [
    "katalog produk konveksi",
    "kaos custom sidoarjo",
    "polo shirt custom",
    "jaket custom",
    "seragam kerja",
    "jersey custom",
  ],
};

const waCategoryUrl = (categoryName: string) =>
  `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Halo ${COMPANY_INFO.name}, saya ingin konsultasi pesanan ${categoryName} custom.`
  )}`;

export default function ProdukPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#111111] text-white">
        <Container className="py-16 sm:py-20">
          <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
            Katalog Produk
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Kategori Produk Custom
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            Beragam apparel custom yang dapat diproduksi sesuai kebutuhan instansi,
            perusahaan, dan komunitas. Pilih kategori untuk memulai konsultasi.
          </p>
        </Container>
      </section>

      {/* Category Grid */}
      <section className="bg-[#F5F5F5] py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PRODUCT_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="group bg-white rounded-xl border border-[#E5E5E5] overflow-hidden hover:border-[#FF6A00]/40 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full bg-[#F5F5F5] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`Produk ${category.name} - ${COMPANY_INFO.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-[#111111] tracking-tight">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">
                    {category.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#E5E5E5]">
                    <a
                      href={waCategoryUrl(category.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] group-hover:text-[#FF6A00] transition-colors"
                    >
                      <span>Konsultasi {category.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-12 sm:py-16 border-t border-[#E5E5E5]">
        <Container className="text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
            Tidak Menemukan Kategori yang Dibutuhkan?
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-600 leading-relaxed">
            Sampaikan kebutuhan apparel Anda melalui WhatsApp. Tim kami siap
            membantu menentukan produk, bahan, dan spesifikasi yang sesuai.
          </p>
          <Button
            href={COMPANY_INFO.whatsappUrl}
            variant="primary"
            size="lg"
            leftIcon={<MessageCircle className="w-4 h-4" />}
          >
            Konsultasi via WhatsApp
          </Button>
        </Container>
      </section>
    </>
  );
}
