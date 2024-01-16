"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const Displayer: React.FC<{ imageUrl: StaticImageData[] }> = ({ imageUrl }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % imageUrl.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex, imageUrl.length]);

  return (
    <Image
      className=" rounded-md shadow-md shadow-fontColor"
      src={imageUrl[currentImageIndex]}
      alt="Main image"
      style={{ width: "600px", height: "auto" }}
    />
  );
};

export default Displayer;
