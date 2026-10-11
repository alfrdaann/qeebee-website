"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO } from "@/constants/company";
import { MapPin, Navigation, Factory, ExternalLink } from "lucide-react";

export const WorkshopLocation: React.FC = () => {
  const [hasMapError, setHasMapError] = useState(false);

  const fullAddress = `CV. QEE BEE, ${COMPANY_INFO.address.full}, Indonesia`;
  const encodedAddress = encodeURIComponent(fullAddress);
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <section id="lokasi-workshop" className="w-full bg-[#0A0A0A] py-12 sm:py-16 text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column — Workshop Info */}
          <div className="flex flex-col justify-between bg-[#1A1A1A] rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-lg">
            <div className="space-y-6">
              {/* Header with Circle Icon */}
              <div>
                <div className="w-12 h-12 rounded-full bg-[#FF6A00]/15 flex items-center justify-center text-[#FF6A00] mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Lokasi Workshop Kami
                </h2>
                <div className="mt-2 space-y-1">
                  <p className="text-lg font-bold text-white">{COMPANY_INFO.name}</p>
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                    {COMPANY_INFO.address.full}
                  </p>
                </div>
              </div>

              {/* Info Items */}
              <div className="space-y-4 pt-2 border-t border-neutral-800/80">
                {/* Item 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <a
                      href={mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6A00] font-semibold hover:underline inline-flex items-center gap-1.5 text-sm sm:text-base"
                    >
                      Lihat di Google Maps
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-xs text-neutral-500 mt-0.5">Buka di tab baru</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] shrink-0 mt-0.5">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <a
                      href={mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6A00] font-semibold hover:underline inline-flex items-center gap-1.5 text-sm sm:text-base"
                    >
                      Petunjuk Arah
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-xs text-neutral-500 mt-0.5">Navigasi langsung ke lokasi</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] shrink-0 mt-0.5">
                    <Factory className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[#FF6A00] font-semibold text-sm sm:text-base">
                      Workshop & Produksi
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Proses produksi jahit dengan standar kualitas terbaik
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons at Bottom */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-8 mt-6 border-t border-neutral-800/80">
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FF6A00] hover:bg-[#E55F00] text-white font-medium text-sm transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 font-medium text-sm transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column — Google Maps Embed */}
          <div className="bg-[#1A1A1A] rounded-2xl border border-neutral-800 overflow-hidden relative min-h-[300px] lg:min-h-[400px] flex flex-col shadow-lg">
            {!hasMapError ? (
              <iframe
                title="Lokasi Workshop CV. QEE BEE - Sidoarjo"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px] lg:min-h-[400px] border-0 rounded-xl"
                onError={() => setHasMapError(true)}
              />
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#1A1A1A]">
                <div className="w-12 h-12 rounded-full bg-[#FF6A00]/15 flex items-center justify-center text-[#FF6A00] mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{COMPANY_INFO.name}</h3>
                <p className="text-neutral-400 text-sm max-w-md mb-2">{COMPANY_INFO.address.full}</p>
                <p className="text-xs text-neutral-500 mb-6 max-w-sm">
                  Peta interaktif tidak dapat dimuat. Anda tetap dapat membuka lokasi atau memulai rute langsung melalui Google Maps.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF6A00] hover:bg-[#E55F00] text-white font-medium text-sm transition-colors shadow-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Buka di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 font-medium text-sm transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Petunjuk Arah</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkshopLocation;
