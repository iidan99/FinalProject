import {
  createContext,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { parseJwt } from "../utils/tokens";
import { axiosClient } from "../utils/apiClient";
import { AuthContextType } from "../types/userType";

export const getUserDataFromToken = (accessToken?: string | null) => {
  if (!accessToken) {
    accessToken = window.localStorage.getItem("accessToken");
    console.log(accessToken);
  }

  let userId = "none",
    firstName = "none",
    lastName = "none",
    email = "none",
    phoneNumber = "none",
    gender = "none";

  if (typeof accessToken == "string" && accessToken != "undefined") {
    const userDetails = parseJwt(accessToken);
    userId = userDetails.userId;
    firstName = userDetails.firstName;
    lastName = userDetails.lastName;
    email = userDetails.email;
    phoneNumber = userDetails.phoneNumber;
    gender = userDetails.gender;
  }

  return {
    isLoggedIn: accessToken ? true : false,
    userId,
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
  };
};

const AuthHelper = ({ logout, children, onSelect }: any) => {
  useLayoutEffect(() => {
    axiosClient.interceptors.request.use(
      (req) => {
        const accessToken = window.localStorage.getItem("accessToken");
        if (accessToken) {
          if (!req.url?.includes("/token")) {
            req.headers.Authorization = `Bearer ${accessToken}`;
          }
        }
        return req;
      },
      (err) => {
        console.error(err);
        return err;
      }
    );

    axiosClient.interceptors.response.use(
      (res) => res,
      async (err) => {
        if (err.response?.status == 401) {
          if (!err.config.__isRetryRequest) {
            const refreshToken = window.localStorage.getItem("refreshToken");
            if (refreshToken) {
              let accessTokenRes;
              try {
                accessTokenRes = await axiosClient.post(
                  "/token",
                  {
                    oldAccessToken: window.localStorage.getItem("accessToken"),
                  },
                  { headers: { Authorization: `Bearer ${refreshToken}` } }
                );
              } catch (err) {
                logout();
              }
              const accessToken = accessTokenRes?.data?.accessToken;
              if (accessToken) {
                window.localStorage.setItem("accessToken", accessToken);
                err.config.__isRetryRequest = true;
                const response = await axiosClient(err.config);
                return response;
              }
              return err;
            } else {
              logout();
            }
          } else {
            logout();
          }
        } else {
          console.error(err);
          alert(err);
          if (err.response?.status == 410) {
            logout();
          }
          return err;
        }
      }
    );
  }, []);

  return <>{children}</>;
};

export const AuthContext = createContext<AuthContextType>({
  state: {},
  dispatch: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: any) => {
  const [userData, setUserData] = useState(getUserDataFromToken());

  const logout = useCallback(async () => {
    try {
      await axiosClient.post("/logout", {
        refreshToken: window.localStorage.getItem("refreshToken"),
      });
    } catch (err) {
      // you can handle your error more accurate here
      // example - if 500/429 - do retry for /logout after 10s
    }
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");
    setUserData(getUserDataFromToken());
    window.location.pathname = "/";
  }, []);

  const providerUserValue = useMemo(
    () => ({ state: userData, dispatch: setUserData, logout }),
    [userData, setUserData, logout]
  );

  return (
    <AuthHelper logout={logout}>
      <AuthContext.Provider value={providerUserValue as AuthContextType}>
        {children}
      </AuthContext.Provider>
    </AuthHelper>
  );
};

export default AuthProvider;
