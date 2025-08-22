"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      
      <div className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
        {/* Animated heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"
        >
          Manage & Explore <span className="font-black">Products Effortlessly</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Add, update, and track your products seamlessly. Public pages, protected dashboards, and full product management in a modern, responsive interface.
        </motion.p>

        {/* Product features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl text-blue-500  font-semibold mb-2">Add Products</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create new products with descriptions, price, and images in just a few clicks.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Secure Dashboard</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access protected pages and manage your products safely with authentication.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">Explore & Track</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Browse all products and keep track of your inventory efficiently.
            </p>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/products"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Explore Products
          </Link>
          <Link
            href="/dashboard/add-product"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Add Product
          </Link>
        </motion.div>
      </div>

      {/* Decorative gradient blur blob */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-yellow-400/30 blur-3xl"></div>
    </section>
  );
}
