import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";
/* 

https://i.ibb.co/C8WQyzC/alec-favale-Bi-5-Vsa-OLn-I-unsplash.jpg
https://i.ibb.co/bLSVW85/beth-macdonald-f-Jmt-spj-CX4-unsplash.jpg
https://i.ibb.co/1bsW1gv/imageOne.jpg
https://i.ibb.co/YtN1mY9/imageTwo.webp
https://i.ibb.co/jhvKGjF/maximilian-jaenicke-Ua-BDu5hi8-Wg-unsplash.jpg
https://i.ibb.co/c1qZYPR/imagethree.jpg
*/
export default function Slider() {
  return (
    <div className="max-w-6xl mx-auto my-28">
      <div className=" text-center space-y-4">
        <h1 className="text-orange-400 sm:text-6xl font-bold">Where We Go</h1>

        <p className="text-2xl font-semibold text-orange-300 ">
          Let's go with us
        </p>
      </div>

      <Carousel
        showArrows={true}
        className="max-w-6xl mx-auto rounded-lg min-h-screen "
      >
        <div className=" slider ">
          <img
            className="h-1/2 w-full object-cover rounded-lg"
            src="https://i.ibb.co/vDBGgj7/image-Four.webp"
          />
          <p className="legend">Iceland Maldivs</p>
        </div>
        <div>
          <img
            className="h-1/2 w-full object-cover rounded-lg"
            src="https://i.ibb.co/bLSVW85/beth-macdonald-f-Jmt-spj-CX4-unsplash.jpg"
          />
          <p className="legend">Waterfall,Bangladesh</p>
        </div>
        <div>
          <img
            className="h-1/2 w-full object-cover rounded-lg"
            src="https://i.ibb.co/xmyj2y9/image-Five.jpg"
          />
          <p className="legend">Amazon Brazil</p>
        </div>
        <div>
          <img
            className="h-1/2 w-full object-cover rounded-lg"
            src="https://i.ibb.co/YtN1mY9/imageTwo.webp"
          />
          <p className="legend">Camel Egypt</p>
        </div>
        <div>
          <img
            className="h-1/2 w-full object-cover rounded-lg"
            src="https://i.ibb.co/jhvKGjF/maximilian-jaenicke-Ua-BDu5hi8-Wg-unsplash.jpg"
          />
          <p className="legend">Green Swizerland</p>
        </div>
        <div>
          <img
            className="h-1/2 w-full object-cover rounded-lg"
            src="https://i.ibb.co/c1qZYPR/imagethree.jpg"
          />
          <p className="legend">Venis Italy</p>
        </div>
      </Carousel>
    </div>
  );
}
