import { Suspense } from "react";
import FavouriteTeamList from "./FavouriteTeamList";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslation } from "react-i18next";

export default function Favourite() {
  const { t } = useTranslation();
  return (
    <div className="border-2 rounded-lg p-3 w-full h-full ">
      <h2 className="mt-3 mx-4 text-xl font-semibold  mb-4 text-center ">
        {" "}
        {t("favourites")}
      </h2>
      <ErrorBoundary>
        <Suspense
          fallback={<div className="suspense-loading">{t("loading")}...</div>}
        >
          <FavouriteTeamList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
