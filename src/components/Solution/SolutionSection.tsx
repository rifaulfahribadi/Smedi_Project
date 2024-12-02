import { Sparkles } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <Sparkles size={40} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Wujudkan Mesin Pencetak Cuan Dengan Sosial Media Kamu
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-50">
        Stop buang-buang Waktu Kamu! Kami Bantu bikin konten yang relevan, kreatif, dan bikin iklan yang jadi mesin pencetak cuan buat bisismu. Dari konsep sampai eksekusi, semua kami siapkan biar konten iklan kamu bisa perform maksimal.
        </p>
        <a
          href="#services"
          className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all"
        >
          Mulai Sekarang
        </a>
      </div>
    </section>
  );
}