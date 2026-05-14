import Navbar from "../../widgets/navbar/Navbar";
import Footer from "../../widgets/footer/Footer";

const TermsPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-light">
        <div className="section-container pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-xs font-medium tracking-[0.2em] text-gray-500">SYARAT</div>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-dark sm:text-5xl">
              Syarat & Ketentuan
            </h1>
            <p className="mt-5 text-base leading-relaxed text-graphite sm:text-lg">
              Ini adalah placeholder syarat & ketentuan penggunaan. Anda dapat memperbarui bagian
              berikut agar sesuai dengan model bisnis, harga, dan kebijakan layanan Anda.
            </p>

            <div className="mt-10 space-y-8 rounded-md border border-gray-200 bg-white p-6 md:p-8">
              <section>
                <h2 className="text-lg font-medium text-dark">1. Penggunaan layanan</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Anda setuju menggunakan layanan secara wajar dan tidak melakukan aktivitas yang
                  melanggar hukum atau mengganggu sistem.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-medium text-dark">2. Ketersediaan</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Kami berupaya menjaga layanan tetap tersedia, namun dapat melakukan pemeliharaan
                  berkala. Notifikasi akan diberikan bila diperlukan.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-medium text-dark">3. Batasan tanggung jawab</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Layanan disediakan "sebagaimana adanya". Hasil panen dipengaruhi banyak faktor
                  di luar kontrol sistem.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-medium text-dark">4. Perubahan</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Syarat dapat diperbarui dari waktu ke waktu. Versi terbaru akan ditampilkan pada
                  halaman ini.
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

export default TermsPage;
