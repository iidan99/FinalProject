import UserAvatar from "../UserAvatar/UserAvatar";
import "./UserLoggedInMenu.scss";
const UserIsLoggedInMenu = () => {
  return (
    <>
      <div className="logged_in_menu">
        <a href="#">History</a>
        <a href="#">Send Message</a>
        <UserAvatar />
      </div>
    </>
  );
};

export default UserIsLoggedInMenu;
