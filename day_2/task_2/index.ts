import { calculateSafeReports } from "../utils/calculateSafeReports";
import { input } from "../input";

const safeReports = calculateSafeReports(input, true);

console.log(safeReports);
