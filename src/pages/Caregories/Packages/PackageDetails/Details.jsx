import { useParams } from "react-router-dom";
// import PhotoGallery from "./PhotoGallery";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PhotoAlbum from "react-photo-album";
import Bookings from "../../Booking/Bookings";
// import PhotoAlbum from "react-photo-album";

export default function Details() {
  const { id } = useParams();
  const useAxiosSecureData = useAxiosSecure();
  const { data: singlePackage = {} } = useQuery({
    queryKey: ["package", id],
    queryFn: async () => {
      const res = await useAxiosSecureData(`/package-details/${id}`);

      return res.data;
    },
  });
  console.log(singlePackage.tourPlan);

  return (
    <div className="max-w-6xl mx-auto my-12">
      {/* gallery */}
      <div className="grid grid-cols-3 items-center justify-center gap-6 object-cover">
        {singlePackage.photoGallery &&
          singlePackage?.photoGallery.map((photo) => (
            <img
              src={photo}
              alt="photo"
              key={photo}
              className="w-[400px] h-[200px] rounded-lg scale-95 hover:scale-90 transition-all duration-1000 ease-in-out object-cover cursor-pointer"
            />
          ))}
      </div>
      <div className="max-w-3xl mx-auto text-center my-4">
        <h1 className="text-3xl font-bold ">About Tour</h1>
        <p className="tetx-xl font-semibold">{singlePackage.tourDetails}</p>
      </div>
      <div className="max-w-4xl mx-auto my-4 text-center">
        {/* tour plan */}
        <h1 className="text-4xl font-bold underline underline-offset-4 my-6">
          Tour Plan
        </h1>
        <h1 className="text-2xl font-semibold my-2">What We will Do</h1>
        <div className="join join-vertical w-full">
          {singlePackage.tourPlan &&
            singlePackage.tourPlan.map((plan, idx) => (
              <div
                key={idx}
                className="collapse collapse-arrow join-item border border-base-300"
              >
                <input type="radio" name="my-accordion-4" />

                <div className="collapse-title text-xl font-medium text-blue-600">
                  {plan.day}
                </div>
                <div className="collapse-content">
                  <p className="bg-slate-400 text-slate-950 p-6 mx-2 font-semibold rounded-lg">
                    🧳{plan.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/*#TODO: tour guide  */}
      <div></div>
      {/*#TODO: tour guide  */}
      {/* booking form */}
      <div>
        <Bookings />
      </div>
    </div>
  );
}
