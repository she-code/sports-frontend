import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
const MatchesList = React.lazy(() => import("./MatchesList"));

export default function Matches() {
  const { t } = useTranslation();
  return (
    <div className="mt-3 p-3">
      <h1 className="text-2xl font-semibold text-gray-600">
        {t("liveMatches")}
      </h1>
      <Suspense
        fallback={<div className="suspense-loading">{t("loading")}..</div>}
      >
        <MatchesList />
      </Suspense>
    </div>
  );
}
