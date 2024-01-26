import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import TableData from "../../../components/Table/TableData";
import TableDataBookings from "./TableDataBookings";
import Swal from "sweetalert2";

export default function MyBookingList() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: bookings = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/tour-booking/${user?.email}`,
        user?.email
      );
      return res.data;
    },
  });
  //   console.log(bookings);
  //   console.log(user?.email);
  const bookingCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/tour-booking/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
            axiosSecure.delete(`/delete-assign-tour/${id}`).then(() => {});
          }
        });
      }
    });
  };
  const bookingStatus = bookings?.length > 3 ? true : false;

  const handleOffer = (id) => {
    Swal.fire({
      title: `Offer added for ${id}`,
    });
  };
  {
    isLoading && <div>Loading...</div>;
  }
  return (
    <div>
      <table className="table ">
        <thead className="text-center font-semibold sm:text-xl">
          <tr>
            <th>No:</th>
            <th>package</th>
            <th>Price</th>
            <th>tour guide </th>
            <th>status</th>
            <th>cancel</th>
            <th>Pay</th>
            <th>Apply</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {bookings &&
            bookings.map((booking, idx) => (
              <TableDataBookings
                key={booking._id}
                booking={booking}
                idx={idx}
                bookingCancel={bookingCancel}
                bookingStatus={bookingStatus}
                handleOffer={handleOffer}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
