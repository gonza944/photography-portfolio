"use client";

import { Photo } from "@/app/actions";
import Image from "next/image";
import { useEffect, useState } from "react";

const Displayer: React.FC<{ photos: Photo[] }> = ({ photos }) => {
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
      className=" rounded-md shadow-md shadow-fontColor self-center"
      src={photos[currentImageIndex].src}
      width={photos[currentImageIndex].width}
      height={photos[currentImageIndex].height}
      alt={photos[currentImageIndex].alt || "Image"}
      style={{ width: "600px", height: "auto" }}
    />
  );
};

export default Displayer;
