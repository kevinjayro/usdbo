import { useEffect, useState } from 'react';
import { fetchExchangeRate } from '../services/exchangeRateService';
import type { ExchangeRate } from '../types/exchangeRate';

export function useExchangeRate() {
  const [data, setData] = useState<ExchangeRate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadExchangeRate() {
      try {
        const exchangeRate = await fetchExchangeRate();
        setData(exchangeRate);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadExchangeRate();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
