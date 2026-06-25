import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getUserData } from "../utils/auth-storage";
import { checkCompany } from "../utils/check-company";
import { checkAdmin } from "../utils/check-admin";
import CompanyLayout from "../layout/company-layout";
import AdminLayout from "../layout/admin-layout";
import type { RootState } from "../redux/store";

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);

  const userData = getUserData();
  const isCompany = checkCompany(userData);
  const isAdmin = checkAdmin(userData);

  if (!loginStatus) {
    return <Fragment>{children}</Fragment>;
  }

  if (isCompany) {
    return <CompanyLayout>{children}</CompanyLayout>;
  }
  if (isAdmin && !isCompany) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return <Fragment>{children}</Fragment>;
}

export default LayoutWrapper;
