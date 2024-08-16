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
