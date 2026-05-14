import Button from "../../../shared/ui/button/Button";

const CTASection = ({
  headline = "Siap tumbuh lebih cerdas?",
  subheadline = "Mulai coba gratis hari ini. Tanpa perlu kartu kredit.",
  primaryCta = "Coba Gratis",
  secondaryCta = "Jadwalkan Demo",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section id="cta" className="bg-light">
      <div className="section-container py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-dark sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-graphite sm:text-lg">
            {subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 items-center justify-center sm:flex-row sm:items-center">
            <Button variant="primary" onClick={onPrimaryClick}>
              {primaryCta}
            </Button>
            <Button variant="secondary" onClick={onSecondaryClick}>
              {secondaryCta}
            </Button>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            Dipercaya oleh 300+ farm di seluruh dunia • Dukungan 24/7 • Keamanan tingkat enterprise
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
