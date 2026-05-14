import Button from "../../../shared/ui/button/Button";
import heroImg from "../../../shared/assets/hydrofarm.jpg";
import { heroContent } from "../../../shared/content/hero";

const StatItem = ({ value, label }) => {
  return (
    <div className="rounded border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm transition-colors duration-300 ease-tesla hover:border-white/25 hover:bg-white/15">
      <div className="text-sm font-medium text-white sm:text-base">{value}</div>
      <div className="mt-0.5 text-xs text-white/75">{label}</div>
    </div>
  );
};

const HeroSection = ({
  content = heroContent,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-dark">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Rak hidroponik modern dengan tanaman hijau"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        {/* Scrim for readability (minimal, no glow) */}
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="section-container relative pt-24 pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            Platform IoT Hidroponik Pintar
          </div>

          {/* Headline */}
          <h1 className="mt-8 text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>

          <p className="mt-5 text-lg font-medium text-white/90 sm:text-xl">
            <span className="text-accent">{content.subtitle}</span>
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {content.description}
          </p>

          {/* CTA */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
            <Button variant="primary" onClick={onPrimaryClick} className="w-full sm:w-auto">
              {content.ctaPrimary}
            </Button>
            <Button variant="secondary" onClick={onSecondaryClick} className="w-full sm:w-auto">
              {content.ctaSecondary}
            </Button>
          </div>

          {/* Bottom stats */}
          <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
            {content.stats?.map((s) => (
              <StatItem key={s.label} value={s.value} label={s.label} />
            ))}
          </div>

          {/* Subtle footer line */}
          <div className="mt-10 text-xs text-white/70">
            Kontrol presisi • Monitoring real-time • Otomatisasi stabil
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
