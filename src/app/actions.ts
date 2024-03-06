import { cache } from "react";
import { createApi } from "unsplash-js";
import { Random } from "unsplash-js/dist/methods/photos/types";

export const getNewPhotosRequest = cache(
  async (numberOfPhotos: string = "30") => {
    try {
      const unsplashClient = createApi({
        accessKey: "ZgRP4uDjKn-YfrDVDKjqWC8tRCaX423xdrus2t2jE1Q",
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

export const getPhotoById = cache(async (id: string) => {
  try {
    const unsplashClient = createApi({
      accessKey: "ZgRP4uDjKn-YfrDVDKjqWC8tRCaX423xdrus2t2jE1Q",
    });

    return unsplashClient.photos.get({ photoId: id });
  } catch (error) {
    throw new Error("failed to fetch new photos");
  }
});

export const getPhotoByIdServer = cache(async (id: string) => {
  try {
    const data = await getPhotoById(id);

    return data.response as Random;
  } catch (error) {
    throw new Error("failed to fetch new photos");
  }
});
