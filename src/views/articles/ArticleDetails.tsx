import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { fetchArticle } from "../../contexts/articles/actions";
import { useArticlesDispatch, useArticlesState } from "../../hooks/articles";
import { ArticleListAvilableAction } from "../../contexts/articles/types";

export default function ArticleDetails(props: {
  onClose: () => void;
  articleId: number;
}) {
  const { onClose, articleId } = props;
  const articleDispatch = useArticlesDispatch();
  const { article, isLoading } = useArticlesState();

  useEffect(() => {
    fetchArticle(articleDispatch, Number(articleId));
    console.log(article, "from single article");
    return () => {
      articleDispatch({ type: ArticleListAvilableAction.CLEAR_ARTICLE });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Transition show={true}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-[800px] max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {isLoading ? (
                  <div className="suspense-loading">Loading...</div>
                ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {article?.title}{" "}
                      </Dialog.Title>
                      <button
                        onClick={onClose}
                        className="hover:bg-blue-500 px-2 py-1 rounded-md hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-2 h-60">
                      <div
                        style={{
                          background: `url(${article?.thumbnail}) no-repeat center center / cover`,
                        }}
                        className="h-full w-full bg-gray-100 bg-center bg-cover"
                      ></div>
                      <p className="mt-3">
                        Published on:{" "}
                        {new Date(article?.date as string)
                          .toDateString()
                          .substring(4)}
                      </p>
                      <p className=" text-base text-gray-500 mt-3 text-justify">
                        {article?.content}
                      </p>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
