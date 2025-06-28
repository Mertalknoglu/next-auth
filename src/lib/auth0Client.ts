// src/lib/auth0Client.ts
import { ManagementClient } from "auth0";

export const auth0Client = new ManagementClient({
  domain:       process.env.AUTH0_ISSUER_BASE_URL!.replace(/^https?:\/\//, ""),
  clientId:     process.env.AUTH0_CLIENT_ID!,
  clientSecret: process.env.AUTH0_CLIENT_SECRET!,
});
