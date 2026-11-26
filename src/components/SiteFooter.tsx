import Navigation from "./Navigation";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <img className="footer-logo" src="/assets/Logo.svg" alt="Crash Out" />
      <Navigation footer />
    </footer>
  );
}
