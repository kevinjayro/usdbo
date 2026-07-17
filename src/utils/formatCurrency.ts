export function formatCurrency(value: number) {
  return new Intl.NumberFormat('es-BO', {
    maximumFractionDigits: 2,
  }).format(value);
}
