import phoneIMG from "../../assets/images/header_phone.png";
import DownloadApp from "../DownloadApp/DownloadApp";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="container_logo">
        {/* <img
          className="container_logo_Img"
          src={logoIMG}
          alt="StartChat Logo"
        /> */}
        <div className="container_text">
          <p className="container_main_text">
            WhatsApp to people
            <span className="container_second_text"> without adding them</span>
          </p>
        </div>
        <div className="container_text_content">
          <p>
            simple way to start Whatsapp conversation with people without adding
            them to your contact list.
          </p>
          <p>
            save for later time things like websites linkes, news, remindings
            and etc. by sending them to your phone number.
          </p>
        </div>
        <DownloadApp />
      </div>
      <div
        className="container_header_phone"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        <img className="container_header_phone_img" src={phoneIMG} alt="" />
      </div>
    </div>
  );
};

export default Header;
