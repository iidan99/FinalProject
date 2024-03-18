import { useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import DownloadFooter from "../components/downloadFooter/DownloadFooter";
import Header from "../components/header/Header";
import HowItsWorks from "../components/howitsworks/HowItsWorks";
import Search from "../components/search/Search";
import Video from "../components/video/Video";
import PopUpModal from "../modals/PopUpModal/PopUpModal";
import "./LandingPage.scss";

const videoLink = "https://www.youtube.com/embed/7_gIbNoRza4";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="cover">
        <Search />
        <HowItsWorks />
        <Video videoLink={videoLink} />
        <DownloadFooter />
      </div>
    </div>
  );
};

export default LandingPage;
