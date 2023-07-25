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
  }, [navigate]);
  return (
    <div className=" w-fit shadow-xl rounded-xl mx-auto py-5  mt-11 p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-center text-3xl font-semibold mb-6 mt-3 text-white">
        SIGN IN
      </h1>
      <SigninForm />
    </div>
  );
}
