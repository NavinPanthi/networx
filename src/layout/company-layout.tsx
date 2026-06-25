import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import CompanySidebar from "../features/company/sidebar";
import cn from "../lib/classnames";
import { collapseSidebar } from "../redux/slices/sidebar-slice";
import { useEffect } from "react";

function CompanyLayout({ children }: { children: React.ReactNode }) {
  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);
  if (!loginStatus) {
    return <Navigate to="/log-in" />;
  }
  const dispatch = useDispatch();
  const collapsed = useSelector(
    (state: RootState) => state.sidebar.isCollapsed,
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        dispatch(collapseSidebar());
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div className="relative flex h-[100vh] bg-neutral-100">
      <CompanySidebar
        className={cn(
          "sticky top-0 h-full flex-none bg-core-primary px-2 py-6 tracking-wider text-shade-light shadow-md transition-all duration-300",
          { "w-14": collapsed, "w-[260px]": !collapsed },
        )}
      />

      <main className="w-full overflow-auto rounded-lg p-6 xl:p-20">
        {children}
      </main>
    </div>
  );
}

export default CompanyLayout;
