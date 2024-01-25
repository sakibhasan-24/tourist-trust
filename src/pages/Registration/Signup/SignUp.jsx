import React from "react";
import { Helmet } from "react-helmet-async";
import GoogleButton from "../../../components/GoogleButton";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
// import { useWindowSize } from "react-use/lib/useWindowSize";
// import Confetti from "react-confetti";
export default function SignUp() {
  const { createUser, userLogOut } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  //   const { width, height } = useWindowSize();
  //   console.log(width, height);
  const imageHosting = import.meta.env.VITE_IMAGE_API_KEY;
  //   console.log(imageHosting);
  const image_key = `https://api.imgbb.com/1/upload?key=${imageHosting}`;
  //   console.log(image_key);
  const useAxiosPublicData = useAxiosPublic();

  const onSubmit = async (data) => {
    // const photo = e.target.image.value;
    const photo = { image: data.image[0] };

    // console.log(photo);
    // need a public axios as any one can sign up
    const res = await useAxiosPublicData.post(image_key, photo, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(res.data.data.display_url);
    const imageUrl = res.data.data.display_url;
    const name = data.name;
    const email = data.email;
    const password = data.password;
    // if (password.length < 6) {
    //   return Swal.fire("password must be 6 characters long");
    // }
    // if (!/(?=.*[A-Z])/.test(password)) {
    //   return Swal.fire("password must contain one uppercase");
    // }
    // if (!/(?=.*[!@#$&*])/.test(password)) {
    //   return Swal.fire("password must contain one special character");
    // }
    createUser(email, password).then((res) => {
      const user = res.user;
      user.displayName = name;
      user.photoURL = imageUrl;
      const userInfo = {
        name,
        email,
        photoURL: imageUrl,
        role: "Guide",
      };
      // console.log(userInfo);
      useAxiosPublicData.post("/tourist-list", userInfo).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Sign Up Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        userLogOut().then((res) => {
          navigate("/login");
        });
      });
    });
  };
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
          <form onSubmit={handleSubmit(onSubmit)} className="p-2 sm:p-6 my-4">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="enter Your Name"
              className="px-4 py-3 rounded-lg mt-5 w-full   focus:outline-none focus:bg-slate-500 font-semibold "
            />
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="enter Your Email"
              className="px-4 py-3 rounded-lg mt-5 w-full   focus:outline-none focus:bg-slate-500 font-semibold "
            />
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="password (6 min,one number,one capital letter,one special character)"
              className="px-4 py-3 rounded-lg mt-5 w-full   focus:outline-none focus:bg-slate-500 text-xs "
            />
            <input
              type="file"
              {...register("image")}
              className="px-4 py-3 rounded-lg mt-5 w-full  focus:outline-none focus:bg-slate-500 font-semibold cursor-pointer"
            />
            <input
              type="submit"
              value="Sign Up"
              className="w-full bg-slate-500 text-white py-3 uppercase   rounded-lg mt-5 font-semibold cursor-pointer hover:bg-slate-700"
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
