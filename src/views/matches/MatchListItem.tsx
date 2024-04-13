import { useEffect, useState } from "react";
import { Match } from "../../contexts/matches/types";
import MatchDetails from "./MatchDetails";
import { Team } from "../../contexts/teams/types";
import { getMatchDetails } from "../../contexts/matches/actions";
import { useMatchesDispatch } from "../../hooks/matches";
import { useTranslation } from "react-i18next";

export default function MatchListItem(props: { matchProp: Match }) {
  const { matchProp } = props;
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const matchDispatch = useMatchesDispatch();
  const [matchDetail, setMatchDetail] = useState<Match>(matchProp);
  const [reload, setReload] = useState(false);
  const { t } = useTranslation();

  async function fetchAndUpdateMatchDetail() {
    const updatedMatch: Match = await getMatchDetails(matchProp?.id);
    setMatchDetail(updatedMatch);
  }

  useEffect(() => {
    if (reload) {
      fetchAndUpdateMatchDetail();
      setReload(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload, matchProp, matchDispatch]);

  const refreshMatchDetails = () => {
    setReload(true);
  };

  return (
    <div className=" p-4 bg-white rounded-lg shadow-cardShadow m-2 px-5 w-96 border-transparent">
      {reload ? (
        <>{t("loading")}...</>
      ) : (
        <>
          <div className="flex justify-between">
            <p className=" text-xl font-semibold">
              {t(matchDetail?.sportName)}
            </p>
            <div className="flex ">
              <button
                className="focus:outline-none px-2 py-1 hover:bg-slate-200 hover:text-green-400 rounded-md"
                onClick={refreshMatchDetails}
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
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
          <p className="text-gray-500 text-base">{matchDetail?.location}</p>

          <p className="mt-3 mb-2 text-lg">
            {matchDetail?.name?.toString().split("at")[0]}
          </p>
          <div className="my-2">
            {matchDetail?.teams.map((team: Team) => (
              <div
                key={team?.id}
                className="text-center flex justify-between mr-2"
              >
                <p className="text-lg font-medium leading-6 text-gray-900 mr-3">
                  {team?.name}
                </p>
                <p>{matchDetail?.score && matchDetail?.score[team?.name]}</p>
              </div>
            ))}
          </div>
          {matchDetail?.endsAt && (
            <p className="text-base">
              <span className="font-semibold ">{t("endsAt")}: </span>
              <span className="text-slate-500">
                {new Date(matchDetail?.endsAt).toLocaleTimeString([], {
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
              matchId={matchDetail?.id}
            />
          )}
        </>
      )}
    </div>
  );
}
