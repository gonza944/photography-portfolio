import InfiniteGrid from "@/components/Infinite-grid/infinite-grid";
import { createApi } from "unsplash-js";
import { Random } from "unsplash-js/dist/methods/photos/types";

const Stories: React.FC = async() => {

    const unsplashClient = createApi({
        // Don't forget to set your access token here!
        // See https://unsplash.com/developers
        accessKey: "ZgRP4uDjKn-YfrDVDKjqWC8tRCaX423xdrus2t2jE1Q",
      });
  
      const data = await unsplashClient.photos.getRandom({ count: 30 });

  return <InfiniteGrid elements={data.response as Random[]} />;
};

export default Stories;
