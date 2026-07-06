import type {
  ExchangeRate,
  ExchangeRateApiResponse,
} from '../types/exchangeRate';

const API_URL = '/api/ExchangeRate';

export async function fetchExchangeRate(): Promise<ExchangeRate> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      `Exchange rate request failed (status: ${response.status})`,
    );
  }

  const data: ExchangeRateApiResponse = await response.json();

  validateResponse(data);

  return mapExchangeRate(data);
}

function validateResponse(
  data: ExchangeRateApiResponse,
): asserts data is ExchangeRateApiResponse {
  if (!data || !data.datos) {
    throw new Error('Invalid exchange rate API response');
  }
}

function mapExchangeRate(data: ExchangeRateApiResponse): ExchangeRate {
  const { datos } = data;

  return {
    baseCurrency: datos.moneda_base,
    ufvBob: datos.ufv_bob,
    usdBob: datos.usd_bob,
    updatedAt: datos.fecha_actualizacion,
  };
}
