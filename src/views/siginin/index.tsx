import { useEffect } from "react";
import SigninForm from "./SigninForm";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-fit shadow-xl rounded-xl py-5 p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-center text-3xl font-semibold mb-6 mt-4 text-white">
          SIGN IN
        </h1>
        <SigninForm />
      </div>
    </div>
  );
}
