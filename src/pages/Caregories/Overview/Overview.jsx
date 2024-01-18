import React from "react";

export default function Overview({ overview }) {
  return (
    <div className="w-full shadow-2xl shadow-sky-200 rounded-lg ">
      <div className="w-full my-2">
        <img
          className="w-[300px]  h-[200px] hover:scale-75 transition-all duration-1000 ease-in-out mx-auto"
          src={overview.photo}
          alt="overview Photo"
        />
      </div>
      <div className="w-3/4 mx-auto  flex flex-col">
        <h1 className="text-slate-200 font-bold text-center flex-1">
          {overview.title}
        </h1>
        <p className="text-xs font-semibold my-4">{overview.text}</p>
        <p className="text-slate-100">
          Don't forget we have :{" "}
          <span className="font-bold text-orange-400">
            {overview.speciality}
          </span>
        </p>
      </div>
    </div>
  );
}
