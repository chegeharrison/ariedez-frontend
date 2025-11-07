"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function BlogPage() {
  const categories = ["Tech for Good", "Youth Stories", "Entrepreneurship Insights"];

  const articles = [
    {
      id: 1,
      title: "AI in Small Businesses: Transforming Local Economies",
      category: "Tech for Good",
      image: "/images/blog1.jpg", // placeholder image
      excerpt:
        "Discover how small enterprises in Africa are using artificial intelligence to improve productivity, customer engagement, and profitability.",
    },
    {
      id: 2,
      title: "Women Breaking Tech Barriers Across Africa",
      category: "Youth Stories",
      image: "/images/blog2.jpg",
      excerpt:
        "Inspiring stories of women leading innovation and building inclusive tech ecosystems in rural and urban communities.",
    },
    {
      id: 3,
      title: "Ariedez Impact Stories: From Learners to Leaders",
      category: "Entrepreneurship Insights",
      image: "/images/blog3.jpg",
      excerpt:
        "Real stories from our trainees and SMEs who turned their digital skills into thriving ventures through Ariedez programs.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ====== Header Section ====== */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Ariedez Blog & News</h1>
        <p className="max-w-2xl mx-auto text-gray-200">
          Insights, innovations, and inspiring stories shaping Africa’s digital future.
        </p>
      </section>

      {/* ====== Categories Section ====== */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="px-5 py-2 bg-blue-100 text-blue-900 rounded-full font-medium hover:bg-blue-900 hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ====== Featured Articles Section ====== */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-yellow-500 font-semibold uppercase">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-900 font-semibold flex items-center gap-2 hover:text-yellow-500"
                >
                  Read More <FaArrowRight className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
