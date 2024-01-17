import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="-max-w-full sm:max-w-8xl mx-auto bg-slate-800 rounded-lg shadow-lg p-6 ">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center space-y-2 ">
          <div className="font-bold text-2xl sm:text-4xl truncate">
            <Link to="/">Tourist</Link>
          </div>
          <div className="space-x-6 font-semibold text-xs sm:text-xl ">
            <Link to="/">Community</Link>
            <Link to="/login">Blogs</Link>
            <Link to="/signup">Contact Us</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </header>
    </>
  );
}
