import { useParams } from "react-router";
import ProjectDetailTemplate from "../components/project-detail/ProjectDetailTemplate";
import { projectsBySlug } from "../data/projects";
import ProjectPlaceholder from "./ProjectPlaceholder";

export default function ProjectDetailPage() {
  const { projectSlug = "" } = useParams();
  const project = projectsBySlug[projectSlug];

  if (!project) return <ProjectPlaceholder />;

  return <ProjectDetailTemplate project={project} />;
}
