import React from "react";
import { Link } from "react-router-dom";

export default function Guide({ guide }) {
  //   console.log(guide?.email);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={guide?.photo} alt="Photo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{guide?.name}</h2>

          <div className="card-actions">
            <Link to={`/profile/details/${guide?._id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
