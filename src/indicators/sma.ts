export function sma(data: number[], period: number): number[] {
  const smaResult: number[] = [];
  for (let i = 0; i <= data.length - period; i++) {
    const sum = data.slice(i, i + period).reduce((acc, val) => acc + val, 0);
    smaResult.push(sum / period);
  }
  return smaResult;
}
