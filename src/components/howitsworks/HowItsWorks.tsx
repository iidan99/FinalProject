import MobileIconView from "../MobileIconView/MobileIconView";
import "./HowItsWorks.scss";
import number1 from "../../assets/images/1.png";
import number2 from "../../assets/images/2.png";
import number3 from "../../assets/images/3.png";
import mobile1 from "../../assets/images/phone1.png";
import mobile2 from "../../assets/images/phone2.png";
import mobile3 from "../../assets/images/phone3.png";
import icon1 from "../../assets/images/person_icon.png";
import icon2 from "../../assets/images/group_icon.png";
import icon3 from "../../assets/images/dots_icon.png";

const mobileData = [
  {
    numberImg: number1,
    phoneImg: mobile3,
    header: "Copy",
    content: "Phone Number",
  },
  {
    numberImg: number2,
    phoneImg: mobile2,
    header: "Paste | Write",
    content: "The Phone Number",
  },
  {
    numberImg: number3,
    phoneImg: mobile1,
    header: "Start",
    content: "WhatsApp Conversation",
  },
];

const HowItsWorks = () => {
  return (
    <div className="work-container">
      <p className="work-container_header">
        How It <b>Work?</b>
      </p>

      <div className="mobile-container">
        {mobileData.map((data, index) => (
          <MobileIconView
            key={index}
            image1={data.numberImg}
            image2={data.phoneImg}
            headline={data.header}
            content={data.content}
          />
        ))}
      </div>
      <div className="work-container_icons">
        <div>
          <img src={icon3} alt="" />
        </div>
        <div className="work-container_icons-right">
          <div className="work-container_icons-right--content">
            <img src={icon1} alt="" />
            <div>
              <p>
                Have you ever wished you could have saved for a later time
                things like website links, news, reminding, etc? so you may send
                it by WhatsApp to family members, friends, partners, etc?
              </p>
              <p>
                <b>
                  Now with StartChat you can send it to your WhatsApp phone
                  number and save it
                </b>
              </p>
            </div>
            <div>
              <h3>Write your phone number</h3>
              <p>
                <b>and start WhatsApp conversation</b>
              </p>
            </div>
          </div>
          <div className="work-container_icons-right--content-s">
            <img src={icon2} alt="" />
            <div>
              <p>
                StartChat provides you with a simple way to start your WhatsApp
                conversation with people without adding them to your contact
                list.
              </p>
            </div>
            <div>
              <h3>Write or Copy phone number</h3>
              <p>
                <b>and start WhatsApp conversation</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorks;
