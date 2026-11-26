const robertaPortrait = "/assets/About-Roberta.png";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";

const team = [
  {
    name: "Roberta Madero",
    image: robertaPortrait,
    details: "20 years  -  ISFP - 🇲🇽",
    study: "Graphic Design Student at UDEM",
    specialty: "Keen specialty in Illustration and project management.",
    fish: "eefdd.svg",
  },
  {
    name: "Mariel Menchaca",
    image: "/assets/4b51c.png",
    details: "20 years -  ENFP - 🇲🇽",
    study: "Graphic Design Student at UDEM",
    specialty: "Keen specialty in photography and adding a creative flare.",
    fish: "54af2.svg",
  },
];

export default function About() {
  return (
    <main className="inner-page about-page">
      <Navigation />
      <section className="about-heading">
        <img className="about-mark about-mark-blue" src="/assets/5bea9.svg" alt="" />
        <h1>MEET<br />THE TEAM</h1>
        <img className="about-mark about-mark-pink" src="/assets/a3f3c.svg" alt="" />
        <p>
          We met during our first semester of university and became a great duo; we work very well
          as a team, and because we share similar ideas, we&apos;re able to transform everything from
          a chaotic state into something well-structured.
        </p>
      </section>

      <section className="team-grid" aria-label="Crash Out team">
        {team.map((member) => (
          <article className="team-member" key={member.name}>
            <img className="team-portrait" src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <h3>{member.details}<br />{member.study}</h3>
            <p>{member.specialty}</p>
            <img className="team-fish" src={`/assets/${member.fish}`} alt="" />
          </article>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
