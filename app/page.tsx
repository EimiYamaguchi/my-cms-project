import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";
import { News } from "@/app/_libs/microcms";
import NewsList from "./_components/NewsList";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "タイトル１",
      category: {
        name: "カテゴリー１",
      },
      publishedAt: "2024-07-28",
      createdAt: "2024-07-28",
    },
    {
      id: "2",
      title: "タイトル2",
      category: {
        name: "カテゴリー2",
      },
      publishedAt: "2024-07-28",
      createdAt: "2024-07-28",
    },
    {
      id: "3",
      title: "タイトル3",
      category: {
        name: "カテゴリー3",
      },
      publishedAt: "2024-07-28",
      createdAt: "2024-07-28",
    },
  ],
};
export default function Home() {
  const sliceData = data.contents.slice(0, 2);
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
        />
      </section>
      <section className={styles.news}>
        <h2>記事</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
