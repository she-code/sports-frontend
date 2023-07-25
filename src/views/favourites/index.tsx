import { Suspense } from "react";
import FavouriteTeamList from "./FavouriteTeamList";
import ErrorBoundary from "../../components/ErrorBoundary";

export default function Favourite() {
  return (
    <div className="border-2 rounded-lg p-3 w-full h-full ">
      <h2 className="mt-3 mx-4 text-xl font-semibold  mb-4 text-center ">
        {" "}
        Favourites
      </h2>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <FavouriteTeamList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
