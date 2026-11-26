import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";

export default function ScrollToTopLayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.key]);

  return <Outlet />;
}
