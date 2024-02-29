"use client";

import useIntersectionObserver from "@/Hooks/useIntersectionObserver";
import Image from "next/image";
import Link from "next/link";
import { env } from "process";
import { useEffect, useState } from "react";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { getNewPhotosRequest } from "../../app/actions";

const InfiniteGrid: React.FC<{ elements: Random[] }> = ({ elements }) => {
  const percentileToFetchNewData = Number.parseInt(
    (
      elements.length *
      Number.parseFloat(env.PERCENTAGE_TO_FETCH_NEW_DATA || "0.8")
    ).toFixed(0)
  );
  const [isIntersecting, targetRef] = useIntersectionObserver<HTMLImageElement>(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    }
  );
  const [photos, setPhotos] = useState(elements);

  useEffect(() => {
    if (isIntersecting) {
      const fetchNewPhotos = async () => {
        const newPhotos = await getNewPhotosRequest(
          env.STORY_FETCH_PHOTO_NUMBER
        );

        setPhotos((prevPhotos) => [...prevPhotos, ...(newPhotos || [])]);
      };

      fetchNewPhotos();
    }
  }, [isIntersecting]);

  return (
    <div className="grid grid-flow-row grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {photos.map((element, index) => (
        <div key={index}  className="relative">
          <Link href={`/photoModal/${element.id}`}  className="relative">
            <Image
              className="relative z-20 rounded-md shadow-md shadow-fontColor max-sm:rounded-none max-sm:filter-none hover:z-0"
              ref={
                index === elements.length - percentileToFetchNewData
                  ? targetRef
                  : null
              }
              src={element.urls.regular}
              width={element.width}
              height={element.height}
              alt={element.alt_description || "Image"}
              style={{ width: "auto", height: "auto" }}
            />
            {element.description && (
              <div className="absolute z-10 hover:z-30 rounded-md max-sm:rounded-none bg-gradient-to-t from-stone-300 to-transparent w-[100%] h-[100%] bottom-0 p-4 pt-32 pb-8 flex items-end justify-center">
                <p>{element.description}</p>
              </div>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InfiniteGrid;
