import Image from "../../../components/image";
import TextDescription from "../../../components/text/TextDescription";

const FeedbackItem = () => {
  return (
    <div className='feedback__item'>
      <div className='feedback__item--header'>
        <Image imageUrl='feedback-1.png' alt='feedback' />
        <div className='feedback__item--info'>
          <h5 className='feedback__item--name'>John Doe</h5>
          <span className='feedback__item--position'>CEO, Company Name</span>
        </div>
      </div>
      <TextDescription>
        Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut venenatis tellus in metus vulputate eu scelerisque felis. Felis done
      </TextDescription>
      <TextDescription>Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.</TextDescription>
      <a href='#' className='readmore'>
        Read More
      </a>
    </div>
    // <div className='col col-12 col-md-6 col-lg-4'>
    // </div>
  );
};
export default FeedbackItem;
