import axios from "axios";

export default function useAxiosSecure() {
  const useAxiosSecureData = axios.create({
    baseURL: "https://tourist-server-tau.vercel.app",
  });

  // useAxiosSecureData.interceptors.request.use(
  //   function (config) {
  //     const token = localStorage.getItem("token");
  //     config.headers.authorization = `Bearer ${token}`;
  //     return config;
  //   },
  //   function (error) {
  //     return Promise.reject(error);
  //   }
  // );
  // // 4**** cases
  // useAxiosSecureData.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   function (error) {
  //     // console.log("error", error.response.status);
  //     if (error.response.status === 401 || error.response.status === 403) {
  //       userLogOut().then(() => {
  //         // navigate("/login");
  //       });
  //     }
  //     return Promise.reject(error);
  //   }
  // );
  return useAxiosSecureData;
}
