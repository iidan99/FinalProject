import "./DownloadApp.scss";
import googlePlayIMG from "../../assets/images/google-play-badge.png";

const DownloadApp = () => {
  return (
    <div className="container_btn">
      <a
        className="container_btn_a"
        href="https://play.google.com/store/apps/details?id=org.nativescript.StartChat"
        target="_blank"
      >
        <img
          className="container_btn_google"
          src={googlePlayIMG}
          alt="google play"
        />
      </a>
    </div>
  );
};

export default DownloadApp;
