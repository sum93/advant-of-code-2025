import { expect, test } from "bun:test";
import { calculateListSimilarity } from "./calculateListSimilarity";

const mockInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

test("should calculate the similarity of two lists", () => {
  expect(calculateListSimilarity(mockInput)).toBe(31);
});
