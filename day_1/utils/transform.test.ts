import { expect, test } from "bun:test";

import { transformToColumns } from "./transform";

const mockInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

test("should create 2 arrays from the input as left and right column", () => {
  expect(transformToColumns(mockInput)).toStrictEqual([
    [3, 4, 2, 1, 3, 3],
    [4, 3, 5, 3, 9, 3],
  ]);
});
