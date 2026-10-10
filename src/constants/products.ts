export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string; // Kaos, Polo, Jaket, Training, Kemeja, Jersey, Topi, Tas, Rompi
  client?: string;
  image: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "kaos",
    name: "Kaos",
    description: "Kaos sablon combed, cotton carded, dan raglan untuk event, komunitas, serta seragam santai.",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.13.jpeg",
  },
  {
    id: "polo",
    name: "Polo",
    description: "Polo shirt bordir bahan lacoste cotton & pique untuk seragam kerja semi-formal dan instansi.",
    image: "/assets/products/batch-2/WhatsApp Image 2026-09-26 at 07.24.47.jpeg",
  },
  {
    id: "jaket-hoodie",
    name: "Jaket & Hoodie",
    description: "Jaket bomber, coach jacket, hoodie, zipper fleece, dan jaket olahraga berdaya tahan tinggi.",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.18 (2).jpeg",
  },
  {
    id: "training-pack",
    name: "Training Pack",
    description: "Satu set setelan polo/kaos dan celana training olahraga untuk instansi, perusahaan, dan sekolah.",
    image: "/assets/products/batch-2/WhatsApp Image 2026-09-26 at 07.24.36.jpeg",
  },
  {
    id: "kemeja-seragam",
    name: "Kemeja & Seragam",
    description: "Kemeja kerja PDH, PDL, kemeja kantor drill, dan seragam instansi dengan pola jahitan presisi.",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.17.jpeg",
  },
  {
    id: "jersey",
    name: "Jersey",
    description: "Jersey custom printing sublimasi tajam berbahan dry-fit untuk olahraga, futsal, dan e-sport.",
    image: "/assets/products/batch-3/WhatsApp Image 2026-09-26 at 07.35.14.jpeg",
  },
  {
    id: "topi",
    name: "Topi",
    description: "Topi custom baseball, snapback, dan rimba dengan bordir komputer berkualitas.",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.13 (2).jpeg",
  },
  {
    id: "tas",
    name: "Tas",
    description: "Tas serut (drawstring), goodie bag kain, dan tote bag konveksi untuk souvenir acara.",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.11.jpeg",
  },
  {
    id: "rompi",
    name: "Rompi",
    description: "Rompi lapangan, safety vest reflective, dan rompi dinas dengan saku fungsional.",
    image: "/assets/products/batch-3/WhatsApp Image 2026-09-26 at 07.35.12 (1).jpeg",
  },
  {
    id: "lainnya",
    name: "Lainnya",
    description: "Aksesori konveksi, celemek, pouch, souvenir, dan kebutuhan apparel khusus lainnya.",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.23.jpeg",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Polo Shirt JAPFA Food Production",
    category: "Polo",
    client: "JAPFA Food",
    image: "/assets/products/batch-2/WhatsApp Image 2026-09-26 at 07.24.47.jpeg",
  },
  {
    id: "port-2",
    title: "Kemeja Seragam PT Ciomas Adisatwa",
    category: "Kemeja",
    client: "PT Ciomas Adisatwa",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.17.jpeg",
  },
  {
    id: "port-3",
    title: "Bomber Jacket Q-BHIE Production",
    category: "Jaket",
    client: "Corporate Project",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.18 (2).jpeg",
  },
  {
    id: "port-4",
    title: "Setelan Training PT Cipta Terang Unggul",
    category: "Training",
    client: "PT Cipta Terang Unggul",
    image: "/assets/products/batch-2/WhatsApp Image 2026-09-26 at 07.24.36.jpeg",
  },
  {
    id: "port-5",
    title: "Jersey Sublimasi Full Print",
    category: "Jersey",
    client: "Sport Club",
    image: "/assets/products/batch-3/WhatsApp Image 2026-09-26 at 07.35.14.jpeg",
  },
  {
    id: "port-6",
    title: "Rompi Petugas Imunisasi & Lapangan",
    category: "Rompi",
    client: "Dinas Kesehatan",
    image: "/assets/products/batch-3/WhatsApp Image 2026-09-26 at 07.35.12 (1).jpeg",
  },
  {
    id: "port-7",
    title: "Kaos Event Terate Emas",
    category: "Kaos",
    client: "Komunitas",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.13.jpeg",
  },
  {
    id: "port-8",
    title: "Topi Bordir Kontingen Olahraga",
    category: "Topi",
    client: "KONI",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.13 (2).jpeg",
  },
  {
    id: "port-9",
    title: "Tas Serut Konveksi Custom",
    category: "Tas",
    client: "Event Merchandise",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.11.jpeg",
  },
  {
    id: "port-10",
    title: "Kemeja PDH Instansi Lapas Kelas I",
    category: "Kemeja",
    client: "Lapas Kelas I Surabaya",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.28.56.jpeg",
  },
  {
    id: "port-11",
    title: "Polo Kontingen PORKAB Sidoarjo",
    category: "Polo",
    client: "KONI Sidoarjo",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.14 (1).jpeg",
  },
  {
    id: "port-12",
    title: "Jaket Olahraga Tracktop KONI",
    category: "Jaket",
    client: "KONI Sidoarjo",
    image: "/assets/products/batch-1/WhatsApp Image 2026-09-26 at 07.29.12.jpeg",
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Berpengalaman Sejak 2005",
    description: "Lebih dari dua dekade beroperasi di Sidoarjo melayani pembuatan apparel custom untuk instansi, perusahaan, dan komunitas.",
  },
  {
    title: "Beragam Pilihan Produk",
    description: "Menyediakan katalog lengkap mulai dari kaos, polo, kemeja kerja, jaket, rompi, jersey olahraga hingga tas dan topi.",
  },
  {
    title: "Dapat Disesuaikan",
    description: "Bahan, warna, ukuran, detail kerah, serta bordir komputer atau sablon dapat disesuaikan penuh dengan kebutuhan Anda.",
  },
  {
    title: "Proses Produksi Jahit",
    description: "Dikerjakan oleh tenaga jahit terampil dengan kontrol jahitan rapi, pola pas di badan, dan ketahanan bahan yang terjaga.",
  },
  {
    title: "Melayani Berbagai Kebutuhan",
    description: "Menerima pesanan seragam kantor, seragam pabrik, pakaian dinas instansi pemerintah, pakaian event, maupun komunitas.",
  },
  {
    title: "Pengiriman Seluruh Indonesia",
    description: "Bekerja sama dengan berbagai ekspedisi darat, laut, dan udara untuk mengantarkan pesanan Anda ke seluruh Nusantara.",
  },
];

export const PRODUCTION_STEPS = [
  {
    step: "01",
    title: "Konsultasi",
    description: "Sampaikan kebutuhan apparel, jumlah pesanan, dan deadline melalui kontak WhatsApp.",
  },
  {
    step: "02",
    title: "Tentukan Produk",
    description: "Pilih model produk seperti kaos, polo, kemeja dinas, jaket, atau varian apparel lainnya.",
  },
  {
    step: "03",
    title: "Tentukan Spesifikasi",
    description: "Pilih bahan kain, warna, panduan ukuran (size chart), serta detail sablon atau bordir logo.",
  },
  {
    step: "04",
    title: "Persiapan Produksi",
    description: "Penyusunan pola potong (cutting) dan persiapan material kain berkualitas sesuai pesanan.",
  },
  {
    step: "05",
    title: "Proses Jahit",
    description: "Pengerjaan penjahitan profesional bersamaan dengan proses aplikasi bordir atau sablon.",
  },
  {
    step: "06",
    title: "Finishing & Pemeriksaan",
    description: "Quality control menyeluruh, pembersihan sisa benang, steam/setrika, dan pengemasan rapi.",
  },
  {
    step: "07",
    title: "Pengiriman",
    description: "Paket pesanan dikirim langsung ke alamat Anda di seluruh wilayah Indonesia.",
  },
];
