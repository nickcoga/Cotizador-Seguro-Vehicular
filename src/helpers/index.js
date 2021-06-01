const largeNumberFormatter = (number) => {
  return number.toLocaleString();
};

const fixDecimalsFormatter = (number) => {
  return (Math.round(number * 100) / 100).toFixed(2);
};

export const helpers = { largeNumberFormatter, fixDecimalsFormatter };
