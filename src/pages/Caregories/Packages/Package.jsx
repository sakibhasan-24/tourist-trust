import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import { CiHeart } from "react-icons/ci";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
export default function Package({ singlePackage }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  //   console.log(singlePackage);
  const [role] = useRole();
  console.log(role);
  const [toggle, setToggle] = useState(false);
  // console.log(role);
  const loading = role === "tourist" ? false : true;
  const axiosSecure = useAxiosSecure();
  const addInWishList = async () => {
    const information = {
      tourId: singlePackage._id,
      tourName: singlePackage.tripTitle,
      tourPrice: singlePackage.price,
      tourImage: singlePackage.photo,
      touristEmail: user?.email,
    };
    console.log(singlePackage._id, information.tourId);
    const res = await axiosSecure.post("/wish-list", information);
    console.log(res);
    if (res.data.acknowledged) {
      // console.log(information);
      Swal.fire({
        icon: "success",
        title: "Added to wish list",
        showConfirmButton: false,
        timer: 1500,
      });
      // navigate("/dashboard");
    } else {
      Swal.fire({
        icon: "error",
        title: `${res.data}`,
      });
    }
  };
  return (
    <div className="w-full mx-auto shadow-lg shadow-blue-950 my-12 rounded-lg p-6">
      <div className="w-full ">
        <img
          className="w-[600px] h-[200px]"
          src={singlePackage.photo}
          alt="package photo"
        />
      </div>
      <div className="my-4 py-2">
        <button
          onClick={addInWishList}
          disabled={loading}
          className="w-full mx-auto"
        >
          <CiHeart
            onClick={() => setToggle(true)}
            className={`text-4xl w-full text-center ${
              toggle ? "text-red-600" : ""
            }`}
          />
        </button>
        <h1 className="font-bold  text-2xl text-center">
          {singlePackage.tourType}
        </h1>
        <h3 className="font-semibold text-center">{singlePackage.tripTitle}</h3>
        <p className="text-2xl font-extrabold">price:{singlePackage.price}</p>
      </div>
      <div className="flex items-center justify-center">
        <Link
          className="bg-slate-900 text-slate-200 rounded-md px-4 py-2 font-bold text-xl "
          to={`/package-details/${singlePackage._id}`}
        >
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}
