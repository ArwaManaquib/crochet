"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* My Crochet Journey Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block"
            >
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-primary-400 bg-clip-text">
                My Crochet Journey
              </h2>
            </motion.div>
            <p className="text-primary-300 text-xl font-normal leading-relaxed max-w-3xl mx-auto">
              A personal story of discovery, growth, and connection through the
              art of crochet — from lockdown hobby to meaningful pursuit
            </p>
          </div>

          {/* Journey Flow */}
          <div className="relative">
            {/* Flowing Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-warm-100/20 to-sage-100/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-lavender-100/20 to-sunny-100/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-primary-100/20 to-warm-100/20 rounded-full blur-3xl"></div>
            </div>

            {/* Journey Steps */}
            <div className="relative space-y-16">
              {/* Beginning - COVID Lockdown */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 lg:max-w-2xl">
                    <div className="relative p-8 bg-gradient-to-br from-white/80 to-warm-50/60 backdrop-blur-sm rounded-2xl shadow-lg border border-warm-100/50">
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-warm-300 to-warm-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                        <span className="text-3xl transform -rotate-12">
                          🏠
                        </span>
                      </div>
                      <div className="ml-8">
                        <h3 className="text-primary-400 text-2xl font-bold mb-4">
                          The Beginning
                        </h3>
                        <p className="text-primary-300 text-lg leading-relaxed">
                          My crochet journey began during the COVID-19 lockdown,
                          when I turned to this craft as a way to cope with
                          isolation and discover creativity. What started as a
                          pastime soon became a source of comfort, patience, and
                          connection. Each stitch reminded me of how hearts can
                          be joined together, just as al-Dai al-Ajal Syedna
                          Mufaddal Saifuddin TUS connects Mumineen.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 lg:max-w-md hidden md:block">
                    <div className="relative">
                      <div className="w-full h-64 bg-gradient-to-br from-warm-200/30 to-sage-200/30 rounded-2xl flex items-center justify-center">
                        <span className="text-8xl opacity-60">🧶</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Learning & Research */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                  <div className="flex-1 lg:max-w-2xl">
                    <div className="relative p-8 bg-gradient-to-br from-white/80 to-sage-50/60 backdrop-blur-sm rounded-2xl shadow-lg border border-sage-100/50">
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-sage-300 to-sage-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12">
                        <span className="text-3xl transform rotate-12">📚</span>
                      </div>
                      <div className="mr-8">
                        <h3 className="text-primary-400 text-2xl font-bold mb-4">
                          Learning & Research
                        </h3>
                        <p className="text-primary-300 text-lg leading-relaxed">
                          For my fieldwork, I chose crochet not only to refine
                          my skills but also to explore its deeper purpose as a
                          medium of shared learning and upliftment. I began by
                          researching crochet tools, yarns, and abbreviations,
                          and practiced through YouTube tutorials and online
                          courses.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 lg:max-w-md hidden md:block">
                    <div className="relative">
                      <div className="w-full h-64 bg-gradient-to-br from-sage-200/30 to-lavender-200/30 rounded-2xl flex items-center justify-center">
                        <span className="text-8xl opacity-60">📖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Happy Threads Milestone */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 lg:max-w-2xl">
                    <div className="relative p-8 bg-gradient-to-br from-white/80 to-sunny-50/60 backdrop-blur-sm rounded-2xl shadow-lg border border-sunny-100/50">
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-sunny-300 to-sunny-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                        <span className="text-3xl transform -rotate-12">
                          🌸
                        </span>
                      </div>
                      <div className="ml-8">
                        <h3 className="text-primary-400 text-2xl font-bold mb-4">
                          Happy Threads Milestone
                        </h3>
                        <p className="text-primary-300 text-lg leading-relaxed">
                          Joining Happy Threads marked an important milestone,
                          where my first assignments like crocheting flowers and
                          coasters helped me build confidence. These early
                          projects became stepping stones to more complex
                          creations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 lg:max-w-md hidden md:block">
                    <div className="relative">
                      <div className="w-full h-64 bg-gradient-to-br from-sunny-200/30 to-warm-200/30 rounded-2xl flex items-center justify-center">
                        <span className="text-8xl opacity-60">🌺</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Teaching & Connection */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                  <div className="flex-1 lg:max-w-2xl">
                    <div className="relative p-8 bg-gradient-to-br from-white/80 to-lavender-50/60 backdrop-blur-sm rounded-2xl shadow-lg border border-lavender-100/50">
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-lavender-300 to-lavender-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12">
                        <span className="text-3xl transform rotate-12">🤝</span>
                      </div>
                      <div className="mr-8">
                        <h3 className="text-primary-400 text-2xl font-bold mb-4">
                          Teaching & Connection
                        </h3>
                        <p className="text-primary-300 text-lg leading-relaxed">
                          Teaching a friend from scratch became one of the most
                          meaningful parts of my journey. It strengthened our
                          bond and proved how crochet can connect people beyond
                          the craft itself. This experience showed me the true
                          power of sharing knowledge.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 lg:max-w-md hidden md:block">
                    <div className="relative">
                      <div className="w-full h-64 bg-gradient-to-br from-lavender-200/30 to-primary-200/30 rounded-2xl flex items-center justify-center">
                        <span className="text-8xl opacity-60">👥</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Commercial Exploration */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 lg:max-w-2xl">
                    <div className="relative p-8 bg-gradient-to-br from-white/80 to-primary-50/60 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-100/50">
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary-300 to-primary-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                        <span className="text-3xl transform -rotate-12">
                          💼
                        </span>
                      </div>
                      <div className="ml-8">
                        <h3 className="text-primary-400 text-2xl font-bold mb-4">
                          Commercial Exploration
                        </h3>
                        <p className="text-primary-300 text-lg leading-relaxed">
                          I explored crochet commercially during Istefadah in
                          Surat, collaborated remotely with a friend on a Rida
                          design, and created a personal Crochet Guide (PDF)
                          titled &ldquo;Crochet: A Craft that Connects
                          Hearts.&rdquo; These projects reflected my belief that
                          crochet is not only creative but also communal and
                          inspirational.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 lg:max-w-md hidden md:block">
                    <div className="relative">
                      <div className="w-full h-64 bg-gradient-to-br from-primary-200/30 to-warm-200/30 rounded-2xl flex items-center justify-center">
                        <span className="text-8xl opacity-60">📋</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Journey Insights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-20 relative"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-primary-400 bg-clip-text">
                What I Discovered
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="relative p-6 bg-gradient-to-br from-white/90 to-warm-50/70 backdrop-blur-sm rounded-2xl shadow-lg border border-warm-100/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-warm-300 to-warm-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🧘</span>
                  </div>
                  <div>
                    <h4 className="text-primary-400 text-xl font-bold mb-2">
                      Mindfulness
                    </h4>
                    <p className="text-primary-300 leading-relaxed">
                      Developed patience, resilience, and mindfulness through
                      each stitch, finding peace in the rhythmic motions of
                      crochet.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="relative p-6 bg-gradient-to-br from-white/90 to-sage-50/70 backdrop-blur-sm rounded-2xl shadow-lg border border-sage-100/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sage-300 to-sage-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h4 className="text-primary-400 text-xl font-bold mb-2">
                      Entrepreneurship
                    </h4>
                    <p className="text-primary-300 leading-relaxed">
                      Realized crochet&apos;s potential for small-scale
                      entrepreneurship and sustainable income generation.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0, duration: 0.6 }}
                className="relative p-6 bg-gradient-to-br from-white/90 to-sunny-50/70 backdrop-blur-sm rounded-2xl shadow-lg border border-sunny-100/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sunny-300 to-sunny-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <h4 className="text-primary-400 text-xl font-bold mb-2">
                      Growth
                    </h4>
                    <p className="text-primary-300 leading-relaxed">
                      Personal growth through creative expression, skill
                      development, and continuous learning.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="relative p-6 bg-gradient-to-br from-white/90 to-lavender-50/70 backdrop-blur-sm rounded-2xl shadow-lg border border-lavender-100/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-lavender-300 to-lavender-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💝</span>
                  </div>
                  <div>
                    <h4 className="text-primary-400 text-xl font-bold mb-2">
                      Connection
                    </h4>
                    <p className="text-primary-300 leading-relaxed">
                      Building meaningful connections and uplifting others
                      through the shared joy of creating.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Spiritual Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="mt-16 relative"
          >
            <div className="relative p-10 bg-gradient-to-br from-white/95 to-primary-50/80 backdrop-blur-sm rounded-3xl shadow-xl border border-primary-100/50 text-center overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-warm-200/20 to-sage-200/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-lavender-200/20 to-primary-200/20 rounded-full blur-2xl"></div>

              <div className="relative max-w-4xl mx-auto">
                <div className="mb-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-primary-300 via-warm-300 to-sage-300 mx-auto rounded-full mb-6"></div>
                </div>
                <p className="text-primary-300 text-xl leading-relaxed mb-6">
                  In conclusion, what began as a simple hobby during lockdown
                  has grown into a meaningful pursuit—one that blends
                  creativity, personal growth, and community building.
                </p>
                <div className="relative inline-block">
                  <p className="text-lg font-medium italic bg-gradient-to-r from-primary-400 via-warm-400 to-sage-400 bg-clip-text text-transparent">
                    May Allah Ta&apos;ala grant our beloved Aqa Moula TUS a long
                    and healthy life until the Day of Judgement. Ameen!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
