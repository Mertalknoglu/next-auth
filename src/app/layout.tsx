// src/app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";
import AuthButton from "@/components/AuthButton";
import Link from "next/link";

export const metadata = {
  title: "Case App",
  description: "Gelişmiş Next.js + Auth0 ile Kimlik Doğrulama",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white antialiased">
        <Providers>
          <header className="flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              Case App
            </Link>
            <AuthButton />
          </header>
          <main className="mx-auto max-w-4xl px-6 py-12">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
