import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ConsultaMed · Plataforma de Gestión Hospitalaria",
  description:
    "ConsultaMed (MedHospital) es una plataforma web para la gestión digital de pacientes, médicos y citas, que optimiza la administración hospitalaria.",
  keywords: [
    "ConsultaMed",
    "MedHospital",
    "gestión hospitalaria",
    "citas médicas",
    "Django",
    "salud digital",
  ],
  authors: [
    { name: "Valentina Burbano" },
    { name: "Valeria Góngora" },
    { name: "David Luna" },
    { name: "Vanessa Mena" },
  ],
  openGraph: {
    title: "ConsultaMed · Plataforma de Gestión Hospitalaria",
    description:
      "Optimiza la administración de pacientes, médicos y citas médicas con una plataforma moderna, segura y centralizada.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
