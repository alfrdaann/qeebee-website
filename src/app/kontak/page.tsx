import type { Metadata } from "next";
import {
  MapPin,
  Clock,
  Truck,
  Phone,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = {
  title: `Kontak Kami | ${COMPANY_INFO.name} - Konveksi & Apparel Custom Sidoarjo`,
  description: `Hubungi ${COMPANY_INFO.name}: ${COMPANY_INFO.address.full}. ${COMPANY_INFO.operatingHours} WIB. WhatsApp ${COMPANY_INFO.whatsapp} untuk konsultasi pesanan apparel custom.`,
  keywords: [
    "kontak konveksi sidoarjo",
    "alamat qee bee",
    "konveksi sidoarjo telepon",
    "supplier apparel sidoarjo",
  ],
};

const waConsultUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
  `Halo ${COMPANY_INFO.name}, saya ingin konsultasi kebutuhan apparel custom.`
)}`;

export default function KontakPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#111111] text-white">
        <Container className="py-16 sm:py-20">
          <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
            Hubungi Kami
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Konsultasi Kebutuhan Apparel Custom
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            Tim kami siap membantu menentukan produk, bahan, dan spesifikasi
            yang sesuai. Hubungi melalui WhatsApp atau kunjungi workshop kami
            di Sidoarjo.
          </p>
        </Container>
      </section>

      {/* Contact Cards */}
      <section className="bg-[#F5F5F5] py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            <div className="p-6 rounded-xl bg-white border border-[#E5E5E5]">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] w-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="mt-4 text-base font-bold text-[#111111]">
                Alamat Workshop
              </h2>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {COMPANY_INFO.address.full}
              </p>
            </div>

            {/* Operating Hours */}
            <div className="p-6 rounded-xl bg-white border border-[#E5E5E5]">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] w-fit">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="mt-4 text-base font-bold text-[#111111]">
                Jam Operasional
              </h2>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Setiap hari kerja
                <br />
                {COMPANY_INFO.operatingHours} WIB
              </p>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-xl bg-white border border-[#E5E5E5]">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] w-fit">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h2 className="mt-4 text-base font-bold text-[#111111]">
                WhatsApp
              </h2>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {COMPANY_INFO.whatsapp}
              </p>
              <a
                href={waConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] hover:text-[#FF6A00] transition-colors"
              >
                <span>Chat Sekarang</span>
              </a>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-xl bg-white border border-[#E5E5E5]">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] w-fit">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="mt-4 text-base font-bold text-[#111111]">
                Telepon / WA
              </h2>
              <a
                href={`tel:${COMPANY_INFO.whatsapp.replace(/[^+0-9]/g, "")}`}
                className="mt-2 inline-block text-sm text-neutral-600 leading-relaxed hover:text-[#FF6A00] transition-colors"
              >
                {COMPANY_INFO.whatsapp}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Shipping & Experience Highlights */}
      <section className="bg-white py-12 sm:py-16 border-t border-[#E5E5E5]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5]">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#111111]">
                  Berpengalaman Sejak {COMPANY_INFO.established}
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Lebih dari dua dekade memproduksi apparel custom dan seragam
                  berkualitas di Sidoarjo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5]">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#111111]">
                  Pengiriman {COMPANY_INFO.shipping}
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Bekerja sama dengan berbagai ekspedisi darat, laut, dan udara
                  ke seluruh wilayah Indonesia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] sm:col-span-2 lg:col-span-1">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#111111]">
                  Respons Cepat
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Konsultasi pesanan dilayani pada jam operasional melalui
                  WhatsApp {COMPANY_INFO.whatsapp}.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
              Siap Memulai Pesanan Anda?
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-600 leading-relaxed">
              Sampaikan kebutuhan apparel Anda melalui WhatsApp dan tim kami
              akan membantu proses selanjutnya.
            </p>
            <Button
              href={waConsultUrl}
              variant="whatsapp"
              size="lg"
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
