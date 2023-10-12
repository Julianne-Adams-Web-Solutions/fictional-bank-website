import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ExamplePage from "./page";

describe("The Example page", () => {
  it("should render the Hello component", () => {
    // Arrange
    render(<ExamplePage />);

    // Act
    const hello = screen.getByText("Hello World!");

    // Assert
    expect(hello).toBeInTheDocument();
    expect(hello.tagName.toLowerCase()).toBe("h1");
  });
});
