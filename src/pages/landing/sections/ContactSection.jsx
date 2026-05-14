import { useMemo, useState } from "react";
import Button from "../../../shared/ui/button/Button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdoqqjv";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Field = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  error,
  as = "input",
  rows,
  disabled = false,
}) => {
  const InputTag = as;

  const baseClass =
    "mt-1 w-full rounded border bg-light px-3 py-2 text-sm text-dark placeholder-gray-500 transition-colors duration-300 ease-tesla focus:bg-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

  const borderClass = error
    ? "border-red-300 focus:border-red-400"
    : "border-gray-200 focus:border-primary";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-dark">
        {label}
      </label>
      <InputTag
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        rows={rows}
        disabled={disabled}
        className={`${baseClass} ${borderClass}`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

const ContactSection = ({
  eyebrow = "KONTAK",
  title = "Bicarakan kebutuhan farm Anda",
  subtitle =
    "Kirim pesan singkat. Tim kami akan merespons dengan rekomendasi sistem yang tepat untuk skala dan target Anda.",
}) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const [touched, setTouched] = useState({ nama: false, email: false, pesan: false });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = status === "submitting";

  const errors = useMemo(() => {
    const next = {};

    const trimmedNama = nama.trim();
    const trimmedEmail = email.trim();
    const trimmedPesan = pesan.trim();

    if (!trimmedNama) next.nama = "Nama wajib diisi.";
    if (!trimmedEmail) next.email = "Email wajib diisi.";
    else if (!emailRegex.test(trimmedEmail)) next.email = "Format email tidak valid.";
    if (!trimmedPesan) next.pesan = "Pesan wajib diisi.";

    return next;
  }, [nama, email, pesan]);

  const canSubmit = Object.keys(errors).length === 0 && !isSubmitting;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({ nama: true, email: true, pesan: true });
    setErrorMessage("");

    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: nama.trim(),
          email: email.trim(),
          pesan: pesan.trim(),
          source: "landing-contact-section",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const msg =
          data?.errors?.map((x) => x?.message).filter(Boolean).join(" ") ||
          "Maaf, pesan gagal dikirim. Silakan coba lagi.";
        throw new Error(msg);
      }

      setStatus("success");
      setNama("");
      setEmail("");
      setPesan("");
      setTouched({ nama: false, email: false, pesan: false });

      window.setTimeout(() => {
        setStatus("idle");
      }, 3500);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err?.message ||
          "Terjadi kendala saat mengirim pesan. Periksa koneksi Anda dan coba lagi."
      );
    }
  };

  return (
    <section id="contact" className="bg-light">
      <div className="section-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-5">
            <div className="text-xs font-medium tracking-[0.2em] text-gray-500">
              {eyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-dark sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite sm:text-lg">
              {subtitle}
            </p>

            <div className="mt-10 rounded-md border border-gray-200 bg-white px-5 py-5">
              <div className="text-sm font-medium text-dark">Waktu respons</div>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                Biasanya &lt; 24 jam pada hari kerja.
              </p>
              <div className="mt-4 h-px w-full bg-gray-200" aria-hidden="true" />
              <p className="mt-4 text-xs text-gray-500">
                Kami menjaga pesan Anda tetap aman. Tidak ada spam.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-md border border-gray-200 bg-white p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <Field
                  label="Nama"
                  id="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama lengkap"
                  autoComplete="name"
                  disabled={isSubmitting}
                  error={touched.nama ? errors.nama : undefined}
                />

                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@contoh.com"
                  autoComplete="email"
                  disabled={isSubmitting}
                  error={touched.email ? errors.email : undefined}
                />

                <Field
                  label="Pesan"
                  id="pesan"
                  as="textarea"
                  rows={5}
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  placeholder="Ceritakan kebutuhan Anda (jumlah rak/titik tanam, target hasil, lokasi, dll.)"
                  autoComplete="off"
                  disabled={isSubmitting}
                  error={touched.pesan ? errors.pesan : undefined}
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-gray-500">
                    Dengan mengirim, Anda setuju kami menghubungi Anda via email.
                  </p>

                  <div className="flex items-center gap-3" aria-live="polite">
                    {status === "error" ? (
                      <div className="rounded border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700">
                        {errorMessage || "Maaf, terjadi kesalahan."}
                      </div>
                    ) : null}

                    {status === "success" ? (
                      <div className="rounded border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-medium text-primary">
                        Pesan terkirim. Terima kasih.
                      </div>
                    ) : null}

                    <Button
                      variant="primary"
                      type="submit"
                      disabled={!canSubmit}
                      aria-disabled={!canSubmit}
                    >
                      {isSubmitting ? "Mengirim…" : "Kirim Pesan"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
