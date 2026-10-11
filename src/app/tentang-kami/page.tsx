import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Truck, Clock, MapPin, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = {
  title: `Tentang Kami | ${COMPANY_INFO.name} - Konveksi Sidoarjo`,
  description: `Profil perusahaan ${COMPANY_INFO.name}, supplier & trading konveksi terpercaya di Sidoarjo sejak ${COMPANY_INFO.established}. Melayani pembuatan apparel custom ke seluruh Indonesia.`,
};

export default function TentangKamiPage() {
  return (
    <>
      {/* Editorial Dark Hero */}
      <section className="bg-[#111111] text-white py-16 sm:py-24 border-b border-[#222222]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FF6A00]/20 text-[#FF6A00] border border-[#FF6A00]/30 tracking-wide uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                Supplier &amp; Trading Konveksi Sidoarjo &bull; Est. {COMPANY_INFO.established}
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                {COMPANY_INFO.name} — {COMPANY_INFO.tagline}
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                CV. QEE BEE adalah perusahaan yang bergerak di bidang penyediaan dan produksi apparel custom serta konveksi berkualitas, berdiri sejak tahun {COMPANY_INFO.established} di Kabupaten Sidoarjo, Jawa Timur. Kami berkomitmen memberikan hasil terbaik dengan mengutamakan kualitas, ketepatan waktu, dan kepuasan pelanggan.
              </p>
              <div className="pt-2">
                <Button
                  href={COMPANY_INFO.whatsappUrl}
                  variant="primary"
                  size="lg"
                  leftIcon={<MessageCircle className="w-4 h-4" />}
                >
                  Konsultasi via WhatsApp
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-[#161616] aspect-[4/3] w-full">
                <Image
                  src="/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.17.jpeg"
                  alt={`Workshop ${COMPANY_INFO.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300 bg-black/70 backdrop-blur-xs p-3 rounded-lg border border-white/10 flex items-center justify-between">
                  <span>Workshop Sidoarjo</span>
                  <span className="text-[#FF6A00] font-semibold">Sejak {COMPANY_INFO.established}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values & Commitments */}
      <section className="bg-white py-14 sm:py-20 border-b border-[#E5E5E5]">
        <Container className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
              DEDIKASI &amp; LAYANAN
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111]">
              Komitmen Produksi CV. QEE BEE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="interactive-card-subtle p-6 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-3">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Pengalaman Sejak {COMPANY_INFO.established}</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Lebih dari dua dekade melayani pembuatan apparel dan seragam instansi, perusahaan, serta komunitas dengan kontrol kualitas konsisten.
              </p>
            </div>

            <div className="interactive-card-subtle p-6 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-3">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] w-fit">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Pengiriman {COMPANY_INFO.shipping}</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Jangkauan layanan pengiriman bekerja sama dengan mitra ekspedisi terpercaya untuk mengantarkan paket pesanan ke seluruh wilayah Nusantara.
              </p>
            </div>

            <div className="interactive-card-subtle p-6 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-3">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] w-fit">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Respon Konsultasi Cepat</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Tim siap memberikan solusi dan rekomendasi terbaik seputar pemilihan bahan, ukuran, dan spesifikasi produksi selama jam operasional kerja.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Workshop Address & Operational Contact */}
      <section className="bg-[#F5F5F5] py-14 sm:py-20">
        <Container>
          <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
                LOKASI WORKSHOP
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                Workshop &amp; Kantor CV. QEE BEE
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-neutral-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{COMPANY_INFO.address.full}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#FF6A00] shrink-0" />
                  <span>Jam Operasional: {COMPANY_INFO.operatingHours} WIB</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#FF6A00] shrink-0" />
                  <span>WhatsApp: {COMPANY_INFO.whatsapp}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center gap-3">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20ba5a] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
              </a>
              <Button
                href="/kontak"
                variant="outline"
                size="lg"
                fullWidth
                className="justify-center"
              >
                Lihat Detail Kontak
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
