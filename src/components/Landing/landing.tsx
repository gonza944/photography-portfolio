import { list } from "@vercel/blob";
import Displayer from "../Photo-Displayer/photoDisplayer";

const Landing = async () => {
  const Urls = await list({ limit: 10, prefix: "Portfolio/" }).then((res) =>
    res.blobs.map((blob) => blob.url)
  );

  return (
    <div className="font-serif flex align-middle justify-center pt-{50%}">
      <Displayer imageUrl={Urls} />
    </div>
  );
};

export default Landing;
