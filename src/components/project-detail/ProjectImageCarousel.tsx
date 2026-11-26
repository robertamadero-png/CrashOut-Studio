import type { ProjectImage } from "../../data/projects";

export default function ProjectImageCarousel({ images }: { images: ProjectImage[] }) {
  const carouselImages = [...images, ...images];

  return (
    <section
      className="project-image-carousel"
      aria-label="Project image gallery"
      tabIndex={0}
    >
      <div className="project-image-carousel-track">
        {carouselImages.map((image, index) => {
          const isDuplicate = index >= images.length;

          return (
            <div
              className="project-image-carousel-item"
              key={`${image.src}-${index}`}
              aria-hidden={isDuplicate}
            >
              <img src={image.src} alt={isDuplicate ? "" : image.alt} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
