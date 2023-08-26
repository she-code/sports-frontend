import { useMatchesState } from "../../hooks/matches";
import { useUsersState } from "../../hooks/users";
import MatchListItem from "./MatchListItem";

export default function MatchesList() {
  const matchState = useMatchesState();
  const userState = useUsersState();
  const { preferences } = userState;
  const { matches, isError } = matchState;
  if (isError) return <div>Error...</div>;
  // if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex mt-5  min-w-[400px] overflow-x-auto">
      {matches
        ?.filter((match) => match.isRunning)
        .filter((match) =>
          preferences?.sports
            ? preferences?.sports?.includes(match.sportName.toLowerCase())
            : true
        )
        .sort(
          (a, b) => new Date(a.endsAt).getTime() - new Date(b.endsAt).getTime()
        )
        .slice(0, 5)
        .map((match) => {
          return <MatchListItem matchProp={match} key={match.id} />;
        })}
    </div>
  );
}
