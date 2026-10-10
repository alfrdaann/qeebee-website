import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = {
  title: `Panduan Pilihan Bahan | ${COMPANY_INFO.name} - Konveksi Sidoarjo`,
  description: `Panduan bahan kain untuk produksi kaos, polo, kemeja PDH/PDL, jaket, rompi, dan jersey custom di CV. QEE BEE Sidoarjo.`,
};

interface MaterialItem {
  id: string;
  name: string;
  category: string;
  characteristics: string[];
  suitableFor: string;
  description: string;
  image: string;
}

const MATERIALS_DATA: MaterialItem[] = [
  {
    id: "cotton-combed",
    name: "Cotton Combed (20s/24s/30s)",
    category: "Kaos",
    characteristics: ["Serat halus & lembut", "Sangat menyerap keringat", "Adem & nyaman dipakai seharian"],
    suitableFor: "Kaos event, kaos promosi, kaos komunitas, dan pakaian santai.",
    description: "Kain katun Murni murni yang diproses dengan penyisiran serat (combed) sehingga menghasilkan tekstur permukaan kain yang halus, lembut, dan tidak berbulu.",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.13.jpeg",
  },
  {
    id: "lacoste-cotton",
    name: "Lacoste Cotton & Pique",
    category: "Polo",
    characteristics: ["Tekstur rajut berpori (pique)", "Nyaman & tampil elegan", "Sangat baik untuk aplikasi bordir"],
    suitableFor: "Polo shirt seragam kantor, polo instansi, dan pakaian semi-formal.",
    description: "Kain khusus berpori rajut honeycomb yang umum digunakan untuk kaos polo berkerah. Memberikan tampilan yang rapi dan profesional.",
    image: "/assets/products/batch-2/WhatsApp Image 2026-09-26 at 07.24.47.jpeg",
  },
  {
    id: "american-japan-drill",
    name: "American & Japan Drill",
    category: "Kemeja",
    characteristics: ["Serat kain miring berstruktur kokoh", "Warna awet & tidak mudah pudar", "Tahan gesekan & robekan"],
    suitableFor: "Kemeja kerja PDH/PDL, seragam lapangan, seragam pabrik, dan rompi safety.",
    description: "Bahan standar industri untuk kemeja seragam kerja. Memiliki ketebalan dan konstruksi kain yang kuat namun tetap nyaman dipakai.",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.17.jpeg",
  },
  {
    id: "fleece-baby-terry",
    name: "Fleece & Baby Terry",
    category: "Jaket",
    characteristics: ["Lapisan dalam lembut & hangat", "Menyerap keringat dengan baik", "Nyaman untuk cuaca dingin/AC"],
    suitableFor: "Hoodie, sweater, zipper jacket, dan jaket komunitas.",
    description: "Bahan rajut tebal berbulu halus di bagian dalam yang memberikan rasa hangat dan kenyamanan ekstra saat dipakai.",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.18 (2).jpeg",
  },
  {
    id: "dryfit-sublim",
    name: "Dry-Fit Sublimation",
    category: "Jersey",
    characteristics: ["Pori-pori sirkulasi udara cepat", "Cepat kering (quick-dry)", "Sangat fleksibel & ringan"],
    suitableFor: "Jersey olahraga, jersey futsal, marathon, dan pakaian kegiatan outdoor.",
    description: "Kain sintetis berpori mikro yang dirancang khusus untuk menguapkan keringat secara cepat saat berolahraga.",
    image: "/assets/products/batch-3/WhatsApp Image 2026-09-26 at 07.35.14.jpeg",
  },
  {
    id: "parasut-despo-taslan",
    name: "Parasut, Despo & Taslan",
    category: "Jaket",
    characteristics: ["Tahan angin (windproof)", "Semi air/water resistant", "Tahan gesekan & ringan"],
    suitableFor: "Jaket windbreaker, coach jacket, jaket lapangan, dan rompi touring.",
    description: "Bahan tenun sintetis rapat yang ideal untuk pakaian luar protektif dari angin dan cuaca cuaca dingin.",
    image: "/assets/products/batch-3/WhatsApp Image 2026-09-26 at 07.35.12 (1).jpeg",
  },
];

const waMaterialUrl = (matName: string) =>
  `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Halo ${COMPANY_INFO.name}, saya ingin konsultasi penggunaan bahan ${matName} untuk pesanan custom.`
  )}`;

export default function BahanPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-[#222222]">
        <Container className="space-y-4">
          <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
            Panduan Material Kain
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Pilihan Bahan Kain Konveksi
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            Kenali berbagai karakteristik jenis bahan kain yang umum digunakan untuk produksi apparel custom di CV. QEE BEE. Pilihan bahan dapat dikonsultasikan sesuai kebutuhan produk Anda.
          </p>
        </Container>
      </section>

      {/* Material Disclaimer Strip */}
      <section className="bg-[#FFF8F2] border-b border-[#FF6A00]/20 py-3 text-xs sm:text-sm text-neutral-700">
        <Container className="flex items-center gap-2">
          <span className="font-bold text-[#FF6A00]">Catatan:</span>
          <span>
            Pilihan varian gramasi, ketebalan, dan warna bahan dapat dikonsultasikan secara langsung dengan tim kami sesuai spesifikasi produk yang diinginkan.
          </span>
        </Container>
      </section>

      {/* Materials Cards Grid */}
      <section className="bg-[#F5F5F5] py-12 sm:py-16">
        <Container className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {MATERIALS_DATA.map((mat) => (
              <div
                key={mat.id}
                className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden hover:border-[#FF6A00]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-[#F9F9F9] border-b border-[#E5E5E5]">
                    <Image
                      src={mat.image}
                      alt={`Sampel Kain ${mat.name}`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#111111] text-white shadow-xs">
                        Kategori: {mat.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    <h2 className="text-lg font-bold text-[#111111] leading-tight">
                      {mat.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {mat.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#E5E5E5]">
                      <span className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                        Karakteristik Utama:
                      </span>
                      <ul className="space-y-1.5">
                        {mat.characteristics.map((char, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                            <Check className="w-3.5 h-3.5 text-[#FF6A00] shrink-0 mt-0.5" />
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 text-xs text-neutral-600">
                      <strong className="text-[#111111]">Cocok untuk:</strong> {mat.suitableFor}
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <a
                    href={waMaterialUrl(mat.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#FF6A00] text-white text-xs sm:text-sm font-semibold hover:bg-[#e55f00] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Konsultasi Bahan Ini</span>
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
            Butuh Rekomendasi Bahan Lainnya?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Tim CV. QEE BEE siap memberikan rekomendasi pilihan bahan yang paling sesuai dengan anggaran dan kebutuhan penggunaan produk Anda.
          </p>
          <div className="pt-2">
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="primary"
              size="lg"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              Konsultasi Bahan via WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
