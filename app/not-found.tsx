import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりませんでした。</dt>
        <dd className={styles.text}>
          アクセスしようとしたページは削除されたか、存在しないページです。
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
    </div>
  );
}
