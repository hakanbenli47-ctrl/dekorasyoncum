import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dekorasyoncum.com.tr"),

  title: {
    default: "Dekorasyoncum | Duvar Kağıdı Satış ve Uygulama Hizmetleri",
    template: "%s | Dekorasyoncum",
  },

  description:
    "Dekorasyoncum ile ev, ofis ve iş yerlerinize özel modern duvar kağıdı satış ve profesyonel uygulama hizmetleri. Şık tasarımlar, kaliteli malzeme ve uzman ekip desteği.",

  keywords: [
    "duvar kağıdı",
    "duvar kağıdı satış",
    "duvar kağıdı uygulama",
    "modern duvar kağıdı",
    "dekoratif duvar kaplama",
    "ev dekorasyonu",
    "ofis duvar kağıdı",
    "3d duvar kağıdı",
    "duvar dekorasyonu",
    "dekorasyoncum",
  ],

  openGraph: {
    title: "Dekorasyoncum | Duvar Kağıdı Satış ve Uygulama Hizmetleri",
    description:
      "Profesyonel duvar kağıdı satış ve uygulama hizmetleri ile yaşam alanlarınıza yeni bir görünüm kazandırın.",
    url: "https://dekorasyoncum.com.tr",
    siteName: "Dekorasyoncum",
    locale: "tr_TR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
