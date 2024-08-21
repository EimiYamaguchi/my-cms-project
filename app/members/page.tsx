import Image from "next/image";
import styles from "./page.module.css";
import { getMembersList } from "../_libs/microcms";

export default async function Page() {
  const data = await getMembersList();
  return (
    <div>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>No members.</p>
      ) : (
        <ul>
          {data.contents.map((item) => (
            <li key={item.id} className={styles.list}>
              <Image
                src={item.image.url}
                alt=""
                width={item.image.width}
                height={item.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{item.name}</dt>
                <dd className={styles.position}>{item.position}</dd>
                <dd className={styles.profile}>{item.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
