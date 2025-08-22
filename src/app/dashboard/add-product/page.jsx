"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProduct() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    details: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(product)

    const res = await fetch("/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Product added successfully!");
      setProduct({ name: "", description: "", price: "", details: "", image: "" });
    } else {
      toast.error(data.error || "Failed to add product");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Product</h1>

      <form
        onSubmit={handleSubmit}
        className="  shadow-2xl rounded-xl p-8 flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <textarea
          name="details"
          value={product.details}
          onChange={handleChange}
          placeholder="Details"
          className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />

        <button type="submit" disabled={loading} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
      <ToastContainer position="top-right" />
    </section>
  );
}
