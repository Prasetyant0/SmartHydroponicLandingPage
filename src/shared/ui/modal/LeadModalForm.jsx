import { useEffect, useMemo, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Field = ({
  label,
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  type = "text",
  as = "input",
  rows,
  error,
  disabled,
  hint,
  children,
}) => {
  const Tag = as;

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
      <Tag
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        rows={rows}
        disabled={disabled}
        className={`${baseClass} ${borderClass}`}
      >
        {children}
      </Tag>

      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-2 text-xs text-gray-500">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
};

const LeadModalForm = ({
  mode = "trial", // trial | demo
  formId,
  onDone,
  onStateChange,
}) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [usaha, setUsaha] = useState("");
  const [pesan, setPesan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("pagi");

  const [touched, setTouched] = useState({
    nama: false,
    email: false,
    usaha: false,
    pesan: false,
    tanggal: false,
    waktu: false,
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const errors = useMemo(() => {
    const next = {};

    const n = nama.trim();
    const e = email.trim();
    const p = pesan.trim();

    if (!n) next.nama = "Nama wajib diisi.";
    if (!e) next.email = "Email wajib diisi.";
    else if (!emailRegex.test(e)) next.email = "Format email tidak valid.";

    if (mode === "demo") {
      if (!p) next.pesan = "Ceritakan kebutuhan atau tujuan demo Anda.";
    }

    return next;
  }, [nama, email, pesan, mode]);

  const canSubmit = Object.keys(errors).length === 0 && status !== "submitting";

  useEffect(() => {
    onStateChange?.({
      canSubmit,
      submitting: status === "submitting",
      status,
    });
  }, [canSubmit, status, onStateChange]);

  const markAllTouched = () => {
    setTouched((prev) => ({
      ...prev,
      nama: true,
      email: true,
      usaha: true,
      pesan: true,
      tanggal: true,
      waktu: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    markAllTouched();

    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");

    // Simulasi submit (tanpa backend)
    window.setTimeout(() => {
      setStatus("success");

      window.setTimeout(() => {
        onDone?.();

        // reset setelah close agar modal next open fresh
        setNama("");
        setEmail("");
        setUsaha("");
        setPesan("");
        setTanggal("");
        setWaktu("pagi");
        setTouched({
          nama: false,
          email: false,
          usaha: false,
          pesan: false,
          tanggal: false,
          waktu: false,
        });
        setStatus("idle");
      }, 700);
    }, 850);
  };

  const isDisabled = status === "submitting";

  return (
    <form id={formId} onSubmit={handleSubmit} className="space-y-4">
      {status === "success" ? (
        <div className="rounded border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary">
          Permintaan Anda sudah kami terima. Kami akan menghubungi Anda segera.
        </div>
      ) : null}

      <div className="space-y-3">
        <Field
          label="Nama"
          id="lead-nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, nama: true }))}
          placeholder="Nama lengkap"
          autoComplete="name"
          disabled={isDisabled}
          error={touched.nama ? errors.nama : undefined}
        />

        <Field
          label="Email"
          id="lead-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          placeholder="nama@contoh.com"
          autoComplete="email"
          disabled={isDisabled}
          error={touched.email ? errors.email : undefined}
        />

        <Field
          label="Nama Farm / Usaha (opsional)"
          id="lead-usaha"
          value={usaha}
          onChange={(e) => setUsaha(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, usaha: true }))}
          placeholder="Contoh: Kebun Hidroponik Nusantara"
          autoComplete="organization"
          disabled={isDisabled}
        />

        {mode === "demo" ? (
          <>
            <Field
              label="Preferensi Jadwal (opsional)"
              id="lead-tanggal"
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, tanggal: true }))}
              disabled={isDisabled}
              hint="Pilih tanggal yang nyaman untuk Anda."
            />

            <Field
              label="Waktu (opsional)"
              id="lead-waktu"
              as="select"
              value={waktu}
              onChange={(e) => setWaktu(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, waktu: true }))}
              disabled={isDisabled}
            >
              <option value="pagi">Pagi (09.00–12.00)</option>
              <option value="siang">Siang (13.00–16.00)</option>
              <option value="sore">Sore (16.00–18.00)</option>
            </Field>

            <Field
              label="Pesan"
              id="lead-pesan"
              as="textarea"
              rows={4}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, pesan: true }))}
              placeholder="Contoh: ingin demo untuk 4 rak, target 200 titik tanam, lokasi Bandung…"
              autoComplete="off"
              disabled={isDisabled}
              error={touched.pesan ? errors.pesan : undefined}
            />
          </>
        ) : null}
      </div>

      <p className="text-xs text-gray-500">
        Dengan mengirim, Anda setuju kami menghubungi Anda melalui email. Data Anda aman dan tidak
        dibagikan.
      </p>
    </form>
  );
};

export default LeadModalForm;
