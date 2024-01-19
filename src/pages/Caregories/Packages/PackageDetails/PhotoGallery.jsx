import React from "react";
import PhotoAlbum from "react-photo-album";

export default function PhotoGallery({ photos }) {
  console.log(photos[1]);

  if (!photos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={photos[1]} alt="" />
    </div>
  );
}
