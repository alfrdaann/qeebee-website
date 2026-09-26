import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";
import { MessageCircle, FileText, Phone, Clock } from "lucide-react";

export const RequestQuoteCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FF6A00] text-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Headline & Supporting Text */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Punya Kebutuhan Apparel Custom?
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Konsultasikan kebutuhan produksi Anda dengan CV. QEE BEE.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/80 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Jam Kerja: {COMPANY_INFO.operatingHours} WIB
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                {COMPANY_INFO.whatsapp}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto shrink-0">
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="secondary"
              size="lg"
              fullWidth
              className="bg-[#111111] hover:bg-black text-white shadow-sm border border-black"
              leftIcon={<FileText className="w-4 h-4 text-[#FF6A00]" />}
            >
              Request Quote
            </Button>
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="outline"
              size="lg"
              fullWidth
              className="bg-white text-[#111111] hover:bg-neutral-100 hover:text-black border-white shadow-sm font-semibold"
              leftIcon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RequestQuoteCTA;
