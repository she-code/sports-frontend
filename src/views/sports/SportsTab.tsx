import { Tab } from "@headlessui/react";

import { useSportsState } from "../../hooks/sports";
import ArticlesList from "../articles/ArticlesList";

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
  // const sportsArray =
  //   sports && Object.entries(sports).map(([, value]) => value)[0];

  //   //fetch sports
  return (
    sports && (
      <div className="w-full  px-2 mr-3 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-600">Trending News</h1>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mt-4">
            {/* Render the "All" tab */}
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
              {/* //className="mt-1 flex space-x-1 text-xs font-normal leading-4
              text-gray-500" */}
              <ul>
                <li>
                  <ArticlesList sportID={0} />
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
                      <h3 className="text-sm font-medium leading-5">
                        {sport.name}
                      </h3>
                      <ul>
                        <li>
                          <ArticlesList sportID={sport.id} />
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
