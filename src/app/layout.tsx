import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InstallPrompt } from "@/components/InstallPrompt";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { site } from "@/lib/site";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "DMR Mechanical | HVAC, Plumbing & Mechanical — Shreveport, LA",
    template: "%s | DMR Mechanical",
  },
  description:
    "Premium mechanical contractor in Shreveport — HVAC, plumbing, boilers, and industrial work since 2004. 85+ employees, 60+ trucks, 24/7 emergency across the Ark-La-Tex.",
  applicationName: site.shortName,
  keywords: [
    "DMR Mechanical",
    "HVAC Shreveport",
    "plumber Shreveport",
    "AC repair Shreveport",
    "boiler repair Louisiana",
    "Ark-La-Tex mechanical contractor",
    "24/7 emergency HVAC",
    "Bossier plumbing",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: site.shortName,
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "DMR Mechanical | HVAC, Plumbing & Mechanical — Shreveport, LA",
    description: site.description,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "DMR Mechanical — HVAC and mechanical services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DMR Mechanical | HVAC & Plumbing — Shreveport",
    description: site.description,
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/icon-192.png", sizes: "192x192" }],
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0A1F3D" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1F3D" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${sourceSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCta />
        <InstallPrompt />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
