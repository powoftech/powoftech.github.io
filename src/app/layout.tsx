import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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
      className={`${montserrat.variable} ${grandslangRoman.variable}`}
      style={{
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {children}
    </html>
  );
}
