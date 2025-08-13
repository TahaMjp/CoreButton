/**
 * CoreButton design tokens configuration
 *
 * This file contains all style mappings (sizes, variants, colors, etc.)
 * for CoreButton. You can extend or override colors/variants here without
 * touching the component itself.
 */

export const buttonConfig = {
  // -----------------------------------------
  // Size mappings
  // Maps `size` prop values to Tailwind classes
  // -----------------------------------------
  sizes: {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
    xl: "px-6 py-3 text-xl",
  },

  // -----------------------------------------
  // Border radius mappings
  // Maps `rounded` prop values
  // -----------------------------------------
  rounded: {
    none: "rounded-none",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  },

  // -----------------------------------------
  // Shadow mappings
  // Maps `shadow` prop values
  // -----------------------------------------
  shadows: {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  },

  // -----------------------------------------
  // Variant + color mappings
  // Can be overridden or extended here
  // -----------------------------------------
  variants: {
    solid: {
      blue: "bg-blue-600 text-white hover:bg-blue-700",
      red: "bg-red-600 text-white hover:bg-red-700",
      green: "bg-green-600 text-white hover:bg-green-700",
      gray: "bg-gray-600 text-white hover:bg-gray-700",
    },
    outline: {
      blue: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      red: "border border-red-600 text-red-600 hover:bg-red-50",
      green: "border border-green-600 text-green-600 hover:bg-green-50",
      gray: "border border-gray-600 text-gray-600 hover:bg-gray-50",
    },
    ghost: {
      blue: "text-blue-600 hover:bg-blue-50",
      red: "text-red-600 hover:bg-red-50",
      green: "text-green-600 hover:bg-green-50",
      gray: "text-gray-600 hover:bg-gray-50",
    },
  },
};
