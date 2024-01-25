import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Bookings({ singlePackage }) {
  console.log("bookings");
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const axiosPubluc = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: tourGuides = [] } = useQuery({
    queryKey: ["tourGuides"],
    queryFn: async () => {
      const res = await axiosPubluc.get("/tourist-guide");
      return res.data;
    },
  });
  const { user } = useAuth();
  // console.log(user);
  const [role] = useRole();
  // console.log(role);
  // need tour guide
  // tour booking

  const handleBooking = async (e) => {
    e.preventDefault();
    const booking = {
      packageId: singlePackage._id,
      packageName: singlePackage.tourType,
      userEmail: user.email,
      userName: user.displayName,
      tourGuide: e.target.tourGuide.value,
      status: "pending",
      tourName: singlePackage?.tripTitle,
      tourId: singlePackage?._id,
      startDate: startDate.toLocaleDateString(),
    };

    const res = await axiosSecure.post("/tour-booking", booking);
    // console.log(res.data);
    if (res.data.acknowledged) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Booking Successful",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => navigate("/dashboard/my-booking"));

      //  save in the backend
    }
  };
  return (
    <div className="max-w-6xl mx-auto my-6">
      <h1 className="my-6 text-4xl font-bold text-center">Booking Now!</h1>
      <div className="max-w-4xl mx-auto shadow-2xl shadow-slate-900 p-8">
        <form
          onSubmit={handleBooking}
          className="flex flex-col gap-6 w-3/4 mx-auto px-4"
        >
          <input
            className="w-full px-4 py-2 border border-slate-900 rounded"
            type="text"
            name="name"
            readOnly
            defaultValue={user?.displayName || "user One"}
            id=""
          />
          <input
            className="w-full px-4 py-2 border border-slate-900 rounded"
            type="text"
            name="tourName"
            readOnly
            defaultValue={singlePackage?.tripTitle}
            id=""
          />
          <input
            className="w-full px-4 py-2 border border-slate-900 rounded"
            type="email"
            name="email"
            readOnly
            defaultValue={user?.email}
            id=""
          />
          <input
            className="w-full px-4 py-2 border border-slate-900 rounded"
            type="number"
            name="price"
            readOnly
            defaultValue={singlePackage?.price}
            id=""
          />
          <DatePicker
            className="w-full px-4 py-2 border border-slate-900 rounded"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <select name="tourGuide" id="">
            {tourGuides.map((guide) => (
              <option
                className="w-full px-4 py-2 border border-slate-900 rounded"
                value={guide.name}
                key={guide._id}
              >
                {guide.name}
              </option>
            ))}
          </select>
          <input
            className="bg-slate-600 px-6 py-4 rounded-lg font-bold uppercase cursor-pointer"
            type="submit"
            value="Booking Now"
          />
        </form>
      </div>
    </div>
  );
}
