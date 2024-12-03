import { add } from "./add";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the sum of one number", () => {
    expect(add("1")).toBe(1);
    expect(add("6")).toBe(6);
  });

  it("should return the sum of two number", () => {
    expect(add("1,5")).toBe(6);
    expect(add("5,9")).toBe(14);
  });
});
