import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/ui/button/Button";
import { navigationLinks } from "../../shared/content/navigation";

const Navbar = ({
  links = navigationLinks,
  brand = { primary: "Verdiqo", accent: "IoT" },
  cta = { secondary: "Masuk", primary: "Coba Gratis" },
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resolvedLinks = useMemo(() => links ?? [], [links]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-1 hover:opacity-70 transition-opacity duration-300"
            onClick={closeMenu}
          >
            <span className="text-sm font-medium tracking-wide text-dark sm:text-base">
              {brand.primary}
            </span>
            <span className="text-sm font-medium tracking-wide text-primary sm:text-base">
              {brand.accent}
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {resolvedLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className="text-sm text-graphite transition-colors duration-300 hover:text-dark"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="secondary" onClick={onSecondaryClick}>
              {cta.secondary}
            </Button>
            <Button variant="primary" onClick={onPrimaryClick}>
              {cta.primary}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded p-2 text-dark transition-colors duration-300 hover:bg-gray-50 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <div className="flex h-6 w-6 flex-col justify-center">
              <span
                className={`block h-0.5 w-6 bg-dark transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`mt-1 block h-0.5 w-6 bg-dark transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`mt-1 block h-0.5 w-6 bg-dark transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 md:hidden">
            <div className="space-y-2 py-4">
              {resolvedLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.href}
                  className="block rounded px-3 py-2 text-sm text-graphite transition-colors duration-300 hover:bg-gray-50 hover:text-dark"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-3 space-y-2 border-t border-gray-200 pt-4">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    closeMenu();
                    onSecondaryClick?.();
                  }}
                >
                  {cta.secondary}
                </Button>
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    closeMenu();
                    onPrimaryClick?.();
                  }}
                >
                  {cta.primary}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

