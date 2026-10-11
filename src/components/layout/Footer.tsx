import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/constants/company";
import { InstagramIcon, TikTokIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const renderSocialIcon = (name: string, size: number = 20) => {
    switch (name) {
      case "Instagram":
        return <InstagramIcon size={size} />;
      case "TikTok":
        return <TikTokIcon size={size} />;
      case "Facebook":
        return <FacebookIcon size={size} />;
      default:
        return null;
    }
  };

  // Split navigation links into two sub-columns
  const leftLinks = [
    NAV_LINKS.find((l) => l.label === "Beranda") || { label: "Beranda", href: "/" },
    NAV_LINKS.find((l) => l.label === "Kategori Produk") || { label: "Kategori Produk", href: "/produk" },
    NAV_LINKS.find((l) => l.label === "Bahan") || { label: "Bahan", href: "/bahan" },
    NAV_LINKS.find((l) => l.label === "Layanan") || { label: "Layanan", href: "/layanan" },
    NAV_LINKS.find((l) => l.label === "Portofolio") || { label: "Portofolio", href: "/portofolio" },
  ];

  const rightLinks = [
    NAV_LINKS.find((l) => l.label === "Tentang Kami") || { label: "Tentang Kami", href: "/tentang-kami" },
    NAV_LINKS.find((l) => l.label === "Cara Order") || { label: "Cara Order", href: "/cara-order" },
    NAV_LINKS.find((l) => l.label === "FAQ") || { label: "FAQ", href: "/faq" },
    NAV_LINKS.find((l) => l.label === "Kontak") || { label: "Kontak", href: "/kontak" },
  ];

  // Specific styles for large social circles in Column 4
  const getSocialStyle = (name: string) => {
    switch (name) {
      case "Instagram":
        return "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-90 shadow-md";
      case "TikTok":
        return "bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700";
      case "Facebook":
        return "bg-[#1877F2] text-white hover:bg-[#166fe5]";
      default:
        return "bg-neutral-800 text-white";
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-neutral-800">
      {/* Main Footer Content */}
      <div className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Column 1 — Brand QEE BEE */}
            <div className="space-y-4">
              <div className="relative h-12 w-44">
                <Image
                  src={COMPANY_INFO.logoPath}
                  alt={COMPANY_INFO.name}
                  fill
                  sizes="(max-width: 640px) 160px, 176px"
                  className="object-contain object-left"
                />
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed">
                Solusi konveksi berkualitas untuk berbagai kebutuhan Anda, dengan hasil terbaik dan tepat waktu.
              </p>

              <div className="pt-2 space-y-2.5">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                  MEDIA SOSIAL RESMI
                </span>
                <div className="flex items-center gap-2.5">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      title={item.label}
                      className="p-2.5 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-300 hover:border-[#FF6A00]/50 hover:text-[#FF6A00] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]"
                    >
                      {renderSocialIcon(item.name, 20)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2 — Quick Link (Navigation) */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Quick Link
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Left Sub-column */}
                <ul className="space-y-2.5">
                  {leftLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-neutral-400 hover:text-[#FF6A00] text-sm flex items-center transition-colors group"
                      >
                        <span className="text-neutral-500 group-hover:text-[#FF6A00] mr-1.5 transition-colors font-semibold">
                          &gt;
                        </span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Right Sub-column */}
                <ul className="space-y-2.5">
                  {rightLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-neutral-400 hover:text-[#FF6A00] text-sm flex items-center transition-colors group"
                      >
                        <span className="text-neutral-500 group-hover:text-[#FF6A00] mr-1.5 transition-colors font-semibold">
                          &gt;
                        </span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3 — Kontak Kami */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Kontak Kami
              </h3>
              <div className="space-y-3.5">
                {/* WhatsApp */}
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors group"
                >
                  <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="group-hover:text-[#FF6A00] transition-colors">
                    {COMPANY_INFO.whatsapp}
                  </span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-2.5 text-sm text-neutral-400">
                  <MapPin className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
                  <span className="leading-snug">{COMPANY_INFO.address.full}</span>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-2.5 text-sm text-neutral-400">
                  <Clock className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.operatingHours} WIB</span>
                </div>
              </div>
            </div>

            {/* Column 4 — Media Sosial */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Media Sosial
              </h3>
              <p className="text-xs text-neutral-400">
                Ikuti perkembangan terbaru, katalog, dan portofolio kami melalui saluran resmi:
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 ${getSocialStyle(
                      item.name
                    )}`}
                  >
                    {renderSocialIcon(item.name, 28)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-neutral-800 py-5">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© {currentYear} CV. QEE BEE. All rights reserved.</p>
          <p>Kualitas Terbaik · Harga Kompetitif · Tepat Waktu</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
