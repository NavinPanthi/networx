import type { IUser } from "../redux/slices/user-slice";

export const checkUser = (userData: IUser) => {
  return userData?.roles.includes("candidate") ? true : false;
};
