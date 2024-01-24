import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Package from "./Package";
import { useSearchParams } from "react-router-dom";

export default function AllPackages() {
  const useAxiosPublicData = useAxiosPublic();
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await useAxiosPublicData.get("/package-tour");
      const filteredPackages = category
        ? res.data.filter((tour) => tour.tourType === category)
        : res.data;

      // console.log(filteredPackages);
      return filteredPackages;
    },
  });

  return (
    <div className="max-w-6xl mx-auto my-12">
      <h1 className="font-bold text-center text-4xl">All Packages</h1>
      <div className="grid grid-cols-3 gap-4 ">
        {packages.map((singlePackage) => (
          <Package key={singlePackage._id} singlePackage={singlePackage} />
        ))}
      </div>
    </div>
  );
}
