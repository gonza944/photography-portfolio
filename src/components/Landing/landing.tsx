import Displayer from "../Photo-Displayer/photoDisplayer";
import image from "../../public/images/DJI_0348-HDR-Enhanced-SR.jpg";
import image2 from "../../public/images/GON_3324.jpg";
import image3 from "../../public/images/DJI_0408-HDR-Enhanced-SR.jpg";

const Landing = async () => {
  return (
    <div className="font-serif flex align-middle justify-center pt-{50%}">
      <Displayer imageUrl={[image, image2, image3]} />
    </div>
  );
};

export default Landing;
