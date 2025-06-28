
import type { User } from "next-auth";

export async function authorizeWithRealm(
  credentials?: Record<"email" | "password", string>
): Promise<User | null> {
  if (!credentials?.email || !credentials.password) {
    return null;
  }

  const res = await fetch(
    `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type:    "http://auth0.com/oauth/grant-type/password-realm",
        client_id:     process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        username:      credentials.email,
        password:      credentials.password,
        realm:         "Username-Password-Authentication",
        scope:         "openid profile email",
      }),
    }
  );
  const data = await res.json();
  if (!res.ok || data.error) {
    return null;
  }

  const [, payloadB64] = data.id_token.split(".");
  const payload = JSON.parse(
    Buffer.from(payloadB64, "base64").toString("utf-8")
  );

  return {
    id:    payload.sub,
    email: payload.email,
    name:  payload.name || "",
  };
}
