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
import ManageTourist from "../pages/Dashboard/ManageTourist/ManageTourist";
import Protected from "./Protected";
import ErrorPage from "../components/ErrorPage";
// import MyBookings from "../pages/Dashboard/My-booking/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        element: (
          <Protected>
            <Details />
          </Protected>
        ),
      },
      {
        path: "/profile/details/:email",
        element: (
          <Protected>
            <ProfileDetails />
          </Protected>
        ),
      },

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
          {
            path: "/dashboard/manage-tourist",
            element: <ManageTourist />,
          },
        ],
      },
    ],
  },
]);

export default router;
