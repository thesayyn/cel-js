import {run} from "../src/index";


describe("greater", () => {
  test("6 should be greater than 5", () => {
    expect(run(`count > 5`, {count: 6})).toBe(true);
  })
  
  test("5 should not be greater than 5", () => {
    expect(run(`count > 5`, {count: 5})).toBe(false);
  })
  
  test("4 should not be greater than 5", () => {
    expect(run(`count > 5`, {count: 4})).toBe(false);
  })
})

describe("less", () => {
  test("count should be less than 5", () => {
    expect(run(`count < 5`, {count: 4})).toBe(true);
  })
  
  test("count should not be less than 5", () => {
    expect(run(`count < 5`, {count: 5})).toBe(false);
  })
  
  test("count should not be less than 4", () => {
    expect(run(`count < 4`, {count: 4})).toBe(false);
  })
})


describe("and", () => {
  test("like count should be greater than 5 and less than 10", () => {
    expect(run(`like_count > 5 && like_count < 10`, {like_count: 6})).toBe(true);
  });
  
  test("like count should be greater than 5 and 10", () => {
    expect(run(`like_count > 5 && like_count > 10`, {like_count: 8})).toBe(false);
  });
  
})

