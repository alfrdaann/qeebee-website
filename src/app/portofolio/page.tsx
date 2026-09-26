import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_ITEMS } from "@/constants/products";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = {
  title: `Portofolio | ${COMPANY_INFO.name} - Hasil Produksi Apparel Custom Sidoarjo`,
  description: `Portofolio ${COMPANY_INFO.name}: hasil produksi seragam dan apparel custom untuk instansi, perusahaan, dan komunitas. Polo, kemeja, jaket, jersey, rompi, topi, dan tas dengan pengiriman ${COMPANY_INFO.shipping}.`,
  keywords: [
    "portofolio konveksi sidoarjo",
    "hasil produksi seragam",
    "seragam instansi",
    "apparel custom",
    "konveksi jawa timur",
  ],
};

export default function PortofolioPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#111111] text-white">
        <Container className="py-16 sm:py-20">
          <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
            Galeri Portofolio
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Portofolio &amp; Hasil Produksi
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            Dokumentasi nyata hasil produksi apparel dan pesanan seragam
            instansi, perusahaan, serta komunitas yang telah kami selesaikan.
          </p>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-[#F5F5F5] py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PORTFOLIO_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl border border-[#E5E5E5] overflow-hidden hover:border-[#FF6A00]/40 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full bg-[#F5F5F5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <span className="text-[11px] font-semibold text-[#FF6A00] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h2 className="mt-1.5 text-base sm:text-lg font-bold text-[#111111] tracking-tight leading-snug">
                    {item.title}
                  </h2>
                  {item.client && (
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">
                      Klien: {item.client}
                    </p>
                  )}
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
            Butuh Apparel Custom Seperti Ini?
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-600 leading-relaxed">
            Sampaikan kebutuhan Anda melalui WhatsApp untuk konsultasi produk,
            bahan, dan spesifikasi yang sesuai.
          </p>
          <Button
            href={COMPANY_INFO.whatsappUrl}
            variant="outline"
            size="lg"
            leftIcon={<MessageCircle className="w-4 h-4 text-[#FF6A00]" />}
          >
            Tanya Pesanan Khusus
          </Button>
        </Container>
      </section>
    </>
  );
}
