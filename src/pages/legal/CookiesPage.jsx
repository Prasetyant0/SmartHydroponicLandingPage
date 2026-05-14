import Navbar from "../../widgets/navbar/Navbar";
import Footer from "../../widgets/footer/Footer";

const CookiesPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-light">
        <div className="section-container pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-xs font-medium tracking-[0.2em] text-gray-500">COOKIES</div>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-dark sm:text-5xl">
              Kebijakan Cookies
            </h1>
            <p className="mt-5 text-base leading-relaxed text-graphite sm:text-lg">
              Halaman ini menjelaskan penggunaan cookies secara umum. Sesuaikan daftar cookies
              sesuai implementasi analytics atau fitur yang Anda pakai.
            </p>

            <div className="mt-10 space-y-8 rounded-md border border-gray-200 bg-white p-6 md:p-8">
              <section>
                <h2 className="text-lg font-medium text-dark">1. Apa itu cookies?</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Cookies adalah file kecil yang disimpan di perangkat Anda untuk membantu
                  pengalaman penggunaan, keamanan, dan analitik.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-medium text-dark">2. Jenis cookies</h2>
                <ul className="mt-3 space-y-2 text-sm text-graphite">
                  <li className="flex gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300"
                      aria-hidden="true"
                    />
                    <span>Esensial: diperlukan agar situs berfungsi dengan baik.</span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300"
                      aria-hidden="true"
                    />
                    <span>Preferensi: menyimpan pilihan tampilan tertentu.</span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300"
                      aria-hidden="true"
                    />
                    <span>Analitik: membantu kami memahami penggunaan untuk perbaikan.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-medium text-dark">3. Mengelola cookies</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Anda dapat mengatur browser untuk menolak cookies. Namun, beberapa fitur situs
                  mungkin tidak berfungsi optimal.
                </p>
              </section>

              <p className="text-xs text-gray-500">Terakhir diperbarui: Mei 2026</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiesPage;
