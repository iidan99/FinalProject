import { useState, useCallback, useEffect } from "react";
import "./RegisterForm.scss";
import { RegistrationFormData } from "../../interface/Registration";
import { axiosClient } from "../../utils/apiClient";

const RegisterForm = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "Male",
    password: "",
    verifyPassword: "",
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkPasswordMatch = useCallback(() => {
    setPasswordsMatch(formData.password === formData.verifyPassword);
  }, [formData]);

  useEffect(() => {
    checkPasswordMatch();
  }, [checkPasswordMatch]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!passwordsMatch) return;
    try {
      await registerUser(formData);
      // Reset form after successful registration
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "Male",
        password: "",
        verifyPassword: "",
      });
      setPasswordsMatch(true);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const registerUser = async (data: RegistrationFormData) => {
    try {
      await axiosClient.put("/user/register", data);
      console.log("Registration successful!");
    } catch (error) {
      throw new Error("Registration failed");
    }
  };

  return (
    <>
      <form className="register_form" onSubmit={handleSubmit}>
        <div className="register_form-name">
          <input
            className="register_form-input-name"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleInputChange}
            required
          />
          <input
            className="register_form-input-name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          className="register_form-input"
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          className="register_form-input"
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <div className="register_form_selection">
          <label>Gender: </label>
          <div className="register_form_selection-gender">
            <input
              type="radio"
              name="gender"
              id="Male"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
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
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
              required
            />
            <label>Female</label>
          </div>
        </div>
        <input
          className="register_form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <input
          className="register_form-input"
          type="password"
          name="verifyPassword"
          placeholder="Verify Password"
          value={formData.verifyPassword}
          onChange={handleInputChange}
          required
        />
        <button
          type="submit"
          disabled={
            !(
              formData.password.length >= 7 &&
              formData.password === formData.verifyPassword
            )
          }
        >
          Register
        </button>
      </form>
      {!passwordsMatch && (
        <p className="error-message">Passwords do not match</p>
      )}
    </>
  );
};

export default RegisterForm;
