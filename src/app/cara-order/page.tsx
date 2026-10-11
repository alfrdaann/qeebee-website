import type { Metadata } from "next";
import {
  MessageSquare,
  Shirt,
  SlidersHorizontal,
  ClipboardList,
  Scissors,
  CheckCircle2,
  Truck,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = {
  title: `Cara Order & Alur Pemesanan | ${COMPANY_INFO.name}`,
  description: `Panduan 7 langkah alur pemesanan produk konveksi dan apparel custom di CV. QEE BEE Sidoarjo dari awal konsultasi hingga pengiriman.`,
};

interface StepDetail {
  step: string;
  title: string;
  desc: string;
  detail: string;
  icon: React.ReactNode;
}

const STEPS_FULL: StepDetail[] = [
  {
    step: "01",
    title: "Konsultasi",
    desc: "Diskusikan kebutuhan apparel, jumlah pesanan, dan deadline melalui WhatsApp.",
    detail: "Sampaikan ide awal, contoh acuan desain (jika ada), estimasi jumlah pesanan, serta kebutuhan tanggal pemakaian pakaian.",
    icon: <MessageSquare className="w-5 h-5 text-[#FF6A00]" />,
  },
  {
    step: "02",
    title: "Tentukan Produk",
    desc: "Pilih model produk seperti kaos, polo, kemeja dinas, jaket, atau rompi.",
    detail: "Tim kami membantu merekomendasikan jenis produk yang paling cocok untuk tujuan penggunaan instansi atau event Anda.",
    icon: <Shirt className="w-5 h-5 text-[#FF6A00]" />,
  },
  {
    step: "03",
    title: "Tentukan Spesifikasi",
    desc: "Pilih bahan kain, warna, size chart, serta detail sablon atau bordir.",
    detail: "Kesepakatan jenis material kain, paduan warna, posisi logo bordir/sablon, serta penentuan daftar ukuran (S-XXL+).",
    icon: <SlidersHorizontal className="w-5 h-5 text-[#FF6A00]" />,
  },
  {
    step: "04",
    title: "Persiapan Produksi",
    desc: "Penyusunan pola potong (cutting) dan persiapan material bahan.",
    detail: "Konfirmasi final rincian pesanan, pembuatan pola potong kain presisi, dan penyiapan bahan kain berkualitas.",
    icon: <ClipboardList className="w-5 h-5 text-[#FF6A00]" />,
  },
  {
    step: "05",
    title: "Proses Jahit",
    desc: "Pengerjaan penjahitan profesional bersamaan dengan bordir/sablon.",
    detail: "Proses produksi utama oleh tim penjahit berpengalaman dengan pengawasan kerapian jahitan pada setiap bagian.",
    icon: <Scissors className="w-5 h-5 text-[#FF6A00]" />,
  },
  {
    step: "06",
    title: "Finishing & Pemeriksaan",
    desc: "Quality control menyeluruh, steam/setrika, dan packing rapi.",
    detail: "Pemeriksaan akhir (QC) terhadap kerapian benang, kesesuaian ukuran, proses setrika steam, dan pembungkusan plastik.",
    icon: <CheckCircle2 className="w-5 h-5 text-[#FF6A00]" />,
  },
  {
    step: "07",
    title: "Pengiriman",
    desc: "Paket pesanan dikirim langsung ke alamat tujuan di seluruh Indonesia.",
    detail: "Pengiriman barang siap jalan melalui ekspedisi terpercaya (darat, laut, atau udara) dilengkapi nomor resi pelacakan.",
    icon: <Truck className="w-5 h-5 text-[#FF6A00]" />,
  },
];

export default function CaraOrderPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-[#222222]">
        <Container className="space-y-4">
          <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
            Panduan Pemesanan
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Alur Pemesanan Produksi
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            7 langkah mudah dan terstruktur untuk memesan apparel custom di CV. QEE BEE, mulai dari tahap konsultasi hingga produk siap dikirim.
          </p>
        </Container>
      </section>

      {/* Steps List Timeline */}
      <section className="bg-[#F5F5F5] py-14 sm:py-20">
        <Container className="space-y-8 max-w-4xl">
          <div className="space-y-6">
            {STEPS_FULL.map((s, idx) => (
              <div
                key={s.step}
                className="interactive-card-subtle bg-white rounded-xl border border-[#E5E5E5] p-5 sm:p-7 flex flex-col sm:flex-row items-start gap-5 hover:border-[#FF6A00]/40"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF6A00] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                  {s.step}
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-[#F5F5F5] shrink-0">
                      {s.icon}
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#111111]">
                      {s.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#FF6A00]">
                    {s.desc}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FFF8F2] border border-[#FF6A00]/30 p-5 rounded-xl text-xs sm:text-sm text-neutral-700 space-y-1">
            <strong className="text-[#FF6A00] font-bold block">Informasi Ketentuan Order:</strong>
            <p>
              Spesifikasi teknis produk, estimasi jumlah minimum pemesanan, besaran biaya, dan waktu pengerjaan dikonfirmasikan secara pasti pada saat tahap konsultasi berdasarkan jenis barang yang dipesan.
            </p>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-14 sm:py-20 border-t border-[#E5E5E5]">
        <Container className="text-center space-y-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
            Siap Memulai Tahap Konsultasi?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Tim CV. QEE BEE siap membantu menghitung estimasi kebutuhan dan memberikan solusi terbaik untuk produksi pakaian Anda.
          </p>
          <div className="pt-2">
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="primary"
              size="lg"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              Mulai Konsultasi Order Sekarang
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
