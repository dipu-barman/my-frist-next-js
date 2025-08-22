// src/auth.js
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password } = credentials;
        if (email === "demo@demo.com" && password === "demo123") {
          return { id: "1", name: "Demo User", email: "demo@demo.com" };
        }
        return null;
      },
    }),
  ],
  // pages: { signIn: "/login" },
  // session: { strategy: "jwt" },
  // secret: process.env.NEXTAUTH_SECRET || "demo_secret",
};
