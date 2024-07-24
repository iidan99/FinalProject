import React, { useState, useEffect } from "react";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LoginForm.scss";
import { useLogin } from "../../service/LoginService";

const LoginForm = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  const { login, userValid } = useLogin();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = await login(loginUser);
    if (success) {
      window.location.reload();
    } else {
      alert("User or password isn't correct");
    }
  };

  useEffect(() => {
    setIsFormValid(loginUser.email !== "" && loginUser.password !== "");
  }, [loginUser]);

  return (
    <form className="login_form" onSubmit={handleLoginSubmit}>
      <span>
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={loginUser.email}
          onChange={handleInputChange}
        />
      </span>
      <span>
        <FontAwesomeIcon icon={faLock} />
        <input
          name="password"
          type={viewPassword ? "text" : "password"}
          placeholder="Password"
          required
          value={loginUser.password}
          onChange={handleInputChange}
        />
        <FontAwesomeIcon
          icon={viewPassword ? faEyeSlash : faEye}
          onClick={() => setViewPassword(!viewPassword)}
        />
      </span>
      {!userValid && <p>Email or Password isn't correct</p>}
      <button type="submit" disabled={!isFormValid}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
