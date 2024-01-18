import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import HomeComponents from "../pages/HomeComponents/HomeComponents";
import Login from "../pages/Registration/Login/Login";
import SignUp from "../pages/Registration/Signup/SignUp";
import Home from "../pages/Home/Home";
import Details from "../pages/Caregories/Packages/PackageDetails/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomeComponents />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/package-details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
