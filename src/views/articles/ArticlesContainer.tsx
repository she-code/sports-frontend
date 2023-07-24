import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useArticlesDispatch } from "../../hooks/articles";
import { fetchArticles } from "../../contexts/articles/actions";
const ArticlesContainer = () => {
  const articleDispatch = useArticlesDispatch();
  useEffect(() => {
    fetchArticles(articleDispatch);
  }, [articleDispatch]);
  return <Outlet />;
};

export default ArticlesContainer;
