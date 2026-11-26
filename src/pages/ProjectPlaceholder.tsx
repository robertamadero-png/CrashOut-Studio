import { useParams } from "react-router";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import StudioButton from "../components/StudioButton";

const projectTitles: Record<string, string> = {
  abeyance: "ABEYANCE",
  "loop-magazine": "LOOP MAGAZINE",
  "since-you-been-gone": "SINCE YOU BEEN GONE",
  "osaka-suppliers-catalogue": "OSAKA SUPPLIERS CATALOGUE",
};

export default function ProjectPlaceholder() {
  const { projectSlug = "" } = useParams();
  const title = projectTitles[projectSlug] ?? "PROJECT";

  return (
    <main className="inner-page project-placeholder-page">
      <Navigation />
      <section className="project-placeholder">
        <p>CRASH OUT PROJECT</p>
        <h1>{title}</h1>
        <StudioButton to="/work">Back to work &lt;&lt;</StudioButton>
      </section>
      <SiteFooter />
    </main>
  );
}
