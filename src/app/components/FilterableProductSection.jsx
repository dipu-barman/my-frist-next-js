"use client";

import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Star } from "lucide-react";

export default function FilterableProductSection() {
  const categories = ["All", "Watch", "Earphones", "Headphones", "Mouse", "Desktop", "Laptop"];
  const sortOptions = ["Default", "Price: Low → High", "Price: High → Low", "Rating: High → Low"];

  const products = [
    { id: "1", name: "Next15 Pro Laptop", price: 1799.99, rating: 4.8, image: "https://via.placeholder.com/400x300", description: "Powerful and lightweight laptop.", category: "Laptop" },
    { id: "2", name: "Next15 Headphones", price: 199.99, rating: 4.5, image: "https://via.placeholder.com/400x300", description: "High-fidelity sound.", category: "Headphones" },
    { id: "3", name: "Next15 Smartwatch", price: 299.99, rating: 4.6, image: "https://via.placeholder.com/400x300", description: "Stylish smartwatch.", category: "Watch" },
    { id: "4", name: "Next15 Wireless Mouse", price: 49.99, rating: 4.4, image: "https://via.placeholder.com/400x300", description: "Ergonomic mouse.", category: "Mouse" },
    { id: "5", name: "Next15 Desktop PC", price: 1299.99, rating: 4.7, image: "https://via.placeholder.com/400x300", description: "High performance desktop.", category: "Desktop" },
    { id: "6", name: "Next15 Gaming Headphones", price: 249.99, rating: 4.6, image: "https://via.placeholder.com/400x300", description: "Immersive gaming sound.", category: "Headphones" },
    { id: "7", name: "Next15 Mechanical Keyboard", price: 129.99, rating: 4.9, image: "https://via.placeholder.com/400x300", description: "Responsive mechanical keyboard.", category: "Desktop" },
    { id: "8", name: "Next15 Fitness Tracker", price: 89.99, rating: 4.3, image: "https://via.placeholder.com/400x300", description: "Track workouts and health.", category: "Watch" },
    { id: "9", name: "Next15 Bluetooth Speaker", price: 149.99, rating: 4.5, image: "https://via.placeholder.com/400x300", description: "Portable speaker with great sound.", category: "Earphones" },
    { id: "10", name: "Next15 4K Monitor", price: 499.99, rating: 4.7, image: "https://via.placeholder.com/400x300", description: "Ultra HD display.", category: "Desktop" },
    { id: "11", name: "Next15 Pro Laptop 2", price: 1899.99, rating: 4.8, image: "https://via.placeholder.com/400x300", description: "Next-gen laptop.", category: "Laptop" },
    { id: "12", name: "Next15 True Wireless Earbuds", price: 99.99, rating: 4.4, image: "https://via.placeholder.com/400x300", description: "Noise-cancelling earbuds.", category: "Earphones" },
    { id: "13", name: "Next15 Smartwatch X", price: 349.99, rating: 4.7, image: "https://via.placeholder.com/400x300", description: "Feature-packed smartwatch.", category: "Watch" },
    { id: "14", name: "Next15 Gaming Mouse", price: 69.99, rating: 4.6, image: "https://via.placeholder.com/400x300", description: "High precision mouse.", category: "Mouse" },
    { id: "15", name: "Next15 Studio Headphones", price: 299.99, rating: 4.8, image: "https://via.placeholder.com/400x300", description: "Professional sound quality.", category: "Headphones" },
    { id: "16", name: "Next15 Laptop Sleeve", price: 39.99, rating: 4.2, image: "https://via.placeholder.com/400x300", description: "Protect your laptop in style.", category: "Laptop" },
    { id: "17", name: "Next15 Wireless Charger", price: 59.99, rating: 4.3, image: "https://via.placeholder.com/400x300", description: "Fast wireless charging pad.", category: "Desktop" },
    { id: "18", name: "Next15 Smart Glasses", price: 399.99, rating: 4.5, image: "https://via.placeholder.com/400x300", description: "Wearable smart glasses.", category: "Watch" },
    { id: "19", name: "Next15 Desktop Speaker", price: 89.99, rating: 4.4, image: "https://via.placeholder.com/400x300", description: "High quality desktop speaker.", category: "Desktop" },
    { id: "20", name: "Next15 Laptop Stand", price: 49.99, rating: 4.3, image: "https://via.placeholder.com/400x300", description: "Ergonomic laptop stand.", category: "Laptop" },
     { id: "21", name: "Next15 Noise-Cancelling Headphones", price: 329.99, rating: 4.8, image: "https://via.placeholder.com/400x300", description: "Immersive audio experience.", category: "Headphones" },
    { id: "22", name: "Next15 Ultra HD Webcam", price: 149.99, rating: 4.6, image: "https://via.placeholder.com/400x300", description: "Crystal-clear video calls.", category: "Desktop" },
    { id: "23", name: "Next15 Wireless Earbuds Pro", price: 129.99, rating: 4.7, image: "https://via.placeholder.com/400x300", description: "High-quality wireless audio.", category: "Earphones" },
    { id: "24", name: "Next15 Gaming Keyboard RGB", price: 159.99, rating: 4.9, image: "https://via.placeholder.com/400x300", description: "RGB mechanical keyboard.", category: "Keyboard" },
    { id: "25", name: "Next15 Desktop Tower", price: 1499.99, rating: 4.7, image: "https://via.placeholder.com/400x300", description: "High-performance gaming desktop.", category: "Desktop" },
    { id: "26", name: "Next15 Smart Watch Series 5", price: 399.99, rating: 4.8, image: "https://via.placeholder.com/400x300", description: "Advanced smartwatch features.", category: "Watch" },
    { id: "27", name: "Next15 Bluetooth Speaker Mini", price: 79.99, rating: 4.5, image: "https://via.placeholder.com/400x300", description: "Compact portable speaker.", category: "Speaker" },
    { id: "28", name: "Next15 Laptop Pro Max", price: 2099.99, rating: 4.9, image: "https://via.placeholder.com/400x300", description: "Ultimate developer laptop.", category: "Laptop" },
    { id: "29", name: "Next15 Wireless Charger Duo", price: 89.99, rating: 4.6, image: "https://via.placeholder.com/400x300", description: "Charge multiple devices.", category: "Charger" },
    { id: "30", name: "Next15 Smart Glasses Pro", price: 499.99, rating: 4.8, image: "https://via.placeholder.com/400x300", description: "Augmented reality glasses.", category: "Glasses" },
    { id: "31", name: "Next15 Gaming Mouse Pro", price: 89.99, rating: 4.7, image: "https://via.placeholder.com/400x300", description: "High precision gaming mouse.", category: "Mouse" },
    { id: "32", name: "Next15 Headphones Studio Edition", price: 349.99, rating: 4.9, image: "https://via.placeholder.com/400x300", description: "Studio-grade sound.", category: "Headphones" },
    { id: "33", name: "Next15 Laptop Stand Pro", price: 59.99, rating: 4.4, image: "https://via.placeholder.com/400x300", description: "Ergonomic laptop stand.", category: "Laptop" },
    { id: "34", name: "Next15 Smartwatch Fit", price: 249.99, rating: 4.5, image: "https://via.placeholder.com/400x300", description: "Fitness-focused smartwatch.", category: "Watch" },
    { id: "35", name: "Next15 Desktop Mini", price: 999.99, rating: 4.6, image: "https://via.placeholder.com/400x300", description: "Compact yet powerful desktop.", category: "Desktop" },
    { id: "36", name: " Wireless Keyboard", price: 89.99, rating: 4.4, image: "https://via.placeholder.com/400x300", description: "Wireless convenience.", category: "Keyboard" },
    { id: "37", name: " Earphones Pro X", price: 159.99, rating: 4.7, image: "https://via.placeholder.com/400x300", description: "Premium sound quality.", category: "Earphones" },
    { id: "38", name: " Laptop Pro Air", price: 1999.99, rating: 4.8, image: "https://via.placeholder.com/400x300", description: "Ultra-lightweight laptop.",category: "Laptop" }








  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Default");

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === "All" ? products : products.filter(p => p.category === selectedCategory);
    if (searchTerm) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (sortOption === "Price: Low → High") filtered = filtered.sort((a,b) => a.price - b.price);
    else if (sortOption === "Price: High → Low") filtered = filtered.sort((a,b) => b.price - a.price);
    else if (sortOption === "Rating: High → Low") filtered = filtered.sort((a,b) => b.rating - a.rating);
    return filtered;
  }, [selectedCategory, searchTerm, sortOption]);

  return (
    <section className="w-11/12 mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Explore Products</h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          {sortOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>

      {/* Product Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {filteredProducts.map(product => (
          <SwiperSlide key={product.id}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition p-4 flex flex-col h-full group">
              <div className="h-56 overflow-hidden rounded-lg mb-4 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 overflow-hidden line-clamp-2">{product.description}</p>
              <div className="flex items-center mb-4">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-700 dark:text-gray-200">{product.rating}</span>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-blue-600 font-bold text-lg">${product.price}</span>
                <Link href={`/products/${product.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
