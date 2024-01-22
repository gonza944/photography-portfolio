import { cache } from "react";
import { createApi } from "unsplash-js";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Random } from "unsplash-js/dist/methods/photos/types";

export const getNewPhotosRequest = cache(async () => {
  try {
    const unsplashClient = createApi({
      // Don't forget to set your access token here!
      // See https://unsplash.com/developers
      accessKey: "ZgRP4uDjKn-YfrDVDKjqWC8tRCaX423xdrus2t2jE1Q",
    });

    const data = await unsplashClient.photos.getRandom({ count: 30 });

    return data as ApiResponse<Random[]>;
  } catch (error) {
    throw new Error("failed to fetch new photos");
  }
});
