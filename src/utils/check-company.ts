import type { IUser } from "../redux/slices/user-slice";

export const checkCompany = (userData: IUser) => {
  return userData?.roles.includes("company") ? true : false;
};
