import { useState } from "react";
import { axiosClient } from "../utils/apiClient";
import { getUserDataFromToken } from "../context/AuthProvider";

interface LoginUser {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [userValid, setUserValid] = useState(true);

  const login = async (loginUser: LoginUser) => {
    try {
      const loginResponse = await axiosClient.post("/user/login", loginUser);
      if (loginResponse.data) {
        window.localStorage.setItem(
          "accessToken",
          loginResponse.data.accessToken
        );
        window.localStorage.setItem(
          "refreshToken",
          loginResponse.data.refreshToken
        );
        getUserDataFromToken(loginResponse.data.accessToken);
        return true;
      } else {
        setUserValid(false);
        return false;
      }
    } catch (error) {
      console.error("Error during login:", error);
      setUserValid(false);
      return false;
    }
  };

  return { login, userValid };
};
