
import type { AuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";
import { ENV } from "@/config/constants";
import { authorizeWithRealm } from "./credentials";

export const authOptions: AuthOptions = {
  providers: [
    Auth0Provider({
      issuer:       ENV.AUTH0_DOMAIN,
      clientId:     ENV.AUTH0_CLIENT_ID,
      clientSecret: ENV.AUTH0_CLIENT_SECRET,
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
      authorize: authorizeWithRealm,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge:   24 * 60 * 60,
  },
  secret: ENV.NEXTAUTH_SECRET,
};
