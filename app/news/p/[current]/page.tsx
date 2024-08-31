import NewsList from "@/app/_components/NewsList";
import { getNewsList } from "@/app/_libs/microcms";
import { parse } from "path";

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);
  const { contents: news } = await getNewsList({
    limit: 10,
    offset: 10 * (current - 1),
  });

  return <NewsList news={news} />;
}
