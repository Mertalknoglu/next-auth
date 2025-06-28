
"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <button
        disabled
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Loading…
      </button>
    );
  }

  if (session) {
    return (
      <button
        onClick={() => {
          if (confirm("Oturumu kapatmak istediğinize emin misiniz?")) {
            signOut({ callbackUrl: "/" });
          }
        }}
        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition"
      >
        Sign Out
      </button>
    );
  }

  return (
    <button
      onClick={() => router.push("/login")}
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition"
    >
      Sign In
    </button>
  );
}
