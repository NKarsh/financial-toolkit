# Financial Toolkit

[![npm version](https://img.shields.io/npm/v/financial-toolkit.svg)](https://www.npmjs.com/package/financial-toolkit)
[![License](https://img.shields.io/npm/l/financial-toolkit.svg)](https://www.npmjs.com/package/financial-toolkit)

A comprehensive JavaScript/TypeScript library for financial analysis and technical indicators. This library provides essential tools to help developers and traders analyze financial data, including moving averages and momentum indicators.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Available Functions](#available-functions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the Financial Toolkit via npm:

```bash
npm install financial-toolkit
```

Or with yarn:

```bash
yarn add financial-toolkit
```

## Features

- **Simple Moving Average (SMA):** Calculate the SMA over a specified period.
- **Exponential Moving Average (EMA):** Calculate the EMA for trend analysis.
- **Relative Strength Index (RSI):** Measure the speed and change of price movements.

## Available Functions

| Function Name       | Description                                                              | Example Usage                        |
| ------------------- | ------------------------------------------------------------------------ | ------------------------------------ |
| `sma(data, period)` | Calculates the Simple Moving Average (SMA) over a specified period.      | `const smaValues = sma(prices, 5);`  |
| `ema(data, period)` | Calculates the Exponential Moving Average (EMA) over a specified period. | `const emaValues = ema(prices, 5);`  |
| `rsi(data, period)` | Calculates the Relative Strength Index (RSI) for a given dataset.        | `const rsiValues = rsi(prices, 14);` |

## Usage

Here’s a quick example of how to use the Financial Toolkit:

```typescript
import { sma, ema, rsi } from "financial-toolkit/indicators";

const prices = [
  22.27, 22.19, 22.08, 22.17, 22.18, 22.13, 22.23, 22.43, 22.24, 22.29,
];

const smaValues = sma(prices, 5);
const emaValues = ema(prices, 5);
const rsiValues = rsi(prices, 14);

console.log("SMA:", smaValues);
console.log("EMA:", emaValues);
console.log("RSI:", rsiValues);
```

## Contributing

Contributions are welcome! If you have any ideas, improvements, or new indicators that you’d like to see, feel free to submit a pull request.
