export interface ExchangeRateApiResponse {
  ok: boolean;
  datos: {
    moneda_base: string;
    ufv_bob: number;
    usd_bob: number;
    fecha_actualizacion: string;
  };
  error: string | null;
  timestamp: string;
}

export interface ExchangeRate {
  baseCurrency: string;
  ufvBob: number;
  usdBob: number;
  updatedAt: string;
}
