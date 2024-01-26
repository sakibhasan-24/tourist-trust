import React from "react";

import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

export default function GoogleButton() {
  const { user, googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      const result = res.user;
      const userInfo = {
        name: result?.displayName,
        email: result?.email,
        photo: result?.photoURL,
      };
      axiosPublic.post("/tourist-list", userInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire(`${result.displayName} successfully logged in`);
          navigate("/");
        }
      });
    });
  };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleGoogleSignIn}
        type="button"
        className="my-4 rounded-full bg-white text-slate-800 font-bold px-4 py-2  w-full mx-auto hover:bg-slate-500"
      >
        Continue With Google
      </button>
    </div>
  );
}
