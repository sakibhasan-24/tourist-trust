import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto my-12 flex gap-16">
      <div className="max-w-72 font-semibold  min-h-screen rounded-lg shadow-2xl shadow-slate-900 flex flex-col gap-6 bg-purple-950 p-6">
        <Link to="/">Tourist()</Link>

        <Link to="/">tourist-guide</Link>
        <Link to="/">Manage User</Link>
        <Link to="/dashboard/addnewpackage">Add new Package</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
