import Button from "../../../components/button";
import Text from "../../../components/text/Text";
import TextHeaderSection from "../../../components/text/TextHeaderSection";
import EventItem from "./EventItem";

const EventDenBox = () => {
  return (
    <div className='event-wrapper'>
      <div className='content-box event__header'>
        <div className='d-flex align-items-center justify-content-between event__header'>
          <TextHeaderSection>UPCOMING EVENTS</TextHeaderSection>
        </div>
        <div className='event__space'></div>
        <div className='event__list row'>
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </div>
      </div>
      <div className='event__footer'>
        <Text type='title' fontSize={{ default: "5.6rem", xs: "3.6rem", sm: "3.6rem" }} color='white'>
          WHERE ENTREPRENEURS AROUND THE WORLD <br /> GET CONNECTED, INSPIRED, AND EMPOWERED
        </Text>
        <Button variant='secondary' size='large'>
          Join DEN
        </Button>
      </div>
    </div>
  );
};
export default EventDenBox;
