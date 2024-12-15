import { transformToColumns } from "../utils/transform";

export const calculateListSimilarity = (input: string): number => {
  const [leftList, rightList] = transformToColumns(input);

  let totalSimilarity = 0;
  const similarityLookup: Record<number, number> = {};
  for (const leftLocation of leftList) {
    let similarity = similarityLookup[leftLocation];
    if (!similarity) {
      similarity = rightList.reduce(
        (count, item) => (item === leftLocation ? count + 1 : count),
        0
      );
      similarityLookup[leftLocation] = similarity;
    }
    totalSimilarity += leftLocation * similarity;
  }

  return totalSimilarity;
};
