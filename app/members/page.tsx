import Image from "next/image";
import styles from "./page.module.css";

//メンバーの簡単なプロフィールデータ
const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "Chirpy",
      position: "チームのモチベーター",
      profile:
        "小さな体に大きなエネルギーを秘めたひよこ、Chirpy。彼はいつも明るい笑顔でオフィスを飛び回り、どんな時でもチームの士気を高めてくれます。Chirpyは問題解決に関して独自の視点を持ち、困難な状況でも軽やかに対応することができます。お昼休みには、みんなに元気を与えるための「ピヨピヨ体操」を提案するのが彼の楽しみです。",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "Buddy",
      position: "セキュリティおよびウェルカム担当",
      profile:
        "優れた嗅覚と忠誠心を持つ犬、Buddy。彼はオフィスの安全を守ることに誇りを持ち、訪れる全ての人々を温かく迎えてくれます。Buddyの優しさは、ストレスの多い仕事の日でも社員たちの心を癒してくれます。また、ランチタイムにはみんなと一緒に過ごすことが大好きで、ボール遊びや軽いジョギングを提案してリフレッシュを促します。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "Whiskers",
      position: "リサーチおよびクリエイティブ担当",
      profile:
        "鋭い直感と独自のスタイルを持つ猫、Whiskers。彼はリサーチやアイデア出しが得意で、難解な課題にも静かに取り組みます。Whiskersは一人で考える時間を大切にしつつ、独創的なアイデアをチームにもたらします。時には高い棚の上からチームの動向を観察し、クールな視点からアドバイスを送ることも。彼のリラックスした姿勢が、オフィス全体に穏やかな雰囲気をもたらします。",
    },
  ],
};

export default function Page() {
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
