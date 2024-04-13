import { useState } from "react";
import { Article } from "../../contexts/articles/types";
import ArticleDetails from "../articles/ArticleDetails";
import { useTranslation } from "react-i18next";
export default function FavouriteNewsCard(props: {
  article: Article;
  articleIdx: number;
}) {
  const { article, articleIdx } = props;
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }
  return (
    <div
      key={articleIdx}
      className="border-2  p-4 mb-3 bg-white border-transparent rounded-lg w-full h-full"
    >
      <p className="text-lg  font-medium">{article.title}</p>
      <button
        type="button"
        onClick={openModal}
        className="focus:outline-none py-2 px-4 rounded-lg bg-green-500 hover:bg-green-700 text-white font-semibold my-3 mx-auto"
      >
        {t("readMore")}
      </button>

      {showModal && (
        <ArticleDetails onClose={closeModal} articleId={article?.id} />
      )}
    </div>
  );
}
