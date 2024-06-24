"use server";

import { createShuffledArray } from "@/utils/utils";
import { env } from "process";
import { cache } from "react";
import { createApi } from "unsplash-js";
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
      if (env.NODE_ENV === "development") {
        const unsplashClient = createApi({
          accessKey: `${env.UNSPLASH_API_KEY}`,
        });

        const data = await unsplashClient.photos
          .getRandom({
            count: Number.parseInt(numberOfPhotos),
          })
          .then((data) => {
            const { response } = data;
            if (response instanceof Array) {
              return response?.map((photo) => ({
                width: photo.width,
                height: photo.height,
                alt: photo.alt_description,
                src: photo.urls.regular,
                id: photo.id,
              }));
            } else {
              return [
                {
                  width: response?.width,
                  height: response?.height,
                  alt: response?.alt_description,
                  src: response?.urls.regular,
                  id: response?.id,
                },
              ];
            }
          });

        return data as Photo[];
      } else {
        const now = new Date();
        const indexsToFetch = createShuffledArray(
          Number.parseInt(env.NEXT_PUBLIC_INFINITY_GRID_LENGTH || "82"),
          now.getMonth()
        );
        const numberOfPhotosInt = Number.parseInt(numberOfPhotos);

        const photos = indexsToFetch.slice(startFrom + 1, startFrom + numberOfPhotosInt + 1).map((photoId) => ({
          width: 600,
          height: 900,
          alt: "Portfolio Photo",
          src: `${env.NEXT_PUBLIC_IMGIX_DOMAIN}/Portfolio-${photoId}.jpg?auto=format&fit=cropw=600`,
          id: `Portfolio-${photoId}`,
        }));
        return photos;
      }
    } catch (error) {
      throw new Error("failed to fetch new photos");
    }
  }
);

export const getPhotoById = cache(async (id: string) => {
  try {
    if (env.NODE_ENV === "development") {
      const unsplashClient = createApi({
        accessKey: `${env.UNSPLASH_API_KEY}`,
      });

      const data = await unsplashClient.photos
        .get({ photoId: id })
        .then((data) => data.response);

      return {
        width: data?.width || 600,
        height: data?.height || 900,
        alt: data?.alt_description || "",
        src: data?.urls.regular || "",
        id: data?.id,
      };
    } else {
      return {
        width: 1080,
        height: 1900,
        alt: "Portfolio Photo",
        src: `${env.NEXT_PUBLIC_IMGIX_DOMAIN}/${id}.jpg`,
        id: id,
      };
    }
  } catch (error) {
    throw new Error("failed to fetch new photos");
  }
});

export const getPhotoByIdServer = cache(async (id: string) => {
  try {
    const data = await getPhotoById(id);

    return data as Photo;
  } catch (error) {
    throw new Error("failed to fetch new photos");
  }
});
