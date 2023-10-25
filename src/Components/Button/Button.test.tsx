import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a component Button", () => {
  describe("When ", () => {
    test("It call the function recived", () => {
      const text = "Next";

      render(<Button className="" innerText={text} method={vi.fn()} />);
      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user clicks the button and recives an action", () => {
    test("Then it should call the received action", () => {
      const action = vi.fn();

      render(<Button className="" innerText="send" method={action} />);
      const button = screen.getByRole("button");
      (button as HTMLButtonElement).click();

      expect(action).toHaveBeenCalled();
    });
  });
});
