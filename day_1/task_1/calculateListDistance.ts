import { transformToColumns } from "../utils/transform";

export const calculateListDistance = (input: string): number => {
  const [leftList, rightList] = transformToColumns(input);
  const sortedLeftList = leftList.sort();
  const sortedRightList = rightList.sort();

  let distance = 0;
  for (const [leftIndex, leftLocation] of sortedLeftList.entries()) {
    distance += Math.abs(leftLocation - sortedRightList[leftIndex]);
  }

  return distance;
};
