import { useState } from "react";
import "./UserAvatar.scss";

const UserAvatar = ({ firstName, lastName, onSelect }: any) => {
  const [activeDropDown, setActiveDropDown] = useState(false);

  const handleLogout = () => {
    onSelect();
  };
  const first =
    firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  return (
    <>
      <div
        className="user_avatar"
        onClick={() => setActiveDropDown(!activeDropDown)}
      >
        <p>{first}</p>
      </div>
      {activeDropDown && (
        <div
          className="user_avatar_dropdown"
          //   onClick={() => setActiveDropDown(!activeDropDown)}
        >
          <p onClick={handleLogout}>LogOut</p>
        </div>
      )}
    </>
  );
};

export default UserAvatar;
