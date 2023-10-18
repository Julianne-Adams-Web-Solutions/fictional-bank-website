import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("The Button component", () => {
  describe("when initially rendered", () => {
    it("should display the provided label text", () => {
      const label = "Example";
      const type = "button";

      render(
        <Button type={type} color="primary" buttonStyle="solid">
          {label}
        </Button>,
      );

      const button = screen.getByText(label);

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("type", type);
    });
  });
});
