import Button from "../../../components/button";
import Image from "../../../components/image";
import TextHeaderBox from "../../../components/text/TextHeaderBox";

const EventItem = () => {
  return (
    <div className='event__item col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4'>
      <div className='event__item--image'>
        <Image className='w-100' alt='event' imageUrl='event-1.png' />
      </div>
      <div className='event__item--content'>
        <span className='event__item--date'>15 JAN 2021</span>
        <TextHeaderBox className='mt-20px mb-20px' size='3.6rem'>
          How to Test Ideas with No Money or Time
        </TextHeaderBox>
        <Button variant='secondary' size='small'>
          Register
        </Button>
      </div>
    </div>
  );
};
export default EventItem;
