export function ema(data: number[], period: number): number[] {
  const emaResult: number[] = [];
  const multiplier = 2 / (period + 1);

  let initialSMA =
    data.slice(0, period).reduce((acc, val) => acc + val, 0) / period;
  emaResult.push(initialSMA);

  for (let i = period; i < data.length; i++) {
    const ema =
      (data[i] - emaResult[emaResult.length - 1]) * multiplier +
      emaResult[emaResult.length - 1];
    emaResult.push(ema);
  }

  return emaResult;
}
