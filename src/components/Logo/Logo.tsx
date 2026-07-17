import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 150"
        role="img"
        aria-labelledby="logo-title"
      >
        <title id="logo-title">USDbo</title>

        <text x="250" y="105" textAnchor="middle">
          <tspan className={styles.usd}>USD</tspan>
          <tspan className={styles.bo}>bo</tspan>
        </text>
      </svg>
    </div>
  );
}
