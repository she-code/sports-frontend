import { useState } from "react";
import { useArticlesState } from "../../hooks/articles";
import { useUsersState } from "../../hooks/users";
import ArticleListItem from "./ArticleListItem";
import Pagination from "../../components/Pagination";

export default function ArticlesList(props: { sportID: number }) {
  const { sportID } = props;
  const articleState = useArticlesState();
  const userState = useUsersState();
  const { articles, isError, isLoading } = articleState;
  const { preferences } = userState;
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  //filter the articles based on preferences
  const filteredArticles = articles
    ?.filter((article) =>
      preferences?.sports?.length
        ? preferences?.sports?.includes(article?.sport?.name)
        : true,
    )
    .filter((article) => (sportID > 0 ? article?.sport?.id === sportID : true));

  const totalArticles = filteredArticles?.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  const offset = (currentPage - 1) * articlesPerPage;

  if (isError) {
    return <div>Something went wrong ...</div>;
  }
  if (articles.length == 0 && isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {filteredArticles
        ?.sort((a, b) => (a?.date > b?.date ? -1 : 1))
        .slice(offset, offset + articlesPerPage)
        .map((article) => (
          <ArticleListItem article={article} key={article.id} />
        ))}
      {totalArticles > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          count={totalArticles}
          offset={offset}
          limit={articlesPerPage}
        />
      )}
    </div>
  );
}
