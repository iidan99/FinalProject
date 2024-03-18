import { useContext } from "react";
import "./MyProfile.scss";
import { AuthContext } from "../../context/AuthProvider";

const MyProfile = () => {
  const { state } = useContext(AuthContext);
  return (
    <div className="my-profile">
      <div className="my-profile-header">
        <h1>My Profile</h1>
      </div>
      <div>
        <form action="">
          <label>First Name</label>
          <input name="firstName" type="text" defaultValue={state.firstName} />
          <label>Last Name</label>
          <input type="text" name="lastName" defaultValue={state.lastName} />
          <label>Email</label>
          <input type="text" defaultValue={state.email} readOnly />
          <label>Last Name</label>
          <input
            type="text"
            name="phoneNumber"
            defaultValue={state.phoneNumber}
          />
          <div className="register_form_selection">
            <label>Gender: </label>
            <div className="register_form_selection-gender">
              <input
                type="radio"
                name="gender"
                id="Male"
                value="Male"
                checked={state.gender === "Male"}
                required
              />
              <label>Male</label>
            </div>
            <div className="register_form_selection-gender">
              <input
                type="radio"
                name="gender"
                id="Female"
                value="Female"
                checked={state.gender === "Female"}
                required
              />
              <label>Female</label>
            </div>
          </div>
          <button type="submit">Save</button>
          <button>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
