export const sumMemory = (corruptedMemory: string) => {
  const uncorruptedMemory = corruptedMemory.matchAll(/mul\((\d+),(\d+)\)/g);

  let memorySum = 0;
  for (const match of uncorruptedMemory) {
    memorySum += parseInt(match[1], 10) * parseInt(match[2], 10);
  }

  return memorySum;
};
