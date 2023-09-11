import { Link } from "react-router-dom";
import Dropdown from "./DropDown";

export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between  p-4 border-transparent bg-white">
        <div className="flex w-2/4"></div>
        <div className="flex items-center justify-between  w-2/4">
          <div className="text-gray-600 text-2xl font-semibold text-center">
            Sports Center
          </div>
          <div className="flex mr-2 items-center">
            {localStorage.getItem("auth_token") ? (
              <>
                <Dropdown />
              </>
            ) : (
              <Link
                to="/signin"
                className="uppercase bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded ml-2 text-lg"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
