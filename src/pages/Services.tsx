import { useState, type PointerEvent } from "react";
import ContactCta from "../components/ContactCta";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";

const services = [
  {
    name: "Editorial",
    image: "0c0a4.png",
    description: "Structured layouts that turn complex ideas into clear, expressive publications.",
  },
  {
    name: "Photography",
    image: "photography-replacement.jpeg",
    description: "Concept-led photography with bold framing, color, and a distinct visual point of view.",
  },
  {
    name: "Merchandise",
    image: "ac7ab.png",
    description: "Graphic systems translated into memorable objects, apparel, and physical experiences.",
  },
  {
    name: "Illustration",
    image: "b1db7.png",
    description: "Characterful imagery that gives unusual ideas a clear and memorable visual voice.",
  },
  {
    name: "Advertising",
    image: "2b6ac.png",
    description: "Campaign visuals that make messages immediate, memorable, and impossible to ignore.",
  },
  {
    name: "Branding",
    image: "59f0c.png",
    description: "Distinct identities that connect strategy, personality, and every brand touchpoint.",
  },
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const handlePointerEnter = (event: PointerEvent<HTMLButtonElement>, index: number) => {
    if (event.pointerType !== "touch") setExpandedService(index);
  };

  return (
    <main className="inner-page services-page">
      <Navigation />
      <section className="inner-hero services-page-hero">
        <div className="inner-hero-shade" />
        <div className="inner-hero-copy">
          <h1>FROM CHAOS<br />TO REALITY</h1>
          <p>See the services we offer</p>
        </div>
        <img className="services-hero-stars" src="/assets/b618e.svg" alt="" />
      </section>

      <p className="services-intro">
        Crash Out Studio comes to the rescue. No matter how wild, risky, or outlandish your idea
        might be, we transform it into creative visual solutions. From photography to illustration—you
        bring the chaos, and we&apos;ll provide the design!
      </p>

      <section className="service-card-grid" aria-label="Services">
        {services.map((service, index) => {
          const isExpanded = expandedService === index;
          return (
            <button
              className={`service-card${isExpanded ? " is-expanded" : ""}`}
              key={service.name}
              type="button"
              aria-expanded={isExpanded}
              onPointerEnter={(event) => handlePointerEnter(event, index)}
              onPointerLeave={(event) => {
                if (event.pointerType !== "touch") setExpandedService(null);
              }}
              onClick={() => setExpandedService(isExpanded ? null : index)}
            >
              <img
                className={service.name === "Photography" ? "photography-image" : ""}
                src={`/assets/${service.image}`}
                alt=""
              />
              <span className="card-shade" />
              <span className="service-card-content">
                <strong>{service.name}</strong>
                <span className="service-description">{service.description}</span>
              </span>
            </button>
          );
        })}
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
