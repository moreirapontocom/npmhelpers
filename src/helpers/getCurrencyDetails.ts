import currencies from "./currencies";

const getCurrencyDetails = (currency: string = 'BRL') => {
  const item: any = currencies.find((c: any) => c.code.toUpperCase() === currency.toUpperCase());
  if (!item) {
    return currencies[1];
  }

  return item;
};

export default getCurrencyDetails;
