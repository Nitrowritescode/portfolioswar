import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swar Sehgal Portfolio",
  description:
    "Portfolio of a developer named Swar Sehgal showcaing his projects and about him",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
      </body>
    </html>
  );
}
