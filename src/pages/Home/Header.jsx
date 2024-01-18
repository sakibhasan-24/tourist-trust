import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function Header() {
  const { user, userLogOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    userLogOut().then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${user.displayName}LogOut Successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
    navigate("/login");
  };
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
            {user ? (
              <details className=" dropdown dropdown-end">
                <summary className="btn ">
                  <img
                    src={user.photoURL}
                    alt="userImg"
                    className="w-[25px] h-[25px] rounded-full object-cover"
                  />
                </summary>
                <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-box text-xs ">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/recent-offer">Offer</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogOut} to="/login">
                      Logout
                    </Link>
                  </li>
                  <div className="my-2 space-y-2">
                    <p>email:{user.email}</p>
                    <p>name:{user.displayName}</p>
                  </div>
                </ul>
              </details>
            ) : (
              <Link to="/signup">Sign up</Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
