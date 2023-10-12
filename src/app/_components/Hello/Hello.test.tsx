import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("The Hello component", () => {
  describe("when rendered", () => {
    it("should display the text 'Hello World!'", () => {
      // Arrange
      render(<Hello />);

      // Act
      const heading = screen.getByText("Hello World!");

      // Assert
      expect(heading).toBeInTheDocument();
    });

    it("should be a heading", () => {
      // Arrange
      render(<Hello />);

      // Act
      const heading = screen.getByText("Hello World!");

      // Assert
      expect(heading.tagName.toLowerCase()).toBe("h1");
    });
  });
});
