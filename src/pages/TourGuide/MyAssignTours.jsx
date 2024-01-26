import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AssignTourTable from "./AssignTourTable";
import Swal from "sweetalert2";

export default function MyAssignTours() {
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { data: assignTours = [], refetch } = useQuery({
    queryKey: ["assignTours"],
    queryFn: async () => {
      const res = await axiosSecure.get("/assign-tour");
      return res.data;
    },
  });
  const handleReject = async (id) => {
    setLoading(true);
    try {
      //   console.log(id);
      const statusAction = { status: "rejected" };
      //   console.log(statusAction);
      const res = await axiosSecure.patch(
        `/assign-tour-status/${id}`,
        statusAction
      );
      //   console.log(res.data.result.modifiedCount > 0);
      if (res.data.result.modifiedCount > 0) {
        const res = await axiosSecure.patch(
          `/assign-tour-status-booking/${id}`,
          statusAction
        );

        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Tour Rejected",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };
  const handleAccept = async (id) => {
    setLoading(true);
    try {
      console.log(id);
      const statusAction = { status: "accepted" };
      console.log(statusAction);
      const res = await axiosSecure.patch(
        `/assign-tour-status/${id}`,
        statusAction
      );

      if (res.data.result.modifiedCount > 0) {
        const res = await axiosSecure.patch(
          `/assign-tour-status-booking/${id}`,
          statusAction
        );
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Tour Accepted ",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      } else {
        console.log("wrong");
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };
  return (
    <div>
      <table className="table ">
        <thead className="text-center font-semibold sm:text-xl">
          <tr>
            <th>No:</th>

            <th>tour Date </th>
            <th>package Name</th>
            <th>Accept/Reject</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {assignTours &&
            assignTours.map((tour, idx) => (
              <AssignTourTable
                key={tour._id}
                tour={tour}
                idx={idx}
                handleReject={handleReject}
                handleAccept={handleAccept}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
