// src/app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Case App",
  description: "Modern Next.js + Auth0 Authentication",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-gray-900 antialiased">
        <Providers>
          <main className="mx-auto max-w-4xl px-6 py-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
