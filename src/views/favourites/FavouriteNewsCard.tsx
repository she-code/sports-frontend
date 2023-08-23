import { useState } from "react";
import { Article } from "../../contexts/articles/types";
import ArticleDetails from "../articles/ArticleDetails";

export default function FavouriteNewsCard(props: {
  article: Article;
  articleIdx: number;
}) {
  const { article, articleIdx } = props;
  const [showModal, setShowModal] = useState(false);

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
        Read more
      </button>
      {/* <ArticlesDetail
        isOpen={isOpen}
        key={articleIdx}
        closeModal={closeModal}
        articleProp={article}
      /> */}
      {showModal && (
        <ArticleDetails onClose={closeModal} articleId={article?.id} />
      )}
    </div>
  );
}
