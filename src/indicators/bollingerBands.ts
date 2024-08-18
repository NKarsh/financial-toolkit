/**
 * Calculates the Bollinger Bands for a given dataset.
 *
 * @param {number[]} data - The array of numerical data points.
 * @param {number} period - The period over which to calculate the SMA.
 * @param {number} k - The number of standard deviations to determine the width of the bands.
 * @returns {{ middleBand: number[]; upperBand: number[]; lowerBand: number[] }} An object containing arrays for the middle, upper, and lower Bollinger Bands.
 *
 * @example
 * const prices = [22.27, 22.19, 22.08, 22.17, 22.18, 22.13, 22.23, 22.43, 22.24, 22.29];
 * const period = 5;
 * const k = 2;
 * const bollingerBands = bollingerBands(prices, period, k);
 * console.log(bollingerBands);
 * // Output:
 * // {
 * //   middleBand: [22.188, 22.158, 22.18, ...],
 * //   upperBand: [22.58, 22.53, 22.60, ...],
 * //   lowerBand: [21.79, 21.78, 21.76, ...]
 * // }
 *
 * @description
 * Bollinger Bands are a volatility indicator that consists of three bands: the middle band is a Simple Moving Average (SMA),
 * and the upper and lower bands are calculated by adding/subtracting a specified number of standard deviations (k) from the middle band.
 * Bollinger Bands help to identify overbought and oversold conditions by comparing price levels to the bands.
 */
export function bollingerBands(
  data: number[],
  period: number,
  k: number
): { middleBand: number[]; upperBand: number[]; lowerBand: number[] } {
  const middleBand: number[] = [];
  const stdDev: number[] = [];

  // Calulate the sma + volatility
  for (let i = 0; i <= data.length - period; i++) {
    const sma =
      data.slice(i, i + period).reduce((acc, val) => acc + val, 0) / period;
    middleBand.push(sma);

    const variance =
      data
        .slice(i, i + period)
        .reduce((acc, val) => acc + Math.pow(val - sma, 2), 0) / period;
    stdDev.push(Math.sqrt(variance));
  }

  const upperBand: number[] = middleBand.map(
    (smaValue, i) => smaValue + k * stdDev[i]
  );
  const lowerBand: number[] = middleBand.map(
    (smaValue, i) => smaValue - k * stdDev[i]
  );

  return { middleBand, upperBand, lowerBand };
}
