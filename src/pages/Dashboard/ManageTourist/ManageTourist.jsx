import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TouristTable from "./TouristTable";
import Swal from "sweetalert2";

export default function ManageTourist() {
  const axiosSecure = useAxiosSecure();

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleChangeRole = (id) => {
    setIsOpen(true);
  };
  function openModal() {
    setIsOpen(true);
  }

  const { data: tourist = [], refetch } = useQuery({
    queryKey: ["tourist"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tourist-list");
      return res.data;
    },
  });
  //   const id = tourist.map((t) => t._id);
  //   console.log(id);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Tourist!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/tourist-list/${id}`).then((res) => {
          if (res.data.acknowledged) {
            Swal.fire("Deleted!", "Tourist has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };
  const handleMakeAdmin = async (id) => {
    // console.log(id);
    const statusRole = { role: "Admin" };
    const res = await axiosSecure.patch(`/make-admin/${id}`, statusRole);
    // console.log(res.data);
    console.log(statusRole);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        icon: "success",
        title: "Admin Created",
        timer: 1500,
      });
    }
    // if(res.data)
  };

  const handleMakeGuide = async (id) => {
    const res = await axiosSecure.patch(`/make-tourist-guide/${id}`);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        icon: "success",
        title: "Tourist Guide Created",
        timer: 1500,
      });
    }
  };
  return (
    <div className="max-w-4xl mx-auto">
      <table className="table ">
        <thead className="text-center font-semibold sm:text-xl relative">
          <tr>
            <th>No:</th>
            <th>Name </th>
            <th>role </th>
            <th>email</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* {isOpen && (
            <select className="sm:w-1/4 text-xs font-extralight absolute sm:top-0 sm:left-[20%]">
              <option value="">Make Admin</option>
              <option value="">Make Guide</option>
            </select>
          )} */}
          {tourist &&
            tourist.map((singleTourist, idx) => (
              <TouristTable
                key={singleTourist._id}
                idx={idx}
                singleTourist={singleTourist}
                handleDelete={handleDelete}
                isOpen={isOpen}
                closeModal={closeModal}
                openModal={openModal}
                handleChangeRole={handleChangeRole}
                handleMakeAdmin={handleMakeAdmin}
                handleMakeGuide={handleMakeGuide}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
