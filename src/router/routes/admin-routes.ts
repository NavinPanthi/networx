// import AdminChatPage from "@/pages/admin/admin-chat-page";
// import AdminProductsPage from "@/pages/admin/products/admin-products-page";
// import ProductDetailAdminPage from "@/pages/admin/products/product-detail-page";
// import UsersPage from "@/pages/admin/users/users-page";
// import CompanyProfilePage from "@/pages/admin/profile";
// import CompanyChangePassword from "@/pages/company/profile/company-change-password";

import CompanyJobs from "../../pages/company/company-jobs";
import CompanyProfilePage from "../../pages/company/company-profile";
import JobDetailCompanyPage from "../../pages/company/job-detail-company";

interface IAdminRoutes {
  id: string;
  path: string;
  component: React.FC;
  meta?: {
    adminLayout?: boolean;
    privateRoute?: boolean;
  };
}
const adminRoutes: IAdminRoutes[] = [
  {
    id: "admin-profile",
    path: "/admin/profile",
    component: CompanyProfilePage,
    meta: {
      privateRoute: true,
      adminLayout: true,
    },
  },
  {
    id: "admin-jobs",
    path: "/admin/jobs",
    component: CompanyJobs,
    meta: {
      privateRoute: true,
    },
  },
  {
    id: "job-page",
    path: "/job/:id",
    component: JobDetailCompanyPage,
    meta: {
      privateRoute: false,
    },
  },
];

export default adminRoutes;
