import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/Layout/Header";
import { FloatButton } from "antd";
import ToTopBtn from "@/Layout/ToTopBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobs",
  description: "Jobs aggregator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">{children}</main>
        {/* Не работает */}
        <ToTopBtn />
      </body>
    </html>
  );
}
