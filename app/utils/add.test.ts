import { add } from "./add";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
    expect(add("     ")).toBe(0);
  });

  it("should return the sum of one number", () => {
    expect(add("1")).toBe(1);
    expect(add("6")).toBe(6);
  });

  it("should return the sum of two number", () => {
    expect(add("1,5")).toBe(6);
    expect(add("5,9")).toBe(14);
  });

  it("should return the sum of numbers if new lines are used between numbers instead of commas.", () => {
    expect(add("1\n5")).toBe(6);
    expect(add("5\n9,100")).toBe(114);
  });

  it("should Support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
