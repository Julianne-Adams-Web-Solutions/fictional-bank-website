import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("The Navbar component", () => {
  describe("when initially rendered", () => {
    it("should display the company logo", () => {
      render(<Navbar />);

      const logo = screen.getByAltText("Fictional Bank Logo");
      expect(logo).toBeInTheDocument();
    });

    it("should display the 'Log In' and 'Open An Account' buttons", () => {
      render(<Navbar />);

      const loginButton = screen.getByText("Log In");
      const openAccountButton = screen.getByText("Open An Account");

      expect(loginButton).toBeInTheDocument();
      expect(openAccountButton).toBeInTheDocument();
    });
  });
});
