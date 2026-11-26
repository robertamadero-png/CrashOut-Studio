type ProjectHeroProps = {
  image: string;
  alt: string;
};

export default function ProjectHero({ image, alt }: ProjectHeroProps) {
  return (
    <div className="project-detail-hero">
      <img src={image} alt={alt} />
    </div>
  );
}
