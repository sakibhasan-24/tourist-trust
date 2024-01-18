import React from "react";
import { Link } from "react-router-dom";

export default function Package({ singlePackage }) {
  //   console.log(singlePackage);
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
