import Chevron from "@/app/assets/chevron";
import { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      className={`${
        visible ? "" : "hidden"
      } rounded-full bg-[url(https://grainy-gradients.vercel.app/noise.svg)] bg-secondaryColor fixed z-50 shadow-md bottom-[5%] right-[5%] w-24 h-24 max-md:bottom-8 max-md:right-8 max-md:w-20 max-md:h-20`}
      onClick={handleScrollToTop}>
      <Chevron />
    </button>
  );
};

export default ScrollToTop;
