import type { VercelResponse } from '@vercel/node';

export default async function handler(_req: Request, res: VercelResponse) {
  try {
    const response = await fetch('https://api.factura.bo/ExchangeRate');

    const data = await response.json();

    res.status(200).json(data);
  } catch {
    res.status(500).json({
      error: 'Unable to fetch exchange rate',
    });
  }
}
