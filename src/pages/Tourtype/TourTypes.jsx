import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TourType from "./TourType";
import { useSearchParams } from "react-router-dom";

const axiosSecure = useAxiosSecure();
export default function TourTypes() {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosSecure.get("/package-tour");
      return res.data;
    },
  });
  const [params, setParams] = useSearchParams();
  const categoryItem = params.get("category");

  // console.log(categories);
  const categoriesData = new Set(categories.map((item) => item.tourType));
  // console.log(categoriesData);
  const categoriesArray = Array.from(categoriesData);
  // console.log(categoriesArray);
  return (
    <div className="max-w-6xl mx-auto my-6 p-6">
      <div className="flex justify-center items-center space-x-10">
        {categoriesArray.map((item, index) => (
          <TourType key={index} tourType={item} />
        ))}
      </div>
    </div>
  );
}
