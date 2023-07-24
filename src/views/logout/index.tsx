import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("userData");
  }, []);

  return <Navigate to="/signin" />;
};

export default Logout;
