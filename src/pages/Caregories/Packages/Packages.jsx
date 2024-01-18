import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Package from "./Package";

export default function Packages() {
  const useAxiosPublicData = useAxiosPublic();
  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await useAxiosPublicData.get("/package-tour/initial");
      //   console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className=" max-w-6xl mx-auto grid grid-cols-3 gap-12 ">
      {packages.map((singlePackage) => (
        <Package singlePackage={singlePackage} key={singlePackage._id} />
      ))}
    </div>
  );
}
