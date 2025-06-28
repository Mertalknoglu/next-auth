// src/services/auth/NextAuthService.ts
import { getServerSession } from "next-auth/next";
// Aşağıdaki yolu providers.ts’e göre ayarlayın:
import { authOptions }     from "@/app/api/auth/providers";
import type { NextApiRequest, NextApiResponse } from "next";
import type { IAuthService }                   from "./IAuthService";
import type { Session }                        from "next-auth";

export class NextAuthService implements IAuthService {
  async getSession(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<Session | null> {
    return getServerSession(req, res, authOptions);
  }
}
