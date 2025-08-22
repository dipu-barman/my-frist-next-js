"use client"; // <-- important for client-side features

import Link from "next/link";

export default function ProductDetails({ params }) {
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


  // Find product by id
  const product = products.find(p => p.id === params.id);

  if (!product)
    return (
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-xl text-red-500">Product not found</p>
        <Link
          href="/products"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Products
        </Link>
      </section>
    );

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/products"
        className="mb-6 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to Products
      </Link>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 "
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-black">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">${product.price}</p>
          <p className="text-gray-700 dark:text-gray-200">{product.details}</p>
        </div>
      </div>
    </section>
  );
}
