import Landing from "../../pages/landing/landing";
import Login from "../../pages/auth/login";
import SignUp from "../../pages/auth/sign-up";
import AboutPage from "../../pages/landing/about";
import ContactPage from "../../pages/landing/contact";
import ExplorePage from "../../pages/landing/explore";
import JobDetailCandidatePage from "../../pages/candidate/job-detail-page";

interface IAuthRoutes {
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

const authRoutes: IAuthRoutes[] = [
  {
    id: "auth",
    path: "/",
    component: Landing,
    meta: {
      privateRoute: false,
    },
  },
  {
    id: "login",
    path: "/log-in",
    component: Login,
    meta: {
      privateRoute: false,
    },
  },
  {
    id: "signup",
    path: "/sign-up",
    component: SignUp,
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
];

export default authRoutes;
