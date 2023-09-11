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
import { useUsersDispatch } from "../../hooks/users";
import { fetchPreferences, fetchUser } from "../../contexts/users/actions";

export default function Dashboard() {
  const articleDispatch = useArticlesDispatch();
  const sportDispatch = useSportsDispatch();
  const matchDispatch = useMatchesDispatch();
  const teamDispatch = useTeamsDispatch();
  const usersDispatcch = useUsersDispatch();
  useEffect(() => {
    fetchArticles(articleDispatch);
    fetchSports(sportDispatch);
    fetchMatches(matchDispatch);
    fetchTeams(teamDispatch);
    fetchPreferences(usersDispatcch);
    fetchUser(usersDispatcch);
  }, [
    articleDispatch,
    sportDispatch,
    matchDispatch,
    teamDispatch,
    usersDispatcch,
  ]);
  return (
    <div className="w-full bg-bgRoot">
      <Header />
      <div className="p-4">
        <Matches />
      </div>

      <div className="grid md:grid-cols-3 gap-4 p-8">
        <div className=" col-span-2 ">
          <Sports />
        </div>
        <div className="bg-bgFav mt-11 rounded-lg">
          <Favourite />
        </div>
      </div>
    </div>
  );
}
