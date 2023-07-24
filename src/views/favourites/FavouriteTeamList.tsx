import { useState } from "react";
import SelectTeam from "./SelectTeam";
import { useArticlesState } from "../../hooks/articles";
import SportDropDown from "./SportsDropDown";

export default function FavouriteTeamList() {
  const [teamFilters, setTeamFilters] = useState("");
  const [sportFilters, setSportFilters] = useState("");

  const articleState = useArticlesState();
  const { isLoading, articles } = articleState;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {" "}
      <SelectTeam setTeamFiltersCB={setTeamFilters} />
      <SportDropDown setSportFilterCB={setSportFilters} />
      <div>
        {articles
          .filter((article) => {
            // If no teamFilters selected, return all articles
            if (teamFilters === "" && sportFilters === "") {
              return true;
            }

            // If both teamFilters and sportFilters are selected, filter based on both
            if (teamFilters !== "" && sportFilters !== "") {
              return (
                article.title.includes(teamFilters) &&
                article.sport.name === sportFilters
              );
            }

            // If only teamFilters is selected, filter based on team
            if (teamFilters !== "") {
              return article.title.includes(teamFilters);
            }

            // If only sportFilters is selected, filter based on sport
            if (sportFilters !== "") {
              return article.sport.name === sportFilters;
            }

            return false; // Default case if none of the above conditions match
          })
          .map((article, articleIdx) => (
            <div
              key={articleIdx}
              className="border-2 rounded-lg p-3 w-full h-full"
            >
              {article.title}
            </div>
          ))}
      </div>
    </div>
  );
}
