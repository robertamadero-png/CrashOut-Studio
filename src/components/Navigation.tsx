import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const links = [
  { label: "HOME", href: "/" },
  { label: "WORKS", href: "/work" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

function NavigationLinks({
  className = "nav-links",
  onNavigate,
  tabIndex,
}: {
  className?: string;
  onNavigate?: () => void;
  tabIndex?: number;
}) {
  return (
    <div className={className}>
      {links.map(({ label, href }) => (
        <Link key={label} to={href} onClick={onNavigate} tabIndex={tabIndex}>
          {label}
        </Link>
      ))}
    </div>
  );
}

export default function Navigation({ footer = false }: { footer?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const mobileQuery = window.matchMedia("(max-width: 760px)");
    const previousOverflow = document.body.style.overflow;

    const syncMenuToViewport = () => {
      if (!mobileQuery.matches) {
        setIsMenuOpen(false);
        return;
      }

      document.body.style.overflow = "hidden";
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    syncMenuToViewport();
    closeButtonRef.current?.focus();
    mobileQuery.addEventListener("change", syncMenuToViewport);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      mobileQuery.removeEventListener("change", syncMenuToViewport);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={footer ? "footer-nav" : "site-nav"} aria-label={footer ? "Footer navigation" : "Main navigation"}>
      {!footer && (
        <Link className="nav-logo" to="/" aria-label="Crash Out home">
          <img src="/assets/Logo.svg" alt="Crash Out" />
        </Link>
      )}
      <NavigationLinks />
      {!footer && (
        <>
          <button
            ref={menuButtonRef}
            className="mobile-menu-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-controls="mobile-navigation-overlay"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
          <div
            id="mobile-navigation-overlay"
            className={`mobile-menu-overlay${isMenuOpen ? " is-open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            aria-hidden={!isMenuOpen}
            inert={!isMenuOpen}
          >
            <button
              ref={closeButtonRef}
              className="mobile-menu-close"
              type="button"
              aria-label="Close navigation menu"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => {
                closeMenu();
                menuButtonRef.current?.focus();
              }}
            >
              <span />
              <span />
            </button>
            <NavigationLinks
              className="mobile-overlay-links"
              onNavigate={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            />
          </div>
        </>
      )}
    </nav>
  );
}
