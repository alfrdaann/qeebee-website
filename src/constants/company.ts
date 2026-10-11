export const COMPANY_INFO = {
  name: "CV. QEE BEE",
  tagline: "Supplier & Trading",
  established: 2005,
  whatsapp: "0813 253 7108",
  whatsappDisplay: "0813 253 7108",
  whatsappIntl: "+62 813 253 7108",
  whatsappRaw: "628132537108",
  whatsappUrl: "https://wa.me/628132537108",
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
  logoPath: "/assets/logo/qeebee-logo-gold.png",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    username: "@qeebeekonveksi",
    url: "https://www.instagram.com/qeebeekonveksi/",
    label: "Instagram Resmi CV. QEE BEE (@qeebeekonveksi)",
  },
  {
    name: "TikTok",
    username: "@qee.bee.konveksi",
    url: "https://www.tiktok.com/@qee.bee.konveksi",
    label: "TikTok Resmi CV. QEE BEE (@qee.bee.konveksi)",
  },
  {
    name: "Facebook",
    username: "CV. QEE BEE",
    url: "https://www.facebook.com/share/1YQ29va8Ki/",
    label: "Facebook Resmi CV. QEE BEE",
  },
] as const;

export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Kategori Produk", href: "/produk" },
  { label: "Bahan", href: "/bahan" },
  { label: "Layanan", href: "/layanan" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Cara Order", href: "/cara-order" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
] as const;
