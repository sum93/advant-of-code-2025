import { expect, test } from "bun:test";

import { calculateListDistance } from "./calculateListDistance";

const mockInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

test("should calculate the distance of two lists", () => {
  expect(calculateListDistance(mockInput)).toBe(11);
});
