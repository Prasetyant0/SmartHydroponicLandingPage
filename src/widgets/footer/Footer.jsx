import { Link } from "react-router-dom";
import { navigationLinks } from "../../shared/content/navigation";

const Footer = ({
  brand = { primary: "Verdiqo", accent: "IoT" },
  links = navigationLinks,
  socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/setya_nt/",
      label: "Instagram",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/prasetyanto-tri-p-56382b25b/",
      label: "LinkedIn",
    },
    { name: "GitHub", href: "https://github.com/Prasetyant0", label: "GitHub" },
  ],
  legalLinks = [
    { name: "Privasi", href: "/privasi" },
    { name: "Syarat", href: "/syarat" },
    { name: "Cookies", href: "/cookies" },
  ],
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white" role="contentinfo">
      <div className="section-container py-14 md:py-18 lg:py-20">
        {/* Top: Brand + Links Grid */}
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-4 lg:col-span-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1 transition-opacity duration-300 hover:opacity-70"
            >
              <span className="text-sm font-medium tracking-wide text-dark sm:text-base">
                {brand.primary}
              </span>
              <span className="text-sm font-medium tracking-wide text-primary sm:text-base">
                {brand.accent}
              </span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-graphite">
              Platform IoT hidroponik untuk pertanian modern Indonesia. Pantau, otomatisasi, dan optimalkan farm dengan teknologi terdepan.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks?.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-graphite transition-all duration-300 hover:text-primary hover:underline underline-offset-4"
                  aria-label={`Buka ${link.label} di tab baru`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Grid */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {links?.map((link) => (
                <Link
                  key={link.id}
                  to={link.href}
                  className="text-sm text-graphite transition-all duration-300 hover:text-primary hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200 pt-8 md:mt-14 md:pt-10">
          {/* Legal + Copyright */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} Verdiqo IoT. Hak cipta dilindungi.
            </p>

            <div className="flex items-center gap-6">
              {legalLinks?.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs text-gray-500 transition-all duration-300 hover:text-primary hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
