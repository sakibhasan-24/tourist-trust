import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Guide from "./Guide";

export default function TourGuides() {
  const axiosPubluc = useAxiosPublic();
  const { data: tourGuides = [] } = useQuery({
    queryKey: ["tourGuides"],
    queryFn: async () => {
      const res = await axiosPubluc.get("/tourist-guide");
      return res.data;
    },
  });
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-3 gap-6 my-6">
        {tourGuides.map((guide) => (
          <Guide key={guide._id} guide={guide} />
        ))}
      </div>
    </div>
  );
}
