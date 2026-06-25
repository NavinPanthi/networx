import Login from "../../pages/auth/login";
import AboutPage from "../../pages/landing/about";
import ContactPage from "../../pages/landing/contact";
import ExplorePage from "../../pages/landing/explore";
import JobDetailCandidatePage from "../../pages/candidate/job-detail-page";
import Landing from "../../pages/landing/landing";
import CandidateProfilePage from "../../pages/candidate/candidate-profile";

interface IUserRoutes {
  id: string;
  path: string;
  component: React.FC;
  meta: {
    CompanyLayout?: boolean;
    adminLayout?: boolean;
    userLayout?: boolean;
    privateRoute: boolean;
  };
}

const userRoutes: IUserRoutes[] = [
  {
    id: "landing",
    path: "/",
    component: Landing,
    meta: {
      privateRoute: false,
    },
  },
  {
    id: "log-in",
    path: "/log-in",
    component: Login,
    meta: {
      privateRoute: false,
    },
  },
  {
    id: "about",
    path: "/about",
    component: AboutPage,
    meta: {
      userLayout: true,
      privateRoute: false,
    },
  },
  {
    id: "contact-us",
    path: "/contact",
    component: ContactPage,
    meta: {
      userLayout: true,
      privateRoute: false,
    },
  },
  {
    id: "explore",
    path: "/job",
    component: ExplorePage,
    meta: {
      userLayout: true,
      privateRoute: false,
    },
  },
  {
    id: "job-page",
    path: "/job/:id",
    component: JobDetailCandidatePage,
    meta: {
      userLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "candidate-profile",
    path: "/candidate-profile",
    component: CandidateProfilePage,
    meta: {
      userLayout: true,
      privateRoute: false,
    },
  },
];

export default userRoutes;
