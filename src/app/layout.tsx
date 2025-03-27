import type { Metadata } from "next";
import {
  Montserrat,
  Poppins
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const grandslangRoman = localFont({
  src: "./grandslang-roman.woff2",
  variable: "--font-grandslang-roman",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Phuong Dang | Portfolio",
  description: "My portfolio 👋",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${montserrat.variable} ${grandslangRoman.variable} ${poppins.variable}`}
      style={{
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <head suppressHydrationWarning></head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
