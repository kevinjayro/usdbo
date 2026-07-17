export default async function handler(): Promise<Response> {
  const response = await fetch('https://api.factura.bo/ExchangeRate');

  const data = await response.json();

  return Response.json(data);
}
