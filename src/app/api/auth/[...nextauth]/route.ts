// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth/next";
import type { AuthOptions, User } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    Auth0Provider({
      issuer:       process.env.AUTH0_ISSUER_BASE_URL!,
      clientId:     process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      authorization: {
        params: { scope: "openid profile email", prompt: "login" },
      },
    }),

    CredentialsProvider({
      name: "Email/Şifre",
      credentials: {
        email:    { label: "Email",    type: "email" },
        password: { label: "Şifre",    type: "password" },
      },
      async authorize(creds): Promise<User | null> {
        if (!creds?.email || !creds.password) return null;

        const res = await fetch(
          `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              grant_type:    "http://auth0.com/oauth/grant-type/password-realm",
              client_id:     process.env.AUTH0_CLIENT_ID,
              client_secret: process.env.AUTH0_CLIENT_SECRET,
              username:      creds.email,
              password:      creds.password,
              realm:         "Username-Password-Authentication",
              scope:         "openid profile email",
            }),
          }
        );
        const data = await res.json();
        if (!res.ok || data.error) return null;

        // JWT içindeki altyükü ayrıştır (sub=email, name vb.)
        const payload = JSON.parse(
          Buffer.from(data.id_token.split(".")[1], "base64").toString("utf-8")
        );

        return {
          id:    payload.sub,
          email: payload.email,
          name:  payload.name || "",
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge:   24 * 60 * 60,
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
