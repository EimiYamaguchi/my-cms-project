"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./index.module.css";

export default function SearchField() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      const parms = new URLSearchParams();
      parms.set("q", q.value.trim());
      router.push(`/news/search?${parms.toString()}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
          name="q"
          defaultValue={searchParams.get("q") || ""}
        />
      </label>
    </form>
  );
}
