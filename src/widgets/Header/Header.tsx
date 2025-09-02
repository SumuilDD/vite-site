import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <span className={styles.logo}>FSD Vite Demo</span>
    <nav>
      <a href="/">Головна</a>
    </nav>
  </header>
);
