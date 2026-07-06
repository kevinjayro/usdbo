export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('es-BO', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
}
