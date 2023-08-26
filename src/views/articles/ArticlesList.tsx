import { useArticlesState } from "../../hooks/articles";
import { useUsersState } from "../../hooks/users";
import ArticleListItem from "./ArticleListItem";

export default function ArticlesList(props: { sportID: number }) {
  const { sportID } = props;
  const articleState = useArticlesState();
  const userState = useUsersState();
  const { articles, isError, isLoading } = articleState;
  const { preferences } = userState;
  if (isError) {
    return <div>Something went wrong ...</div>;
  }
  if (articles.length == 0 && isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      {/* {sportID > 0
        ? articles
            .filter((article) => article.sport.id === sportID)
            .sort((a, b) => (a.date > b.date ? -1 : 1))
            .map((article) => {
              return <ArticleListItem article={article} key={article.id} />;
            })
        : articles.map((article) => {
            return <ArticleListItem article={article} key={article.id} />;
          })} */}
      {articles
        .filter((article) =>
          preferences?.sports
            ? preferences?.sports?.includes(article.sport.name.toLowerCase())
            : true
        )
        .filter((article) =>
          sportID > 0 ? article.sport.id === sportID : true
        )
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map((article) => (
          <ArticleListItem article={article} key={article.id} />
        ))}
    </div>
  );
}
