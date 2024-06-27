import DownloadApp from "../DownloadApp/DownloadApp";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import "./DownloadFooter.scss";

const DownloadFooter = () => {
  return (
    <div className="download-footer">
      <div className="down">
        <span>
          Download <b>App</b>
        </span>
        <DownloadApp />
      </div>
      <div className="download-footer_bottom"></div>
      <div className="privacy">
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default DownloadFooter;
