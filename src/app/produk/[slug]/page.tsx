import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, Check, ArrowRight, ShieldCheck, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PRODUCT_CATEGORIES, PORTFOLIO_ITEMS } from "@/constants/products";
import { COMPANY_INFO } from "@/constants/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((cat) => ({
    slug: cat.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCT_CATEGORIES.find((p) => p.id === slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | CV. QEE BEE",
    };
  }

  return {
    title: `${product.name} Custom | ${COMPANY_INFO.name} Sidoarjo`,
    description: `Produksi ${product.name} custom kualitas konveksi Sidoarjo. ${product.description}`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCT_CATEGORIES.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  // Related portfolio images for this category
  const relatedPortfolio = PORTFOLIO_ITEMS.filter(
    (item) =>
      item.category.toLowerCase().includes(product.name.toLowerCase()) ||
      product.name.toLowerCase().includes(item.category.toLowerCase())
  );

  // Other related categories
  const otherCategories = PRODUCT_CATEGORIES.filter((c) => c.id !== product.id).slice(0, 4);

  const waProductUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Halo ${COMPANY_INFO.name}, saya ingin konsultasi pesanan ${product.name} custom.`
  )}`;

  const quoteProductUrl = `/request-quote?kategori=${encodeURIComponent(product.name)}`;

  return (
    <>
      {/* Breadcrumb Strip */}
      <div className="bg-[#1A1A1A] text-neutral-400 text-xs py-3 border-b border-neutral-800">
        <Container>
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/produk" className="hover:text-white transition-colors">
              Katalog Produk
            </Link>
            <span>/</span>
            <span className="text-[#FF6A00] font-semibold">{product.name}</span>
          </div>
        </Container>
      </div>

      {/* Main Detail Section */}
      <section className="bg-[#F5F5F5] py-10 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Product Image & Gallery Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-white border border-[#E5E5E5] overflow-hidden shadow-xs">
                <Image
                  src={product.image}
                  alt={`Produk ${product.name} ${COMPANY_INFO.name}`}
                  fill
                  priority
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#FF6A00] text-white shadow-xs">
                    Konveksi Custom Sidoarjo
                  </span>
                </div>
              </div>

              {/* Sample Portfolio Gallery Thumbnails if Available */}
              {relatedPortfolio.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">
                    Dokumentasi Hasil Produksi:
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {relatedPortfolio.map((item) => (
                      <div
                        key={item.id}
                        className="relative aspect-square rounded-lg bg-white border border-[#E5E5E5] overflow-hidden"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain p-2"
                          sizes="120px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Specifications & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5E5]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6A00]/10 text-[#FF6A00]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Supplier &amp; Trading Konveksi Sidoarjo
                </div>

                <h1 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                  {product.name} Custom
                </h1>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="py-3 border-y border-[#E5E5E5] space-y-2">
                  <span className="text-xs font-bold text-[#111111] uppercase tracking-wider block">
                    Spesifikasi Layanan Custom:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                      <span><strong>Pilihan Bahan:</strong> Cotton Combed, Lacoste, Drill, Fleece, Dry-Fit, Parasut, dll.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                      <span><strong>Aplikasi Logo:</strong> Bordir komputer presisi &amp; sablon berkualitas tinggi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                      <span><strong>Panduan Ukuran:</strong> Terstandar dari S hingga XXL+ (custom size chart).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                      <span><strong>Pengiriman:</strong> Menjangkau seluruh kota &amp; kabupaten di Indonesia.</span>
                    </li>
                  </ul>
                </div>

                {/* Price Disclaimer */}
                <div className="bg-[#FFF8F2] p-3.5 rounded-xl border border-[#FF6A00]/20 text-xs text-neutral-700">
                  <strong className="text-[#FF6A00]">Ketentuan Biaya &amp; Pesanan:</strong>
                  <p className="mt-0.5 text-neutral-600">
                    Harga menyesuaikan jenis bahan, kerapian bordir/sablon, serta kuantitas jumlah pesanan. Konsultasikan langsung untuk estimasi biaya terbaik.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  {/* Primary Quote Request Button with prefilled category */}
                  <Button
                    href={quoteProductUrl}
                    variant="primary"
                    size="lg"
                    className="flex-1 justify-center font-bold"
                    leftIcon={<FileText className="w-4 h-4" />}
                  >
                    Request Penawaran {product.name}
                  </Button>

                  {/* Complementary WhatsApp Button */}
                  <a
                    href={waProductUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20ba5a] transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Back to Catalog */}
                  <Button
                    href="/produk"
                    variant="outline"
                    size="lg"
                    leftIcon={<ArrowLeft className="w-4 h-4" />}
                  >
                    Katalog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Other Product Categories */}
      <section className="bg-white py-12 sm:py-16 border-t border-[#E5E5E5]">
        <Container className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">
              Kategori Produk Lainnya
            </h2>
            <Link
              href="/produk"
              className="text-xs sm:text-sm font-semibold text-[#FF6A00] hover:underline inline-flex items-center gap-1"
            >
              <span>Lihat Semua Katalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {otherCategories.map((c) => (
              <Link
                key={c.id}
                href={`/produk/${c.id}`}
                className="interactive-card group bg-[#F9F9F9] rounded-xl border border-[#E5E5E5] p-3 text-center hover:border-[#FF6A00]/50"
              >
                <div className="relative aspect-[4/3] w-full mb-2">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform"
                    sizes="200px"
                  />
                </div>
                <span className="text-xs font-bold text-[#111111] group-hover:text-[#FF6A00] transition-colors">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
