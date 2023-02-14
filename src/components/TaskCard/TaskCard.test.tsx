import { render, screen } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe("Given a TaskCard component", () => {
  describe("When its rendered", () => {
    test("Then it should show the task 'Clean the bathroom'", () => {
      render(<TaskCard />);

      const expectedResult = "Clean the bathroom";

      const result = screen.getByText(expectedResult);

      expect(result).toBeInTheDocument();
    });
  });
});
