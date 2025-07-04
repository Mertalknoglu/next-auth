
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async (req) => {
    const token = req.nextauth.token;
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }
);

export const config = {
  matcher: ["/protected/:path*"],
};
