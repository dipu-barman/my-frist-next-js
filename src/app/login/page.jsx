"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Spinner from "../components/Spinner";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle credentials form submit
  async function handleCredentials(e) {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      // redirect: false,
      email,
      password,
    });
    setLoading(false);

    if (res?.ok) {
      router.push("/products");
    } else {
      alert("Invalid credentials (try demo@demo.com / demo123)");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100">
          Login
        </h2>

        {/* Google login button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-700 text-black  transition"
        >
          <img
            src="/google-logo.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="text-center ">or</div>

        {/* Credentials login form */}
        <form onSubmit={handleCredentials} className="space-y-4">
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg  "
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            {loading && <Spinner />}
            Login with Credentials
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          Demo login: <span className="font-medium">demo@demo.com / demo123</span>
        </p>
      </div>
    </div>
  );
}
