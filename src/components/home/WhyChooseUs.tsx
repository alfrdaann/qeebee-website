import React from "react";
import { Container } from "@/components/ui/Container";
import { WHY_CHOOSE_ITEMS } from "@/constants/products";
import {
  CalendarCheck,
  Layers,
  SlidersHorizontal,
  Scissors,
  Users,
  Truck,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <CalendarCheck key="1" className="w-6 h-6 text-[#FF6A00]" />,
    <Layers key="2" className="w-6 h-6 text-[#FF6A00]" />,
    <SlidersHorizontal key="3" className="w-6 h-6 text-[#FF6A00]" />,
    <Scissors key="4" className="w-6 h-6 text-[#FF6A00]" />,
    <Users key="5" className="w-6 h-6 text-[#FF6A00]" />,
    <Truck key="6" className="w-6 h-6 text-[#FF6A00]" />,
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-[#F5F5F5] border-b border-[#E5E5E5]">
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight">
            Keunggulan Layanan CV. QEE BEE
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Komitmen kami dalam memberikan hasil produksi apparel yang rapi, tepat spesifikasi, dan pelayanan yang dapat diandalkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="bg-white p-7 rounded-xl border border-[#E5E5E5] hover:border-[#FF6A00]/50 hover:shadow-xs transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-[#F5F5F5] inline-block border border-[#E5E5E5]">
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#111111]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
