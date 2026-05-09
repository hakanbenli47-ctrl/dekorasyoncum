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

  verification: {
    google: "O476N6EFK6Ly_L5LpcJ-WU2zSWQXnohOsJ1Ox_BAfLs",
  },

  title: {
    default:
      "Dekorasyoncum | İstanbul Duvar Kağıdı Satış ve Uygulama Hizmeti",
    template: "%s | Dekorasyoncum",
  },

  description:
    "Dekorasyoncum; İstanbul’da ev, ofis, mağaza ve iş yerleri için profesyonel duvar kağıdı satış, duvar kağıdı uygulama ve dekoratif duvar kaplama hizmetleri sunar.",

  keywords: [
    "duvar kağıdı",
    "duvar kağıdı satış",
    "duvar kağıdı uygulama",
    "istanbul duvar kağıdı",
    "istanbul duvar kağıdı uygulama",
    "istanbul duvar kağıdı satış",
    "profesyonel duvar kağıdı uygulama",
    "duvar kağıdı ustası",
    "duvar dekorasyon firması",
    "dekoratif duvar kaplama",
    "ev duvar kağıdı",
    "ofis duvar kağıdı",
    "mağaza duvar kağıdı",
    "iş yeri duvar kağıdı",
    "salon duvar kağıdı modelleri",
    "yatak odası duvar kağıdı",
    "3d duvar kağıdı",
    "modern duvar kağıdı",
    "lüks duvar kağıdı",
    "ithal duvar kağıdı",
    "silinebilir duvar kağıdı",
    "tv ünitesi arkası duvar kağıdı",
    "dekorasyoncum",
  ],

  authors: [{ name: "Dekorasyoncum" }],
  creator: "Dekorasyoncum",
  publisher: "Dekorasyoncum",

  alternates: {
    canonical: "https://dekorasyoncum.com.tr",
  },

  openGraph: {
    title:
      "Dekorasyoncum | İstanbul Duvar Kağıdı Satış ve Uygulama Hizmeti",
    description:
      "İstanbul’da profesyonel duvar kağıdı satış ve uygulama hizmetleri.",
    url: "https://dekorasyoncum.com.tr",
    siteName: "Dekorasyoncum",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/gorsel.jpg",
        width: 1200,
        height: 630,
        alt: "Dekorasyoncum",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Dekorasyoncum | İstanbul Duvar Kağıdı Satış ve Uygulama Hizmeti",
    description:
      "Profesyonel duvar kağıdı satış ve uygulama hizmetleri.",
    images: ["/gorsel.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/gorsel.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/gorsel.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    shortcut: "/gorsel.jpg",
    apple: "/gorsel.jpg",
  },

  category: "Duvar Kağıdı ve Dekorasyon Hizmetleri",
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