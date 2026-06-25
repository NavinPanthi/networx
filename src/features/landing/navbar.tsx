import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Logout01Icon,
  Menu02Icon,
  MultiplicationSignIcon,
  Profile02Icon,
  UserIcon,
} from "hugeicons-react";
import { motion } from "motion/react";
import { getUserData } from "../../utils/auth-storage";
import { checkUser } from "../../utils/check-user";
import Popup from "../../components/ui/popup";
import { getInitialsTitle } from "../../utils/get-initials-title";
import Button from "../../components/ui/button";
import cn from "../../lib/classnames";
import LogoutModal from "../../components/auth/logout-modal";

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const userData = getUserData();
  console.log(userData);

  const isUser = checkUser(userData);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsNavbarOpened(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const GetProfileIcon = () => {
    const isUser = checkUser(userData);
    console.log(isUser);
    return isUser ? (
      <Popup
        button={
          <p className="rounded-full border border-shade-light px-3 py-2">
            {getInitialsTitle(userData?.fullName)}
          </p>
        }
        className="py-2"
      >
        <div className="flex min-w-fit flex-col gap-1 rounded-lg">
          <Button
            rounded="sm"
            type="button"
            variant="tertiary"
            LeftIcon={Profile02Icon}
            size="sm"
            className="justify-start"
            onClick={() => navigate("/student-profile")}
          >
            Profile
          </Button>

          <Button
            rounded="sm"
            type="button"
            variant="danger"
            size="sm"
            className="justify-start text-nowrap"
            LeftIcon={Logout01Icon}
            onClick={() => setIsModal(true)}
          >
            Log out
          </Button>
        </div>
      </Popup>
    ) : (
      <UserIcon onClick={() => navigate("/log-in")} />
    );
  };

  const tabs = [
    { id: 1, title: "home", onClick: () => navigate("/") },
    { id: 2, title: "explore", onClick: () => navigate("/job") },
    { id: 3, title: "about", onClick: () => navigate("/about") },
    { id: 4, title: "contact us", onClick: () => navigate("/contact") },

    {
      id: 6,
      title: "Profile",
      onClick: () => {
        if (!isUser) {
          navigate("/log-in");
        }
        navigate("/student-profile");
      },
    },
    {
      id: 7,
      title: "Log out",
      onClick: () => {
        setIsModal(true);
      },
    },
  ];

  const renderTabs = (className?: string) =>
    tabs
      .filter((tab) => {
        if ((tab.id === 5 || tab.id === 7) && (!isNavbarOpened || !isUser)) {
          return false;
        }

        return true;
      })

      .map((tab) => (
        <motion.li
          key={tab.id}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
          className={cn(
            "hover:text-core-light cursor-pointer uppercase",
            className,
          )}
          onClick={() => {
            tab.onClick();
            setIsNavbarOpened(false);
          }}
        >
          {tab.title}
        </motion.li>
      ));

  const NavLists = () => {
    if (!isNavbarOpened) return null;
    return (
      <motion.ul
        className="flex w-full flex-col items-center gap-5 text-shade-light"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", delay: 0.1 }}
      >
        {renderTabs("w-full flex justify-center")}
      </motion.ul>
    );
  };

  return (
    <>
      <motion.nav
        ref={ref}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring" }}
        className={cn(
          "sticky top-0 z-50 flex h-fit min-h-20 w-full items-center rounded-b-xl bg-core-primary text-lg tracking-wide text-shade-light sm:px-12 xl:px-28",
          { "shadow-lg": isNavbarOpened },
        )}
      >
        {/* Desktop */}
        <div className="hidden w-full items-center justify-between sm:flex">
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="cursor-pointer text-2xl font-semibold"
            onClick={() => navigate("/")}
          >
            CI
          </motion.p>
          <ul className="flex items-center gap-10">{renderTabs()}</ul>
          <span className="cursor-pointer">
            <GetProfileIcon />
          </span>
        </div>
        {/* Phone */}
        <div className="flex w-full flex-col items-center justify-between gap-6 p-4 sm:hidden">
          <div className="flex w-full items-center justify-between">
            <p
              className="cursor-pointer text-2xl font-semibold"
              onClick={() => navigate("/")}
            >
              CI
            </p>
            {isNavbarOpened ? (
              <MultiplicationSignIcon
                className="cursor-pointer text-3xl"
                onClick={() => setIsNavbarOpened(false)}
              />
            ) : (
              <Menu02Icon
                className="cursor-pointer text-3xl"
                onClick={() => setIsNavbarOpened(true)}
              />
            )}
          </div>
          <NavLists />
        </div>
      </motion.nav>

      <LogoutModal isOpen={isModal} closeModal={() => setIsModal(!isModal)} />
    </>
  );
};

export default Navbar;
