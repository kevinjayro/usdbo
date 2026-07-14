import { useState } from 'react';
import styles from './CurrencyCalculator.module.css';

type CurrencyCalculatorProps = {
  exchangeRate: number;
};

export default function CurrencyCalculator({
  exchangeRate,
}: CurrencyCalculatorProps) {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState<'USD' | 'BOB'>('USD');

  const numericAmount = Number(amount);

  const toCurrency = fromCurrency === 'USD' ? 'BOB' : 'USD';

  const isValidAmount =
    amount !== '' && !Number.isNaN(numericAmount) && numericAmount >= 0;

  const convertedAmount =
    fromCurrency === 'USD'
      ? numericAmount * exchangeRate
      : numericAmount / exchangeRate;

  const handleSwap = () => {
    setFromCurrency((current) => (current === 'USD' ? 'BOB' : 'USD'));
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Convertir Dólares y Bolivianos</h2>
      </header>

      <div className={styles.body}>
        <div className={styles.formGroup}>
          <label htmlFor="amount" className={styles.label}>
            Monto
          </label>

          <input
            id="amount"
            className={styles.input}
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Ingresa un monto"
          />
        </div>

        <div className={styles.currencySelector}>
          <div className={styles.currency}>{fromCurrency}</div>

          <button
            type="button"
            className={styles.swapButton}
            onClick={handleSwap}
            aria-label="Intercambiar monedas"
          >
            ⇄
          </button>

          <div className={styles.currency}>{toCurrency}</div>
        </div>
      </div>

      {isValidAmount && (
        <footer className={styles.footer}>
          <h3 className={styles.resultTitle}>Resultado</h3>

          <p className={styles.resultValue}>
            {numericAmount} {fromCurrency} = {convertedAmount.toFixed(2)}{' '}
            {toCurrency}
          </p>
        </footer>
      )}
    </section>
  );
}
