import { Article } from "../../contexts/articles/types";

export default function ArticleDetails(props: { article: Article }) {
  const { article } = props;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-500 opacity-75">
          {article.summary}
        </div>
      </div>
    </>
  );
}
