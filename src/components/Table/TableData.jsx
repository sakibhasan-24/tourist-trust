import React from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

export default function TableData({ list, idx, handleDelete }) {
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={list?.tourImage} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{list?.tourName}</td>
      <td>{list?.tourPrice}</td>
      <th>
        <Link
          className="btn btn-ghost btn-xs px-4"
          to={`/package-details/${list.tourId}`}
        >
          Details
        </Link>
      </th>
      <th>
        <button
          onClick={() => handleDelete(list.tourId)}
          className=""
          title="delete??"
        >
          <ImCross className="text-red-800 text-2xl " />
        </button>
      </th>
    </tr>
  );
}
