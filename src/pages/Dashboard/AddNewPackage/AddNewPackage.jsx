import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function AddNewPackage() {
  const { register, handleSubmit } = useForm();
  const useAxiosSecureData = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();

  const imageHosting = import.meta.env.VITE_IMAGE_API_KEY;

  const image_key = `https://api.imgbb.com/1/upload?key=${imageHosting}`;
  const multipleImageUploadKey = `https://api.imgbb.com/3/upload?key=${imageHosting}`;
  const onSubmit = async (data) => {
    // for single or banner image
    const image = { image: data.image[0] };
    const bannerImg = await useAxiosSecureData.post(image_key, image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const photoGallery = { gallery: data.image[0] };
    const arrayOfImage = await useAxiosSecureData.post(image_key, image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const arrayOfPhoto = [
      { 0: arrayOfImage.data.data.display_url },
      { 1: arrayOfImage.data.data.display_url },
      { 2: arrayOfImage.data.data.display_url },
    ];
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-bold text-4xl text-center">Add A new Package</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-2 sm:p-6 my-4">
          <input
            {...register("tripTitle", { required: true })}
            type="text"
            placeholder="trip Title"
            className="px-4 py-3 rounded-lg mt-5 w-full   focus:outline-none focus:bg-slate-500 font-semibold "
          />
          <input
            type="name"
            defaultValue={user?.displayName}
            {...register("name")}
            className="px-4 py-3 rounded-lg mt-5 w-full   focus:outline-none focus:bg-slate-500 font-semibold "
          />
          <input
            type="email"
            defaultValue={user?.email}
            {...register("email")}
            className="px-4 py-3 rounded-lg mt-5 w-full   focus:outline-none focus:bg-slate-500 font-semibold "
          />
          <select
            {...register("tourType")}
            className="my-4 px-4 py-2 rounded-md w-full"
          >
            <option value="sea beach">sea beach</option>
            <option value="hiking">Hiking</option>
            <option value="wildlife">sildlife</option>
            <option value="walking">walking</option>
          </select>
          <input
            type="number"
            {...register("price")}
            className="px-4 py-3 rounded-lg mt-5 w-full  focus:outline-none focus:bg-slate-500 font-semibold cursor-pointer"
            placeholder="price"
          />
          <textarea
            type="text"
            {...register("tourDetails")}
            className="px-4 py-3 rounded-lg mt-5 w-full  focus:outline-none focus:bg-slate-500 font-semibold cursor-pointer"
            placeholder="tour details"
          />
          <input
            type="file"
            {...register("image")}
            className="px-4 py-3 rounded-lg mt-5 w-full  focus:outline-none focus:bg-slate-500 font-semibold cursor-pointer"
          />
          <label>photo Gallery for tour</label>
          <input
            type="file"
            {...register("photoGallery")}
            className="px-4 py-3 rounded-lg mt-2 w-full  focus:outline-none focus:bg-slate-500 font-semibold cursor-pointer"
          />
          <label>tour plan (demo)</label>
          <textarea
            type="text"
            {...register("tourPlan")}
            className="px-4 py-3 rounded-lg mt-5 w-full  focus:outline-none focus:bg-slate-500 font-semibold cursor-pointer"
            placeholder="tour Plan"
          />
          <input
            type="submit"
            value="Add package"
            className="w-full bg-slate-500 text-white py-3 uppercase   rounded-lg mt-5 font-semibold cursor-pointer hover:bg-slate-700"
          />
        </form>
      </div>
    </div>
  );
}
