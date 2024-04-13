import React, { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslation } from "react-i18next";
const SportsTab = React.lazy(() => import("./SportsTab"));

const Sports = () => {
  const { t } = useTranslation();
  return (
    <ErrorBoundary>
      <Suspense
        fallback={<div className="suspense-loading">{t("loading")}..</div>}
      >
        <SportsTab />
      </Suspense>
    </ErrorBoundary>
  );
};
export default Sports;
