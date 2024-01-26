import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

export default function Dashboard() {
  const { user } = useAuth();
  // console.log(user);
  const [role] = useRole();
  // console.log(role);
  return (
    <div className="max-w-6xl mx-auto my-12 flex gap-16">
      {role === "Admin" && (
        <div className="max-w-72 font-semibold  min-h-screen rounded-lg shadow-2xl shadow-slate-900 flex flex-col gap-6 bg-purple-950 p-6">
          <Link to="/">Tourist()</Link>

          <Link to="/">tourist-guide</Link>
          <Link to="/">Manage User</Link>
          <Link to="/dashboard/addnewpackage">Add new Package</Link>
        </div>
      )}
      {role === "tourist" && (
        <div className="max-w-72 font-semibold  min-h-screen rounded-lg shadow-2xl shadow-slate-900 flex flex-col gap-6 bg-purple-950 p-6">
          <Link to="/dashboard/profile">My Profile</Link>

          <Link to="/dashboard/my-booking">My Booking</Link>
          <Link to="/dashboard/myWish-list">My WishList</Link>
        </div>
      )}
      {role === "Guide" && (
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
