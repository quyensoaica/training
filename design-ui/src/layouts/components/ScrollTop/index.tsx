import { useEffect, useState } from "react";
import Image from "../../../components/image";
import "./ScrollTop.scss";

const ScrollTop = () => {
  const [isShowScrollTop, setIsShowScrollTop] = useState(false);
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScrollWindow = (e: any) => {
    const window = e.currentTarget;
    if (window.scrollY > 300) {
      setIsShowScrollTop(true);
    } else {
      setIsShowScrollTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollWindow);
    return () => {
      window.removeEventListener("scroll", handleScrollWindow);
    };
  }, []);
  return (
    <span className={`button-scrolltop ${isShowScrollTop && "show"}`} onClick={handleScrollTop}>
      <Image className='w-100' imageUrl='arrow-up.svg' alt='scroll-top' />
    </span>
  );
};
export default ScrollTop;
