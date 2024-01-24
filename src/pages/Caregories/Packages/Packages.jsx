import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Package from "./Package";
import { Link, useSearchParams } from "react-router-dom";

export default function Packages() {
  const useAxiosPublicData = useAxiosPublic();
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await useAxiosPublicData.get("/package-tour/initial");
      //   console.log(res.data);
      const filteredPackages = category
        ? res.data.filter((tour) => tour.tourType === category)
        : res.data;

      console.log(filteredPackages);
      return filteredPackages;
    },
  });
  return (
    <div>
      <div className=" max-w-6xl mx-auto grid grid-cols-3 gap-12 ">
        {packages.map((singlePackage) => (
          <Package singlePackage={singlePackage} key={singlePackage._id} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          className=" bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-500"
          to="/all-packages"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
