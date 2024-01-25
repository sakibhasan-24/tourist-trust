import React from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

export default function TableDataBookings({ booking, idx }) {
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{booking?.packageName}</td>
      <td>{booking?.tourGuide}</td>
      <td>{booking?.status}</td>
      <th>
        <button className="px-4 py-2 rounded-md bg-red-400 text-slate-950">
          Cancel
        </button>
      </th>
      <th>
        <button
          className="px-4 py-2 rounded-md bg-blue-950 text-white"
          title="pay"
        >
          pay
        </button>
      </th>
      <th>
        <button
          className="px-4 py-2 rounded-md bg-green-950 text-white"
          title="Apply"
          disabled
        >
          Apply
        </button>
      </th>
    </tr>
  );
}
