"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import { getButtonClasses } from "@/lib/colors";

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
    const classes = `${getButtonClasses(variant, size)} ${className}`;

    return (
      <motion.button
        ref={ref}
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
