import Image from "../../../components/image";
import Text from "../../../components/text/Text";
import TextDescription from "../../../components/text/TextDescription";
import TextHeaderBox from "../../../components/text/TextHeaderBox";

interface JoindenItemProps {
  position?: "left" | "right";
  joinDenItem: {
    header: string;
    title: string;
    list?: Array<string>;
    position: "left" | "right";
    color: string;
  };
}

const JoinDenItem = ({ position = "left", joinDenItem }: JoindenItemProps) => {
  const backgroundColor = joinDenItem.color;
  return (
    <div className={`joinden-item ${position === "left" ? "leftbox" : "rightbox"}`}>
      <div className='joinden-item__box'>
        <div className={`row ${position !== "left" && "flex-reverse"}`}>
          <div className={`col col-12 col-lg-6`}>
            <div className={`joinden-item__imagebox ${position !== "left" && "imagebox--right"}`}>
              <Image imageUrl='joinden-item-1.png' alt='joinden-item-1' />
              <div className='joinden-item__image--shadown' style={{ backgroundColor: backgroundColor }}></div>
            </div>
          </div>
          <div className='col col-12 col-lg-6'>
            <div className='joinden-item__content'>
              <Text type='title' className='text-black' uppercase fontSize='3.6rem'>
                {joinDenItem.header}
              </Text>
              <Text type='normal' fontSize='1.8rem'>
                {joinDenItem.title}
              </Text>
              <ul className='joinden-item__content--list'>
                {joinDenItem?.list?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinDenItem;
