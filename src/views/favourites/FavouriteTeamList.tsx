import { useState } from "react";
import SelectTeam from "./SelectTeam";
import { useArticlesState } from "../../hooks/articles";
import SportDropDown from "./SportsDropDown";
import FavouriteNewsCard from "./FavouriteNewsCard";

export default function FavouriteTeamList() {
  const [teamFilters, setTeamFilters] = useState("");
  const [sportFilters, setSportFilters] = useState("");

  const articleState = useArticlesState();
  const { articles } = articleState;
  return (
    <div className="p-3">
      <div className="grid grid-cols-2 gap-4  mb-7">
        <SportDropDown setSportFilterCB={setSportFilters} />
        <SelectTeam
          setTeamFiltersCB={setTeamFilters}
          selectedSport={sportFilters}
        />
      </div>
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
            // Default case if none of the above conditions match
            return false;
          })
          .map((article, articleIdx) => (
            <FavouriteNewsCard
              article={article}
              articleIdx={articleIdx}
              key={articleIdx}
            />
          ))}
      </div>
    </div>
  );
}
