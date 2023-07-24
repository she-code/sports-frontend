import { useMatchesState } from "../../hooks/matches";
import MatchListItem from "./MatchListItem";

export default function MatchesList() {
  const matchState = useMatchesState();
  const { matches, isLoading, isError } = matchState;
  console.log(matchState, "matches", matches);
  if (isError) return <div>Error...</div>;
  if (isLoading) return <div>Loading...</div>;
  if (matches) console.log(matches, "page");
  //
  return (
    <div className="flex mt-5  min-w-[400px] overflow-x-auto">
      {matches
        ?.sort(
          (a, b) => new Date(a.endsAt).getTime() - new Date(b.endsAt).getTime()
        )
        .slice(0, 5)
        .map((match) => {
          return <MatchListItem match={match} key={match.id} />;
        })}
    </div>
  );
}
