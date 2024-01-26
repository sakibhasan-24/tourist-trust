import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import HomeComponents from "../pages/HomeComponents/HomeComponents";
import Login from "../pages/Registration/Login/Login";
import SignUp from "../pages/Registration/Signup/SignUp";
import Home from "../pages/Home/Home";
import Details from "../pages/Caregories/Packages/PackageDetails/Details";
import AllPackages from "../pages/Caregories/Packages/AllPackages";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddNewPackage from "../pages/Dashboard/AddNewPackage/AddNewPackage";
import Packages from "../pages/Caregories/Packages/Packages";
import Profile from "../pages/Profile/Profile";
import WishLists from "../pages/WishList/WishLists";
import MyBookingList from "../pages/Dashboard/My-booking/MyBookingList";
import ProfileDetails from "../pages/Profile/TourGuideProfileDetails/ProfileDetails";
import MyAssignTours from "../pages/TourGuide/MyAssignTours";
// import MyBookings from "../pages/Dashboard/My-booking/MyBookings";

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
        path: "/all-packages",
        element: <AllPackages />,
      },
      {
        path: "/package-details/:id",
        element: <Details />,
      },
      {
        path: "/profile/details/:email",
        element: <ProfileDetails />,
      },
      // {
      //   path: "/package/:category",
      //   element: <Packages />,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/package/${params.category}`),
      // },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/addnewpackage",
            element: <AddNewPackage />,
          },
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/myWish-list",
            element: <WishLists />,
          },
          {
            path: "/dashboard/my-booking",
            element: <MyBookingList />,
          },
          {
            path: "/dashboard/my-assign-tour",
            element: <MyAssignTours />,
          },
        ],
      },
    ],
  },
]);

export default router;
