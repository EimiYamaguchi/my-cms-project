import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt=""
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/members">Members</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
