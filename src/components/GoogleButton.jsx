import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function GoogleButton() {
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="my-4 rounded-full bg-white text-slate-800 font-bold px-4 py-2  w-full mx-auto hover:bg-slate-500"
      >
        Continue With Google
      </button>
    </div>
  );
}
