import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arapco Next",
  description: "Oil and Gas Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={inter.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
