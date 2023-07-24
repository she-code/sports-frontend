import { useNavigate } from "react-router-dom";
import SigninForm from "./SigninForm";
import { useEffect } from "react";

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
    <div className=" w-fit shadow-xl rounded-xl mx-auto py-5  mt-11 p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-center text-3xl font-semibold mb-6 mt-3 text-white">
        SIGN IN
      </h1>
      <SigninForm />
    </div>
  );
}

// <div className="min-h-screen flex items-center justify-center bg-gray-100">
{
  /* <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md"> */
}

// </div>
// </div>
