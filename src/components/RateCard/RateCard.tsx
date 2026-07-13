import styles from './RateCard.module.css';

interface RateCardProps {
  title: string;
  symbol: string;
  value: number | string;
  description: string;
}
export default function RateCard({
  title,
  symbol,
  value,
  description,
}: RateCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </header>

      <div className={styles.body}>
        <div className={styles.valueContainer}>
          <span className={styles.symbol}>{symbol}</span>

          <span className={styles.value}>Bs {value}</span>
        </div>
      </div>

      <footer className={styles.footer}>
        <p className={styles.description}>{description}</p>
      </footer>
    </article>
  );
}
