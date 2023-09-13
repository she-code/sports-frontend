import { useState } from "react";
import Preference from "../views/preferences/PreferenceCard";
import { Link } from "react-router-dom";
import { useUsersState } from "../hooks/users";

function Dropdown() {
  const [openModal, setOpenModal] = useState(false);
  const [userData] = useState(localStorage.getItem("userData") || "");
  const [isOpen, setIsOpen] = useState(false);

  const userState = useUsersState();
  const { user } = userState;

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        type="button"
        className="flex align-middle justify-center w-full px-4 py-2 text-lg capitalize font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <p>{user?.name ?? (userData && JSON.parse(userData).name)}</p>

        <svg
          className="w-4 h-4 ml-2 mt-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <ul
              className="py-1 text-sm  text-black"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <button
                  className="block px-4 py-2 w-full text-left  hover:bg-gray-600 hover:text-white  text-base"
                  onClick={() => {
                    setOpenModal(!openModal);
                  }}
                >
                  Preferences
                </button>
              </li>

              <li>
                <Link
                  to={"/updatePassword"}
                  className="block px-4 py-2  hover:bg-gray-600  text-base hover:text-white"
                >
                  Update Password{" "}
                </Link>
              </li>
              <li>
                <Link
                  to={"/logout"}
                  className="block px-4 py-2  hover:bg-gray-600  text-base hover:text-white"
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {openModal && (
        <Preference isOpen={openModal} closeModal={() => setOpenModal(false)} />
      )}{" "}
    </div>
  );
}

export default Dropdown;
