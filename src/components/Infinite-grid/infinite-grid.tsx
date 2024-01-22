"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { getNewPhotosRequest } from "../../app/actions";

const InfiniteGrid: React.FC<{ elements: Random[] }> = ({ elements }) => {
  const ninentyPercentile = Number.parseInt((elements.length * 0.9).toFixed(0));
  const [shouldFetchMorePhotos, setShouldFetchMorePhotos] = useState(false);
  const [photos, setPhotos] = useState(elements);
  const triggerPhoto = useRef(null);

  const handleObserver = (entities: any) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setShouldFetchMorePhotos(true);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (triggerPhoto.current) {
      observer.observe(triggerPhoto.current);
    }
  }, []);

  useEffect(() => {
    if (shouldFetchMorePhotos) {
      setShouldFetchMorePhotos(false);
      const fetchNewPhotos = async () => {
        const { response: newPhotos } = await getNewPhotosRequest();

        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos || []]);
      };

      fetchNewPhotos();
    }
  }, [shouldFetchMorePhotos]);

  return (
    <div className="grid grid-flow-row grid-cols-3 gap-8">
      {photos.map((element, index) => (
        <div key={index}>
          <Image
            ref={
              index === elements.length - ninentyPercentile
                ? triggerPhoto
                : null
            }
            src={element.urls.regular}
            width={element.width}
            height={element.height}
            alt={element.alt_description || "Image"}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
};

export default InfiniteGrid;
