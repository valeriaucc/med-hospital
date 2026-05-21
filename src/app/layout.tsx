import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://med-hospital.onrender.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MedHospital · Plataforma de Gestión Hospitalaria",
    template: "%s · MedHospital",
  },
  description:
    "MedHospital es una plataforma web para la gestión digital de pacientes, médicos y citas médicas, que optimiza la administración hospitalaria.",
  keywords: [
    "MedHospital",
    "gestión hospitalaria",
    "citas médicas",
    "Django",
    "salud digital",
    "Electiva I",
  ],
  authors: [
    { name: "Valentina Burbano" },
    { name: "Valeria Góngora" },
    { name: "David Luna" },
    { name: "Vanessa Mena" },
  ],
  creator: "Equipo MedHospital",
  openGraph: {
    title: "MedHospital · Plataforma de Gestión Hospitalaria",
    description:
      "Optimiza la administración de pacientes, médicos y citas médicas con una plataforma moderna, segura y centralizada.",
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "MedHospital",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "MedHospital · Plataforma de Gestión Hospitalaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedHospital · Plataforma de Gestión Hospitalaria",
    description:
      "Plataforma web para gestionar pacientes, médicos y citas médicas.",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0fdfa" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MedHospital",
  applicationCategory: "HealthcareApplication",
  description:
    "Plataforma web de gestión hospitalaria para administrar pacientes, médicos y citas médicas.",
  url: siteUrl,
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "Equipo MedHospital · Electiva I",
    member: [
      { "@type": "Person", name: "Valentina Burbano" },
      { "@type": "Person", name: "Valeria Góngora" },
      { "@type": "Person", name: "David Luna" },
      { "@type": "Person", name: "Vanessa Mena" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark');}}catch(e){}})();
            `.trim(),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
