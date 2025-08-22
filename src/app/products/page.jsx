// src/app/products/page.jsx
"use client";

import Link from "next/link";

export default function ProductsPage() {
  const products = [
    { id: "1", name: "NextShop T-Shirt", description: "Comfortable cotton tee.", price: 19.99, details: "Made from 100% organic cotton. Available in multiple colors.", image: "https://i.ibb.co.com/8LZ00gFx/WW-Classic-Shirt-Zeitlose-Bereicherung-f-r.jpg" },
    { id: "2", name: "NextShop Hoodie", description: "Warm and cozy hoodie.", price: 39.99, details: "Soft fleece inside, stylish outside. Perfect for winter.", image: "https://i.ibb.co.com/XrX02LmT/5e4a2e5a-55e6-426f-af49-87dfe13757ff.jpg" },

    { id: "3", name: "NextShop Mug", description: "Ceramic coffee mug.", price: 9.99, details: "Dishwasher safe and durable. 350ml capacity.", image: "https://i.ibb.co.com/4ZFkngW0/Cake-mix-mug-cake-recipe-that-s-fast-easy-and.jpg" },
    { id: "4", name: "NextShop Cap", description: "Stylish cotton cap.", price: 14.99, details: "Adjustable strap, breathable fabric.", image: "https://i.ibb.co.com/LXZvC72f/Our-THERMAL-Infinite-Collection-is-embracing-the.jpg" },
    { id: "5", name: "NextShop Sneakers", description: "Comfortable daily sneakers.", price: 49.99, details: "Lightweight with excellent grip.", image: "https://i.ibb.co.com/0j2pZbJd/Step-into-urban-chic-with-our-High-Street-Combat.jpg" },
    { id: "6", name: "NextShop Backpack", description: "Durable travel backpack.", price: 59.99, details: "Multiple compartments, water-resistant.", image: "https://i.ibb.co.com/4nQg2Z0V/497a0fd1-6c7a-4bd9-a0d4-064ad53c3d3b.jpg" },
    { id: "7", name: "NextShop Watch", description: "Classic wristwatch.", price: 79.99, details: "Quartz movement, stainless steel.", image: "https://i.ibb.co.com/MDyVFryn/9052-Sports-Waterproof-Alarm-Clock-Electronic.jpg" },
    { id: "8", name: "NextShop Sunglasses", description: "UV-protected sunglasses.", price: 24.99, details: "Stylish and durable frame.", image: "https://i.ibb.co.com/1NhSrcp/d801ed54-9485-43cf-8396-ef8c2c55cbf4.jpg" },
    { id: "9", name: "NextShop Notebook", description: "Premium notebook for notes.", price: 7.99, details: "Hardcover, 200 pages.", image: "https://i.ibb.co.com/xKJwz1cK/How-to-order-Usually-you-will-find-some-images.jpg" },
    { id: "10", name: "NextShop Water Bottle", description: "Reusable water bottle.", price: 12.99, details: "BPA-free, 500ml capacity.", image: "https://i.ibb.co.com/0VtvZzjH/0f95da0e-3d1c-4553-9dfa-50a72d7aa95c.jpg" },
    { id: "11", name: "NextShop Jacket", description: "Windproof jacket.", price: 69.99, details: "Lightweight, perfect for outdoor activities.", image: "https://i.ibb.co.com/Rkkd5gHF/Product-information-Pattern-solid-color-Pocket.jpg" },
    { id: "12", name: "NextShop Earphones", description: "Wireless Bluetooth earphones.", price: 29.99, details: "Noise-cancelling, long battery life.", image: "https://i.ibb.co.com/qML8W2gz/Apple-airpods-airportstyle.jpg" },
  ];

  return (
    <section className="w-11/12 mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Product Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">${product.price}</span>
                <Link
                  href={`/products/${product.id}`}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
