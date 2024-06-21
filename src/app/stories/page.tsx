import InfiniteGrid from "@/components/Infinite-grid/infinite-grid";
import { Metadata } from "next";
import { env } from "process";
import { getNewPhotosRequest } from "../actions";

export const metadata: Metadata = {
  title: "Stories",
};

const Stories: React.FC = async () => {
  const photos = await getNewPhotosRequest(env.NEXT_PUBLIC_STORY_FETCH_PHOTO_NUMBER);

  return <InfiniteGrid elements={photos} />;
};

export default Stories;
