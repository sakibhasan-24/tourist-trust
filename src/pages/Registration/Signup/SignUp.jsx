import React from "react";
import { Helmet } from "react-helmet-async";
import GoogleButton from "../../../components/GoogleButton";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="w-full sm:max-w-6xl mx-auto p-2 sm:p-10">
      <Helmet>
        <title>Sign Up </title>
      </Helmet>
      <div className=" shadow-2xl flex flex-col  sm:flex-row items-center justify-evenly sm:gap-10 ">
        <div className="w-full sm:w-3/4 rounded-lg  ">
          <img
            className="w-full mx-auto sm:h-[500px] "
            src="https://i.ibb.co/4Z0mL1R/login.jpg"
            alt="loginimg"
          />
        </div>
        <div className="w-full sm:w-2/3  ">
          <h1 className=" text-2xl sm:text-4xl font-bold text-center">
            Please Sign Up
          </h1>
          <form className="p-2 sm:p-6 my-4">
            <input
              type="text"
              required
              name="name"
              id="name"
              placeholder="enter Your Name"
              className="px-4 py-3 rounded-lg mt-5 w-full   focus:outline-none focus:bg-slate-500 font-semibold "
            />
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
              type="file"
              name="image"
              id="image"
              className="px-4 py-3 rounded-lg mt-5 w-full  focus:outline-none focus:bg-slate-500 font-semibold cursor-pointer"
            />
            <input
              type="submit"
              value="Sign Up"
              className="w-full bg-slate-500 text-white py-3 uppercase font-semibold  rounded-lg mt-5 font-semibold cursor-pointer hover:bg-slate-700"
            />
            <GoogleButton />
          </form>
          <div className="text-center my-2 p-2">
            <p className="text-xs  sm:text-xl font-semibold">
              already have an account?{" "}
              <Link className="text-blue-600" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
