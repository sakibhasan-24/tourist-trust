import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();
  const [role] = useRole();
  const [isUpdateProfile, setUpdateProfile] = useState(false);
  const axisoSecure = useAxiosSecure();

  //   console.log(user);
  const handleTourGuideProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const contact = e.target.contact.value;
    const experience = e.target.experience.value;
    const assignTour = e.target.assignTour.value;
    const educationLevel = e.target.educationLevel.value;
    const tourGuideInfo = {
      email: user?.email,
      name,
      contact,
      experience,
      assignTour,
      educationLevel,
    };
    // console.log(tourGuideInfo);
    // update or save in Db
    const res = await axisoSecure.put(
      `/update/guide/${user?.email}`,
      tourGuideInfo
    );
    console.log(res.data);
  };
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl sm:ml-64 relative">
        <figure>
          <img src={user?.photoURL} alt="images" className="rounded-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {user?.displayName}
            <div className="badge badge-secondary absolute top-20 left-40 px-4 py-2 font-bold">
              {role}
            </div>
          </h2>
          {role === "Guide" && (
            <Link to={`/dashboard/profile/details/${user?.email}`}>
              Details
            </Link>
          )}
          <div className="card-actions justify-end">
            {role === "Guide" && (
              <div className="badge badge-outline">
                <h1
                  onClick={() => setUpdateProfile(!isUpdateProfile)}
                  className="cursor-pointer"
                >
                  Update Profile
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto my-6 p-6">
        {isUpdateProfile && (
          <div className="max-w-4xl mx-auto bg-red-900 p-6 ">
            <h1 className="text-center">Add Information</h1>
            <form
              onSubmit={handleTourGuideProfile}
              className="flex flex-col gap-6 w-full "
            >
              <input
                type="text"
                className="input input-bordered w-full  rounded-md px-4 py-2 mb-2"
                name="name"
                placeholder="enter Name"
                defaultValue={user?.displayName}
                id=""
              />
              <input
                className="input input-bordered w-full  rounded-md px-4 py-2 mb-2"
                type="text"
                name="educationLevel"
                placeholder="enter Highest level of Education"
                id=""
              />
              <input
                type="number"
                name="experience"
                className="input input-bordered w-full  rounded-md px-4 py-2 mb-2"
                placeholder="experience"
                id=""
              />
              <textarea
                className="input input-bordered w-full  rounded-md px-4 py-2 mb-2"
                placeholder="write your tour assign"
                name="assignTour"
              ></textarea>
              <input
                className="input input-bordered w-full  rounded-md px-4 py-2 mb-2"
                type="text"
                name="contact"
                placeholder="contact"
                id=""
              />
              <input
                className="input input-bordered w-full bg-slate-950 cursor-pointer  rounded-md px-4 py-2 mb-2"
                type="submit"
                value="Update Profile"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
