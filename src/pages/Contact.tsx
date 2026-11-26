import { useState, type FormEvent } from "react";
import EmailLink from "../components/EmailLink";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import StudioButton from "../components/StudioButton";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = {
  kind: "loading" | "success" | "error";
  message: string;
};

const initialValues: FormValues = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors: Partial<FormValues> = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.subject.trim()) nextErrors.subject = "Please add a subject.";
    if (!values.message.trim()) nextErrors.message = "Please tell us about your project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ kind: "error", message: "Please complete the required fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ kind: "loading", message: "Sending your message…" });

    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        "bot-field": "",
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      });

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("The form service did not accept the submission.");
      }

      setValues(initialValues);
      setStatus({ kind: "success", message: "Thank you! Your message has been sent." });
    } catch {
      setStatus({
        kind: "error",
        message: "We couldn't send your message. Please try again or use one of the contact details provided.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="inner-page contact-page">
      <Navigation />
      <section className="contact-page-hero">
        <img src="/assets/da703.png" alt="Colorful editorial design project" />
      </section>

      <section className="contact-content">
        <header className="contact-page-heading">
          <h1>SHARE YOUR<br />IDEAS</h1>
          <img src="/assets/dc7b0.svg" alt="" />
        </header>

        <div className="contact-layout">
          <aside className="contact-channels" aria-label="Contact details">
            <div>
              <img src="/assets/78474.svg" alt="" />
              <div className="contact-email-links">
                <EmailLink email="mariel.menchacar@gmail.com" />
                <EmailLink email="roberta.madero@udem.edu" />
              </div>
            </div>
            <div>
              <img src="/assets/ec4e7.svg" alt="" />
              <a href="https://www.instagram.com/kitsch.designm/" target="_blank" rel="noreferrer">
                @kitsch.designm
              </a>
            </div>
            <div>
              <img src="/assets/ad72d.svg" alt="" />
              <span>+52 8110761402<br />+52 8118866799</span>
            </div>
          </aside>

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            noValidate
            onSubmit={handleSubmit}
            aria-busy={isSubmitting}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="contact-form-row">
              <label>
                <span>Full name</span>
                <input
                  name="name"
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.name)}
                  required
                />
                {errors.name && <small>{errors.name}</small>}
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  required
                />
                {errors.email && <small>{errors.email}</small>}
              </label>
            </div>
            <label>
              <span>Subject</span>
              <input
                name="subject"
                value={values.subject}
                onChange={(event) => updateField("subject", event.target.value)}
                placeholder="How can we help?"
                aria-invalid={Boolean(errors.subject)}
                required
              />
              {errors.subject && <small>{errors.subject}</small>}
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell us about your idea, timeline, or project needs."
                aria-invalid={Boolean(errors.message)}
                required
              />
              {errors.message && <small>{errors.message}</small>}
            </label>
            <StudioButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send Message >>"}
            </StudioButton>
            {status && (
              <p className="form-status" data-state={status.kind} role="status" aria-live="polite">
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
