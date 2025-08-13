// src/Components/CoreButton/tests/CoreButton.errors.test.js

import { renderCoreButton } from "./helpers";

describe("CoreButton Error Handling", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("logs error for invalid size", () => {
    renderCoreButton({ size: "huge" });
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('⚠️ [CoreButton] Invalid "size" value: "huge"')
    );
  });

  test("logs error for invalid variant", () => {
    renderCoreButton({ variant: "super" });
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '⚠️ [CoreButton] Invalid "variant" value: "super"'
      )
    );
  });

  test("logs error for invalid color", () => {
    renderCoreButton({ color: "pinkish" });
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '⚠️ [CoreButton] Invalid "color" value: "pinkish"'
      )
    );
  });
});
