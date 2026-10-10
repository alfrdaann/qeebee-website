import React from "react";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, Package, SlidersHorizontal, Scissors, Truck } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const highlights = [
    {
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00]" />,
      title: "Berpengalaman sejak 2005",
    },
    {
      icon: <Package className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00]" />,
      title: "Beragam pilihan produk",
    },
    {
      icon: <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00]" />,
      title: "Spesifikasi dapat disesuaikan",
    },
    {
      icon: <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00]" />,
      title: "Proses produksi jahit",
    },
    {
      icon: <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00]" />,
      title: "Pengiriman seluruh Indonesia",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] border-b border-[#E5E5E5] py-4 sm:py-5">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E0E0E0]">
          {highlights.map((item, idx) => (
            <div
              key={item.title}
              className={`flex items-center gap-2.5 pt-2 sm:pt-0 ${
                idx !== 0 ? "lg:pl-4" : ""
              }`}
            >
              <div className="p-1.5 sm:p-2 rounded-lg bg-white shrink-0 border border-[#E5E5E5]">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-[#111111] leading-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustStrip;
