import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Logout01Icon, UserAccountIcon } from "hugeicons-react";
import toast from "react-hot-toast";

import Button from "@/components/ui/button";
import Popup from "@/components/ui/popup";
import {
  companyLinks,
  type INavigation,
} from "@/navigation/company/company-navigation";

import { toggleSidebar } from "@/redux/slices/sidebar-slice";
import { resetLogin } from "@/redux/slices/user-slice";

import { getInitialsTitle } from "@/utils/get-initials-title";
import cn from "@/lib/classnames";
import type { RootState } from "@/redux/store";

const CompanySidebar = ({ className }: { className: string }) => {
  const { pathname } = useLocation();
  const userData = useSelector((state: RootState) => state.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(resetLogin());
    toast.success("user logout successfully");
    navigate("/");
  };
  const collapsed = useSelector(
    (state: RootState) => state.sidebar.isCollapsed,
  );

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className={cn(className, "flex flex-col")}>
      <button
        className={cn(
          "leading border border-shade-light text-3xl uppercase",
          { "py-1": collapsed },
          { "py-3": !collapsed },
        )}
        onClick={() => {
          if (!isSmallScreen) {
            dispatch(toggleSidebar());
          }
        }}
        disabled={isSmallScreen}
      >
        NX
      </button>

      <div
        className={cn("mt-4 flex h-[calc(100vh-70px)] flex-col gap-2", {
          "h-[calc(100vh-70px)]": collapsed,
        })}
      >
        {companyLinks.map((label: INavigation) => {
          const isActive =
            pathname.includes(label.path.split("?")[0]) ||
            pathname.includes(label.path);
          return (
            <Link
              key={label.name}
              to={label.path}
              className={cn(
                "flex items-center gap-2 rounded-lg px-[10px] py-[9px] shadow transition-colors hover:rounded-lg",
                {
                  "bg-shade-light text-core-primary": isActive,
                  "text-shade-light/70 hover:bg-neutral-50 hover:text-core-primary hover:ease-linear":
                    !isActive,
                },
              )}
            >
              <label.icon />
              {!collapsed ? <span>{label.name}</span> : ""}
            </Link>
          );
        })}
        {collapsed ? (
          <>
            <Link
              to="/company-profile"
              className={cn(
                "flex items-center gap-2 rounded-lg py-[9px] shadow transition-colors hover:rounded-lg",
                { "px-[10px]": !collapsed },
              )}
            >
              <div className="flex size-10 items-center justify-center rounded-full border border-shade-light shadow-lg">
                {userData && getInitialsTitle(userData?.fullName)}
              </div>
              {collapsed ? "" : <span>{userData?.fullName}</span>}
            </Link>
            <div className="mt-auto">
              <Button
                className="my-2 flex w-full justify-start px-[10px] py-[9px] text-shade-light/70 shadow transition-colors hover:rounded-lg hover:bg-neutral-50 hover:text-core-primary hover:ease-linear"
                LeftIcon={Logout01Icon}
                onClick={handleLogout}
              >
                {collapsed ? "" : "Log out"}
              </Button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {!collapsed ? (
        <div className="mt-auto w-full">
          <Popup
            className={cn(
              "!mt-[-200px] border !border-shade-light !bg-core-primary text-shade-light shadow-2xl",
              { "!left-12 !w-40": collapsed },
              { "!right-2": !collapsed },
            )}
            buttonClassName="w-full"
            button={
              <div
                className={cn(
                  "mt-4 flex items-center gap-2 rounded-lg py-[9px] shadow transition-colors hover:rounded-lg",
                  { "px-[10px]": !collapsed },
                )}
              >
                <div className="flex size-10 items-center justify-center rounded-full border border-shade-light shadow-lg">
                  {userData && getInitialsTitle(userData?.fullName)}
                </div>
                {collapsed ? "" : <span>{userData?.fullName}</span>}
              </div>
            }
          >
            <div>
              <Link
                to="/company-profile"
                className={cn(
                  "mt-4 flex items-center gap-2 rounded-lg px-[10px] py-[9px] shadow transition-colors hover:rounded-lg",
                  {
                    "bg-shade-light text-core-primary":
                      pathname.includes("/company-profile".split("?")[0]) ||
                      pathname.includes("/company-profile"),
                    "text-shade-light/70 hover:bg-neutral-50 hover:text-core-primary hover:ease-linear":
                      !pathname.includes("/company-profile".split("?")[0]) ||
                      !pathname.includes("/company-profile"),
                  },
                )}
              >
                <UserAccountIcon /> <p>Profile</p>
              </Link>

              <Button
                className="my-2 flex w-full justify-start px-[10px] py-[9px] text-shade-light/70 shadow transition-colors hover:rounded-lg hover:bg-neutral-50 hover:text-core-primary hover:ease-linear"
                LeftIcon={Logout01Icon}
                onClick={handleLogout}
              >
                Log out
              </Button>
            </div>
          </Popup>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CompanySidebar;
