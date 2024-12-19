import { describe, expect, test } from "bun:test";
import { calculateSafeReports } from "./calculateSafeReports";

const mockInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

test("should calculate how many reports are safe", () => {
  expect(calculateSafeReports(mockInput)).toBe(2);
});

describe("calculating safety with problem damper", () => {
  test("should calculate how many reports are safe while the Problem Dampener is active", () => {
    expect(calculateSafeReports(mockInput, true)).toBe(4);
  });

  test.only("should calculate how many reports are safe while the Problem Dampener is active and using different data", () => {
    const mockInput = `99 97 99 102`;
    expect(calculateSafeReports(mockInput, true)).toBe(1);
  });
});
