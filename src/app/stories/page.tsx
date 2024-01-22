import InfiniteGrid from "@/components/Infinite-grid/infinite-grid";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { getNewPhotosRequest } from "../actions";
import { env } from "process";

const Stories: React.FC = async() => {

  const photos = await getNewPhotosRequest(env.STORY_FETCH_PHOTO_NUMBER);

  return <InfiniteGrid elements={photos as Random[]} />;
};

export default Stories;
