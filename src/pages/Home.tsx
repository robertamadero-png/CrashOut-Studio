import { useState } from "react";
import { useNavigate } from "react-router";
import ContactCta from "../components/ContactCta";
import FloatingGalleryImage from "../components/FloatingGalleryImage";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import StudioButton from "../components/StudioButton";

const gallery = [
  ["Work-gallery%206.png", "Poster design with flowing lettering", "gallery-card--one"],
  ["Work-gallery%205.png", "Black and white fashion portrait", "gallery-card--two"],
  ["Work-gallery%204.png", "Vivid blue concert photography", "gallery-card--three"],
  ["Work-gallery%207.png", "Editorial fashion portrait", "gallery-card--four"],
  ["Work-gallery%203.png", "Illustrated blue character", "gallery-card--five"],
  ["Work-gallery%201.png", "Editorial magazine spread", "gallery-card--six"],
  ["Work-gallery%202.png", "Colorful abstract artwork", "gallery-card--seven"],
  ["Work-gallery%208.jpg", "Printed apparel project", "gallery-card--eight"],
];

const services = [
  { label: "PHOTOGRAPHY", image: "photography-replacement.jpeg" },
  { label: "ILLUSTRATION", image: "Illustration.jpg" },
  { label: "EDITORIAL", image: "Editorial-design.png" },
  { label: "ADVERTISING", image: "Advertizing.png" },
  { label: "BRANDING", image: "Branding.png" },
  { label: "MERCHANDISE", image: "Merchandise.png" },
];

export default function Home() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<number | null>(null);
  const activeImage = activeService === null ? "Featured-projects.png" : services[activeService].image;

  return (
    <main className="home-page">
      <Navigation />

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-loop" src="/assets/Loop%20element.svg" alt="" />
        <h1 id="hero-title">CRASH OUT FOR THE STANDOUT</h1>
        <img className="hero-arrow" src="/assets/Arrow%201.svg" alt="" />
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-banner">
          <h2 id="work-title">SEE OUR WORK GALLERY!</h2>
        </div>
        <div className="gallery-collage">
          {gallery.map(([src, alt, className]) => (
            <FloatingGalleryImage
              key={src}
              src={`/assets/${src}`}
              alt={alt}
              className={className}
            />
          ))}
        </div>
        <div className="featured-action">
          <StudioButton to="/work">SEE OUR FEATURED PROJECTS! &gt;&gt;</StudioButton>
        </div>
      </section>

      <section
        className="services-preview"
        id="services"
        aria-label="Creative services"
        onPointerLeave={() => setActiveService(null)}
      >
        <div className="services-background" aria-hidden="true">
          <img
            className={activeService === 0 ? "is-photography" : ""}
            src={`/assets/${encodeURIComponent(activeImage)}`}
            alt=""
          />
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <button
              key={service.label}
              className={activeService !== null && activeService !== index ? "service-label is-muted" : "service-label"}
              onPointerEnter={(event) => {
                if (event.pointerType !== "touch") setActiveService(index);
              }}
              onFocus={() => setActiveService(index)}
              onBlur={() => setActiveService(null)}
              onClick={() => navigate("/services")}
            >
              {service.label}
            </button>
          ))}
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
