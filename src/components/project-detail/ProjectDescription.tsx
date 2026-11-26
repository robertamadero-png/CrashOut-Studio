export default function ProjectDescription({ children }: { children: string }) {
  return (
    <section className="project-detail-description">
      <p>{children}</p>
    </section>
  );
}
