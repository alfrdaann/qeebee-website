import { Suspense } from "react";
import type { Metadata } from "next";
import { FileText, MessageCircle, ShieldCheck, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO } from "@/constants/company";
import { QuoteRequestForm } from "@/components/quote/QuoteRequestForm";

export const metadata: Metadata = {
  title: `Request Penawaran Harga | ${COMPANY_INFO.name} - Konveksi & Apparel Custom Sidoarjo`,
  description: `Ajukan permintaan estimasi harga penawaran resmi produksi apparel custom di ${COMPANY_INFO.name} Sidoarjo. Melayani pembuatan seragam kemeja, kaos polo, jaket, rompi, jersey, dan apparel instansi berkualitas tinggi.`,
};

function FormFallback() {
  return (
    <div className="py-16 text-center space-y-3">
      <Loader2 className="w-8 h-8 animate-spin text-[#FF6A00] mx-auto" />
      <p className="text-xs text-neutral-500">Memuat formulir penawaran harga...</p>
    </div>
  );
}

export default function RequestQuotePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#111111] text-white py-12 sm:py-16 border-b border-[#222222]">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="p-3.5 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 shrink-0">
              <FileText className="w-8 h-8 text-[#FF6A00]" />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6A00]/15 text-[#FF6A00]">
                Formulir Resmi CV. QEE BEE
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Request Penawaran Harga Custom
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                Dapatkan estimasi biaya produksi terbaik untuk kebutuhan seragam, kaos, jaket, dan apparel instansi Anda. Tim kami akan segera meninjau dan menghubungi via WhatsApp.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Info Strip */}
      <section className="bg-[#FFF8F2] border-b border-[#FF6A00]/15 py-3">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs text-neutral-700">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FF6A00] shrink-0" />
              <span>Data Anda aman &amp; hanya digunakan untuk keperluan penawaran</span>
            </div>
            <div className="hidden sm:block text-neutral-300">|</div>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-[#FF6A00] shrink-0" />
              <span>Respon WhatsApp aktif: <strong>{COMPANY_INFO.operatingHours} WIB</strong></span>
            </div>
            <div className="hidden sm:block text-neutral-300">|</div>
            <div>
              Pengiriman menjangkau: <strong className="text-[#FF6A00]">{COMPANY_INFO.shipping}</strong>
            </div>
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="bg-[#F5F5F5] py-10 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Main Form Card */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-8 shadow-xs">
                <Suspense fallback={<FormFallback />}>
                  <QuoteRequestForm />
                </Suspense>
              </div>
            </div>

            {/* Sidebar Info */}
            <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
              {/* How it works */}
              <div className="bg-white rounded-2xl border border-[#E5E5E5] p-5 sm:p-6 space-y-4 shadow-xs">
                <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#E5E5E5]">
                  Alur Proses Penawaran
                </h3>
                <ol className="space-y-3 text-xs text-neutral-600 list-none">
                  {[
                    {
                      title: "Kirim Formulir",
                      desc: "Lengkapi data spesifikasi pesanan, jumlah, dan bahan yang diinginkan.",
                    },
                    {
                      title: "Kalkulasi Spesialis",
                      desc: "Tim produksi CV. QEE BEE menghitung estimasi biaya dan waktu pengerjaan.",
                    },
                    {
                      title: "Konfirmasi via WhatsApp",
                      desc: "Kami menghubungi Anda secara personal dengan rincian penawaran harga resmi.",
                    },
                    {
                      title: "Approval & Mulai Produksi",
                      desc: "Setelah kesepakatan desain dan DP, pesanan langsung masuk lini produksi konveksi.",
                    },
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#FF6A00] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div className="space-y-0.5">
                        <strong className="text-[#111111] block font-semibold">{step.title}</strong>
                        <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Direct WA Option */}
              <div className="bg-white rounded-2xl border border-[#E5E5E5] p-5 sm:p-6 space-y-3.5 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[#25D366]/10 text-[#25D366]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111111]">Butuh Konsultasi Kilat?</h3>
                    <span className="text-[11px] text-neutral-500">Tanya langsung ke customer service kami</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Bila Anda sudah memiliki file desain atau ingin konsultasi bahan langsung tanpa mengisi formulir, silakan hubungi kami via WhatsApp.
                </p>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {COMPANY_INFO.whatsapp}</span>
                </a>
                <div className="text-[11px] text-neutral-400 text-center">
                  Senin - Sabtu: {COMPANY_INFO.operatingHours} WIB
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
