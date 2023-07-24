import { useArticlesState } from "../../hooks/articles";
import ArticleListItem from "./ArticleListItem";

export default function ArticlesList(props: { sportID: number }) {
  const { sportID } = props;
  const articleState = useArticlesState();
  const { articles, isError, isLoading } = articleState;
  if (isError) {
    return <div>Something went wrong ...</div>;
  }
  if (articles.length == 0 && isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      {sportID > 0
        ? articles
            .filter((article) => article.sport.id === sportID)
            .sort((a, b) => (a.date > b.date ? -1 : 1))
            .map((article) => {
              return <ArticleListItem article={article} key={article.id} />;
            })
        : articles.map((article) => {
            return <ArticleListItem article={article} key={article.id} />;
          })}
    </div>
  );
}
