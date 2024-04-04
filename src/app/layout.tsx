import type { Metadata } from "next";
import "@digdir/designsystemet-theme";
import "@digdir/designsystemet-css";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
