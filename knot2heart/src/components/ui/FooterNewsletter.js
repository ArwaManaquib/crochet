"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import { COLORS } from "@/lib/colors";

const FooterNewsletter = () => {
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
    <div className="space-y-3 w-full max-w-sm">
      <div className="text-center sm:text-left">
        <h3 className="text-primary-600 text-lg font-semibold leading-tight mb-2">
          Join our circle 💛
        </h3>
        <p className="text-primary-500 text-sm font-normal leading-normal">
          Get the latest patterns & tutorials
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            disabled={isSubmitting}
            className={`w-full px-3 py-2 bg-white/90 border ${COLORS.borders.warm[100]} rounded-md text-primary-600 placeholder-primary-400 text-sm focus:outline-none focus:ring-2 ${COLORS.focus.warm[200]} transition-all duration-300`}
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting || !email}
          size="sm"
          className="w-full text-sm"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            />
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`p-2 ${COLORS.backgrounds.sage[50]} ${COLORS.text.sage[800]} rounded-md border ${COLORS.borders.sage[200]} text-sm text-center`}
        >
          Thank you! 🎉
        </motion.div>
      )}
    </div>
  );
};

export default FooterNewsletter;
