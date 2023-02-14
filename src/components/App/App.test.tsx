import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given a App component", () => {
  describe("When its rendered", () => {
    test("Then it should a heading of level 1", () => {
      render(<App />);
      const heading = screen.getByRole("heading", { level: 1 });

      expect(heading).toBeInTheDocument();
    });
  });
});
