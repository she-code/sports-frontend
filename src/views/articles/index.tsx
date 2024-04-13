import { Suspense } from "react";
// const ArticlesList = React.lazy(() => import("./ArticlesList"));
import { useTranslation } from "react-i18next";
import ErrorBoundary from "../../components/ErrorBoundary";

const Articles = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">{t("articles")}</h2>
      </div>
      <ErrorBoundary>
        <Suspense
          fallback={<div className="suspense-loading">{t("loading")}...</div>}
        >
          {/* <ArticlesList /> */}
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default Articles;
