import { createShuffledArray } from "@/utils/utils";
import { env } from "process";
import { cache } from "react";
import { Nullable } from "unsplash-js/dist/helpers/typescript";

export type Photo = {
  width: number;
  height: number;
  alt: Nullable<string>;
  src: string;
  description?: string;
  id: string;
};

export const getNewPhotosRequest = cache(
  async (
    numberOfPhotos: string = env.NEXT_PUBLIC_STORY_FETCH_PHOTO_NUMBER || "30",
    startFrom: number = 1
  ) => {
    try {
      const now = new Date();
      const indexsToFetch = createShuffledArray(
        Number.parseInt(env.NEXT_PUBLIC_INFINITY_GRID_LENGTH || "82"),
        now.getMonth()
      );
      const numberOfPhotosInt = Number.parseInt(numberOfPhotos);

      const photos = indexsToFetch
        .slice(startFrom + 1, startFrom + numberOfPhotosInt + 1)
        .map((photoId) => ({
          width: 600,
          height: 900,
          alt: "Portfolio Photo",
          src: `${
            env.NEXT_PUBLIC_IMGIX_DOMAIN ||
            "https://gonzaloariza-975314016.imgix.net"
          }/Portfolio-${photoId}.jpg?auto=format&fit=cropw=600`,
          id: `Portfolio-${photoId}`,
        }));
      return photos;
    } catch (error) {
      throw new Error("failed to fetch new photos");
    }
  }
);

export const getPhotoById = cache(async (id: string) => {
  try {
    return {
      width: 1080,
      height: 1900,
      alt: "Portfolio Photo",
      src: `${
        env.NEXT_PUBLIC_IMGIX_DOMAIN ||
        "https://gonzaloariza-975314016.imgix.net"
      }/${id}.jpg`,
      id: id,
    };
  } catch (error) {
    throw new Error("failed to fetch new photos");
  }
});

export const getPhotoByIdServer = cache(async (id: string) => {
  try {
    const data = await getPhotoById(id);

    //Fix tipying
    return data as Photo;
  } catch (error) {
    throw new Error("failed to fetch new photos");
  }
});
