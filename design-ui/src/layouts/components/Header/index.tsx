import HeaderAppbar from "./AppBar";
import HeaderSlider from "./Slider";
import "./Header.scss";

const Header = () => {
  return (
    <header className='header'>
      <HeaderAppbar />
      <HeaderSlider />
    </header>
  );
};
export default Header;
