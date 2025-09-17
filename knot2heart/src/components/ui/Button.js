"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-bold leading-normal tracking-wide rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gradient-to-r from-warm-300 to-warm-400 text-white hover:from-warm-400 hover:to-warm-500 focus:ring-warm-200 shadow-md hover:shadow-lg",
      secondary:
        "bg-gradient-to-r from-sage-200 to-sage-300 text-sage-800 hover:from-sage-300 hover:to-sage-400 hover:text-white focus:ring-sage-200 shadow-sm hover:shadow-md",
      outline:
        "border-2 border-warm-200 text-warm-600 hover:bg-warm-100 hover:border-warm-300 focus:ring-warm-200",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-sm",
      lg: "px-6 py-3 text-base",
      xl: "px-8 py-4 text-lg",
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: disabled ? 0 : -1 }}
        whileTap={{ y: disabled ? 0 : 1 }}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
