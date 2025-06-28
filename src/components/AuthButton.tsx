// src/components/AuthButton.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button disabled className="px-4 py-2 bg-gray-500 text-white rounded">
        Loading…
      </button>
    );
  }

  if (session) {
    return (
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Sign Out
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn(undefined, { callbackUrl: "/" })}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Sign In
    </button>
  );
}
