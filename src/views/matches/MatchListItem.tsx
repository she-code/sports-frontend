import { Match } from "../../contexts/matches/types";

export default function MatchListItem(props: { match: Match }) {
  const { match } = props;
  return (
    <div className=" p-4 bg-white rounded-lg shadow-cardShadow m-2 px-5 w-96 border-transparent">
      <div className="flex justify-between">
        <p className=" text-xl font-semibold">{match.sportName}</p>
        <button className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      <p className="text-gray-500 text-base">{match.location}</p>
      <p className="mt-3 mb-2 text-lg">
        {match.name.toString().split("at")[0]}
      </p>
      <p className="text-base">
        <span className="font-semibold "> Ends At: </span>
        <span className="text-slate-500">
          {new Date(match.endsAt).toLocaleTimeString()}
        </span>
      </p>
    </div>
  );
}
