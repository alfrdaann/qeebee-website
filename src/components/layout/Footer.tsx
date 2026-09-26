import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Truck, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO, NAV_LINKS } from "@/constants/company";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-[#111111] text-white border-t border-[#222222]">
      {/* Upper Footer Benefits / Highlights */}
      <div className="border-b border-[#222222] py-8">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white">Berpengalaman Sejak {COMPANY_INFO.established}</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Lebih dari dua dekade memproduksi apparel custom dan seragam berkualitas di Sidoarjo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white">Pengiriman {COMPANY_INFO.shipping}</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Layanan pengiriman aman dan terpercaya menjangkau seluruh wilayah Indonesia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 sm:col-span-2 lg:col-span-1">
              <div className="p-2.5 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white">Jam Operasional</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Buka setiap hari kerja pukul {COMPANY_INFO.operatingHours} WIB untuk konsultasi pesanan.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company Bio & Approved Gold Logo */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-12 w-40 sm:h-14 sm:w-48">
                <Image
                  src={COMPANY_INFO.logoPath}
                  alt={`${COMPANY_INFO.name} Official Logo`}
                  fill
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-contain object-left"
                />
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-md pt-2">
                CV. QEE BEE adalah mitra profesional konveksi & trading terpercaya di Sidoarjo sejak tahun {COMPANY_INFO.established}. Melayani produksi berbagai varian apparel custom mulai dari kaos, polo, kemeja seragam, rompi, jaket, hingga jersey olahraga dengan jangkauan pengiriman ke seluruh Indonesia.
              </p>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#20ba5a] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp: {COMPANY_INFO.whatsapp}</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Navigasi Menu
              </h3>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-[#FF6A00] transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-[#FF6A00] transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address & Contact */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Alamat & Kontak Workshop
              </h3>
              <div className="space-y-3 text-sm text-neutral-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FF6A00] shrink-0 mt-1" />
                  <span className="leading-relaxed">
                    {COMPANY_INFO.address.full}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#FF6A00] shrink-0" />
                  <span>Jam Operasional: {COMPANY_INFO.operatingHours} WIB</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-[#FF6A00] shrink-0" />
                  <span>Area Pengiriman: {COMPANY_INFO.shipping}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                  <span>Berpengalaman Sejak Tahun {COMPANY_INFO.established}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-[#222222] py-6 bg-black/60">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="flex items-center gap-2">
            <span>{COMPANY_INFO.tagline}</span>
            <span>&bull;</span>
            <span>Sidoarjo, Jawa Timur</span>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
