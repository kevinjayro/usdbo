import { useExchangeRate } from '../../hooks/useExchangeRate';
import { formatDate } from '../../utils/formatDate';
import RateCard from '../RateCard/RateCard';
import styles from './ExchangeRateCard.module.css';

export default function ExchangeRateCard() {
  const { data, loading, error } = useExchangeRate();

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error: {error}</h1>;

  if (!data) return <h1>No exchange rate available.</h1>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>USDbo</h1>

        <p className={styles.subtitle}>
          Información referencial del tipo de cambio en Bolivia.
        </p>

        <p className={styles.updated}>
          Fecha de actualización: {formatDate(data.updatedAt)}
        </p>
      </header>

      <main className={styles.content}>
        <RateCard
          title="Cotización del dólar estadounidense"
          symbol="USD"
          value={data.usdBob.toFixed(2)}
          description="Valor referencial en bolivianos (BOB) por 1 dólar estadounidense."
        />
      </main>

      <footer className={styles.footer}>
        Información obtenida a través de{' '}
        <a
          href="https://factura.bo/api-tipo-de-cambio-bolivia"
          target="_blank"
          rel="noopener noreferrer"
        >
          factura.bo
        </a>
        , basada en datos del{' '}
        <a
          href="https://www.bcb.gob.bo/tco_reporte_ultima_cotizacion.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Banco Central de Bolivia
        </a>
      </footer>
    </div>
  );
}
