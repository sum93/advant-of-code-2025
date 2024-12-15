import { calculateListSimilarity } from "./calculateListSimilarity";
import { input } from "../input";

const listDistance = calculateListSimilarity(input);

console.log(listDistance);
