import Button from "../../../components/button";
import Text from "../../../components/text/Text";
import TextHeaderSection from "../../../components/text/TextHeaderSection";
import JoinDenItem from "./JoinDenItem";

const JoinDenBox = () => {
  const joinDenList: Array<{
    header: string;
    title: string;
    list?: Array<string>;
    position: "left" | "right";
    color: string;
  }> = [
    {
      header: "Connect with a global network",
      title: "DEN membership connects you with inspiring people and ideas to empower your entrepreneurial or fundraising journey.",
      list: [
        "Discover useful resources, software credits, and perks",
        "Find the best events and training programs",
        "Meet co-founders, advisors, and partners",
        "Search and discover trending topics and insights",
      ],
      position: "left",
      color: "rgba(76, 143, 204, 1)",
    },
    {
      header: "GET INSPIRed By PEERS AND EXPERTS",
      title: "Becoming a successful entrepreneur means surrounding yourself with an inspiring ecosystem like DEN.",
      list: [
        "Get constructive feedback from industry experts",
        "Read startup stories, successes, and failures",
        "Get help on investor relations topics like term sheets",
        "Find best practices and professional templates",
      ],
      color: "rgba(92, 198, 143, 1)",
      position: "right",
    },
    {
      header: "ENTREPRENEURS JOIN THE DEN COMMUNITY",
      title:
        "Our members and their supporters include: founders and teams; mentors and advisors; remote workers and service providers; and angel investors and venture capitalists from around the world. As a DEN member, you can build a market-ready company much faster than ever before.",

      color: "rgba(255, 204, 0, 1)",
      position: "left",
    },
  ];

  return (
    <div className='joinden-wrapper'>
      <Text type='header' uppercase fontSize={{ default: "9rem", xs: "7.6rem", sm: "7.6rem", md: "7.6rem" }} textAlign='center'>
        Join the Draper entrepreneur network
      </Text>
      {joinDenList?.map((item, index) => (
        <JoinDenItem joinDenItem={item} key={index} position={item?.position} />
      ))}
      <div className='text-center'>
        <Button variant='primary' className='joinden-button'>
          Join DEN
        </Button>
      </div>
    </div>
  );
};
export default JoinDenBox;
