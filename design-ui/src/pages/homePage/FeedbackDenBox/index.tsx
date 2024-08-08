import { useRef } from "react";
import Image from "../../../components/image";
import Text from "../../../components/text/Text";
import TextHeaderSection from "../../../components/text/TextHeaderSection";
import FeedbackItem from "./FeedbackItem";
import Slider from "../../../components/slider";
import { ISliderRef, ISliderShowItem } from "../../../components/slider/sliderType";

const FeedbackDenBox = () => {
  const showItem: number | ISliderShowItem = {
    default: 3,
    xs: 1,
    sm: 1,
    md: 2,
    lg: 3,
  };

  const sliderRef = useRef<ISliderRef>(null);

  return (
    <div className='content-box feedback-wrapper'>
      <div className='feedback__header'>
        <TextHeaderSection>
          WHAT PEOPLE ARE <br /> SAYING ABOUT DEN
        </TextHeaderSection>
        <div className='feedback__header--button'>
          <button onClick={() => sliderRef.current?.handleChangePosition(1)}>
            <Image imageUrl='arrow-left.png' alt='icon' />
          </button>
          <button onClick={() => sliderRef.current?.handleChangePosition(-1)}>
            <Image imageUrl='arrow-right.png' alt='icon' />
          </button>
        </div>
      </div>
      <div className='feedback__list'>
        <Slider size={6} showItem={showItem} ref={sliderRef}>
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
        </Slider>
      </div>

      <div className='feedback__footer'>
        <Text type='title' fontSize={{ default: "5.6rem", xs: "3.6rem", sm: "3.6rem" }} color='white' uppercase>
          Draper Startup House is on a mission to enable <br /> ONE million entrepreneurs worldwide by 2023
        </Text>
      </div>
    </div>
  );
};
export default FeedbackDenBox;
