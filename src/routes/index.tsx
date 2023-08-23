import { Navigate, createBrowserRouter } from "react-router-dom";
import Signin from "../views/siginin";
import Signup from "../views/signup";
import Logout from "../views/logout";
import Dashboard from "../views/dashboard";
import NotFound from "../views/notFound";

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
    path: "*",
    element: <NotFound />,
  },
  // {
  //   path: "/articles/:articleId",
  //   element: <ArticleDetails />,
  // },
  // {
  //   path: "/",
  //   element: <AppLayout />,
  //   children: [
  //     { index: true, element: <Navigate to="/dashboard" /> },
  //     { path: "dashboard", element: <Dashboard /> },
  //     // // {
  //     // // path: "articles",
  //     // // element: <ArticlesContainer />,
  //     // // children: [
  //     // // { index: true, element: <Navigate to="../" /> },
  //     // { path: "/articles/:articleId", element: <ArticlesDetail /> },
  //     // // ],
  //     // },
  //   ],
  // },
]);
export default router;
