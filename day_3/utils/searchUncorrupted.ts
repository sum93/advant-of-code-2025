export const searchUncorrupted = (corruptedMemory: string) =>
  corruptedMemory.matchAll(/mul\((\d+),(\d+)\)/g);
