import {parse} from "../src/parser/parser";

describe("greater", () => {
  test("6 should be greater than 5", () => {
    expect(parse("a > 3")).toBe(true);
  })
})
