import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When its rendered", () => {
    test("Then it should show an input that has an aria-label with text 'Field to create a task'", () => {
      render(<Form />);

      const textAriaLabel = "Field to create a task";

      const result = screen.getByLabelText(textAriaLabel);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show a button with text 'Create'", () => {
      render(<Form />);
      const buttonText = "Create";

      const buttonCreate = screen.getByText(buttonText);

      expect(buttonCreate).toBeInTheDocument();
    });
  });
});
