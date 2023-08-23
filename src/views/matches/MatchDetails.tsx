import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { useMatchesDispatch, useMatchesState } from "../../hooks/matches";
import { fetchMatch } from "../../contexts/matches/actions";
import { MatchListAvilableAction } from "../../contexts/matches/types";

export default function MatchDetails(props: {
  matchId: number;
  closeModal: () => void;
  isOpen: boolean;
}) {
  const { closeModal, matchId, isOpen } = props;
  const matchDispatch = useMatchesDispatch();
  const matchState = useMatchesState();
  const { match } = matchState;
  useEffect(() => {
    fetchMatch(matchDispatch, matchId);
    console.log({ match });
    return () => {
      matchDispatch({ type: MatchListAvilableAction.CLEAR_MATCH });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchId]);
  return (
    <Transition appear show={isOpen} as={Fragment} key={matchId}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-[500px] max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {match?.name}{" "}
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="hover:bg-blue-500 px-2 py-1 rounded-md hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-base text-gray-400">{match?.sportName}</p>
                <div className="flex justify-center items-center">
                  {match?.teams.map((team) => (
                    <div key={team?.id}>
                      <div className="p-3 rounded-lg mr-4 w-14 bg-slate-500 text-center text-white px-5">
                        <p>{team.name.substring(0, 1)}</p>
                      </div>
                      {/* <p className="text-lg font-medium leading-6 text-gray-900">
                          {team.name}
                        </p>
                        <p className="text-lg font-medium leading-6 text-gray-900">
                          {match?.score && match?.score[team.name]}
                        </p> */}
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
