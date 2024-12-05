import { render, screen } from "@testing-library/react";
import HomePage from "@/pages/index";

describe("HomePage Component", () => {
  it("renders the calculator panel in the left panel and user instructions in the right panel", () => {
    render(<HomePage />);

    const mainHeading = screen.getByRole("heading", {
      name: /string calculator/i,
      level: 1,
    });
    expect(mainHeading).toBeInTheDocument();
    expect(
      screen.getByLabelText(/enter string to be calculated/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /calculate/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /how to use the string calculator/i })
    ).toBeInTheDocument();
  });
});
