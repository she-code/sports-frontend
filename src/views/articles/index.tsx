import { Suspense } from "react";
// const ArticlesList = React.lazy(() => import("./ArticlesList"));

import ErrorBoundary from "../../components/ErrorBoundary";

const Articles = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Articles</h2>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          {/* <ArticlesList /> */}
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default Articles;
