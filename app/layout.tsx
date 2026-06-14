import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "ENDURIX — эндуро тренировки в Московской области",
  description:
    "ENDURIX — тренировки по эндуро и hard enduro в Осеченках. Индивидуальные и групповые занятия для детей и взрослых на своём мотоцикле.",
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
  openGraph: {
    title: "ENDURIX — эндуро тренировки в Московской области",
    description:
      "Hard enduro coaching в Осеченках для детей и взрослых на своём мотоцикле.",
    type: "website",
    locale: "ru_RU"
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
