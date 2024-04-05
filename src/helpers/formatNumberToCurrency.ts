const formatNumberToCurrency = (locale: string = 'pt-BR', currency: string = 'BRL', amount: number): string => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: currency.toUpperCase() }).format(amount);
}

export default formatNumberToCurrency;
