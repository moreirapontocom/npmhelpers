const _currencies: any[] = [
  { currency: 'BRL', locale: 'pt-BR' },
  { currency: 'USD', locale: 'en-US' },
  { currency: 'EUR', locale: 'de-DE' },
  { currency: 'JPY', locale: 'ja-JP' },
];

const formatNumberToCurrency = (currency: string = 'BRL', amount: number): string => {
  return new Intl.NumberFormat(_currencies.find((item: any) => item.currency === currency.toUpperCase()).locale, { style: 'currency', currency: currency.toUpperCase() }).format(amount);
}

export default formatNumberToCurrency;
