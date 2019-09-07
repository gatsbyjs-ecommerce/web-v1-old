import currency from 'currency.js';

export const formatCurrency = value =>
  currency(parseFloat(value), {
    symbol: `${config.currency} `,
    formatWithSymbol: true,
  }).format();

export const log = value => console.log(value); // eslint-disable-line
