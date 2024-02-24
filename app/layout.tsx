import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monito",
  description: "Pets for best",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-slate-50 h-full w-full`}
      >
        <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-slate-50">
          <Header />
          <div className="w-full pb-6">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
