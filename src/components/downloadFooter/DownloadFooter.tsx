import DownloadApp from "../DownloadApp/DownloadApp";
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
    </div>
  );
};

export default DownloadFooter;
