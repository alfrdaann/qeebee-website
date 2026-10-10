import React from "react";
import { Container } from "@/components/ui/Container";
import {
  MessageSquare,
  Shirt,
  SlidersHorizontal,
  ClipboardList,
  Scissors,
  CheckCircle2,
  Truck,
} from "lucide-react";

export const ProductionProcess: React.FC = () => {
  const steps = [
    {
      num: "1",
      icon: <MessageSquare className="w-4 h-4 text-neutral-700" />,
      title: "Konsultasi",
      desc: "Diskusikan kebutuhan Anda dengan tim kami.",
    },
    {
      num: "2",
      icon: <Shirt className="w-4 h-4 text-neutral-700" />,
      title: "Tentukan Produk",
      desc: "Pilih jenis produk yang diinginkan.",
    },
    {
      num: "3",
      icon: <SlidersHorizontal className="w-4 h-4 text-neutral-700" />,
      title: "Tentukan Spesifikasi",
      desc: "Pilih bahan, warna, dan detail desain.",
    },
    {
      num: "4",
      icon: <ClipboardList className="w-4 h-4 text-neutral-700" />,
      title: "Persiapan Produksi",
      desc: "Pembuatan sampel dan persiapan bahan.",
    },
    {
      num: "5",
      icon: <Scissors className="w-4 h-4 text-neutral-700" />,
      title: "Proses Jahit",
      desc: "Produksi sesuai pesanan.",
    },
    {
      num: "6",
      icon: <CheckCircle2 className="w-4 h-4 text-neutral-700" />,
      title: "Finishing & Pemeriksaan",
      desc: "Quality control setiap produk.",
    },
    {
      num: "7",
      icon: <Truck className="w-4 h-4 text-neutral-700" />,
      title: "Pengiriman",
      desc: "Produk siap dikirim ke seluruh Indonesia.",
    },
  ];

  return (
    <section id="alur-produksi" className="py-14 sm:py-20 bg-[#F5F5F5] border-b border-[#E5E5E5]">
      <Container className="space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
            ALUR PRODUKSI
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight">
            Proses Pemesanan
          </h2>
        </div>

        {/* 7-Step Horizontal Timeline Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 relative">
          {steps.map((s, idx) => (
            <div
              key={s.num}
              className="bg-white rounded-xl p-4 border border-[#E5E5E5] flex flex-col justify-between space-y-3 relative group hover:border-[#FF6A00]/50 transition-all duration-200"
            >
              {/* Number Circle Badge */}
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-full bg-[#FF6A00] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {s.num}
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-6 w-4 h-[2px] bg-[#E5E5E5] z-10" />
                )}
              </div>

              {/* Icon & Content */}
              <div className="space-y-1.5">
                <div className="p-1.5 rounded bg-[#F5F5F5] w-fit">
                  {s.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#111111] leading-snug">
                  {s.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductionProcess;
