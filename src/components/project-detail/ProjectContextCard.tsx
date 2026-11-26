import type { PointerEvent } from "react";
import type { ProjectContext } from "../../data/projects";

type ProjectContextCardProps = {
  context: ProjectContext;
  index: number;
  isActive: boolean;
  onActivate: (index: number) => void;
  onToggle: (index: number) => void;
};

export default function ProjectContextCard({
  context,
  index,
  isActive,
  onActivate,
  onToggle,
}: ProjectContextCardProps) {
  const handlePointerEnter = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "touch") onActivate(index);
  };

  return (
    <button
      className={`project-context-card${isActive ? " is-active" : ""}`}
      type="button"
      aria-pressed={isActive}
      onPointerEnter={handlePointerEnter}
      onFocus={() => onActivate(index)}
      onClick={() => onToggle(index)}
    >
      <img src={context.image} alt={context.alt} />
      <span className="project-context-overlay" />
      <span className="project-context-copy">
        <strong>{context.heading}</strong>
        <span>{context.description}</span>
      </span>
    </button>
  );
}
