import React, { Suspense } from "react";
const MatchesList = React.lazy(() => import("./MatchesList"));

export default function Matches() {
  return (
    <div className="mt-3 p-3">
      <h1 className="text-2xl font-semibold text-gray-600">Live Matches</h1>
      <Suspense fallback={<div className="suspense-loading">Loading..</div>}>
        <MatchesList />
      </Suspense>
    </div>
  );
}
