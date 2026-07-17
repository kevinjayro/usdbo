import { ArrowLeftRight } from 'lucide-react';
import { useState } from 'react';

import { formatCurrency } from '../../utils/formatCurrency';

import styles from './CurrencyCalculator.module.css';

type Currency = 'USD' | 'BOB';

interface CurrencyCalculatorProps {
  exchangeRate: number;
}

export default function CurrencyCalculator({
  exchangeRate,
}: CurrencyCalculatorProps) {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState<Currency>('USD');

  const numericAmount = Number(amount);

  const toCurrency: Currency = fromCurrency === 'USD' ? 'BOB' : 'USD';

  const isValidAmount =
    amount !== '' && !Number.isNaN(numericAmount) && numericAmount >= 0;

  const convertedAmount = isValidAmount
    ? fromCurrency === 'USD'
      ? numericAmount * exchangeRate
      : numericAmount / exchangeRate
    : 0;

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
            inputMode="decimal"
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
            <ArrowLeftRight size={20} strokeWidth={2.2} />
          </button>

          <div className={styles.currency}>{toCurrency}</div>
        </div>
      </div>

      {isValidAmount && (
        <footer className={styles.footer}>
          <h3 className={styles.resultTitle}>Resultado</h3>

          <p className={styles.resultValue}>
            {formatCurrency(numericAmount)} {fromCurrency} ={' '}
            {formatCurrency(convertedAmount)} {toCurrency}
          </p>
        </footer>
      )}
    </section>
  );
}
