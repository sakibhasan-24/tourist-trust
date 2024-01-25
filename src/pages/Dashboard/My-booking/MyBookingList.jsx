import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import TableData from "../../../components/Table/TableData";
import TableDataBookings from "./TableDataBookings";

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
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
