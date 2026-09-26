"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO, NAV_LINKS } from "@/constants/company";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      {/* Top Notification / Info Bar */}
      <div className="bg-[#111111] text-white text-xs py-2 border-b border-[#222222]">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center gap-4 text-neutral-300 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF6A00]" />
              Sidoarjo, Jawa Timur (Est. {COMPANY_INFO.established})
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FF6A00]" />
              {COMPANY_INFO.operatingHours} WIB
            </span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 text-[11px] sm:text-xs">
            <span className="hidden sm:inline text-neutral-400">Pengiriman:</span>
            <span className="font-medium text-white">{COMPANY_INFO.shipping}</span>
            <span className="text-neutral-600">|</span>
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
      <div className="border-b border-[#E5E5E5] bg-white">
        <Container className="flex items-center justify-between h-20">
          {/* Approved Gold Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-11 w-36 sm:h-12 sm:w-44 flex items-center">
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
          <nav className="hidden xl:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#111111] hover:text-[#FF6A00] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6A00] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="primary"
              size="md"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              Konsultasi WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="primary"
              size="sm"
              className="sm:hidden px-2.5"
              leftIcon={<MessageCircle className="w-3.5 h-3.5" />}
            >
              WA
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#111111] hover:bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#FF6A00]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#111111]" />
              ) : (
                <Menu className="w-6 h-6 text-[#111111]" />
              )}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-[#E5E5E5] bg-white">
          <Container className="py-4 space-y-3">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-[#111111] hover:bg-[#F5F5F5] hover:text-[#FF6A00] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#E5E5E5] space-y-2">
              <Button
                href={COMPANY_INFO.whatsappUrl}
                variant="primary"
                size="md"
                fullWidth
                leftIcon={<MessageCircle className="w-4 h-4" />}
              >
                Hubungi via WhatsApp ({COMPANY_INFO.whatsapp})
              </Button>

              <div className="px-3 py-2 bg-[#F5F5F5] rounded-lg text-xs text-neutral-600 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span>Jam Buka: {COMPANY_INFO.operatingHours} WIB</span>
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
