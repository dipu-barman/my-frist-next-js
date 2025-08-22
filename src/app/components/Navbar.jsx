"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Add Product", href: "/dashboard/add-product" },
  ];

  return (
    <nav className="w-full shadow-md  transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-0 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="text-2xl font-bold ">
          <Link href="/">NextShop</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center  font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Theme + Auth */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="px-3 py-1 rounded-lg border  transition-colors text-sm"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          )}

          {session ? (
            <>
              <span className="text-sm text-gray-700 dark:text-gray-300 hidden sm:inline">
                {session.user?.email}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google", { callbackUrl: "/products" })}
              className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
