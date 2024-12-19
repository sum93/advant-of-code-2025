export const transformReports = (rawReports: string): Array<Array<number>> =>
  rawReports.split(/\n/).map((rawReport) => rawReport.split(" ").map(Number));
