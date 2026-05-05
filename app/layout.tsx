import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "involve arquitectos",
    template: "%s — involve arquitectos",
  },
  description:
    "Escritório de arquitectura baseado em Lisboa. Projectos de habitação, equipamentos públicos e espaços culturais com rigor, identidade e atenção ao lugar.",
  keywords: ["arquitectura", "Lisboa", "Portugal", "habitação", "design", "involve arquitectos"],
  openGraph: {
    title: "involve arquitectos",
    description: "Arquitectura com carácter. Baseados em Lisboa.",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${dmSans.variable} ${cormorantGaramond.variable} ${dmMono.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
