import Link from "next/link";
import styles from "./index.module.css";
type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default async function Pagination({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / 10) },
    (_, i) => i + 1
  );
  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((page) => (
          <li key={page} className={styles.list}>
            {current !== page ? (
              <Link href={`${basePath}/p/${page}`} className={styles.item}>
                {page}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{page}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
