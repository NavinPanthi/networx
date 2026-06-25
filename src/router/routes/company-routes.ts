import CompanyJobs from "../../pages/company/company-jobs";
import CompanyProfilePage from "../../pages/company/company-profile";
import JobDetailCompanyPage from "../../pages/company/job-detail-company";

interface ICompanyRoutes {
  id: string;
  path: string;
  component: React.FC;
  meta?: {
    companyLayout?: boolean;
    privateRoute?: boolean;
  };
}
const CompanyRoutes: ICompanyRoutes[] = [
  {
    id: "company-profile",
    path: "/company-profile",
    component: CompanyProfilePage,
    meta: {
      privateRoute: true,
      companyLayout: true,
    },
  },
  {
    id: "company-jobs",
    path: "/company/jobs",
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

export default CompanyRoutes;
