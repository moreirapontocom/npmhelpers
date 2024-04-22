import getCurrencyDetails from "./getCurrencyDetails";

const currencyFormatter = (currency: string = 'BRL', value: number): string => {
  return new Intl.NumberFormat( getCurrencyDetails(currency.toUpperCase() ).locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export default currencyFormatter;
