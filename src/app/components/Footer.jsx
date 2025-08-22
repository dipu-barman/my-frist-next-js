"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Next15 Shop</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Your one-stop shop for quality products built with Next.js 15. Seamless experience, protected routes, and blazing-fast performance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-md font-semibold text-black">Quick Links</h4>
          <ul className="space-y-2 text-black">
            {[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: "Add Product", href: "/dashboard/add-product" },
              { name: "Login", href: "/login" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Next15 Shop. All rights reserved.
      </div>
    </footer>
  );
}
