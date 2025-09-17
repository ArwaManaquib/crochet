/**
 * Color constants for the Knot2Heart application
 * This file centralizes all color usage and ensures consistency across components
 */

// Base color classes - these correspond to our Tailwind config
export const COLORS = {
  // Background colors
  backgrounds: {
    warm: {
      50: "bg-warm-50",
      100: "bg-warm-100",
      200: "bg-warm-200",
      300: "bg-warm-300",
      400: "bg-warm-400",
      500: "bg-warm-500",
    },
    sage: {
      50: "bg-sage-50",
      100: "bg-sage-100",
      200: "bg-sage-200",
      300: "bg-sage-300",
      400: "bg-sage-400",
    },
    sunny: {
      50: "bg-sunny-50",
      100: "bg-sunny-100",
      400: "bg-sunny-400",
    },
    lavender: {
      50: "bg-lavender-50",
      100: "bg-lavender-100",
      300: "bg-lavender-300",
      400: "bg-lavender-400",
    },
    primary: {
      50: "bg-primary-50",
      100: "bg-primary-100",
    },
  },

  // Text colors
  text: {
    primary: {
      400: "text-primary-400",
      500: "text-primary-500",
      600: "text-primary-600",
      700: "text-primary-700",
      800: "text-primary-800",
    },
    warm: {
      500: "text-warm-500",
      600: "text-warm-600",
      700: "text-warm-700",
      800: "text-warm-800",
    },
    sage: {
      600: "text-sage-600",
      700: "text-sage-700",
      800: "text-sage-800",
    },
    white: "text-white",
  },

  // Border colors
  borders: {
    warm: {
      100: "border-warm-100",
      200: "border-warm-200",
      300: "border-warm-300",
    },
    sage: {
      100: "border-sage-100",
      200: "border-sage-200",
    },
  },

  // Focus ring colors
  focus: {
    warm: {
      200: "focus:ring-warm-200",
      300: "focus:ring-warm-300",
    },
    sage: {
      200: "focus:ring-sage-200",
    },
  },
};

// Gradient combinations for common use cases
export const GRADIENTS = {
  // Layout gradients
  layout: {
    main: "bg-gradient-to-br from-warm-50/30 via-primary-50 to-white",
    header: "bg-primary-50/95",
    footer: "bg-gradient-to-t from-warm-50/50 to-primary-50",
  },

  // Component gradients
  components: {
    card: "bg-gradient-to-br from-white to-warm-50/20",
    newsletter: "bg-gradient-to-r from-warm-50/40 to-sage-50/40",
  },

  // Button gradients
  buttons: {
    primary: {
      base: "bg-gradient-to-r from-warm-300 to-warm-400",
      hover: "hover:from-warm-400 hover:to-warm-500",
    },
    secondary: {
      base: "bg-gradient-to-r from-sage-200 to-sage-300",
      hover: "hover:from-sage-300 hover:to-sage-400 hover:text-white",
    },
  },

  // Section gradients
  sections: {
    hero: "bg-gradient-to-b from-warm-200/10 via-black/20 to-black/40",
    featured: "bg-gradient-to-r from-warm-50/30 to-primary-50",
    highlighted: "bg-gradient-to-b from-sage-50/30 to-white",
    about: "bg-gradient-to-r from-lavender-50/20 to-warm-50/20",
    cta: "bg-gradient-to-r from-warm-50/50 to-sage-50/50",
  },
};

// Utility functions for combining classes
export const combineClasses = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Helper function to get button classes
export const getButtonClasses = (variant = "primary", size = "md") => {
  const baseClasses =
    "inline-flex items-center justify-center font-bold leading-normal tracking-wide rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: combineClasses(
      GRADIENTS.buttons.primary.base,
      GRADIENTS.buttons.primary.hover,
      COLORS.text.white,
      COLORS.focus.warm[200],
      "shadow-md hover:shadow-lg"
    ),
    secondary: combineClasses(
      GRADIENTS.buttons.secondary.base,
      GRADIENTS.buttons.secondary.hover,
      COLORS.text.sage[800],
      COLORS.focus.sage[200],
      "shadow-sm hover:shadow-md"
    ),
    outline: combineClasses(
      "border-2",
      COLORS.borders.warm[200],
      COLORS.text.warm[600],
      "hover:bg-warm-100 hover:border-warm-300",
      COLORS.focus.warm[200]
    ),
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };

  return combineClasses(baseClasses, variants[variant], sizes[size]);
};

// Helper function to get card classes
export const getCardClasses = (className = "") => {
  return combineClasses(
    "group",
    GRADIENTS.components.card,
    "rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden",
    className
  );
};
