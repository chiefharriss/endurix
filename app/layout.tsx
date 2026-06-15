import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.endurix.pro"),
  title: "ENDURIX - эндуро тренировки в Московской области",
  description:
    "Тренировки для начинающих и опытных райдеров на своем мотоцикле.",
  keywords: [
    "эндуро тренировки",
    "hard enduro",
    "эндуро школа",
    "мототренировки",
    "Осеченки",
    "Московская область",
    "эндуро для детей",
    "эндуро для взрослых"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "ENDURIX - эндуро тренировки в Московской области",
    description: "Тренировки для начинающих и опытных райдеров на своем мотоцикле.",
    url: "https://www.endurix.pro/",
    siteName: "ENDURIX",
    type: "website",
    locale: "ru_RU"
  },
  twitter: {
    card: "summary_large_image",
    title: "ENDURIX - эндуро тренировки в Московской области",
    description: "Тренировки для начинающих и опытных райдеров на своем мотоцикле."
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/apple-icon.png"
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
