import "./globals.css";
import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yusra Syeda",
  description: "Software Engineer focused on sustainability",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
