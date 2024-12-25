import { expect, test } from "bun:test";
import { sumMemoryWithControls } from "./sumMemoryWithControls";

const mockMemory = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

test("returns sum extracted from corrupted controlled memory", () => {
  expect(sumMemoryWithControls(mockMemory)).toBe(48);
});
