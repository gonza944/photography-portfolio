"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Random } from "unsplash-js/dist/methods/photos/types";

const Displayer: React.FC<{ photos: Random[] }> = ({ photos }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % photos.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex, photos.length]);

  return (
    <Image
      className=" rounded-md shadow-md shadow-fontColor"
      src={photos[currentImageIndex].urls.regular}
      width={photos[currentImageIndex].width}
      height={photos[currentImageIndex].height}
      alt={photos[currentImageIndex].alt_description || "Image"}
      style={{ width: "600px", height: "auto" }}
    />
  );
};

export default Displayer;
