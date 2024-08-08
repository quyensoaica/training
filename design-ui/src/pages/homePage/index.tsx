import EventDenBox from "./EventBox";
import FeedbackDenBox from "./FeedbackDenBox";
import JoinDenBox from "./JoinDenBox";
import WorkDenBox from "./WorkDenBox";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className='homepage-wrapper'>
      <JoinDenBox />
      <WorkDenBox />
      <FeedbackDenBox />
      <EventDenBox />
    </div>
  );
};
export default HomePage;
