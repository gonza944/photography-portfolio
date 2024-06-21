import Displayer from "../Photo-Displayer/photoDisplayer";
import { getNewPhotosRequest } from "@/app/actions";
import { env } from "process";

const Landing = async () => {

  const photos = await getNewPhotosRequest(env.NEXT_PUBLIC_LANDING_FETCH_PHOTO_NUMBER);

  return (
    <div className="font-serif flex align-middle justify-center pt-{50%}">
      <Displayer photos={photos} />
    </div>
  );
};

export default Landing;
