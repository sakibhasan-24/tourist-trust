import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export default function useRole() {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  // console.log("role-------------------");
  // console.log(user?.email);
  const userEmail = user?.email;
  // console.log(userEmail);
  const { data: role, isLoading } = useQuery({
    queryKey: ["userRole", userEmail],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tourist-list/${userEmail}`);
      console.log(res?.data);
      return res?.data;
    },
  });
  return [role, isLoading];
}
