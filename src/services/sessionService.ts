import { getServerSession } from "next-auth/next";
import { authOptions }      from "@/app/api/auth/providers";
import type { NextApiRequest, NextApiResponse } from "next";

export async function getSession(req: NextApiRequest, res: NextApiResponse) {
  return getServerSession(req, res, authOptions);
}
