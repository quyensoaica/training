import { useEffect, useState } from "react";
import Image from "../../../../components/image";
import AppbarMenu from "./AppbarMenu";

const HeaderAppbar = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(true);
  const [offsetY, setOffsetY] = useState(0);

  const handleScrollWindow = (e: any) => {
    const window = e.currentTarget;
    if (window.scrollY > 300) {
      if (offsetY > window.scrollY) {
        setIsScrollUp(true);
      } else {
        setTimeout(() => {
          setIsScrollUp(false);
        }, 1000);
      }
    } else {
      setIsScrollUp(true);
    }
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScrollWindow);

    return () => {
      window.removeEventListener("scroll", handleScrollWindow);
    };
  }, [handleScrollWindow]);

  const handleToggleMenuMobile = (isShow: boolean) => {
    setShowMenuMobile(isShow);
  };
  return (
    <div className={`header-appbar ${isScrollUp || offsetY === 0 ? "" : "hide-appbar"}`}>
      <div className='header-appbar__leftbox'>
        <div className='header-appbar__leftbox--logo'>
          <Image className='w-100' imageUrl='logo-dark.png' alt='logo' />
        </div>
        <div className='header-appbar__leftbox--menu'>
          <AppbarMenu />
        </div>
        <div className={`header-appbar__mobile ${showMenuMobile && "show"}`}>
          <span className='appbar-button-hide' onClick={() => handleToggleMenuMobile(false)}>
            &#10006;
          </span>
          <ul className='appbar-menu__list'>
            <span className='appbar-menu__list-space'></span>
            <li className='appbar-menu__list-item'>Cities</li>
            <span className='appbar-menu__list-space'></span>
            <li className='appbar-menu__list-item'>Ventures</li>
            <span className='appbar-menu__list-space'></span>
            <li className='appbar-menu__list-item'>Academy</li>
            <span className='appbar-menu__list-space'></span>
            <li className='appbar-menu__list-item'>Services</li>
            <span className='appbar-menu__list-space'></span>
            <li className='appbar-menu__list-item'>Accelebrator</li>
            <span className='appbar-menu__list-space'></span>
            <li className='appbar-menu__list-item'>About Us</li>
          </ul>
        </div>
      </div>
      <div className='header-appbar__rightbox'>
        <button className='appbar-button  d-none xl-show'>Join our community</button>
        <span className='appbar-button-show' onClick={() => handleToggleMenuMobile(true)}>
          <Image className='w-100' imageUrl='001-menu-bar.png' alt='menubar' />
        </span>
      </div>
    </div>
  );
};
export default HeaderAppbar;
