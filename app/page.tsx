import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";
import { getNewsList, News } from "@/app/_libs/microcms";
import NewsList from "./_components/NewsList";
import { TOP_NEWS_LIMIT } from "./_constants";

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>タイトル</h1>
          <p className={styles.description}>サブタイトル</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/background-img.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
        />
      </section>
      <section className={styles.news}>
        <h2>記事</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
