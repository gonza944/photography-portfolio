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
  async (numberOfPhotos: string = "30", startFrom: number = 1) => {
    try {
      if (env.VERCEL_ENV === "development") {
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
        // aca tengo que armar el objeto que me devolveria imgix, seria la URL con la opcion para que sea comprimida y co un formato piola. El width, el height y el alt
        // Crear un type, no usar mas el Random
        // Para la URL tengo que elegir fotos random que vayan variando de a poco, una vez por mes mas o menos
        // Como hago para saber el numero total de fotos cosa de que no me pase de ese numero
        const numberOfPhotosInt = Number.parseInt(numberOfPhotos);
        let photos = [];

        for (let index = 0; index <= numberOfPhotosInt; index++) {
          photos.push({
            width: 600,
            height: 900,
            alt: "Portfolio Photo",
            src: `${
              env.IMGIX_DOMAIN || "https://gonzaloariza-975314016.imgix.net"
            }/Portfolio-${startFrom + index + 1}.jpg?auto=format&fit=cropw=600`,
            id: `Portfolio-${index}`,
          });
        }
        return photos;
      }
    } catch (error) {
      throw new Error("failed to fetch new photos");
    }
  }
);

export const getPhotoById = cache(async (id: string) => {
  try {
    const unsplashClient = createApi({
      accessKey: `${env.UNSPLASH_API_KEY}`,
    });

    return unsplashClient.photos.get({ photoId: id });
  } catch (error) {
    throw new Error("failed to fetch new photos");
  }
});

export const getPhotoByIdServer = cache(async (id: string) => {
  try {
    const data = await getPhotoById(id);

    //Fix tipying
    return data.response as unknown as Photo;
  } catch (error) {
    throw new Error("failed to fetch new photos");
  }
});
