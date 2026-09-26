export const COMPANY_INFO = {
  name: "CV. QEE BEE",
  tagline: "Supplier & Trading",
  established: 2005,
  whatsapp: "+62 812-3505-0097",
  whatsappUrl: "https://wa.me/6281235050097",
  address: {
    street: "Dsn. Sumokali RT 10 RW 02",
    village: "Desa Sumokali",
    district: "Kecamatan Candi",
    regency: "Kabupaten Sidoarjo",
    province: "Jawa Timur",
    postalCode: "61271",
    full: "Dsn. Sumokali RT 10 RW 02, Desa Sumokali, Kecamatan Candi, Kabupaten Sidoarjo, Jawa Timur 61271",
  },
  operatingHours: "07.00 - 17.00",
  shipping: "All Indonesia",
  logoPath: "/assets/logo/qeebee-logo.jpeg",
} as const;

export const NAV_LINKS = [
  { label: "Beranda", href: "#" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Produk & Layanan", href: "#produk" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Kontak", href: "#kontak" },
] as const;
