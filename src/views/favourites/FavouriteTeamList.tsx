import { useState } from "react";
import SelectTeam from "./SelectTeam";
import { useArticlesState } from "../../hooks/articles";
import SportDropDown from "./SportsDropDown";
import FavouriteNewsCard from "./FavouriteNewsCard";
import Pagination from "../../components/Pagination";
import { filterArticles } from "../../utils/articlesUtil";

export default function FavouriteTeamList() {
  const [teamFilters, setTeamFilters] = useState("");
  const [sportFilters, setSportFilters] = useState("");

  const articleState = useArticlesState();
  const { articles } = articleState;
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredArticles = filterArticles(articles, sportFilters, teamFilters);

  const totalArticles = filteredArticles.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  const offset = (currentPage - 1) * articlesPerPage;

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
        {filteredArticles
          .slice(offset, offset + articlesPerPage)
          .map((article, articleIdx) => (
            <FavouriteNewsCard
              article={article}
              articleIdx={articleIdx}
              key={articleIdx}
            />
          ))}
        {filteredArticles?.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            count={totalArticles}
            offset={offset}
            limit={articlesPerPage}
          />
        )}
      </div>
    </div>
  );
}
