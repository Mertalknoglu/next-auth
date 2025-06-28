// src/app/logout/page.tsx
import { redirect } from "next/navigation";

export default function LogoutPage() {
  // Çıkış endpoint’ine istekte bulunur, sonra ana sayfaya yönlendirir
  redirect("/api/auth/signout?callbackUrl=/");
}
