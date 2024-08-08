import Button from "../../../components/button";
import Image from "../../../components/image";
import Text from "../../../components/text/Text";
import TextHeaderSection from "../../../components/text/TextHeaderSection";

const WorkDenBox = () => {
  return (
    <div className='workden-wrapper content-box'>
      <Text type='header' fontSize={{ default: "9rem", xs: "7.2rem", sm: "7.2rem" }}>
        HOW DEN WORK
      </Text>
      <div className='workden__list'>
        <div className='row align-items-stretch'>
          <div className='col col-12 col-md-6 col-lg-4 col-xl-3 mb-20px'>
            <div className='workden__item'>
              <span className='workden__item--icon'>
                <Image imageUrl='slack.png' alt='icon' />
              </span>
              <span className='workden__item--number'>01</span>
              <span className='workden__item--title'>Say hello and interact on the DEN Slack channel</span>
            </div>
          </div>
          <div className='col col-12 col-md-6 col-lg-4 col-xl-3 mb-20px'>
            <div className='workden__item'>
              <span className='workden__item--icon'>
                <Image imageUrl='slack.png' alt='icon' />
              </span>
              <span className='workden__item--number'>02</span>
              <span className='workden__item--title'>Explore free high-quality on-demand learning content</span>
            </div>
          </div>
          <div className='col col-12 col-md-6 col-lg-4 col-xl-3 mb-20px'>
            <div className='workden__item'>
              <span className='workden__item--icon'>
                <Image imageUrl='slack.png' alt='icon' />
              </span>
              <span className='workden__item--number'>03</span>
              <span className='workden__item--title'>Meet co-founders, advisors, partners, customers, and investors</span>
            </div>
          </div>
          <div className='col col-12 col-md-6 col-lg-4 col-xl-3 mb-20px'>
            <div className='workden__item'>
              <span className='workden__item--icon'>
                <Image imageUrl='global-network.png' alt='icon' />
              </span>
              <span className='workden__item--number'>04</span>
              <span className='workden__item--title'>Find opportunities in the global Draper ecosystem</span>
            </div>
          </div>
        </div>
      </div>

      <div className='workden__entrepre row align-items-center justify-content-between'>
        <div className='col col-12 col-md-6 leftbox'>
          <TextHeaderSection>
            But First... <br /> You Have to Join
          </TextHeaderSection>
          <p className='workden__entrepre--title'>What are you waiting for? Join DEN today.</p>
          <Button variant='primary' size='large'>
            Join DEN
          </Button>
        </div>
        <div className='col col-12 col-md-6 rightbox'>
          <Image className='w-100' imageUrl='entrepreneurs.svg' alt='entrepreneurs' />
        </div>
      </div>
    </div>
  );
};
export default WorkDenBox;
