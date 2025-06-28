// src/services/auth/IAuthService.ts
import type { NextApiRequest, NextApiResponse } from "next";
import type { Session } from "next-auth";

export interface IAuthService {
  getSession(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<Session | null>;
}
