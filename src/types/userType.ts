export interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  gender: "Male" | "Female";
  password: string;
}

export type UserData = {
  isLoggedIn?: boolean;
  userId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
};

export type AuthContextType = {
  state: UserData;
  dispatch: (newUser: UserData) => void;
  logout: () => void;
};
