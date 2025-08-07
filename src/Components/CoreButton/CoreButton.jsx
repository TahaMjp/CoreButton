import React from "react";
import clsx from "clsx";

/**
 * CoreButton - A versatile, customizable button component
 *
 * Props:
 * - text: string (required) — Button label text
 * - size: 'sm' | 'md' | 'lg' | 'xl' (required) — Button size
 * - variant: 'solid' | 'outline' | 'ghost' (required) — Style variant
 * - color: 'blue' | 'red' | 'green' | 'gray' (required) — Color theme
 * - icon: ReactNode (optional) — Icon displayed before the text
 * - rounded: 'none' | 'md' | 'lg' | 'full' (optional, default 'md') — Border radius
 * - fullWidth: boolean (optional, default false) — Makes button take full container width
 * - onClick: function (optional) — Click event handler
 * - disabled: boolean (optional, default false) — Disabled state
 * - className: string (optional) — Additional custom class names
 */

const CoreButton = ({
  text,
  size,
  variant,
  color,
  icon,
  rounded = "md",
  fullWidth = false,
  onClick,
  disabled = false,
  className = "",
}) => {
  // Tailwind CSS classes by size
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
    xl: "px-6 py-3 text-xl",
  };

  // Variant & color combos
  const variantClasses = {
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
  };

  // Border radius options
  const roundedClasses = {
    none: "rounded-none",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  // Compose final class string with clsx
  const finalClassNames = clsx(
    "inline-flex items-center justify-center font-medium transition-all duration-200",
    sizeClasses[size],
    variantClasses[variant][color],
    roundedClasses[rounded],
    {
      "w-full": fullWidth,
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  return (
    <button onClick={onClick} className={finalClassNames} disabled={disabled}>
      {/* Show icon if provided */}
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default CoreButton;
