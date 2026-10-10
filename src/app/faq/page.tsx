"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "Produk apparel apa saja yang dapat diproduksi oleh CV. QEE BEE?",
    answer: "Kami melayani pembuatan berbagai varian pakaian custom mulai dari kaos (oblong, raglan, sablon), polo shirt berkerah, kemeja seragam kerja PDH/PDL, jaket bomber/hoodie/coach, setelan training olahraga, jersey sublimasi, rompi lapangan, topi, hingga tas serut souvenir.",
  },
  {
    id: "faq-2",
    question: "Apakah spesifikasi dan desain produk dapat disesuaikan penuh (custom)?",
    answer: "Ya, seluruh spesifikasi produk mulai dari pemilihan jenis bahan kain, paduan warna, acuan ukuran (size chart), bentuk kerah/saku, hingga aplikasi bordir komputer atau sablon dapat disesuaikan dengan kebutuhan Anda.",
  },
  {
    id: "faq-3",
    question: "Bagaimana cara mengajukan penawaran harga (request quote)?",
    answer: `Anda dapat mengajukan konsultasi penawaran harga secara mudah melalui kontak WhatsApp resmi kami di ${COMPANY_INFO.whatsapp}. Sampaikan jenis produk yang diinginkan, estimasi jumlah pesanan, serta acuan desain jika ada.`,
  },
  {
    id: "faq-4",
    question: "Apakah ada ketentuan jumlah minimum pemesanan (MOQ)?",
    answer: "Ketentuan minimum pemesanan disesuaikan dengan jenis barang dan tingkat kerumitan produksi. Detail jumlah minimum pesanan dikonfirmasikan secara langsung pada saat konsultasi awal.",
  },
  {
    id: "faq-5",
    question: "Pilihan bahan kain apa saja yang tersedia?",
    answer: "Kami menyediakan beragam opsi bahan berkualitas seperti Cotton Combed (20s/24s/30s), Lacoste Cotton & Pique untuk polo, American/Japan Drill & Tropical untuk kemeja, Fleece & Baby Terry untuk hoodie, Dry-Fit untuk jersey, serta Parasut/Taslan/Despo untuk jaket.",
  },
  {
    id: "faq-6",
    question: "Berapa lama estimasi waktu pengerjaan produksi?",
    answer: "Estimasi waktu pengerjaan bergantung pada jumlah kuantitas pesanan, ketersediaan stok bahan kain, serta tingkat kerumitan aplikasi bordir/sablon. Jadwal selesai dikonfirmasikan secara transparan pada saat penyusunan pesanan.",
  },
  {
    id: "faq-7",
    question: "Apakah pemesan dapat membawa contoh/sampel desain sendiri?",
    answer: "Tentu saja. Anda dapat mengirimkan foto acuan, sampel fisik, maupun file desain (CDR, AI, PDF, PNG) untuk kami pelajari dan sesuaikan dengan standar pola produksi workshop kami.",
  },
  {
    id: "faq-8",
    question: "Apakah CV. QEE BEE melayani pengiriman ke seluruh wilayah Indonesia?",
    answer: "Ya. Workshop kami berlokasi di Sidoarjo, Jawa Timur, dan kami bekerja sama dengan berbagai penyedia jasa pengiriman kargo (darat, laut, dan udara) untuk menjangkau pengiriman ke seluruh kota dan kabupaten di Indonesia.",
  },
  {
    id: "faq-9",
    question: "Bagaimana cara menghubungi tim customer service CV. QEE BEE?",
    answer: `Anda dapat menghubungi kami melalui WhatsApp di ${COMPANY_INFO.whatsapp} atau mengunjungi workshop kami di ${COMPANY_INFO.address.full} pada jam operasional ${COMPANY_INFO.operatingHours} WIB.`,
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-[#222222]">
        <Container className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6A00]/20 text-[#FF6A00] border border-[#FF6A00]/30 uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            Tanya Jawab Layanan
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Pertanyaan Umum (FAQ)
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            Temukan jawaban lengkap seputar cara pemesanan, pilihan bahan, penawaran harga, dan prosedur produksi apparel custom di CV. QEE BEE.
          </p>
        </Container>
      </section>

      {/* Accordion List */}
      <section className="bg-[#F5F5F5] py-14 sm:py-20">
        <Container className="max-w-3xl space-y-4">
          {FAQ_LIST.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left font-bold text-sm sm:text-base text-[#111111] hover:text-[#FF6A00] flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FF6A00] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-[#F0F0F0] pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-14 sm:py-20 border-t border-[#E5E5E5]">
        <Container className="text-center space-y-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
            Punya Pertanyaan Lain yang Belum Terjawab?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Tim customer service CV. QEE BEE siap membantu menjawab pertanyaan dan memberikan konsultasi langsung.
          </p>
          <div className="pt-2">
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="primary"
              size="lg"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              Tanyakan Langsung via WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
