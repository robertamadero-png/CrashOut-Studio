import StudioButton from "./StudioButton";

export default function ContactCta() {
  return (
    <section className="contact-cta" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">LET&apos;S WORK TOGETHER!</h2>
      <StudioButton to="/contact">Reach out! &gt;&gt;</StudioButton>
      <img
        className="contact-graphic"
        src="/assets/contact-unified.png"
        alt="Here is Robi and this is me, Mariel"
      />
    </section>
  );
}
