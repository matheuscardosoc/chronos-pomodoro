import { Timer } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a href='/' className={styles.logoLink}>
        <Timer className={styles.svg} />
        <span>Chronos</span>
      </a>
    </div>
  );
}
