import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function TableDataBookings({
  booking,
  idx,
  bookingCancel,
  bookingStatus,
  handleOffer,
}) {
  // console.log(booking);
  useEffect(() => {
    bookingStatus &&
      Swal.fire({
        title: "For more than three Bookings you get 20% offer",
        timer: 1500,
      });
  }, []);
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{booking?.packageName}</td>
      <td>{booking?.price}</td>
      <td>{booking?.tourGuide}</td>
      <td>
        <p
          className={`${
            booking?.status === "accepted" &&
            "bg-green-400 px-4 py-2 rounded-lg text-white"
          }
          ${
            booking?.status === "rejected" &&
            "bg-red-400 px-4 py-2 rounded-lg text-white"
          }
          }`}
        >
          {booking?.status}
        </p>
      </td>
      <th>
        <button
          onClick={() => bookingCancel(booking?._id)}
          className="px-4 py-2 rounded-md bg-red-400 text-slate-950"
        >
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
          disabled={!bookingStatus}
          onClick={() => handleOffer(booking?._id)}
        >
          Apply
        </button>
      </th>
    </tr>
  );
}
