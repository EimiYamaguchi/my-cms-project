import Image from "next/image";
import styles from "./index.module.css";

export default function SearchField() {
  return (
    <form className={styles.form}>
      <label className={styles.search}>
        <Image
          src="/search.svg"
          alt="Search"
          width={16}
          height={16}
          loading="eager"
        />
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
      </label>
    </form>
  );
}
