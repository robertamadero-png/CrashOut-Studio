import { Link } from "react-router";
import ContactCta from "../components/ContactCta";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";

const projects = [
  {
    href: "/works/abeyance",
    title: "01 Abeyance",
    image: "projects/abeyance/abeyance-image-1.png",
  },
  { href: "/work/loop-magazine", title: "02 Loop Magazine", image: "d0116.png" },
  { href: "/work/since-you-been-gone", title: "03 Since you been gone", image: "29462.png" },
  { href: "/works/Osaka Suppliers Catalogue", title: "04 Osaka suppliers catalogue", image: "e9bd1.png" },
];

export default function Work() {
  return (
    <main className="inner-page work-page">
      <Navigation />
      <section className="inner-hero work-page-hero">
        <div className="inner-hero-shade" />
        <div className="inner-hero-copy">
          <h1>EXPLORE<br />WHAT WE DO</h1>
          <p>Our selection of featured projects</p>
        </div>
        <img className="work-hero-loop" src="/assets/Loop%20element.svg" alt="" />
      </section>

      <section className="project-grid" aria-label="Featured projects">
        {projects.map((project) => (
          <Link className="project-card" key={project.href} to={project.href}>
            <img src={`/assets/${project.image}`} alt="" />
            <span className="card-shade" />
            <h2>{project.title}</h2>
            <span className="project-card-action" aria-hidden="true">See the full project &gt;&gt;</span>
          </Link>
        ))}
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
