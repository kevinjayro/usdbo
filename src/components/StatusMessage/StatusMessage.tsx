import { CircleAlert, FileSearch, LoaderCircle } from 'lucide-react';
import type { ReactNode } from 'react';

import styles from './StatusMessage.module.css';

interface StatusMessageProps {
  type: 'loading' | 'error' | 'noData';
  title: ReactNode;
  description?: string;
  logo?: ReactNode;
}

const icons = {
  loading: <LoaderCircle className={`${styles.icon} ${styles.iconSpin}`} />,
  error: <CircleAlert className={styles.icon} />,
  noData: <FileSearch className={styles.icon} />,
};

export default function StatusMessage({
  type,
  title,
  description,
  logo,
}: StatusMessageProps) {
  return (
    <section
      className={`${styles.statusMessage} ${styles[`statusMessage--${type}`]}`}
      role="status"
      aria-live="polite"
    >
      <div className={styles.iconWrapper}>{icons[type]}</div>

      <h2 className={styles.title}>
        {logo && <span className={styles.logo}>{logo}</span>}
        {title}
      </h2>

      {description && <p className={styles.description}>{description}</p>}
    </section>
  );
}
