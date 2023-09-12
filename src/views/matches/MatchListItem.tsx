import { useState } from "react";
import { Match } from "../../contexts/matches/types";
import MatchDetails from "./MatchDetails";

export default function MatchListItem(props: { matchProp: Match }) {
  const { matchProp } = props;
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div className=" p-4 bg-white rounded-lg shadow-cardShadow m-2 px-5 w-96 border-transparent">
      <div className="flex justify-between">
        <p className=" text-xl font-semibold">{matchProp?.sportName}</p>
        <div className="flex ">
          <button
            className="focus:outline-none px-2 py-1 hover:bg-slate-200 hover:text-green-400 rounded-md"
            onClick={openModal}
          >
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
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="text-gray-500 text-base">{matchProp.location}</p>

      {/* {matchProp.teams.map((team) => {
        return (
          <p className="mt-3 mb-2 text-lg1" key={team.id}>
            {team.name}
          </p>
        );
      })} */}
      <p className="mt-3 mb-2 text-lg">
        {matchProp.name.toString().split("at")[0]}
      </p>

      {matchProp?.endsAt && (
        <p className="text-base">
          <span className="font-semibold ">Ends at: </span>
          <span className="text-slate-500">
            {new Date(matchProp.endsAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </p>
      )}
      {isOpen && (
        <MatchDetails
          isOpen={isOpen}
          closeModal={closeModal}
          matchId={matchProp.id}
        />
      )}
    </div>
  );
}
