import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleNavigate = (direction) => {
    // Assuming you want to go back or forward based on the direction
    if (direction === -1) {
      navigate(-1); // Go back
    } else {
      navigate("/"); // Go home or provide the appropriate path
    }
  };
  return (
    <div className="max-w-6xl mx-auto p-8 text-2xl h-[100vh] ">
      <h1>Nothing Found Here</h1>
      <div className="h-full flex gap-6 items-center justify-center">
        <button
          className="bg-green-600 px-4 py-2 rounded-lg"
          onClick={() => handleNavigate(-1)}
        >
          Go Back
        </button>
        <Link className="bg-blue-600 text-white px-4 py-2 rounded-lg" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
}
