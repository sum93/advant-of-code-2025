export const sumMemoryWithControls = (corruptedMemory: string) => {
  const uncorruptedMemory = corruptedMemory.matchAll(
    /do\(\)|don't\(\)|mul\((\d+),(\d+)\)/g
  );

  let memorySum = 0;
  let isLocked = false;
  for (const match of uncorruptedMemory) {
    if (match[0] === "do()") {
      isLocked = false;
      continue;
    }

    if (match[0] === "don't()") {
      isLocked = true;
      continue;
    }

    if (isLocked) {
      continue;
    }

    memorySum += parseInt(match[1], 10) * parseInt(match[2], 10);
  }

  return memorySum;
};
