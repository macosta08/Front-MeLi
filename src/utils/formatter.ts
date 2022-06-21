/*  Función para formatear los precios.*/

export const formatCurrency = (amount: number, currency: string) => {
  const locale = `es-${currency.slice(0, 2)}`;
  const option = { style: 'currency', currency };

  return amount.toLocaleString(locale, option).split(',')[0];
};
