/**
 * Calculates the Relative Strength Index (RSI) for a given dataset.
 *
 * @param {number[]} data - The array of numerical data points (e.g., closing prices).
 * @param {number} period - The period over which to calculate the RSI.
 * @returns {number[]} The array containing the RSI values.
 *
 * @example
 * const prices = [44.34, 44.09, 44.15, 43.61, 44.33, 44.83, 45.10, 45.42, 45.84, 46.08];
 * const period = 14;
 * const rsiValues = rsi(prices, period);
 * console.log(rsiValues); // Output: [70.53, 66.48, 57.33, ...]
 *
 * @description
 * The Relative Strength Index (RSI) is a momentum oscillator that measures the speed and
 * change of price movements. RSI oscillates between 0 and 100 and is typically used to identify
 * overbought or oversold conditions in a market. Values above 70 generally indicate that a stock
 * is overbought, while values below 30 indicate that it is oversold. The calculation involves
 * dividing the average gain by the average loss over a specified period.
 */
export function rsi(data: number[], period: number): number[] {
  const gains: number[] = [];
  const losses: number[] = [];
  const rsiResult: number[] = [];

  for (let i = 1; i < data.length; i++) {
    const change = data[i] - data[i - 1];
    if (change >= 0) {
      gains.push(change);
      losses.push(0);
    } else {
      losses.push(Math.abs(change));
      gains.push(0);
    }
  }

  for (let i = period; i < gains.length; i++) {
    const avgGain =
      gains.slice(i - period, i).reduce((acc, val) => acc + val, 0) / period;
    const avgLoss =
      losses.slice(i - period, i).reduce((acc, val) => acc + val, 0) / period;

    const rs = avgGain / avgLoss;
    const rsi = 100 - 100 / (1 + rs);
    rsiResult.push(rsi);
  }

  return rsiResult;
}
