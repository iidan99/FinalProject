import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LoginForm.scss";
import { isValidElement, useState } from "react";
import { axiosClient } from "../../utils/apiClient";
import { getUserDataFromToken } from "../../context/AuthProvider";

const LoginForm = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginUser((prevUser) => ({ ...prevUser, [name]: value }));
    setIsFormValid(loginUser.email !== "" && loginUser.password !== "");
  };

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const login = await axiosClient.post("/user/login", loginUser);
    if (login) {
      window.localStorage.setItem("accessToken", login.data.accessToken);
      window.localStorage.setItem("refreshToken", login.data.refreshToken);
      getUserDataFromToken(login.data.accessToken);
      window.location.reload();
    } else {
      alert("User or password isn't correct");
    }
  };

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
      {/* {isValidElement ? <p>Email or Password isn't correct</p>} */}
      <button type="submit" disabled={!isFormValid}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
