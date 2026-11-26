import { createBrowserRouter } from "react-router";
import ScrollToTopLayout from "./ScrollToTopLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import Services from "../pages/Services";
import Work from "../pages/Work";

export const router = createBrowserRouter([
  {
    Component: ScrollToTopLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/work", Component: Work },
      { path: "/work/:projectSlug", Component: ProjectDetailPage },
      { path: "/works/:projectSlug", Component: ProjectDetailPage },
      { path: "/services", Component: Services },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
      { path: "*", Component: Home },
    ],
  },
]);
