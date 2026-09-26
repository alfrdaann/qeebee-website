import React from "react";
import { Container } from "@/components/ui/Container";
import { SlidersHorizontal, Shirt, CalendarCheck, Truck } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const highlights = [
    {
      icon: <SlidersHorizontal className="w-5 h-5 text-[#FF6A00]" />,
      title: "Custom Sesuai Kebutuhan",
    },
    {
      icon: <Shirt className="w-5 h-5 text-[#FF6A00]" />,
      title: "Produksi Apparel",
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-[#FF6A00]" />,
      title: "Berpengalaman Sejak 2005",
    },
    {
      icon: <Truck className="w-5 h-5 text-[#FF6A00]" />,
      title: "Pengiriman Seluruh Indonesia",
    },
  ];

  return (
    <section className="bg-white border-b border-[#E5E5E5] py-5">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5]">
          {highlights.map((item, idx) => (
            <div
              key={item.title}
              className={`flex items-center gap-3 pt-3 sm:pt-0 ${
                idx !== 0 ? "lg:pl-6" : ""
              }`}
            >
              <div className="p-2 rounded-lg bg-[#F5F5F5] shrink-0 border border-[#E5E5E5]">
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#111111] leading-tight">
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
