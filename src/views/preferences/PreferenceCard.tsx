import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useTeamsState } from "../../hooks/teams";
import { Team } from "../../contexts/teams/types";
import PrefrenceTeamItem from "./PreferenceTeamItem";
import { useSportsState } from "../../hooks/sports";
import { Sport } from "../../contexts/sports/types";
import PrefrenceSportItem from "./PreferenceSportItem";
import { useTranslation } from "react-i18next";

export default function Preference(props: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const { isOpen, closeModal } = props;
  const teamState = useTeamsState();
  const sportState = useSportsState();
  const { teams } = teamState;
  const { sports } = sportState;
  const { t } = useTranslation();
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
                  <>
                    <div className="flex justify-between items-center">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-gray-900"
                      >
                        {t("preferences")}
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
                    <div className="my-2">
                      <p className="text-lg font-medium my-1">
                        {t("favourites")} {t("teams")}
                      </p>

                      <div className="grid grid-cols-4 gap-4">
                        {teams?.map((team: Team, index: number) => (
                          <PrefrenceTeamItem data={team} key={index} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-medium my-1">
                        {t("favourites")} {t("sports")}
                      </p>
                      <div className="grid grid-cols-4 gap-4">
                        {sports?.map((sport: Sport, index: number) => (
                          <PrefrenceSportItem data={sport} key={index} />
                        ))}
                      </div>
                    </div>
                  </>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
