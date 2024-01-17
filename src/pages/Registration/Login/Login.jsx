import React from "react";
import { Helmet } from "react-helmet-async";
import GoogleButton from "../../../components/GoogleButton";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

export default function Login() {
  const { userLogIn } = useAuth();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogIn(email, password).then((res) => {
      const user = res.user;
      if (user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          text: `Welcome back ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/");
    });
  };
  return (
    <div className=" w-full sm:max-w-6xl mx-auto p-2 sm:p-10">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex flex-col md:flex-row items-center justify-center shadow-2xl shadow-slate-800  my-8">
        <div className=" w-full sm:w-3/4 mx-auto rounded-md">
          <img
            src="https://cdn-production.checkfront.com/wp-content/uploads/2021/07/marketing-tours-online-with-woman-traveling-by-boat-in-thailand.jpeg"
            alt="login image"
            className=" h-full sm:h-[600px]"
          />
        </div>
        <div className="w-full sm:w-3/4 mx-auto text-center">
          <h1 className="text-4xl font-semibold text-green-600">
            Welcome Back
          </h1>
          <p className="text-2xl font-bold my-2">Please LogIn</p>
          <form onSubmit={handleLogIn} className="p-4">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="enter Your Email"
              className="px-4 py-3 rounded-lg mt-5 w-full   focus:outline-none focus:bg-slate-500 font-semibold "
            />
            <input
              type="password"
              name="password"
              required
              id="password"
              placeholder="password (6 min,one number,one capital letter,one special character)"
              className="px-4 py-3 rounded-lg mt-5 w-full   focus:outline-none focus:bg-slate-500 text-xs "
            />
            <input
              type="submit"
              value="Login"
              className="w-full mx-auto font-bold my-6 px-2 py-4 rounded-lg uppercase bg-slate-900 hover:bg-slate-600"
            />
            <GoogleButton />
          </form>
          <div>
            <p>
              Not registered Yet?
              <Link className="ml-2 text-blue-700" to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
