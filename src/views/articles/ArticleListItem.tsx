import { Article } from "../../contexts/articles/types";

import { useState } from "react";
import ArticlesDetail from "./ArticlesDetail";

export default function ArticleListItem(props: { article: Article }) {
  const { article } = props;
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="bg-white p-2 my-3 sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none w-full">
      <div
        style={{
          background: `url(${article.thumbnail}) no-repeat center center / cover`,
        }}
        className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
      ></div>
      <div className="flex sm:flex-1 flex-col gap-2 p-1 text-base">
        <p>{article.sport.name}</p>
        <h1 className="text-lg sm:text-xl font-semibold  text-gray-600">
          {article.title}
        </h1>
        <div className="w-2/5 overflow-hidden">
          <p className="text-gray-500 text-base sm:text-base whitespace-nowrap truncate">
            {article.summary}
          </p>
        </div>

        <p className="text-gray-500 text-sm sm:text-base">
          {new Date(article.date).toDateString().substring(4)}
        </p>

        <div className="flex gap-4 mt-auto">
          <button
            type="button"
            onClick={openModal}
            className="ml-auto flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500"
          >
            Read more
          </button>
        </div>
      </div>
      {/* <Modal closeCB={() => closeModal} open={isOpen}>
        <ArticleDetails article={article} />
      </Modal> */}
      <ArticlesDetail
        isOpen={isOpen}
        closeModal={closeModal}
        article={article}
      />
    </div>
  );
}
