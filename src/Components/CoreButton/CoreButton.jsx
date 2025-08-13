// CoreButton.js
// ============================================================================
// Config-Driven, Scalable Button Component
// ============================================================================
// Features:
// - Fully driven by config.js (sizes, variants, colors, rounded corners)
// - Runtime validation with developer-friendly errors
// - Accessibility via ARIA attributes
// - Supports icons, fullWidth, custom className
// - Fully scalable, maintainable, and ready for production
// ============================================================================

import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // Merge Tailwind classes conditionally
import cfg from "./config"; // Import design tokens

// ---------------------------------------
// Utility: extract keys from an object
// Example: getKeys(cfg.sizes) -> ['sm', 'md', 'lg', 'xl']
// ---------------------------------------
const getKeys = (obj) => Object.keys(obj);

// ---------------------------------------
// Runtime prop validator
// Shows developer-friendly error in console during development
// Only active in development mode
// ---------------------------------------
const validateProp = (propValue, propName, allowedValues, configPath) => {
  if (
    process.env.NODE_ENV !== "production" &&
    !allowedValues.includes(propValue)
  ) {
    console.error(
      `⚠️ [CoreButton] Invalid "${propName}" value: "${propValue}".\n` +
        `Allowed values: ${allowedValues.join(", ")}\n` +
        `Check the config path: ${configPath}\n` +
        `Example to add: ${configPath}['${propValue}'] = "<Tailwind classes>";`
    );
  }
};

// ---------------------------------------
// CoreButton Component
// ---------------------------------------
const CoreButton = ({
  text, // Button label (required)
  size = cfg.defaults.size, // Size key (sm/md/lg/xl)
  variant = cfg.defaults.variant, // Variant type (solid/outline/ghost)
  color = cfg.defaults.color, // Color key
  icon, // Optional icon component (ReactNode)
  rounded = cfg.defaults.rounded, // Border radius
  fullWidth = false, // Stretches button to full container width
  onClick, // Click handler
  disabled = false, // Disabled state
  className = "", // Extra classes for custom styling
  ariaLabel, // Optional ARIA label (for icon-only buttons)
}) => {
  // ---------------------------------------
  // Validate props in development
  // Provides exact guidance for developer to fix invalid values
  // ---------------------------------------
  validateProp(size, "size", getKeys(cfg.sizes), "cfg.sizes");
  validateProp(variant, "variant", getKeys(cfg.variants), "cfg.variants");
  validateProp(
    color,
    "color",
    getKeys(cfg.variants[variant] || {}),
    `cfg.variants.${variant}`
  );
  validateProp(rounded, "rounded", getKeys(cfg.rounded), "cfg.rounded");

  // ---------------------------------------
  // Fetch Tailwind classes from config
  // Falls back to defaults if prop is invalid or missing
  // ---------------------------------------
  const sizeClass = cfg.sizes[size] || cfg.sizes[cfg.defaults.size];
  const variantClass =
    (cfg.variants[variant] && cfg.variants[variant][color]) ||
    cfg.variants[cfg.defaults.variant][cfg.defaults.color];
  const roundedClass =
    cfg.rounded[rounded] || cfg.rounded[cfg.defaults.rounded];

  // ---------------------------------------
  // Compose final className string
  // Includes base styling, config classes, conditional states, and user-provided className
  // ---------------------------------------
  const finalClassNames = clsx(
    "inline-flex items-center justify-center font-medium transition-all duration-200",
    sizeClass,
    variantClass,
    roundedClass,
    {
      "w-full": fullWidth, // Make button full width if true
      "opacity-50 cursor-not-allowed": disabled, // Disabled styles
    },
    className
  );

  // ---------------------------------------
  // JSX Render
  // - Includes optional icon
  // - Includes accessibility props
  // ---------------------------------------
  return (
    <button
      onClick={onClick}
      className={finalClassNames}
      disabled={disabled} // Native disabled attribute
      aria-disabled={disabled} // ARIA attribute for screen readers
      aria-label={ariaLabel || text} // ARIA label fallback to text
    >
      {/* Render icon if provided */}
      {icon && <span className="mr-2">{icon}</span>}

      {/* Render button text */}
      {text}
    </button>
  );
};

// ---------------------------------------
// PropTypes: ensures correct usage
// Dynamically generated from config.js
// ---------------------------------------
CoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(getKeys(cfg.sizes)),
  variant: PropTypes.oneOf(getKeys(cfg.variants)),
  color: PropTypes.oneOf(
    Array.from(new Set(Object.values(cfg.variants).flatMap(Object.keys)))
  ),
  icon: PropTypes.node,
  rounded: PropTypes.oneOf(getKeys(cfg.rounded)),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

// ---------------------------------------
// Export the component for usage
// ---------------------------------------
export default CoreButton;
