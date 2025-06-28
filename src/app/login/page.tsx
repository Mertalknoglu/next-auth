// src/app/login/page.tsx
"use client";

import { useState } from "react";
import { signIn }    from "next-auth/react";

export default function LoginPage() {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState<string | null>(null);

  async function handleCredentialsSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Email veya şifre hatalı.");
    } else {
      window.location.href = "/";
    }
  }

  function handleAuth0SignIn() {
    signIn("auth0", { callbackUrl: "/" });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6">
        {/* Başlık */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Sign In
        </h2>

        {/* Auth0 Login */}
        <button
          onClick={handleAuth0SignIn}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition"
        >
          <span>Sign in with Auth0</span>
        </button>

        {/* Separator */}
        <div className="flex items-center">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleCredentialsSignIn} className="space-y-4">
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition"
          >
            Sign in 
          </button>
        </form>
      </div>
    </div>
  );
}
