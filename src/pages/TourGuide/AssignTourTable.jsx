import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function AssignTourTable({
  tour,
  idx,
  handleReject,
  handleAccept,
}) {
  //   console.log(tour?.tourId);

  const tourStatus = tour?.status;
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{tour?.tourDate}</td>
      <td>{tour?.tourName}</td>

      <th>
        {tour && tour.status === "review" ? (
          <div className="text-xs">
            <button
              onClick={() => handleReject(tour?.tourId)}
              className="px-2 mr-2 py-1 rounded-md bg-red-400 text-slate-950"
            >
              reject
            </button>

            <button
              onClick={() => handleAccept(tour?.tourId)}
              className="px-2 py-1 rounded-md bg-green-400 text-slate-950"
            >
              Accept
            </button>
          </div>
        ) : (
          <>
            <p
              className={`${
                tourStatus === "rejected" ? "text-red-400 " : "text-green-500"
              }`}
            >
              {tourStatus}
            </p>
          </>
        )}
      </th>
    </tr>
  );
}
