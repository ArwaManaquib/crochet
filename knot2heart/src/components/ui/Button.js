"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import Link from "next/link";
import { getButtonClasses } from "@/lib/colors";

const Button = forwardRef(
  (
    {
      children,
      href,
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

    // If href is provided, render as a Link
    if (href) {
      return (
        <Link href={href} className={classes} {...props}>
          <motion.span whileTap={{ y: 1 }} className="block">
            {children}
          </motion.span>
        </Link>
      );
    }

    // Otherwise render as a button
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
