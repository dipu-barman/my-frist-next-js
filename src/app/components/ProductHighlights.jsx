// src/components/ProductHighlights.jsx
import { ShoppingBag, Shield, Zap, BarChart2 } from "lucide-react";

const highlights = [
  {
    icon: <ShoppingBag className="w-10 h-10 text-blue-500" />,
    title: "Easy Product Management",
    description:
      "Quickly add, edit, and manage your products in one place with a simple dashboard.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Protected Routes",
    description:
      "Keep your product management safe. Only logged-in users can add or edit products.",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    title: "Blazing Fast",
    description:
      "Built with Next.js 15 App Router for top-notch performance and seamless navigation.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-purple-500" />,
    title: "Analytics & Insights",
    description:
      "Track product performance and get actionable insights to make informed business decisions.",
  },
];

export default function ProductHighlights() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Our Starter Kit?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition hover:scale-105 duration-300"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl text-black font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}
