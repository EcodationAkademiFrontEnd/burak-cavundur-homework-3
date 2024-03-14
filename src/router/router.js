import { Route, createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import App from "../App";
import { NotFoundPage } from "../pages/NotFoundPage";
// import { User } from "../pages/User";
import User from "../pages/User";
import UserDetail from "../pages/UserDetail";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "about/:id",
        element: <About />,
      },
      {
        path: "user",
        element: <User />,
        // children: <Child />,
      },
      {
        path: "userDetail",
        element: <UserDetail />,
      },
      {
        path: "userDetail/:id",
        element: <UserDetail />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
