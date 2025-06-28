// src/app/protected/test/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions }       from "@/app/api/auth/[...nextauth]/route";
import { redirect }          from "next/navigation";

export default async function ProtectedTestPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <h1 className="text-3xl font-semibold">
        🎉 Bu içerik korumalı! Eğer bunu görüyorsan giriş yapmışsın.
      </h1>
    </main>
  );
}
