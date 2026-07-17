import { useExchangeRate } from '../../hooks/useExchangeRate';
import { formatDate } from '../../utils/formatDate';

import CurrencyCalculator from '../CurrencyCalculator/CurrencyCalculator';
import Logo from '../Logo/Logo';
import RateCard from '../RateCard/RateCard';
import StatusMessage from '../StatusMessage/StatusMessage';

import styles from './ExchangeRateCard.module.css';

export default function ExchangeRateCard() {
  const { data, loading, error } = useExchangeRate();

  if (loading) {
    return (
      <div className={styles.statusContainer}>
        <StatusMessage
          type="loading"
          title={<Logo />}
          description="Consultando la última cotización disponible."
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.statusContainer}>
        <StatusMessage
          type="error"
          title="No se pudo cargar el tipo de cambio."
          description="Verifica tu conexión a Internet e inténtalo nuevamente."
        />
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.statusContainer}>
        <StatusMessage type="noData" title="No hay información disponible." />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <Logo />
        </div>

        <p className={styles.subtitle}>
          Tipo de cambio del dólar estadounidense en Bolivia.
        </p>

        <p className={styles.updated}>
          <strong>Fecha de actualización:</strong> {formatDate(data.updatedAt)}
        </p>
      </header>

      <main className={styles.content}>
        <RateCard
          title="Cotización del dólar estadounidense"
          symbol="USD"
          value={data.usdBob.toFixed(2)}
          description="Valor referencial en bolivianos (BOB) por 1 dólar estadounidense."
        />

        <CurrencyCalculator exchangeRate={data.usdBob} />
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
