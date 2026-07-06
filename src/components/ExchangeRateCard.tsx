import { useExchangeRate } from '../hooks/useExchangeRate';
import { formatDate } from '../utils/formatDate';

export default function ExchangeRateCard() {
  const { data, loading, error } = useExchangeRate();

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error: {error}</h1>;

  if (!data) return <h1>No exchange rate available.</h1>;

  return (
    <div>
      <h1>USD: {data.usdBob} BOB</h1>
      <h1>UFV: {data.ufvBob.toFixed(3)}</h1>
      <h1>Last updated: {formatDate(data.updatedAt)}</h1>
    </div>
  );
}
