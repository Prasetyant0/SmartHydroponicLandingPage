import Navbar from "../../widgets/navbar/Navbar";
import Footer from "../../widgets/footer/Footer";

const PrivacyPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-light">
        <div className="section-container pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-xs font-medium tracking-[0.2em] text-gray-500">PRIVASI</div>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-dark sm:text-5xl">
              Kebijakan Privasi
            </h1>
            <p className="mt-5 text-base leading-relaxed text-graphite sm:text-lg">
              Dokumen ini adalah placeholder yang realistis untuk kebijakan privasi. Sesuaikan
              detailnya sesuai kebutuhan bisnis dan regulasi yang berlaku.
            </p>

            <div className="mt-10 space-y-8 rounded-md border border-gray-200 bg-white p-6 md:p-8">
              <section>
                <h2 className="text-lg font-medium text-dark">1. Data yang kami kumpulkan</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Kami dapat mengumpulkan data yang Anda kirimkan melalui formulir kontak (nama,
                  email, dan pesan), serta data teknis dasar untuk keamanan dan performa.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-medium text-dark">2. Cara kami menggunakan data</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Data digunakan untuk merespons permintaan Anda, memberikan demo, serta
                  meningkatkan kualitas layanan. Kami tidak menjual data pribadi.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-medium text-dark">3. Penyimpanan & keamanan</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Kami menerapkan praktik keamanan yang wajar untuk melindungi data. Namun, tidak
                  ada metode transmisi di internet yang 100% aman.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-medium text-dark">4. Hak Anda</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Anda dapat meminta akses, koreksi, atau penghapusan data dengan menghubungi kami
                  melalui halaman Kontak.
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

export default PrivacyPage;
