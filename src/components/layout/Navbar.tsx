"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, Clock, MapPin, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO, NAV_LINKS } from "@/constants/company";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111111] text-white border-b border-[#222222]">
      {/* Top Compact Info Strip */}
      <div className="bg-[#0A0A0A] text-neutral-400 text-[11px] py-1.5 border-b border-[#1A1A1A]">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#FF6A00]" />
              Sidoarjo, Jawa Timur (Est. {COMPANY_INFO.established})
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#FF6A00]" />
              {COMPANY_INFO.operatingHours} WIB
            </span>
          </div>
          <div className="flex items-center gap-3 text-neutral-400">
            <span className="hidden sm:inline">
              Pengiriman: <strong className="text-white font-normal">{COMPANY_INFO.shipping}</strong>
            </span>
            <span className="text-neutral-700">|</span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#FF6A00] hover:text-[#ff852e] transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              <span>{COMPANY_INFO.whatsapp}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#111111]">
        <Container className="flex items-center justify-between h-16 sm:h-20">
          {/* Approved Gold Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative h-10 w-36 sm:h-12 sm:w-44 flex items-center">
              <Image
                src={COMPANY_INFO.logoPath}
                alt={`${COMPANY_INFO.name} Official Logo`}
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 144px, 176px"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs lg:text-[13px] 2xl:text-sm font-medium text-neutral-200 hover:text-[#FF6A00] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6A00] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Primary Orange Request Penawaran Button */}
            <Button
              href="/request-quote"
              variant="primary"
              size="md"
              className="font-bold shadow-xs px-3.5 2xl:px-4 text-xs 2xl:text-sm"
              leftIcon={<FileText className="w-4 h-4" />}
            >
              Request Penawaran
            </Button>

            {/* Complementary WhatsApp Button */}
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="whatsapp"
              size="md"
              className="px-3 2xl:px-3.5 text-xs 2xl:text-sm"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            {/* Compact Mobile Request Penawaran CTA */}
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF6A00] text-white text-xs font-bold hover:bg-[#e55f00] transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Penawaran</span>
            </Link>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-200 hover:bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#FF6A00]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#222222] bg-[#161616]">
          <Container className="py-4 space-y-4">
            {/* Top Prominent CTA in Mobile Menu */}
            <div className="p-3 bg-[#1F1F1F] rounded-xl border border-[#333333] space-y-2.5">
              <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                Layanan Cepat
              </span>
              <Button
                href="/request-quote"
                variant="primary"
                size="md"
                fullWidth
                leftIcon={<FileText className="w-4 h-4" />}
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold justify-center"
              >
                Request Penawaran Harga
              </Button>
              <Button
                href={COMPANY_INFO.whatsappUrl}
                variant="whatsapp"
                size="md"
                fullWidth
                leftIcon={<MessageCircle className="w-4 h-4" />}
                className="justify-center"
              >
                Konsultasi WhatsApp ({COMPANY_INFO.whatsapp})
              </Button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-neutral-200 hover:bg-[#222222] hover:text-[#FF6A00] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-neutral-600 text-xs">→</span>
                </Link>
              ))}
            </nav>

            {/* Info footer in mobile drawer */}
            <div className="pt-2 border-t border-[#222222]">
              <div className="px-3 py-2.5 bg-[#0D0D0D] rounded-lg text-xs text-neutral-400 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span>Jam Operasional: {COMPANY_INFO.operatingHours} WIB</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span>{COMPANY_INFO.address.regency}, {COMPANY_INFO.address.province}</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
