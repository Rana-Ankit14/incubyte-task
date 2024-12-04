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
    expect(
      add(`10
      9,100`)
    ).toBe(119);
  });

  it("should able handle multiple continues new line", () => {
    expect(add("1\n5")).toBe(6);
    expect(add("5\n9,100")).toBe(114);
    expect(
      add(`10

      9`)
    ).toBe(19);
    expect(
      add(`10



        
      9`)
    ).toBe(19);
  });

  it("should Support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add(`//|\n9|10|11`)).toBe(30);
  });

  it("should support different delimiters and new lines", () => {
    expect(
      add(`//;\n900
      100;100`)
    ).toBe(1100);
    expect(
      add(`//|
      900




      100|100|100`)
    ).toBe(1200);
  });

  it("should throw an error for negative number", () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    expect(() => add("1,-2,100,-10,-98")).toThrow(
      "Negative numbers not allowed: -2,-10,-98"
    );
  });

  it("should support custom delimiter and throw an error for negative numbers", () => {
    expect(() => add("//;\n5;-12;50;-9")).toThrow(
      new Error("Negative numbers not allowed: -12,-9")
    );
  });
});
