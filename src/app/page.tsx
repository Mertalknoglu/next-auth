
import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="flex flex-col items-center text-center space-y-8">
      <h1 className="text-5xl font-extrabold leading-tight">
        Yeni Nesil <span className="text-primary">Kimlik Doğrulama</span>
      </h1>
      <p className="max-w-xl text-gray-300">
        Next.js ve Auth0 ile tamamen entegre, güvenli ve ölçeklenebilir bir kullanıcı
        yönetimi deneyimi. Ücretsiz başlayın, kurumsal düzeye yükseltin.
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition"
        >
          Başlamak İçin Giriş Yap
        </Link>
      </div>
    </section>
  );
}
