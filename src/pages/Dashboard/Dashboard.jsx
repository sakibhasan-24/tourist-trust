import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
  const { user, loading } = useAuth();
  // console.log(user);
  const [role] = useRole();
  console.log(role);
  //enabled: !loading && !!userEmail,

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user?.email) {
    return (
      <div className="max-w-6xl mx-auto my-12 flex gap-16">
        {user?.email && role && role === "Admin" && (
          <div className="max-w-72 font-semibold  min-h-screen rounded-lg shadow-2xl shadow-slate-900 flex flex-col gap-6 bg-purple-950 p-6">
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/dashboard/manage-tourist">Manage User</Link>
            <Link to="/dashboard/addnewpackage">Add new Package</Link>
          </div>
        )}
        {user?.email && role && role === "tourist" && (
          <div className="max-w-72 font-semibold  min-h-screen rounded-lg shadow-2xl shadow-slate-900 flex flex-col gap-6 bg-purple-950 p-6">
            <Link to="/dashboard/profile">My Profile</Link>

            <Link to="/dashboard/my-booking">My Booking</Link>
            <Link to="/dashboard/myWish-list">My WishList</Link>
          </div>
        )}
        {user?.email && role && role === "Guide" && (
          <div className="max-w-72 font-semibold  min-h-screen rounded-lg shadow-2xl shadow-slate-900 flex flex-col gap-6 bg-purple-950 p-6">
            <Link to="/dashboard/profile">My Profile</Link>

            <Link to="/dashboard/my-assign-tour">My Assign Tour</Link>
          </div>
        )}
        <div className="w-4/5 mx-auto">
          <Outlet />
        </div>
      </div>
    );
  }
}
