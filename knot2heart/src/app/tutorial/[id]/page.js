"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TutorialPage() {
  const params = useParams();
  const [creation, setCreation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreation = async () => {
      try {
        const response = await fetch("/data/creations.json");
        const data = await response.json();
        const creationData = data.creations[params.id];

        if (!creationData) {
          setError("Creation not found");
        } else {
          setCreation(creationData);
        }
      } catch (err) {
        setError("Failed to load creation data");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchCreation();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-primary-400 text-lg">Loading tutorial...</div>
      </div>
    );
  }

  if (error || !creation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-primary-400 text-lg mb-4">
            {error || "Creation not found"}
          </div>
          <Link
            href="/gallery"
            className="text-primary-300 hover:text-primary-400 underline"
          >
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen lg:h-[calc(100vh-57px)]">
      <div className="flex flex-col lg:flex-row lg:h-full">
        {/* Left Section - Enhanced Visual Layout */}
        <div className="lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-sage-50/40 to-lavender-50/40">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-transparent" />

          {/* Main Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 p-4 sm:p-6 lg:h-full flex flex-col"
          >
            {/* Video with enhanced styling */}
            <div className="relative mb-4 sm:mb-6 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-200 to-lavender-200 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-video">
                  <iframe
                    src={creation.tutorialVideo}
                    title={`${creation.title} Tutorial`}
                    className="w-full h-full border-0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Materials Needed - Moved from right section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="lg:flex-1 bg-gradient-to-r from-sage-50/50 to-lavender-50/50 rounded-xl p-4 sm:p-6 border border-sage-100 shadow-sm"
            >
              <h3 className="text-primary-400 text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary-300 to-lavender-300 rounded-full" />
                Materials Needed
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {creation.materials?.map((material, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                    className="text-primary-300 text-sm flex items-center gap-3 p-2 sm:p-3 rounded-lg hover:bg-white/50 transition-colors group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-300 to-lavender-300 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="group-hover:text-primary-400 transition-colors">
                      {material}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Section - Fixed Header with Scrollable Content */}
        <div className="lg:w-1/2 flex flex-col">
          {/* Fixed Header Section */}
          <div className="flex-shrink-0 p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-400 transition-colors group"
              >
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <span>Back to Gallery</span>
              </Link>

              <div>
                <h1 className="text-primary-400 text-2xl sm:text-3xl font-bold leading-tight mb-3">
                  {creation.title}
                </h1>
                <p className="text-primary-300 text-sm sm:text-base leading-relaxed mb-4">
                  {creation.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="bg-gradient-to-r from-primary-100 to-lavender-100 text-primary-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    {creation.difficulty}
                  </span>
                  <span className="bg-gradient-to-r from-sage-100 to-primary-100 text-primary-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    {creation.estimatedTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scrollable Content Section */}
          <div className="flex-1 lg:overflow-y-auto">
            <div className="p-4 sm:p-6 pt-0 space-y-6 sm:space-y-8">
              {/* Step-by-step Instructions */}
              <div className="space-y-6 sm:space-y-10">
                {creation.steps?.map((step, index) => (
                  <motion.div
                    key={step.stepNumber}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-4 sm:gap-6 items-start p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white/50 to-sage-50/30 border border-sage-100/50 shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    {/* Step Image - Reduced Size */}
                    <div className="w-full lg:w-2/5 flex-shrink-0">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 ring-1 ring-white/20 rounded-xl" />
                      </div>
                    </div>

                    {/* Step Content - Enhanced */}
                    <div className="w-full lg:w-3/5 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-200 to-lavender-200 text-primary-600 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm">
                          {step.stepNumber}
                        </div>
                        <h3 className="text-primary-400 text-lg sm:text-xl font-semibold">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-primary-300 text-sm sm:text-base leading-relaxed pl-11 sm:pl-13">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
