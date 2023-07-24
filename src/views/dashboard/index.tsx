import { useEffect } from "react";
import { fetchArticles } from "../../contexts/articles/actions";
import { useArticlesDispatch } from "../../hooks/articles";
import Header from "../../components/Header";

export default function Dashboard() {
  const articleDispatch = useArticlesDispatch();

  useEffect(() => {
    fetchArticles(articleDispatch);
  }, [articleDispatch]);
  return (
    <div className="w-full ">
      <Header />

      <div className="grid p-4 col-span-2"></div>
    </div>
  );
}
