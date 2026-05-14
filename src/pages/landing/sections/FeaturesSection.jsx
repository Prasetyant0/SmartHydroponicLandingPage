import FeatureCard from "../../../entities/feature/ui/FeatureCard";
import { features } from "../../../shared/content/features";

const FeaturesSection = ({
  eyebrow = "FITUR",
  title = "Dibangun seperti hardware premium",
  subtitle =
    "Minimal by design. Setiap kemampuan dirancang untuk menjaga sistem Anda stabil, efisien, dan mudah dioperasikan.",
  items = features,
}) => {
  return (
    <section id="features" className="bg-light">
      <div className="section-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-4">
            <div className="text-xs font-medium tracking-[0.2em] text-gray-500">
              {eyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-dark sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite">
              {subtitle}
            </p>
          </div>

          {/* Spec-like grid */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-md border border-gray-200 bg-gray-200">
              <div className="grid gap-px md:grid-cols-3">
                {items.map((f) => (
                  <FeatureCard
                    key={f.id ?? f.title}
                    index={f.index}
                    title={f.title}
                    description={f.description}
                  />
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-gray-500">
              Dirancang untuk operasi yang tenang dan konsisten—tanpa visual noise, hanya yang essensial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

