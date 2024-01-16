import { useEffect, useState } from "react";

const useStaleHook = (timeToIddle: number) => {
  const [isIddle, setIsIddle] = useState(false);

  let timeout = setTimeout(() => {
    setIsIddle(true);
  }, timeToIddle);

  useEffect(() => {
    onmousemove = () => {
      setIsIddle(false);
      clearTimeout(timeout);
      timeout.refresh && timeout.refresh();
    };

    return () => {
      clearTimeout(timeout);
    };
  }, [timeout]);

  return isIddle;
};

export default useStaleHook;
