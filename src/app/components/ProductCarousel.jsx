"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";
import { Star } from "lucide-react";

export default function ProductCarousel() {
  const products = [
    {
      id: "1",
      name: "Next15 Pro Laptop",
      price: 1799.99,
      rating: 4.8,
      image: "https://via.placeholder.com/400x300",
      description: "Powerful and lightweight laptop for developers.",
      badge: "Bestseller",
    },
    {
      id: "2",
      name: "Next15 Headphones",
      price: 199.99,
      rating: 4.5,
      image: "https://via.placeholder.com/400x300",
      description: "High-fidelity sound with active noise cancellation.",
      badge: "New",
    },
    {
      id: "3",
      name: "Next15 Smartwatch",
      price: 299.99,
      rating: 4.6,
      image: "https://via.placeholder.com/400x300",
      description: "Stylish, feature-packed smartwatch for daily life.",
      badge: "Trending",
    },
    {
      id: "4",
      name: "Next15 Camera",
      price: 999.99,
      rating: 4.7,
      image: "https://via.placeholder.com/400x300",
      description: "Capture stunning photos with this compact camera.",
      badge: "Top Rated",
    },
    {
      id: "5",
      name: "Next15 Wireless Mouse",
      price: 49.99,
      rating: 4.4,
      image: "https://via.placeholder.com/400x300",
      description: "Ergonomic wireless mouse with long battery life.",
      badge: "Popular",
    },
    {
      id: "6",
      name: "Next15 Mechanical Keyboard",
      price: 129.99,
      rating: 4.9,
      image: "https://via.placeholder.com/400x300",
      description: "Durable keyboard with responsive mechanical switches.",
      badge: "Bestseller",
    },
    {
      id: "7",
      name: "Next15 Gaming Chair",
      price: 399.99,
      rating: 4.6,
      image: "https://via.placeholder.com/400x300",
      description: "Comfortable chair designed for long gaming sessions.",
      badge: "Trending",
    },
    {
      id: "8",
      name: "Next15 4K Monitor",
      price: 499.99,
      rating: 4.7,
      image: "https://via.placeholder.com/400x300",
      description: "Ultra HD display with vibrant colors and sharp details.",
      badge: "Top Rated",
    },
    {
      id: "9",
      name: "Next15 Bluetooth Speaker",
      price: 149.99,
      rating: 4.5,
      image: "https://via.placeholder.com/400x300",
      description: "Portable speaker with excellent sound quality.",
      badge: "New",
    },
    {
      id: "10",
      name: "Next15 Fitness Tracker",
      price: 89.99,
      rating: 4.3,
      image: "https://via.placeholder.com/400x300",
      description: "Track your workouts and monitor your health easily.",
      badge: "Popular",
    },
    {
      id: "11",
      name: "Next15 Drone",
      price: 799.99,
      rating: 4.8,
      image: "https://via.placeholder.com/400x300",
      description: "High-performance drone with 4K camera and GPS.",
      badge: "Bestseller",
    },
    {
      id: "12",
      name: "Next15 External SSD",
      price: 229.99,
      rating: 4.7,
      image: "https://via.placeholder.com/400x300",
      description: "Fast and reliable storage solution for all devices.",
      badge: "Top Rated",
    },
  ];

  return (
    <section className="w-11/12 mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Featured Products
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // default for mobile
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },   // mobile
          768: { slidesPerView: 2 },   // tablet
          1024: { slidesPerView: 4 },  // desktop shows 4 slides at a time
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition p-4 flex flex-col h-full group">
              {/* Product Image */}
              <div className="h-56 overflow-hidden rounded-lg mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 overflow-hidden line-clamp-2">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-700 dark:text-gray-200">{product.rating}</span>
              </div>

              {/* Price + View Button */}
              <div className="mt-auto flex items-center justify-between">
                <span className="text-blue-600 font-bold text-lg">${product.price}</span>
                <Link
                  href={`/products/${product.id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
