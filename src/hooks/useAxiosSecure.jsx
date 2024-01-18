import axios from "axios";

export default function useAxiosSecure() {
  const useAxiosSecureData = axios.create({
    baseURL: "http://localhost:5000",
  });
  return useAxiosSecureData;
}
