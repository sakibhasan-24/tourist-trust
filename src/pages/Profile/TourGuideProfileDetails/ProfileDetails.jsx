import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function ProfileDetails() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: details = {} } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/tour-guide-details/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-4">Profile Details</h1>
        <p>Name: {details.name}</p>
        <p>Email: {details.tourGuideEmail}</p>
        <p>Phone: ++{details.contact}</p>
        {/* Add more details as needed */}
        <p>experience {details?.experience} years</p>
        <p>Education :{details?.educationLevel}</p>
        <p>tours:{details?.assignTour}</p>
      </div>
    </div>
  );
}
