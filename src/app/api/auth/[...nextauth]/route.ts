
import NextAuth from "next-auth/next";
import { authOptions } from "@/app/api/auth/providers";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
