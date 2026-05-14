import { Link } from "react-router-dom";
import { products } from "../../../shared/content/products";

const ProductCard = ({ name, description, price, features, highlight }) => {
  const borderClass = highlight
    ? "border-primary/30 bg-white"
    : "border-gray-200 bg-white";

  const accentClass = highlight ? "text-primary" : "text-graphite";

  return (
    <div
      className={`rounded-lg border ${borderClass} p-7 transition-all duration-300 ease-tesla hover:border-gray-300 hover:bg-gray-50 md:p-8`}
      role="article"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-dark md:text-xl">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-graphite">
            {description}
          </p>
        </div>
        {highlight && (
          <div className="whitespace-nowrap rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Unggulan
          </div>
        )}
      </div>

      {/* Price */}
      <div className="mt-6 border-t border-gray-200 pt-6">
        <div className="text-2xl font-medium text-dark md:text-3xl">{price}</div>
      </div>

      {/* Features list */}
      <div className="mt-6 space-y-2">
        {features?.map((f) => (
          <div key={f} className="flex items-center gap-2 text-sm text-graphite">
            <svg
              className={`h-4 w-4 flex-shrink-0 ${accentClass}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{f}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        type="button"
        className={`mt-8 w-full rounded border px-4 py-3 text-sm font-medium transition-all duration-300 hover:border-gray-400 ${
          highlight
            ? "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/30"
            : "border-gray-200 bg-white text-dark hover:bg-gray-50 hover:border-gray-300"
        }`}
      >
        {highlight ? "Mulai Sekarang" : "Pelajari Selengkapnya"}
      </button>
    </div>
  );
};

const ProductShowcaseSection = ({
  eyebrow = "LINI PRODUK",
  title = "Tiga cara untuk berkembang",
  subtitle = "Dari taman indoor kompak hingga operasi farm komersial berskala besar. Pilih sistem yang sesuai visi Anda.",
  items = products,
}) => {
  return (
    <section id="products" className="bg-white scroll-mt-24">
      <div className="section-container py-20 md:py-28 lg:py-32">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-medium tracking-[0.2em] text-gray-500">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-dark sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-graphite sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              description={p.description}
              price={p.price}
              features={p.features}
              highlight={p.highlight}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-gray-200 pt-12 md:mt-16 md:pt-16">
          <p className="text-center text-sm text-graphite">
            Lihat detail lengkap semua paket, harga berlangganan, dan FAQ.
          </p>
          <Link
            to="/produk"
            className="inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:border-primary/30 hover:bg-primary/10"
          >
            Lihat Selengkapnya
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Footer note */}
        <div className="mt-12 rounded-lg border border-gray-200 bg-light px-6 py-5 text-center md:px-8 md:py-6">
          <p className="text-sm text-graphite">
            Masih bingung sistem mana yang tepat untuk Anda?{" "}
            <a href="#contact" className="font-medium text-dark hover:text-primary transition-colors duration-300">
              Hubungi tim kami
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;

