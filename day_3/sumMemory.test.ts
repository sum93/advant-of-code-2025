import { expect, test } from "bun:test";
import { sumMemory } from "./sumMemory";

const mockMemory = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

test("returns sum extracted from corrupted memory", () => {
  expect(sumMemory(mockMemory)).toBe(161);
});
