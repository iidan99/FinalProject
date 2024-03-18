import "./MobileIconView.scss";

const MobileIconView = ({ image1, image2, headline, content }: any) => {
  return (
    <div className="mobile">
      <div className="mobile_img">
        <img className="mobile_img-1" src={image1} alt="" />
        <div className="mobile_img_container">
          <img src={image2} alt="" />
          <h3>{headline}</h3>
          <p className="mobile-content">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default MobileIconView;
