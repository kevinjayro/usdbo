export default async function handler(): Promise<Response> {
  try {
    const response = await fetch('https://api.factura.bo/ExchangeRate');

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch {
    return new Response(
      JSON.stringify({
        error: 'Unable to fetch exchange rate',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
