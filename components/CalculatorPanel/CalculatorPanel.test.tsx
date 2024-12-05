import { render, fireEvent, screen } from "@testing-library/react";
import CalculatorPanel from "@/components/CalculatorPanel";
import { add } from "@/utils/add";

jest.mock("../../utils/add.ts", () => ({
  add: jest.fn(),
}));

describe("CalculatorPanel", () => {
  it("calculates the total when input is valid", () => {
    (add as jest.Mock).mockReturnValue(6);

    render(<CalculatorPanel />);

    const input = screen.getByPlaceholderText(
      "Enter your string to be calculated"
    );
    fireEvent.change(input, { target: { value: "1,2,3" } });

    const button = screen.getByRole("button", { name: /calculate/i });
    fireEvent.click(button);

    expect(screen.getByText("Total Sum: 6")).toBeInTheDocument();
    expect(screen.queryByTestId("errorMsg")).not.toBeInTheDocument();
  });

  it("displays an error when input is invalid", () => {
    (add as jest.Mock).mockImplementation(() => {
      throw new Error("negative numbers not allowed: -1");
    });

    render(<CalculatorPanel />);

    const input = screen.getByPlaceholderText(
      "Enter your string to be calculated"
    );
    fireEvent.change(input, { target: { value: "1,-1" } });

    const button = screen.getByRole("button", { name: /calculate/i });
    fireEvent.click(button);

    expect(screen.getByTestId("errorMsg")).toHaveTextContent(
      "negative numbers not allowed: -1"
    );
    expect(screen.queryByText("Total Sum:")).not.toBeInTheDocument();
  });
});
