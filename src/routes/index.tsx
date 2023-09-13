import { Navigate, createBrowserRouter } from "react-router-dom";
import Signin from "../views/siginin";
import Signup from "../views/signup";
import Logout from "../views/logout";
import Dashboard from "../views/dashboard";
import NotFound from "../views/notFound";
import UpdatePassword from "../views/updatePassword";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dashboard" replace /> },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/updatePassword",
    element: <UpdatePassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
