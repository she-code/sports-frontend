import { Link } from "react-router-dom";
import Dropdown from "./DropDown";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const languages = [
    { name: t("english"), code: "en" },
    { name: t("hindi"), code: "hi" },
  ];

  const handleChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  function methodDoesNotExist(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <nav className="flex items-center justify-between  p-4 border-transparent bg-white">
        <div className="flex w-2/4"></div>
        <div className="flex items-center justify-between  w-2/4">
          <div className="text-gray-600 text-2xl font-semibold text-center">
            {t("mainTitle")}
          </div>
          <div>
            <span>{t("languages")}</span>{" "}
            <select
              onChange={handleChangeLocale}
              tabIndex={0}
              aria-label="language-switcher"
              className="focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-opacity-50"
            >
              {languages.map(({ name, code }) => (
                <option key={code} value={code}>
                  {t(name)}
                </option>
              ))}
            </select>
          </div>{" "}
          <button onClick={() => methodDoesNotExist()}>Break the world</button>
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
                {t("login")}
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
