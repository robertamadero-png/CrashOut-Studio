import type { ProjectDetail } from "../../data/projects";
import Navigation from "../Navigation";
import SiteFooter from "../SiteFooter";
import ProjectContextGrid from "./ProjectContextGrid";
import ProjectDescription from "./ProjectDescription";
import ProjectHero from "./ProjectHero";
import ProjectImageCarousel from "./ProjectImageCarousel";
import ProjectTitle from "./ProjectTitle";

export default function ProjectDetailTemplate({ project }: { project: ProjectDetail }) {
  return (
    <main className="inner-page project-detail-page">
      <Navigation />
      <ProjectTitle title={project.title} />
      <ProjectHero image={project.heroImage} alt={project.heroImageAlt} />
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectContextGrid
        contexts={[project.problem, project.inspiration, project.solution]}
      />
      <ProjectImageCarousel images={project.carouselImages} />
      <div className="project-detail-footer">
        <SiteFooter />
      </div>
    </main>
  );
}
