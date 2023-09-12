import { useState } from "react";
import { useUsersState } from "../hooks/users";
import { Link } from "react-router-dom";
import Preference from "../views/preferences/PreferenceCard";

const Dropdown = () => {
  const [userData] = useState(localStorage.getItem("userData") || "");
  const [isOpen, setIsOpen] = useState(false);

  const userState = useUsersState();
  const { user } = userState;

  return (
    <div className="inline-block">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white capitalize bg-green-600 hover:bg-green-400  focus:outline-none font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center  dark:hover:bg-green-700 dark:focus:ring-green-800 text-base"
        type="button"
      >
        {user?.name ?? (userData && JSON.parse(userData).name)}

        <svg
          className="w-4 h-4 ml-2"
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
      <div
        id="dropdown"
        className="z-10 hidden  divide-y divide-gray-100 rounded shadow w-44 bg-gray-700"
      >
        <ul
          className="py-1 text-sm  text-white"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <button
              className="block px-4 py-2 w-full text-left  hover:bg-gray-600  text-base"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Preferences
            </button>
          </li>

          <li>
            <Link
              to={"/updatePassword"}
              className="block px-4 py-2  hover:bg-gray-600  text-base"
            >
              Update Password{" "}
            </Link>
          </li>
          <li>
            <Link
              to={"/logout"}
              className="block px-4 py-2  hover:bg-gray-600  text-base"
            >
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <Preference isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      )}{" "}
    </div>
  );
};

export default Dropdown;
