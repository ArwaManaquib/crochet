'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-primary-400 text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            About Knot2Heart
          </h1>
          <p className="text-primary-300 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Where creativity meets passion, and every stitch tells a story of love and dedication.
          </p>
        </motion.div>

        {/* Sarah's Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-primary-400 text-3xl font-bold leading-tight">
                Meet Sarah Miller
              </h2>
              <p className="text-primary-300 text-base font-normal leading-relaxed">
                Hi there! I&apos;m Sarah, the heart and hands behind Knot2Heart. My journey with crochet began over a decade ago when my grandmother taught me my first chain stitch. What started as a simple hobby has blossomed into a passionate pursuit that fills my days with joy and creativity.
              </p>
              <p className="text-primary-300 text-base font-normal leading-relaxed">
                I believe that crochet is more than just a craft—it&apos;s a form of meditation, a way to create beauty, and a means to connect with others who share this wonderful passion. Through Knot2Heart, I hope to inspire others to pick up a hook and discover the magic of creating something beautiful with their own hands.
              </p>
              <Button variant="secondary">
                Follow My Journey
              </Button>
            </div>
            
            <div className="flex-1 max-w-md">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO1IjNrZt-Wjt2zG6CU-tMyXPANvUPW5uYOpuxuuS21VM_V56wNc3MhuFxgIDlYGcsWFq4zmTKgLRYk86tSj_UZVgxrKw-nlUfx0C8kUSQ9BYB8PQAgVeODR402mH0tOsYq4PGY7qOD1_Z7mJZElkGu5LSPhe4Lq14CvlTsJc1t18QKPTlqzOwIAqa7nor5CnBStEx3_EmCh63SlNJ86eGqJWPPcQiZCwNZBNBonQzLOeT4v2jzoXUdJexaFsjyE02uhcUQJag_0cE"
                  alt="Sarah Miller working on crochet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8"
        >
          <div className="text-center">
            <h2 className="text-primary-400 text-3xl font-bold leading-tight mb-6">
              Our Mission
            </h2>
            <p className="text-primary-300 text-lg font-normal leading-relaxed max-w-3xl mx-auto">
              At Knot2Heart, we&apos;re dedicated to fostering a warm, inclusive community where crochet enthusiasts of all skill levels can learn, share, and grow together. We believe in the power of handmade to bring joy, comfort, and connection to our lives.
            </p>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-primary-400 text-3xl font-bold leading-tight text-center mb-12">
            What We Stand For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-primary-400 text-xl font-bold mb-3">Community</h3>
              <p className="text-primary-300 text-base font-normal leading-relaxed">
                Building connections through shared creativity and supporting each other&apos;s crochet journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-primary-400 text-xl font-bold mb-3">Growth</h3>
              <p className="text-primary-300 text-base font-normal leading-relaxed">
                Encouraging continuous learning and skill development in a supportive environment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-primary-400 text-xl font-bold mb-3">Inspiration</h3>
              <p className="text-primary-300 text-base font-normal leading-relaxed">
                Sharing beautiful designs and creative ideas that spark joy and imagination.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-primary-400 text-2xl font-bold leading-tight mb-4">
            Let&apos;s Connect!
          </h2>
          <p className="text-primary-300 text-base font-normal leading-relaxed mb-6">
            Have questions, suggestions, or just want to share your latest creation? I&apos;d love to hear from you!
          </p>
          <Button>
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
