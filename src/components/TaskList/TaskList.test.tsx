import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

describe("Given a TaskList component", () => {
  describe("When its rendered", () => {
    test("Then it should show a task", () => {
      render(<TaskList />);

      const task = screen.getByRole("list");

      expect(task).toBeInTheDocument();
    });
  });
});
