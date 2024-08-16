/**
 * Calculates the Simple Moving Average (SMA) for a given dataset.
 *
 * @param {number[]} data - The array of numerical data points.
 * @param {number} period - The period over which to calculate the SMA.
 * @returns {number[]} The array containing the SMA values.
 *
 * @example
 * const prices = [22.27, 22.19, 22.08, 22.17, 22.18, 22.13, 22.23, 22.43, 22.24, 22.29];
 * const period = 5;
 * const smaValues = sma(prices, period);
 * console.log(smaValues); // Output: [22.178, 22.176, 22.18, ...]
 *
 * @description
 * The SMA is a type of moving average that calculates the average of the last `period`
 * data points. It's a straightforward and commonly used method to smooth out data series
 * and identify trends by averaging out the fluctuations.
 */
export function sma(data: number[], period: number): number[] {
  const smaResult: number[] = [];
  for (let i = 0; i <= data.length - period; i++) {
    const sum = data.slice(i, i + period).reduce((acc, val) => acc + val, 0);
    smaResult.push(sum / period);
  }
  return smaResult;
}
