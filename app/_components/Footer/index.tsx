import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="/">Home</a>
          </li>
          <li className={styles.item}>
            <a href="/about">About</a>
          </li>
          <li className={styles.item}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© 2024 Example</p>
    </footer>
  );
}
