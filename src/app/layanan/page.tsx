import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Scissors, Shirt, Users, Layers, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = {
  title: `Layanan Konveksi & Custom Apparel | ${COMPANY_INFO.name}`,
  description: `Layanan pembuatan seragam instansi, konveksi custom, jahit pakaian, dan konsultasi produk di CV. QEE BEE Sidoarjo.`,
};

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  points: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "konveksi-custom",
    title: "Konveksi Custom",
    description: "Layanan pembuatan berbagai varian pakaian custom mulai dari kaos, polo, hingga rompi dengan desain dan spesifikasi yang dapat disesuaikan.",
    icon: <Shirt className="w-6 h-6 text-[#FF6A00]" />,
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.13.jpeg",
    points: ["Pilihan bahan bervariasi", "Desain & pola custom", "Skala pesanan sedang & besar"],
  },
  {
    id: "produksi-jahit",
    title: "Produksi Jahit Rapi",
    description: "Pengerjaan penjahitan profesional yang mengutamakan kerapian pola, kerapian benang, dan ketahanan fisik pakaian untuk pemakaian jangka panjang.",
    icon: <Scissors className="w-6 h-6 text-[#FF6A00]" />,
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.17.jpeg",
    points: ["Pola potong presisi", "Kontrol jahitan terstandar", "Tenaga jahit berpengalaman"],
  },
  {
    id: "pembuatan-seragam",
    title: "Pembuatan Seragam",
    description: "Spesialis produksi kemeja PDH/PDL, seragam kantor, seragam pabrik, dan pakaian dinas instansi pemerintah maupun sekolah.",
    icon: <Users className="w-6 h-6 text-[#FF6A00]" />,
    image: "/assets/products/batch-2/WhatsApp Image 2026-09-26 at 07.24.47.jpeg",
    points: ["Aplikasi bordir/sablon", "Ukuran seragam terstruktur (S-XXL+)", "Hasil konsisten & rapi"],
  },
  {
    id: "custom-apparel",
    title: "Custom Apparel & Event",
    description: "Produksi pakaian untuk event khusus, kaos panitia, pakaian komunitas, jersey olahraga sublimasi, dan merchandise acara.",
    icon: <Layers className="w-6 h-6 text-[#FF6A00]" />,
    image: "/assets/products/batch-3/WhatsApp Image 2026-09-26 at 07.35.14.jpeg",
    points: ["Jersey sublimasi full print", "Kaos event & komunitas", "Aksesori topi & tas serut"],
  },
  {
    id: "konsultasi-produk",
    title: "Konsultasi Kebutuhan Produk",
    description: "Pendampingan langsung dari tim berpengalaman untuk menentukan jenis kain, pola potongan, estimasi biaya, dan spesifikasi teknis produksi.",
    icon: <MessageSquare className="w-6 h-6 text-[#FF6A00]" />,
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.18 (2).jpeg",
    points: ["Rekomendasi jenis bahan", "Penyesuaian anggaran pesanan", "Informasi alur pengerjaan"],
  },
];

const waServiceUrl = (serviceName: string) =>
  `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Halo ${COMPANY_INFO.name}, saya ingin tanya konsultasi untuk layanan ${serviceName}.`
  )}`;

export default function LayananPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-[#222222]">
        <Container className="space-y-4">
          <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
            Layanan Konveksi &amp; Trading
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Layanan Produksi Apparel
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            CV. QEE BEE menyediakan solusi lengkap produksi apparel custom, pembuatan seragam instansi, hingga pengerjaan jahitan rapi untuk kebutuhan perusahaan dan komunitas.
          </p>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F5F5F5] py-12 sm:py-16">
        <Container className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden hover:border-[#FF6A00]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-[#F9F9F9] border-b border-[#E5E5E5]">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#FF6A00]/10 shrink-0">
                        {srv.icon}
                      </div>
                      <h2 className="text-lg font-bold text-[#111111]">
                        {srv.title}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {srv.description}
                    </p>

                    <ul className="space-y-1.5 pt-2 border-t border-[#E5E5E5]">
                      {srv.points.map((pt, i) => (
                        <li key={i} className="text-xs text-neutral-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <a
                    href={waServiceUrl(srv.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-[#111111] text-[#111111] text-xs sm:text-sm font-semibold hover:bg-[#111111] hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#FF6A00]" />
                    <span>Konsultasi Layanan Ini</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-12 sm:py-16 border-t border-[#E5E5E5]">
        <Container className="text-center space-y-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
            Konsultasikan Kebutuhan Produksi Anda
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Hubungi tim CV. QEE BEE untuk informasi teknis, estimasi pengerjaan, dan diskusi detail pesanan Anda.
          </p>
          <div className="pt-2">
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="primary"
              size="lg"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              Hubungi via WhatsApp ({COMPANY_INFO.whatsapp})
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
