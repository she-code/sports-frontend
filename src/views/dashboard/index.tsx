import { useEffect } from "react";
import { fetchArticles } from "../../contexts/articles/actions";
import { useArticlesDispatch } from "../../hooks/articles";
import { fetchSports } from "../../contexts/sports/actions";
import { useSportsDispatch } from "../../hooks/sports";
import Sports from "../sports";
import { useMatchesDispatch } from "../../hooks/matches";
import { fetchMatches } from "../../contexts/matches/actions";
import Matches from "../matches";
import Header from "../../components/Header";
import Favourite from "../favourites";
import { useTeamsDispatch } from "../../hooks/teams";
import { fetchTeams } from "../../contexts/teams/actions";

export default function Dashboard() {
  const articleDispatch = useArticlesDispatch();
  const sportDispatch = useSportsDispatch();
  const matchDispatch = useMatchesDispatch();
  const teamDispatch = useTeamsDispatch();
  useEffect(() => {
    fetchArticles(articleDispatch);
    fetchSports(sportDispatch);
    fetchMatches(matchDispatch);
    fetchTeams(teamDispatch);
  }, [articleDispatch, sportDispatch, matchDispatch, teamDispatch]);
  return (
    <div className="w-full ">
      <Header />
      <div className="p-4">
        <Matches />
      </div>

      <div className="grid p-4 col-span-2">
        <div className="  col-start-1 lg:col-end-5 sm:col-end-7 md:col-span-3 ">
          <Sports />
        </div>
        <div className="lg:col-end-7 md-col-start-4">
          <Favourite />
        </div>
      </div>
    </div>
  );
}
