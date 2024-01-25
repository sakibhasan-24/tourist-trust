import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

export default function Dashboard() {
  const { user } = useAuth();
  const [role] = useRole();
  console.log(role);
  return (
    <div className="max-w-6xl mx-auto my-12 flex gap-16">
      {/* if tourist then tourist  */}
      {/* if admin then admin */}
      {/* if guide then guide */}

      {role === "dmin" && (
        <div className="max-w-72 font-semibold  min-h-screen rounded-lg shadow-2xl shadow-slate-900 flex flex-col gap-6 bg-purple-950 p-6">
          <Link to="/">Tourist()</Link>

          <Link to="/">tourist-guide</Link>
          <Link to="/">Manage User</Link>
          <Link to="/dashboard/addnewpackage">Add new Package</Link>
        </div>
      )}
      {role === "Admin" && (
        <div className="max-w-72 font-semibold  min-h-screen rounded-lg shadow-2xl shadow-slate-900 flex flex-col gap-6 bg-purple-950 p-6">
          <Link to="/dashboard/profile">My Profile</Link>

          <Link to="/">My Booking</Link>
          <Link to="/">My WishList</Link>
        </div>
      )}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
