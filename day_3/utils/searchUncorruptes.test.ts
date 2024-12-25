import { expect, test } from "bun:test";
import { searchUncorrupted } from "./searchUncorrupted";

const mockInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

test("returns all uncorrupted operands", () => {
  const iterable = searchUncorrupted(mockInput);
  expect(
    Array.from(iterable).map((match) => [match[1], match[2]])
  ).toMatchObject([
    ["2", "4"],
    ["5", "5"],
    ["11", "8"],
    ["8", "5"],
  ]);
});
