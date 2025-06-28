// src/hooks/useAuth.ts
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession();
  return {
    user:    session?.user,
    loading: status === "loading",
    signIn:  () => signIn("auth0"),
    signOut: () => signOut({ callbackUrl: "/" }),
  };
}
