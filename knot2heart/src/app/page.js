"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

import { GRADIENTS } from "@/lib/colors";

export default function Home() {
  const [featuredCreations, setFeaturedCreations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreations = async () => {
      try {
        const response = await fetch("/data/creations.json");
        const data = await response.json();
        // Get first 3 creations for featured section
        const creationsArray = Object.values(data.creations);
        setFeaturedCreations(
          creationsArray
            .filter((creation) => creation.tutorialVideo)
            .slice(0, 3)
        );
      } catch (error) {
        console.error("Failed to fetch creations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCreations();
  }, []);
  const featuredCategories = [
    {
      title: "Gallery & Tutorials",
      image: "/duck.jpg",
      href: "/gallery",
    },
    {
      title: "Blogs & Stories",
      image: "/chain_stitch.jpg",
      href: "/blog",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/flower.jpg"
            alt="Crochet background"
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 ${GRADIENTS.sections.hero}`} />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-balance">
              Crafting Stories, One Stitch at a Time
            </h1>
            <p className="text-white text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto text-balance">
              Welcome to Knot2Heart, where every loop tells a tale of creativity
              and passion. Dive into our cozy corner of crochet, filled with
              inspiration, tutorials, and a community that celebrates the art of
              handmade.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button href="/gallery" size="lg" className="text-lg px-8 py-4">
                Explore Creations
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${GRADIENTS.sections.featured}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-primary-400 text-3xl font-bold leading-tight tracking-tight mb-8 px-4"
          >
            Featured Categories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  title={category.title}
                  image={category.image}
                  href={category.href}
                  imageAspect="square"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Creations */}
      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${GRADIENTS.sections.highlighted}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-primary-400 text-3xl font-bold leading-tight tracking-tight mb-8 px-4"
          >
            Featured Creations
          </motion.h2>

          {loading ? (
            <div className="text-center py-8">
              <div className="text-primary-400 text-lg">
                Loading creations...
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {featuredCreations.map((creation, index) => (
                <motion.div
                  key={creation.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
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
          )}
        </div>
      </section>

      {/* About Section */}
      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${GRADIENTS.sections.about}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-primary-400 text-3xl font-bold leading-tight tracking-tight mb-8 px-4"
          >
            About Knot2Heart
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-8 px-4"
          >
            <div className="flex-1 space-y-4">
              <h3 className="text-primary-400 text-xl font-bold leading-tight">
                Meet Arwa, the Heart Behind Knot2Heart
              </h3>
              <p className="text-primary-300 text-base font-normal leading-relaxed">
                Arwa&apos;s journey with crochet began during the COVID-19
                lockdown, transforming from a simple hobby into a meaningful
                pursuit of creativity and community building. Through her
                dedication to learning and teaching, she aims to share the joy
                of crochet with others.
              </p>
              <Button href="/journey" variant="secondary" className="mt-4">
                Follow My Journey
              </Button>
            </div>

            <div className="flex-1 max-w-md">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/rida_pins.jpg"
                  alt="Sarah working on crochet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
