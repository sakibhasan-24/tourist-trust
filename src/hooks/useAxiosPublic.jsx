import axios from "axios";

export default function useAxiosPublic() {
  const useAxiosPublicData = axios.create({
    baseURL: "https://tourist-server-tau.vercel.app",
  });
  return useAxiosPublicData;
}
