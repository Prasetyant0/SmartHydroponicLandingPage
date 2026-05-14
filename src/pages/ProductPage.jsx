import Navbar from "../widgets/navbar/Navbar";
import Footer from "../widgets/footer/Footer";
import Button from "../shared/ui/button/Button";
import { products } from "../shared/content/products";

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

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero-like header */}
        <section className="bg-light">
          <div className="section-container py-16 md:py-20 lg:py-24 pt-20 md:pt-24 lg:pt-28">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-medium tracking-[0.2em] text-gray-500">
                PRODUK
              </div>
              <h1 className="mt-4 text-4xl font-medium tracking-tight text-dark sm:text-5xl">
                Lini Produk Verdiqo
              </h1>
              <p className="mt-5 text-base leading-relaxed text-graphite sm:text-lg">
                Pilih sistem yang sesuai dengan kebutuhan dan skala operasi Anda. Dari taman
                indoor hingga farm komersial.
              </p>
            </div>
          </div>
        </section>

        {/* Products section */}
        <section className="bg-white">
          <div className="section-container py-20 md:py-28 lg:py-32">
            {/* Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
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
            <div className="mt-16 border-t border-gray-200 pt-16 md:mt-20 md:pt-20 lg:mt-24 lg:pt-24">
              {/* Pricing section */}
              <div id="pricing" className="scroll-mt-24">
                <div className="mx-auto max-w-3xl text-center">
                  <div className="text-xs font-medium tracking-[0.2em] text-gray-500">
                    HARGA & LAYANAN
                  </div>
                  <h2 className="mt-4 text-3xl font-medium tracking-tight text-dark sm:text-4xl">
                    Paket berlangganan fleksibel
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-graphite sm:text-lg">
                    Semua paket dilengkapi dukungan teknis 24/7, update firmware gratis, dan akses
                    API lengkap.
                  </p>
                </div>

                {/* Pricing cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-7 md:p-8">
                    <h3 className="text-lg font-medium text-dark">Bulanan</h3>
                    <p className="mt-2 text-sm text-graphite">Fleksibilitas maksimal</p>
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <p className="text-xs text-gray-500">Mulai dari</p>
                      <div className="mt-1 text-3xl font-medium text-dark">Rp 299K</div>
                      <p className="mt-1 text-xs text-graphite">/bulan per unit</p>
                    </div>
                    <Button variant="secondary" className="mt-8 w-full">
                      Pilih Bulanan
                    </Button>
                  </div>

                  <div className="rounded-lg border border-primary/30 bg-white p-7 md:p-8">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-medium text-dark">Tahunan</h3>
                      <div className="whitespace-nowrap rounded-full border border-primary/30 bg-primary/5 px-2 py-1 text-xs font-medium text-primary">
                        Hemat 20%
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-graphite">Investasi jangka panjang</p>
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <p className="text-xs text-gray-500">Mulai dari</p>
                      <div className="mt-1 text-3xl font-medium text-dark">Rp 2.9K</div>
                      <p className="mt-1 text-xs text-graphite">/tahun per unit</p>
                    </div>
                    <Button variant="primary" className="mt-8 w-full">
                      Pilih Tahunan
                    </Button>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-7 md:p-8">
                    <h3 className="text-lg font-medium text-dark">Enterprise</h3>
                    <p className="mt-2 text-sm text-graphite">Solusi khusus skala besar</p>
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <p className="text-xs text-gray-500">Custom pricing</p>
                      <div className="mt-1 text-3xl font-medium text-dark">—</div>
                      <p className="mt-1 text-xs text-graphite">Hubungi tim sales</p>
                    </div>
                    <Button variant="secondary" className="mt-8 w-full">
                      Hubungi Tim
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ-like section */}
            <div className="mt-16 rounded-lg border border-gray-200 bg-light px-6 py-8 md:px-8 md:py-10 lg:mt-20">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h4 className="text-sm font-medium text-dark">Akses API</h4>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">
                    Semua paket memiliki akses penuh ke API RESTful untuk integrasi custom.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-dark">Dukungan Priority</h4>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">
                    Paket Tahunan dan Enterprise mendapat dukungan priority via email dan chat.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-dark">Update Gratis</h4>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">
                    Semua pembaruan firmware, fitur baru, dan peningkatan termasuk dalam paket.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
