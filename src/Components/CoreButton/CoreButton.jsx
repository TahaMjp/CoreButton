import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { buttonConfig } from "./config";

/**
 * CoreButton - A fully customizable button
 *
 * Props:
 * - text: string — Label text (optional if using children)
 * - children: node — Custom JSX content
 * - size: "sm" | "md" | "lg" | "xl" — Padding & font size
 * - variant: "solid" | "outline" | "ghost" — Style type
 * - color: "blue" | "red" | "green" | "gray" — Theme color
 * - icon: ReactNode — Optional icon
 * - iconPosition: "left" | "right"
 * - rounded: "none" | "md" | "lg" | "full"
 * - fullWidth: boolean
 * - onClick: function
 * - disabled: boolean
 * - className: string
 * - shadow: "none" | "sm" | "md" | "lg"
 * - gap: string — Space between icon and text
 * - customColors: { base, text, hover, border } — Override colors
 * - as: "button" | "a" — Render as button or link
 * - href: string — Link URL
 * - type: string — Button type
 * - ariaLabel: string — Accessibility label
 * - borderWidth: number — Custom border width in px
 */
const CoreButton = ({
  text,
  children,
  size = "md",
  variant = "solid",
  color = "blue",
  icon,
  iconPosition = "left",
  rounded = "md",
  fullWidth = false,
  onClick,
  disabled = false,
  className = "",
  shadow = "none",
  gap = "0.5rem",
  customColors,
  as = "button",
  href,
  type = "button",
  ariaLabel,
  borderWidth,
}) => {
  // -----------------------------
  // Fetch classes from config
  // -----------------------------
  const sizeClasses = buttonConfig.sizes[size] || buttonConfig.sizes.md;
  const roundedClasses =
    buttonConfig.rounded[rounded] || buttonConfig.rounded.md;
  const shadowClasses = buttonConfig.shadows[shadow] || "";

  // -----------------------------
  // Merge variant + color
  // customColors overrides config if provided
  // -----------------------------
  const variantClasses = customColors
    ? `${customColors.base} ${customColors.text} ${customColors.hover || ""} ${
        customColors.border || ""
      }`
    : buttonConfig.variants[variant]?.[color] || "";

  // -----------------------------
  // Optional custom border width
  // -----------------------------
  const borderClass = borderWidth ? `border-[${borderWidth}px]` : "";

  // -----------------------------
  // Final class composition
  // clsx handles conditional classes
  // -----------------------------
  const finalClassNames = clsx(
    "inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.97]",
    sizeClasses,
    variantClasses,
    roundedClasses,
    shadowClasses,
    borderClass,
    {
      "w-full": fullWidth,
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  // -----------------------------
  // Inner content: icon + text/children
  // -----------------------------
  const content = (
    <span className="flex items-center" style={{ gap }}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {text || children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </span>
  );

  // -----------------------------
  // Common props for both <button> and <a>
  // -----------------------------
  const commonProps = {
    onClick,
    className: finalClassNames,
    disabled,
    "aria-label": ariaLabel || text,
  };

  // -----------------------------
  // Render as <a> or <button>
  // -----------------------------
  return as === "a" ? (
    <a href={href} {...commonProps}>
      {content}
    </a>
  ) : (
    <button type={type} {...commonProps}>
      {content}
    </button>
  );
};

// -----------------------------
// PropTypes validation
// -----------------------------
CoreButton.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]).isRequired,
  variant: PropTypes.oneOf(["solid", "outline", "ghost"]).isRequired,
  color: PropTypes.oneOf(["blue", "red", "green", "gray"]).isRequired,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  rounded: PropTypes.oneOf(["none", "md", "lg", "full"]),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  shadow: PropTypes.oneOf(["none", "sm", "md", "lg"]),
  gap: PropTypes.string,
  customColors: PropTypes.shape({
    base: PropTypes.string,
    text: PropTypes.string,
    hover: PropTypes.string,
    border: PropTypes.string,
  }),
  as: PropTypes.oneOf(["button", "a"]),
  href: PropTypes.string,
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
  borderWidth: PropTypes.number,
};

export default CoreButton;
