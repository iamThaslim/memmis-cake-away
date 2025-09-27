import type { Metadata } from "next";
import { Caprasimo, Outfit } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
// Design system fonts (Figma spec): Display (Caprasimo) + Outfit (weights 400/500/700)
const displayFont = Caprasimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Memmis Cake",
    template: "%s | Memmis Cake",
  },
  description: "Hand-crafted custom cakes by Sharmeena Ranees – small batch, fresh, and personalised.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${outfit.variable} antialiased min-h-screen flex flex-col font-sans bg-white text-zinc-900`}>
        <Banner />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
