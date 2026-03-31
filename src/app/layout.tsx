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
  title: "Lyrax - Escreva, publique e compartilhe suas ideias",
  description: "Uma comunidade para escritores e leitores que apreciam a arte da palavra escrita. Publique, compartilhe e conecte-se com outros apaixonados por literatura.",
  keywords: "escrita, publicação, comunidade, literatura, escritores, leitores, criatividade, expressão, arte da palavra escrita",
  authors: [
    { name: "Mike D. Pascal | Mikeprogrammer973", url: "https://github.com/Mikeprogrammer973" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
