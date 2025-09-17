"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import { GRADIENTS, COLORS } from "@/lib/colors";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`py-16 px-4 sm:px-6 lg:px-10 ${GRADIENTS.components.newsletter}`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-primary-700 text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
            Join our crochet circle 💛
          </h2>
          <p className="text-primary-600 text-base font-normal leading-normal max-w-lg mx-auto">
            Stay updated with the latest patterns, tutorials, and stories from
            Knot2Heart.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              disabled={isSubmitting}
              className={`w-full px-4 py-3 bg-white border ${COLORS.borders.warm[100]} rounded-lg text-primary-600 placeholder-primary-400 focus:outline-none focus:ring-2 ${COLORS.focus.warm[200]} transition-all duration-300`}
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || !email}
            className="whitespace-nowrap"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
              />
            ) : (
              "Subscribe"
            )}
          </Button>
        </motion.form>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-4 p-3 ${COLORS.backgrounds.sage[50]} ${COLORS.text.sage[800]} rounded-lg border ${COLORS.borders.sage[200]}`}
          >
            Thank you for subscribing! 🎉
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Newsletter;
