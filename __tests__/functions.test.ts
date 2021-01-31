import { generateData } from "../utils/functions";

describe("generateData", () => {
  test("generated array has correct length", () => {
    expect(generateData(1).length).toBe(1);
    expect(generateData(5).length).toBe(5);
    expect(generateData(30).length).toBe(30);
    expect(generateData(100).length).toBe(100);
  });
});
