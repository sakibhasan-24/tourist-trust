import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Overview from "./Overview";

export default function Overviews() {
  const useAxiosPublicData = useAxiosPublic();
  const { data: overviews = [] } = useQuery({
    queryKey: ["overviews"],
    queryFn: async () => {
      const response = await useAxiosPublicData.get("/overview");
      return response.data;
    },
  });
  return (
    <div className="max-w-4xl mx-auto my-6 grid grid-cols-3  gap-10">
      {overviews.map((overview) => (
        <Overview key={overview._id} overview={overview} />
      ))}
    </div>
  );
}
