import { render, screen } from "@testing-library/react";
import CoreButton from "../CoreButton";
import buttonConfig from "../config";

// Helper to render button with props
const renderCoreButton = (props = {}) => render(<CoreButton {...props} />);

describe("CoreButton Variants and Styles", () => {
  const sizes = ["sm", "md", "lg", "xl"];
  const variants = ["solid", "outline", "ghost"];
  const colors = ["blue", "red", "green", "gray"];

  // Test sizes
  sizes.forEach((size) => {
    test(`renders correctly with size ${size}`, () => {
      renderCoreButton({ size });
      const btn = screen.getByRole("button");
      expect(btn).toHaveClass(buttonConfig.sizes[size]); // now uses JSON config
    });
  });

  // Test variant + color combinations
  variants.forEach((variant) => {
    colors.forEach((color) => {
      test(`renders correctly with variant ${variant} and color ${color}`, () => {
        renderCoreButton({ variant, color });
        const btn = screen.getByRole("button");
        expect(btn).toHaveClass(buttonConfig.variants[variant][color]); // exact classes from JSON config
      });
    });
  });
});
