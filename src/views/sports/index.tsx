import React, { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
const SportsTab = React.lazy(() => import("./SportsTab"));

const Sports = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="suspense-loading">Loading..</div>}>
        <SportsTab />
      </Suspense>
    </ErrorBoundary>
  );
};
export default Sports;
