import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";
import { MessageCircle, FileText, ArrowRight } from "lucide-react";

export const RequestQuoteCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FF6A00] text-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Text */}
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Siap Membuat Apparel Custom untuk Kebutuhan Anda?
            </h2>
            <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal">
              Konsultasikan kebutuhan apparel Anda sekarang juga. Tim kami siap membantu memberikan solusi terbaik.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-3 w-full sm:w-auto shrink-0 min-w-[220px]">
            <Button
              href="/request-quote"
              variant="outline"
              size="lg"
              className="bg-white text-[#FF6A00] hover:bg-neutral-100 hover:text-[#e55f00] border-white shadow-sm font-semibold justify-center"
              leftIcon={<FileText className="w-4 h-4 text-[#FF6A00]" />}
              rightIcon={<ArrowRight className="w-4 h-4 text-[#FF6A00]" />}
            >
              Request Penawaran
            </Button>
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="outline"
              size="lg"
              className="bg-[#e55f00]/30 border-white/40 text-white hover:bg-[#e55f00]/60 hover:border-white justify-center font-medium"
              leftIcon={<MessageCircle className="w-4 h-4 text-white/80" />}
            >
              Konsultasi WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RequestQuoteCTA;
