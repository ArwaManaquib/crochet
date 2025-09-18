"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreations = async () => {
      try {
        const response = await fetch("/data/creations.json");
        const data = await response.json();
        setCreations(Object.values(data.creations));
      } catch (error) {
        console.error("Failed to fetch creations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCreations();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-primary-400 text-lg">Loading gallery...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-primary-400 text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            Gallery of Creations
          </h1>
          <p className="text-primary-300 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Explore our collection of beautiful crochet projects, from
            beginner-friendly patterns to advanced masterpieces.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {creations.map((creation, index) => (
            <motion.div
              key={creation.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={creation.mainImage}
                  alt={creation.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-primary-400 text-xl font-semibold mb-2">
                  {creation.title}
                </h3>
                <p className="text-primary-300 text-sm mb-4 line-clamp-2">
                  {creation.description}
                </p>

                {/* Difficulty and Time */}
                <div className="flex gap-2 mb-4">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-xs font-medium">
                    {creation.difficulty}
                  </span>
                  <span className="bg-sage-100 text-primary-600 px-3 py-1 rounded-full text-xs font-medium">
                    {creation.estimatedTime}
                  </span>
                </div>

                {/* Conditional Button */}
                {creation.tutorialVideo ? (
                  <Link
                    href={`/tutorial/${creation.id}`}
                    className="w-full bg-gradient-to-r from-primary-300 to-lavender-300 text-white px-4 py-2 rounded-lg font-medium hover:from-primary-400 hover:to-lavender-400 transition-all duration-300 text-center block"
                  >
                    Let&apos;s Make
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-200 text-gray-500 px-4 py-2 rounded-lg font-medium cursor-not-allowed text-center"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
