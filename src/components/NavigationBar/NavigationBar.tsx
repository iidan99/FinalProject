import "./NavigationBar.scss";
import StartChatsLogo from "../../assets/images/Header_Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import UserAvatar from "../UserAvatar/UserAvatar";

const NavigationBar = ({ setOpenModal, setActiveTab }: any) => {
  const { state, logout } = useContext(AuthContext);

  const handleLoginClick = () => {
    setOpenModal(true);
    setActiveTab("login");
  };

  const handleLogOut = () => {
    logout(); // Call the logout function to update the authentication state
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
            <a className="navbar_button" onClick={handleLoginClick}>
              Login
            </a>
            <button
              className="navbar_button"
              type="submit"
              onClick={handleRegisterClick}
            >
              SignUp
            </button>
          </div>
        ) : (
          <UserAvatar
            firstName={state.firstName}
            lastName={state.lastName}
            onSelect={handleLogOut} // Pass the handleLogOut function as onSelect
          />
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
