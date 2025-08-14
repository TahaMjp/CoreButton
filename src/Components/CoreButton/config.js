// config.js
// ============================================================================
// CoreButton Design Tokens & Config
// ============================================================================
// This file contains all configurable styles and defaults for CoreButton.
// It is the **single source of truth** for the component's design system.
//
// Benefits:
// - All colors, variants, sizes, and rounded styles are in one place.
// - Adding a new size/color/variant requires only changes here.
// - Keeps CoreButton clean, DRY, and fully scalable.
// - Supports responsive Tailwind classes for adaptive designs.
// ============================================================================

const buttonConfig = {
  // ---------------------------------------
  // Sizes: define padding and font-size for buttons.
  // You can add responsive classes directly if needed.
  // Keys: 'sm', 'md', 'lg', 'xl' (or custom)
  // Values: Tailwind class strings
  // ---------------------------------------
  sizes: {
    sm: 'px-3 py-1.5 text-sm', // Small button: compact padding + smaller font
    md: 'px-4 py-2 text-base', // Medium: balanced size (default)
    lg: 'px-5 py-2.5 text-lg', // Large: more padding + bigger text
    xl: 'px-6 py-3 text-xl' // Extra-large: maximum padding + largest font
    // Example responsive size:
    // sm: "px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm"
  },

  // ---------------------------------------
  // Variants: visual style of the button.
  // Each variant has its own color map.
  // ---------------------------------------
  variants: {
    solid: {
      // Solid-filled buttons
      blue: 'bg-blue-600 text-white hover:bg-blue-700',
      red: 'bg-red-600 text-white hover:bg-red-700',
      green: 'bg-green-600 text-white hover:bg-green-700',
      gray: 'bg-gray-600 text-white hover:bg-gray-700'
    },
    outline: {
      // Transparent button with colored border
      blue: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
      red: 'border border-red-600 text-red-600 hover:bg-red-50',
      green: 'border border-green-600 text-green-600 hover:bg-green-50',
      gray: 'border border-gray-600 text-gray-600 hover:bg-gray-50'
    },
    ghost: {
      // Minimal button, text only, subtle hover
      blue: 'text-blue-600 hover:bg-blue-50',
      red: 'text-red-600 hover:bg-red-50',
      green: 'text-green-600 hover:bg-green-50',
      gray: 'text-gray-600 hover:bg-gray-50'
    }
  },

  // ---------------------------------------
  // Rounded corners
  // Options: 'none', 'md', 'lg', 'full'
  // Controls border-radius of the button
  // ---------------------------------------
  rounded: {
    none: 'rounded-none',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full' // Perfect pill button
  },

  // ---------------------------------------
  // Default values for props
  // Used whenever a user does not provide a prop
  // or provides an invalid value (fallback)
  // ---------------------------------------
  defaults: {
    size: 'md',
    variant: 'solid',
    color: 'blue',
    rounded: 'md'
  }
};

// Export the config object for CoreButton
export default buttonConfig;
