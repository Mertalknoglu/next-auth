// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth(
  // (opsiyonel) burada custom logic koyabilirsiniz, ama biz sadece session varsa izin veriyoruz
  null,
  {
    callbacks: {
      // token varsa (yani oturum açıksa) izin ver, yoksa signin sayfasına yönlendir
      authorized: ({ token }) => !!token,
    },
    // hangi yollar korunsun
    matcher: ["/protected/:path*"],
  }
);
