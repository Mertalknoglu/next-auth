// src/services/AuthService.ts
import { getServerSession } from "next-auth/next";
import { authOptions }       from "@/app/api/auth/[...nextauth]/route";
import type { NextApiRequest, NextApiResponse } from "next";

export class AuthService {
  /** 
   * API Route içinde kullanmak için:
   *   const session = await AuthService.getSession(req, res);
   */
  static async getSession(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    return getServerSession(req, res, authOptions);
  }
}
