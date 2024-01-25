import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import TableData from "../../components/Table/TableData";
import Swal from "sweetalert2";

export default function WishLists() {
  const { user } = useAuth();
  const axisoSecure = useAxiosSecure();
  const { data: wishLists = [], refetch } = useQuery({
    queryKey: ["wishLists", user?.email],
    queryFn: async () => {
      const res = await axisoSecure.get(`/wish-list/${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axisoSecure.delete(`/wish-list/${id}`).then((res) => {
          //   console.log(res);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="">
      <div className=" overflow-x-hidden">
        <table className="table ">
          <thead className="text-center font-semibold sm:text-xl">
            <tr>
              <th>No:</th>
              <th>image</th>
              <th>tour Name</th>
              <th>Price ($)</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {wishLists &&
              wishLists.map((list, idx) => (
                <TableData
                  key={list.tourId}
                  list={list}
                  idx={idx}
                  handleDelete={handleDelete}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
