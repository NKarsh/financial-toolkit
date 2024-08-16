/**
 * Calculates the Exponential Moving Average (EMA) for a given dataset.
 *
 * @param {number[]} data - The array of numerical data points.
 * @param {number} period - The period over which to calculate the EMA.
 * @returns {number[]} The array containing the EMA values.
 *
 * @example
 * const prices = [22.27, 22.19, 22.08, 22.17, 22.18, 22.13, 22.23, 22.43, 22.24, 22.29];
 * const period = 5;
 * const emaValues = ema(prices, period);
 * console.log(emaValues); // Output: [22.178, 22.1936, 22.22112, ...]
 *
 * @description
 * The EMA is a type of moving average that places a greater weight and significance
 * on the most recent data points. The initial value of the EMA is calculated as a
 * Simple Moving Average (SMA) of the first `period` values. Subsequent EMA values are
 * calculated based on the previous EMA and the current data point.
 */
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
