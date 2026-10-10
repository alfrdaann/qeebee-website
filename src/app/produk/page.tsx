import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PRODUCT_CATEGORIES } from "@/constants/products";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = {
  title: `Katalog Produk | ${COMPANY_INFO.name} - Konveksi & Apparel Custom Sidoarjo`,
  description: `Katalog lengkap ${COMPANY_INFO.name}: kaos, polo, jaket & hoodie, training pack, kemeja seragam, jersey, topi, tas, dan rompi custom. Produksi konveksi Sidoarjo sejak ${COMPANY_INFO.established}, pengiriman ${COMPANY_INFO.shipping}.`,
};

export default function ProdukPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-[#222222]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
                Katalog Produk &amp; Layanan
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Kategori Produk Apparel Custom
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Pilihan apparel konveksi terbaik untuk instansi, perusahaan, sekolah, dan komunitas. Pilih kategori untuk melihat spesifikasi detail atau langsung ajukan penawaran harga.
              </p>
            </div>
            <div className="shrink-0">
              <Button
                href="/request-quote"
                variant="primary"
                size="lg"
                className="font-bold shadow-xs"
                leftIcon={<FileText className="w-4 h-4" />}
              >
                Request Penawaran Harga
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Grid */}
      <section className="bg-[#F5F5F5] py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PRODUCT_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="group bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden hover:border-[#FF6A00]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Link
                    href={`/produk/${category.id}`}
                    className="block relative aspect-[4/3] w-full bg-[#FBFBFB] overflow-hidden border-b border-[#EBEBEB]"
                  >
                    <Image
                      src={category.image}
                      alt={`Produk ${category.name} - ${COMPANY_INFO.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-5 sm:p-6 space-y-2">
                    <h2 className="text-lg font-bold text-[#111111] group-hover:text-[#FF6A00] transition-colors">
                      <Link href={`/produk/${category.id}`}>{category.name}</Link>
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-[#F0F0F0] mt-3 pt-4 flex items-center justify-between gap-3">
                  <Link
                    href={`/produk/${category.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#FF6A00] transition-colors"
                  >
                    <span>Spesifikasi</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`/request-quote?kategori=${encodeURIComponent(category.name)}`}
                    className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] hover:bg-[#FF6A00] hover:text-white transition-colors"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Penawaran</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-14 sm:py-20 border-t border-[#E5E5E5]">
        <Container className="text-center space-y-6 max-w-3xl">
          <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
            Konsultasi &amp; Penawaran Langsung
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Tidak Menemukan Kategori yang Anda Butuhkan?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            CV. QEE BEE melayani berbagai pesanan apparel custom khusus di luar kategori di atas. Ajukan spesifikasi lengkap via formulir penawaran atau konsultasi langsung dengan customer service kami.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              href="/request-quote"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-bold shadow-xs"
              leftIcon={<FileText className="w-4 h-4" />}
            >
              Isi Formulir Penawaran
            </Button>
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto font-bold"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              Konsultasi via WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
