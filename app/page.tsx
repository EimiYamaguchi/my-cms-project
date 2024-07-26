import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>タイトル</h1>
        <p className={styles.description}>サブタイトル</p>
      </div>
    </section>
  );
}
