import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export default function useRole() {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  console.log(user?.email);
  const { data: role, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tourist-list/${user?.email}`);
      console.log(res);
      return res.data?.role;
    },
  });
  return [role, isLoading];
}
