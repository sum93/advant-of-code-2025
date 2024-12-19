import { transformReports } from "./transformReports";

export const calculateSafeReports = (
  rawReports: string,
  withDamper = false
): number => {
  const reports = transformReports(rawReports);

  let safeReports = 0;
  for (const report of reports) {
    const { isSafe, indicesToDampen } = calculateSafety(report, withDamper);

    let safeWithDamper = false;
    for (const index of indicesToDampen) {
      if (safeWithDamper) {
        break;
      }

      safeWithDamper = calculateSafety(report.toSpliced(index, 1)).isSafe;
    }

    if (isSafe || safeWithDamper) {
      safeReports += 1;
    }
  }

  return safeReports;
};

const calculateSafety = (report: Array<number>, shouldDampen = false) => {
  let isSafe: boolean;
  let isAscending: boolean;
  let indicesToDampen: Array<number> = [];
  for (const [index, level] of report.entries()) {
    if (!index) {
      continue;
    }

    const prevLevel = report[index - 1];
    const delta = level - prevLevel;
    if (index === 1) {
      isAscending = delta > 0;
    }

    const distance = Math.abs(delta);
    const violatesTrend =
      (isAscending && delta <= 0) || (!isAscending && delta >= 0);
    const violatesDistance = distance > 3 || 1 > distance;
    const violatesRules = violatesTrend || violatesDistance;
    isSafe = !violatesRules;

    if (!isSafe) {
      if (shouldDampen) {
        indicesToDampen = [0, index - 1, index];
      }

      break;
    }
  }

  return {
    isSafe,
    indicesToDampen,
  };
};
