import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When its rendered", () => {
    test("Then it should show the title 'To Do list'", () => {
      render(<Layout />);
      const expectedResult = "To Do list";

      const result = screen.getByText(expectedResult);

      expect(result).toBeInTheDocument();
    });
  });
});
