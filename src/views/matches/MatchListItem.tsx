import { Match } from "../../contexts/matches/types";

export default function MatchListItem(props: { match: Match }) {
  const { match } = props;
  return (
    <div className=" p-3 bg-amber-50 rounded-lg shadow-md m-2  w-96">
      <p className=" text-lg font-semibold">{match.sportName}</p>
      <p className="text-gray-500 text-base">{match.location}</p>
      <p>{match.name}</p>
      <p>{new Date(match.endsAt).toLocaleTimeString()}</p>
    </div>
  );
}
