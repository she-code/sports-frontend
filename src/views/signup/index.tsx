import { useEffect } from "react";
import SignupForm from "./SignupForm";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" w-fit shadow-xl rounded-xl mx-auto py-5  mt-12 p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-center text-3xl font-semibold mb-6 mt-8 text-white">
          SIGN UP
        </h1>
        <SignupForm />
      </div>
    </div>
  );
}
