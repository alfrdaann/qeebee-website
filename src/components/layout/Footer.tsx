import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Truck, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO, NAV_LINKS } from "@/constants/company";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-[#111111] text-white border-t border-[#222222]">
      {/* Main Footer Content */}
      <div className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Col 1: Gold Logo, Description, Social Icons */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative h-11 w-40 sm:h-12 sm:w-44">
                <Image
                  src={COMPANY_INFO.logoPath}
                  alt={`${COMPANY_INFO.name} Official Logo`}
                  fill
                  sizes="(max-width: 640px) 160px, 176px"
                  className="object-contain object-left"
                />
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
                Mitra terpercaya untuk kebutuhan apparel custom dan konveksi berkualitas di seluruh Indonesia.
              </p>
              <div className="flex items-center gap-3 pt-1">
                {/* Instagram SVG */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-[#FF6A00] hover:border-[#FF6A00]/50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                {/* YouTube SVG */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-[#FF6A00] hover:border-[#FF6A00]/50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <polygon points="10 15 15 12 10 9 10 15"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Navigasi
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-[#FF6A00] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Information & Address */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Informasi
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {COMPANY_INFO.address.full}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF6A00] shrink-0" />
                  <span>Jam Operasional: {COMPANY_INFO.operatingHours} WIB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#FF6A00] shrink-0" />
                  <span>Pengiriman: {COMPANY_INFO.shipping}</span>
                </div>
              </div>
            </div>

            {/* Col 4: Contact & WhatsApp */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Hubungi Kami
              </h3>
              <div className="space-y-3">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white hover:border-[#FF6A00]/50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FF6A00]" />
                  <span className="text-xs sm:text-sm font-semibold">{COMPANY_INFO.whatsapp}</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-neutral-700 text-xs sm:text-sm font-medium text-white hover:border-white hover:bg-white/5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#FF6A00]" />
                  <span>Konsultasi WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-[#222222] py-4 bg-black">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <p>&copy; {currentYear} CV. QEE BEE. All rights reserved.</p>
          <p className="text-neutral-500">Supplier &amp; Trading | Konveksi Custom</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
