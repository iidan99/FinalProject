import "./Video.scss";

interface videoProps {
  videoLink: string;
}

const Video = ({ videoLink }: videoProps) => {
  return (
    <div className="video_container">
      <iframe
        src={videoLink}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="video"
      ></iframe>
    </div>
  );
};

export default Video;
