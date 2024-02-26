import NavigationBar from "../components/NavigationBar/NavigationBar";
import Header from "../components/header/Header";
import HowItsWorks from "../components/howitsworks/HowItsWorks";
import Search from "../components/search/Search";

const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Search />
      <HowItsWorks />
    </div>
  );
};

export default LandingPage;
