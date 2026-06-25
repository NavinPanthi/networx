import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { collapseSidebar } from "../redux/slices/sidebar-slice";
import AdminSidebar from "../features/admin/sidebar";
import cn from "../lib/classnames";

function AdminLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);

  if (!loginStatus) {
    return <Navigate to="/log-in" />;
  }

  if ((loginStatus && pathname === "/") || pathname === "/admin") {
    return <Navigate to="/admin/jobs" />;
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
      <AdminSidebar
        className={cn(
          "sticky top-0 h-full w-[260px] flex-none bg-core-primary px-2 py-6 tracking-wider text-shade-light shadow-md",
          { "w-14": collapsed, "w-[260px]": !collapsed },
        )}
      />

      <main className="w-full overflow-auto rounded-lg p-6 xl:p-12">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
