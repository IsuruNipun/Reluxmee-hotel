import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reluxmee Hotel | Modern Comfort in Anuradhapura",
  description: "Newly renovated hotel in Anuradhapura offering modern comfort and rooftop city views. Book your stay at Reluxmee Hotel.",
};

import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased text-gray-800 bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
