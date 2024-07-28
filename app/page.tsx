import Image from "next/image";
import styles from "./page.module.css";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

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
        <ul>
          {sliceData.map((article) => (
            <li key={article.id} className={styles.list}>
              <div className={styles.link}>
                <Image
                  className={styles.image}
                  src="/no-image.jpg"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
                <dl className={styles.content}>
                  <dt className={styles.newsItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.tag}>{article.category.name}</span>
                    <span className={styles.date}>
                      <Image
                        src="/cloack.svg"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
