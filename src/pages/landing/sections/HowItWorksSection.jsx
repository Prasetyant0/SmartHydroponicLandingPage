const StepCard = ({ index, title, description }) => {
  return (
    <li
      className="bg-white p-7 transition-colors duration-300 ease-tesla hover:bg-light md:p-8"
      role="listitem"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="text-xs font-medium tracking-[0.2em] text-gray-500">
          {index}
        </div>
        <div
          className="h-2 w-2 flex-shrink-0 rounded-full bg-primary"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-5 text-lg font-medium tracking-tight text-dark">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-graphite">{description}</p>

      <div className="mt-6 h-px w-full bg-gray-200" aria-hidden="true" />

      <p className="mt-4 text-xs text-gray-500">
        Stabil • Terukur • Otomatis
      </p>
    </li>
  );
};

const HowItWorksSection = ({
  eyebrow = "CARA KERJA",
  title = "Tiga langkah. Satu sistem yang rapi.",
  subtitle =
    "Dari sensor hingga dashboard—semua alur dibuat sederhana, konsisten, dan mudah dioperasikan setiap hari.",
  steps = [
    {
      index: "01",
      title: "Sensor membaca kondisi",
      description:
        "Sensor memantau pH, EC, suhu, dan level nutrisi secara berkala untuk menjaga kondisi air tetap presisi.",
    },
    {
      index: "02",
      title: "Sistem otomatis mengontrol",
      description:
        "Kontroler menjalankan pompa, dosing, dan jadwal sirkulasi secara otomatis—dengan batas aman dan pengaman.",
    },
    {
      index: "03",
      title: "Pantau lewat dashboard",
      description:
        "Anda melihat data, tren, dan notifikasi dari dashboard. Keputusan lebih cepat, hasil lebih stabil.",
    },
  ],
}) => {
  return (
    <section id="how-it-works" className="bg-white">
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

        {/* Step grid (spec-like) */}
        <div className="mt-14 overflow-hidden rounded-md border border-gray-200 bg-gray-200">
          <ol className="grid gap-px md:grid-cols-3" role="list">
            {steps.map((s) => (
              <StepCard
                key={s.index}
                index={s.index}
                title={s.title}
                description={s.description}
              />
            ))}
          </ol>
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center md:flex-row md:gap-4">
          <div className="text-xs text-gray-500">
            Alur kerja yang tenang—tanpa visual berlebihan.
          </div>
          <div className="hidden h-3 w-px bg-gray-200 md:block" aria-hidden="true" />
          <div className="text-xs text-gray-500">
            Data tersaji jelas untuk tindakan yang tepat.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
