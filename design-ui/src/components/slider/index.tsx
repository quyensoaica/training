import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import "./slider.scss";
import { ISliderRef, ISliderProps } from "./sliderType";

const Slider = forwardRef<ISliderRef, ISliderProps>(({ children = null, size = 6, showItem = { default: 3, xs: 1, sm: 1, md: 2, lg: 3 } }, ref) => {
  const feedbackRef = useRef<HTMLDivElement | null>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [showItemNumber, setShowItemNumber] = useState<number>(typeof showItem === "number" ? showItem : showItem.default);

  const [position, setPosition] = useState(0);
  useImperativeHandle(ref, () => ({
    handleChangePosition: handleChangePosition,
  }));

  const handleChangePosition = (value: number) => {
    if ((value > 0 && position >= 0) || (value < 0 && position <= -size + showItemNumber)) {
      return;
    }
    setPosition(position + value);
  };

  const updateItemWhenResize = () => {
    const width = window.innerWidth;
    switch (true) {
      case width < 576:
        setShowItemNumber(typeof showItem === "object" ? showItem?.xs ?? showItem.default : showItem);
        break;
      case width < 768:
        setShowItemNumber(typeof showItem === "object" ? showItem?.sm ?? showItem.default : showItem);
        break;
      case width < 992:
        setShowItemNumber(typeof showItem === "object" ? showItem?.md ?? showItem.default : showItem);
        break;
      case width < 1200:
        setShowItemNumber(typeof showItem === "object" ? showItem?.lg ?? showItem.default : showItem);
        break;
      default:
        setShowItemNumber(typeof showItem === "object" ? showItem?.xl ?? showItem.default : showItem);
        break;
    }
  };

  useEffect(() => {
    updateItemWhenResize();
    window.addEventListener("resize", updateItemWhenResize);
    return () => window.removeEventListener("resize", updateItemWhenResize);
  }, []);

  const handleChangeItemWidth = (width: number) => {
    setItemWidth(width);
  };

  useEffect(() => {
    feedbackRef && feedbackRef.current && handleChangeItemWidth((feedbackRef.current as HTMLElement).offsetWidth / showItemNumber);
  }, [(feedbackRef?.current as HTMLElement)?.offsetWidth]);

  return (
    <div className='slider' ref={feedbackRef}>
      <div className='slider-list' style={{ transform: `translateX(${position * (itemWidth + 10)}px)` }}>
        {(children as React.ReactNodeArray).map((child: React.ReactNode, index: number) => {
          return (
            <div key={index} className='slider-item' style={{ flex: `0 0 ${100 / showItemNumber}%` }}>
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
});
export default Slider;
