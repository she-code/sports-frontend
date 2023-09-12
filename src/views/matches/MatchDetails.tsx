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
  const { match, isLoading } = matchState;
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
              <Dialog.Panel className="w-full h-[900px] max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {isLoading ? (
                  <div className="suspense-loading">Loading...</div>
                ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {match?.name}{" "}
                      </Dialog.Title>
                      <div className="flex">
                        <button
                          className="focus:outline-none px-2 py-1 hover:bg-slate-200 hover:text-green-400 rounded-md"
                          onClick={() => {
                            fetchMatch(matchDispatch, matchId);
                          }}
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
                          onClick={closeModal}
                          className="hover:bg-green-500 px-2 py-1 rounded-md hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                    </div>
                    <p className="text-base text-gray-400">
                      {match?.sportName}
                    </p>

                    <div className="flex justify-center items-center  w-3/5 mx-auto">
                      {match?.teams.map((team, index) => (
                        <div
                          key={team?.id}
                          className="w-2/5 text-center flex justify-between"
                        >
                          {index > 0 && (
                            <span className="text-2xl text-gray-500 font-semibold inline mx-2">
                              :
                            </span>
                          )}
                          <div>
                            <div className="p-3 rounded-lg w-14 mx-auto bg-slate-500 text-center text-white px-5">
                              <p>{match?.score && match?.score[team?.name]}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-medium leading-6 text-gray-900">
                                {team?.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="my-3">
                      {match?.startsAt && (
                        <p className="text-base">
                          <span className="font-semibold ">Started at: </span>
                          <span className="text-slate-500">
                            {new Date(match.startsAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </p>
                      )}
                      {match?.endsAt && (
                        <p className="text-base">
                          <span className="font-semibold ">Ends at: </span>
                          <span className="text-slate-500">
                            {new Date(match.endsAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </p>
                      )}

                      <p className="font-medium text-lg mt-3">Summary</p>
                      <p className=" text-base text-gray-500  text-justify mt-3">
                        {match?.story}
                      </p>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
