import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Alex_Brush } from "next/font/google";
import "./globals.css";
import { weddingConfig } from "@/config/wedding.config";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F8F4EC",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://undangan-pernikahan-luxury.vercel.app"),
  title: `${weddingConfig.couple.groom.shortName} & ${weddingConfig.couple.bride.shortName} - Undangan Pernikahan`,
  description: `The Wedding Celebration of ${weddingConfig.couple.groom.fullName} & ${weddingConfig.couple.bride.fullName}. ${weddingConfig.date.dayName}, ${weddingConfig.date.fullDate}.`,
  keywords: ["undangan pernikahan", "digital wedding invitation", "luxury wedding", "wedding invitation online"],
  authors: [{ name: `${weddingConfig.couple.groom.shortName} & ${weddingConfig.couple.bride.shortName}` }],
  openGraph: {
    title: `The Wedding of ${weddingConfig.couple.groom.shortName} & ${weddingConfig.couple.bride.shortName}`,
    description: `Kami mengundang Anda untuk merayakan hari bahagia pernikahan kami pada ${weddingConfig.date.dayName}, ${weddingConfig.date.fullDate}.`,
    url: "https://undangan-pernikahan-luxury.vercel.app",
    siteName: "The Wedding Invitation",
    images: [
      {
        url: weddingConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${weddingConfig.couple.groom.shortName} & ${weddingConfig.couple.bride.shortName} Wedding`,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `The Wedding of ${weddingConfig.couple.groom.shortName} & ${weddingConfig.couple.bride.shortName}`,
    description: `The Wedding Celebration of ${weddingConfig.couple.groom.fullName} & ${weddingConfig.couple.bride.fullName}`,
    images: [weddingConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} ${alexBrush.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#1C1A18] text-[#45483B] selection:bg-[#D8C4A4]/40 selection:text-[#2D2824]">
        {children}
      </body>
    </html>
  );
}
