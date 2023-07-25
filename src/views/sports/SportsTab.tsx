import React, { Suspense } from "react";
import { Tab } from "@headlessui/react";

import { useSportsState } from "../../hooks/sports";
import ErrorBoundary from "../../components/ErrorBoundary";
const ArticlesList = React.lazy(() => import("../articles/ArticlesList"));

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SportsTab() {
  const sportState = useSportsState();
  const { sports, isLoading, isError, errorMessage } = sportState;

  if (sports.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    sports && (
      <div className="w-full  px-2 mr-3 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-600">Trending News</h1>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20  mt-4">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-lg font-[500] leading-5 ",
                  "ring-white ring-opacity-60   focus:outline-none border-transparent",
                  selected
                    ? "bg-green-400  text-white"
                    : "text-slate-700 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              All
            </Tab>

            {/* Render the tabs */}
            {Array.isArray(sports) && sports.length > 0 ? (
              sports.map((sport) => (
                <Tab
                  key={sport.id}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-lg font-[500] leading-5 ",
                      "ring-white ring-opacity-60   focus:outline-none border-transparent",
                      selected
                        ? "bg-green-400  text-white"
                        : "text-slate-700 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {sport.name}
                </Tab>
              ))
            ) : (
              <span>No sports data available.</span>
            )}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {/* Render the "All" tab panel */}
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                <li>
                  <ErrorBoundary>
                    <Suspense
                      fallback={
                        <div className="suspense-loading">Loading...</div>
                      }
                    >
                      <ArticlesList sportID={0} />
                    </Suspense>
                  </ErrorBoundary>
                </li>
              </ul>
            </Tab.Panel>

            {/* Render the tab panels */}
            {Array.isArray(sports) && sports.length > 0 ? (
              sports.map((sport) => (
                <Tab.Panel
                  key={sport.id}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    <li className="relative rounded-md p-3 hover:bg-gray-100">
                      <ul>
                        <li>
                          <ErrorBoundary>
                            <Suspense
                              fallback={
                                <div className="suspense-loading">
                                  Loading...
                                </div>
                              }
                            >
                              <ArticlesList sportID={sport.id} />
                            </Suspense>
                          </ErrorBoundary>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Tab.Panel>
              ))
            ) : (
              <span>No sports data available.</span>
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>
    )
  );
}
