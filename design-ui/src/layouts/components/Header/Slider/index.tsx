import Button from "../../../../components/button";
import Image from "../../../../components/image";
import Text from "../../../../components/text/Text";

const HeaderSlider = () => {
  return (
    <div className='header-slider'>
      <div className='header-slider__image'>
        <Image imageUrl='slider-image.png' alt='header-slider' />
      </div>
      <div className='header-slider__content'>
        <Image imageUrl='DEN.png' alt='den' />
        <Text type='title' textAlign='center' fontSize={{ default: "5.6rem" }} color='white' className='mt-20px mb-20px'>
          GLOBAL NETWORK FOR MENTORSHIP AND SUPPORT
        </Text>
        <span className='header-slider__content-description'>Get all the support and education you need to achieve full potential as an entrepreneur.</span>
        <br />
        <Button variant='primary' size='large' className='header-slider__content-button'>
          Join DEN
        </Button>
      </div>
    </div>
  );
};
export default HeaderSlider;
