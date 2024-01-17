import React from "react";
import { TypeAnimation } from "react-type-animation";
export default function Banner() {
  const bannerImage = [
    "https://st3.depositphotos.com/4080643/33564/i/450/depositphotos_335640804-stock-photo-beautiful-girl-sitting-on-the.jpg",
    "https://www.travelanddestinations.com/wp-content/uploads/2019/03/Switzerland-Landscapes.jpg",
    "https://www.honeymoonbug.com/blog/wp-content/uploads/2019/09/best-time-to-visit-maldives.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVXTi25-zTSWTIa9IIopZNCi52rU5mpUGLQ&usqp=CAU",
  ];
  const imageNumber = Math.trunc(Math.random() * 4);
  //   console.log(imageNumber);
  return (
    <div
      className="hero min-h-screen max-w-6xl mx-auto rounded-lg my-2"
      style={{
        backgroundImage: `url(${bannerImage[imageNumber]})`,
        filter: "brightness(70%)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <TypeAnimation
            className="mb-5  font-bold text-orange-500"
            sequence={[
              "Welcome With us",
              500,

              "Travelling With Us",
              500,

              "We will Guide You",
              500,

              " Best Offer For You",
              500,

              " Best Tour guide For you",
              500,
            ]}
            style={{ fontSize: "3em" }}
            repeat={Infinity}
          />

          <p className="mb-5 text-xl text-center font-semibold space-y-1 text-slate-300 tracking-widest">
            we will go with you.we will met different places .explore different
            location.Explore love in new places.
          </p>
        </div>
      </div>
    </div>
  );
}
