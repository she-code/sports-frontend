import { useEffect } from "react";
import SigninForm from "./SigninForm";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Signin() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    //Feedback: Display signin form at the center of the page
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-fit shadow-xl rounded-xl py-5 p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-center text-3xl font-semibold mb-6 mt-4 text-white">
          {t("SIGN IN")}{" "}
        </h1>
        <SigninForm />
      </div>
    </div>
  );
}
