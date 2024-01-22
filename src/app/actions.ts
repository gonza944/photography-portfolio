import { env } from "process";
import { cache } from "react";
import { createApi } from "unsplash-js";
import { Random } from "unsplash-js/dist/methods/photos/types";

export const getNewPhotosRequest = cache(
  async (numberOfPhotos: string = '30') => {
    try {
      const unsplashClient = createApi({
        accessKey: env.UNSPLASH_API_KEY || "",
      });

      const data = await unsplashClient.photos.getRandom({
        count: Number.parseInt(numberOfPhotos),
      });

      return data.response as Random[];
    } catch (error) {
      throw new Error("failed to fetch new photos");
    }
  }
);
