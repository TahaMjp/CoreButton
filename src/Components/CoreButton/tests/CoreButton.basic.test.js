// src/Components/CoreButton/tests/CoreButton.basic.test.js

import React from "react";
import { screen } from "@testing-library/react";
import { renderCoreButton } from "./helpers";

describe("CoreButton Basic Rendering", () => {
  test("renders with default text", () => {
    renderCoreButton();
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("renders with custom text", () => {
    renderCoreButton({ text: "Custom Button" });
    expect(screen.getByText("Custom Button")).toBeInTheDocument();
  });

  test("applies disabled state correctly", () => {
    renderCoreButton({ disabled: true });
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("renders with icon if provided", () => {
    const Icon = () => <span data-testid="icon">ICON</span>;
    renderCoreButton({ icon: <Icon /> });
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
