import React, { useContext, useState, useRef, useEffect } from "react";
import "./UserAvatar.scss";
import { AuthContext } from "../../context/AuthProvider";

const UserAvatar: React.FC = () => {
  const { state, logout } = useContext(AuthContext);

  const [activeDropDown, setActiveDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogOut = async () => {
    try {
      await logout(); // Assume logout returns a promise
      setActiveDropDown(false); // Close the dropdown after logout
    } catch (error) {
      console.error("Logout failed:", error);
      // Optionally, show an error message to the user
    }
  };

  const first = `${state.firstName?.charAt(0).toUpperCase() || ""}${
    state.lastName?.charAt(0).toUpperCase() || ""
  }`;

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActiveDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        className="user_avatar"
        onClick={() => setActiveDropDown((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={activeDropDown}
      >
        <p>{first}</p>
      </button>
      {activeDropDown && (
        <div className="user_avatar_dropdown" ref={dropdownRef}>
          <button onClick={handleLogOut}>LogOut</button>
        </div>
      )}
    </>
  );
};

export default UserAvatar;
