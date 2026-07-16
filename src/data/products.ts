export type Product = {
  slug: string;
  name: string;
  category: "Handheld" | "Facial Recognition" | "Tablet";
  tagline: string;
  description: string;
  img: string;
  specs: { label: string; value: string }[];
  applications: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "tps-360c",
    name: "TPS 360c",
    category: "Handheld",
    tagline: "Handheld fingerprint terminal for 1:1 NADRA verification.",
    description:
      "The TPS 360c is a compact handheld biometric terminal designed for real-time 1:1 verification against NADRA and enterprise databases. Widely deployed in telecom retail and field agent operations across Pakistan.",
    img: "https://www.securetech-consultancy.com/assets/images/products/360.png",
    specs: [
      { label: "Sensor", value: "Optical 500 DPI FBI PIV-071006 certified" },
      { label: "Display", value: "3.5\" color touchscreen" },
      { label: "Connectivity", value: "4G LTE, Wi-Fi, Bluetooth 5.0" },
      { label: "Battery", value: "5000 mAh, 12h field operation" },
      { label: "OS", value: "Android 11 with SecureTech SDK" },
      { label: "Weight", value: "320 g" },
    ],
    applications: ["SIM issuance & verification", "Cash disbursement", "Field agent onboarding"],
  },
  {
    slug: "tps-900",
    name: "TPS 900",
    category: "Handheld",
    tagline: "High-performance handheld fingerprint verification terminal.",
    description:
      "Enterprise-grade handheld with faster matching engine and rugged IP-rated body. Built for high-throughput verification desks and field deployments in harsh conditions.",
    img: "https://www.securetech-consultancy.com/assets/images/products/900.png",
    specs: [
      { label: "Sensor", value: "Dual FAP20 optical" },
      { label: "Matching", value: "1:1 and 1:N on device" },
      { label: "Rating", value: "IP65 dust/water resistant" },
      { label: "Storage", value: "64 GB expandable" },
      { label: "Battery", value: "6800 mAh, 16h operation" },
    ],
    applications: ["Border control", "Banking KYC", "Voter verification"],
  },
  {
    slug: "tps-980",
    name: "TPS 980",
    category: "Facial Recognition",
    tagline: "Facial recognition terminal for access control and MFS.",
    description:
      "AI-powered facial recognition terminal with liveness detection and sub-second 1:N matching. Ideal for workforce attendance, secure access control and mobile financial services onboarding.",
    img: "https://www.securetech-consultancy.com/assets/images/products/980.png",
    specs: [
      { label: "Camera", value: "8MP with IR + RGB liveness" },
      { label: "Matching Speed", value: "< 0.3s for 10,000 templates" },
      { label: "Accuracy", value: "99.7% FRR at 0.001% FAR" },
      { label: "Interface", value: "7\" HD touchscreen, PoE" },
    ],
    applications: ["Workforce attendance", "Building access", "MFS KYC"],
  },
  {
    slug: "tps-950",
    name: "TPS 950",
    category: "Facial Recognition",
    tagline: "Facial recognition device with high-throughput matching.",
    description:
      "Wall or turnstile-mounted facial recognition device engineered for high-throughput environments — factories, campuses and mass transit checkpoints.",
    img: "https://www.securetech-consultancy.com/assets/images/products/950.png",
    specs: [
      { label: "Throughput", value: "60+ verifications per minute" },
      { label: "Distance", value: "0.3 – 1.5 m recognition range" },
      { label: "Integrations", value: "Wiegand, RS-485, TCP/IP" },
    ],
    applications: ["Turnstile access", "Time & attendance", "Campus security"],
  },
  {
    slug: "tps-550s",
    name: "TPS 550s",
    category: "Handheld",
    tagline: "Handheld terminal with integrated camera for photograph capture.",
    description:
      "Combines fingerprint capture with an integrated camera for full field enrolment — biometrics, photo and document capture in one device.",
    img: "https://www.securetech-consultancy.com/assets/images/products/550s.png",
    specs: [
      { label: "Sensor", value: "FAP20 optical + 5MP camera" },
      { label: "Enrolment", value: "Full ISO/IEC 19794 templates" },
      { label: "Print", value: "Optional 2\" thermal receipt module" },
    ],
    applications: ["Civil registration", "Refugee enrolment", "NGO cash programmes"],
  },
  {
    slug: "tps-470",
    name: "TPS 470",
    category: "Tablet",
    tagline: "Rugged biometric tablet for mobile field operations.",
    description:
      "8-inch rugged Android tablet with integrated fingerprint sensor and optional smart-card reader — built for census, elections and multi-modal enrolment.",
    img: "https://www.securetech-consultancy.com/assets/images/products/470.png",
    specs: [
      { label: "Display", value: "8\" HD sunlight-readable" },
      { label: "Sensor", value: "Integrated FAP30" },
      { label: "Extras", value: "Optional MRZ scanner + smart-card slot" },
      { label: "Battery", value: "Swappable 8000 mAh" },
    ],
    applications: ["Elections", "Census", "Multi-modal enrolment"],
  },
  {
    slug: "tps-550",
    name: "TPS 550",
    category: "Handheld",
    tagline: "Reliable handheld biometric verification workhorse.",
    description:
      "The proven mid-range handheld deployed at scale across telecom, banking and government field programmes since 2015.",
    img: "https://www.securetech-consultancy.com/assets/images/products/550.png",
    specs: [
      { label: "Sensor", value: "FAP10 optical" },
      { label: "Connectivity", value: "3G/4G + Wi-Fi" },
      { label: "Certification", value: "STQC / FBI PIV" },
    ],
    applications: ["Retail SIM verification", "Attendance", "Field surveys"],
  },
  {
    slug: "tps-350",
    name: "TPS 350",
    category: "Handheld",
    tagline: "Compact, cost-effective handheld fingerprint device.",
    description:
      "Entry-level handheld biometric terminal designed for cost-sensitive, high-volume deployments where reliability and battery life matter most.",
    img: "https://www.securetech-consultancy.com/assets/images/products/350.png",
    specs: [
      { label: "Sensor", value: "FAP10 optical" },
      { label: "Battery", value: "4200 mAh, 10h operation" },
      { label: "Weight", value: "260 g" },
    ],
    applications: ["Attendance", "Micro-finance", "Field verification"],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
