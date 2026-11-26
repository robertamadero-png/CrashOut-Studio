import { useState, type FocusEvent, type PointerEvent } from "react";
import type { ProjectContext } from "../../data/projects";
import ProjectContextCard from "./ProjectContextCard";

type ProjectContextGridProps = {
  contexts: [ProjectContext, ProjectContext, ProjectContext];
};

export default function ProjectContextGrid({ contexts }: ProjectContextGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "touch") setActiveIndex(null);
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setActiveIndex(null);
  };

  return (
    <section
      className="project-context-section"
      aria-label="Project process"
      onPointerLeave={handlePointerLeave}
      onBlur={handleBlur}
    >
      <div
        className="project-context-grid"
        data-active-index={activeIndex === null ? "none" : activeIndex}
      >
        {contexts.map((context, index) => (
          <ProjectContextCard
            key={context.heading}
            context={context}
            index={index}
            isActive={activeIndex === index}
            onActivate={setActiveIndex}
            onToggle={(nextIndex) => {
              setActiveIndex((current) => (current === nextIndex ? null : nextIndex));
            }}
          />
        ))}
      </div>
    </section>
  );
}
