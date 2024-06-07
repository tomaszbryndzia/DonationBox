import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

const useIsMobileScreen = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth < 600);
    }, 50);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobileScreen;
