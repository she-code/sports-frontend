import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className=" shadow-lg mx-auto w-2/4 my-5  h-1/3 p-5">
      <p className="mb-5 text-xl">{t("pageNotFound")}</p>
      <Link
        to="/dashboard"
        role="button"
        className="ml-6 text-white bg-green-600 px-3 py-2"
        id="backToHomeButton"
      >
        {t("home")}
      </Link>
    </div>
  );
}
