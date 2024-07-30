import "./NavigationBar.scss";
import StartChatsLogo from "../../assets/images/Header_Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import UserIsLoggedInMenu from "../userLoggedInMenu/UserLoggedInMenu";

const NavigationBar = ({ setOpenModal, setActiveTab }: any) => {
  const { state } = useContext(AuthContext);

  const handleLoginClick = () => {
    setOpenModal(true);
    setActiveTab("login");
  };

  const handleRegisterClick = () => {
    setOpenModal(true);
    setActiveTab("Register");
  };

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar_container_links">
          <div className="navbar_container_links-logo">
            <img src={StartChatsLogo} alt="StartChats Logo" />
          </div>
        </div>
        {!state.isLoggedIn ? (
          <div className="navbar_buttons">
            <a className="navbar_buttons_btn_a" onClick={handleLoginClick}>
              Login
            </a>
            <button
              className="navbar_buttons_btn"
              type="submit"
              onClick={handleRegisterClick}
            >
              SignUp
            </button>
          </div>
        ) : (
          <UserIsLoggedInMenu />
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
