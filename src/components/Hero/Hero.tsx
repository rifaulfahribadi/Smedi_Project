import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Bikin Sosmed Kamu Jadi Mesin Cuan!
            </h1>
            <p className="mt-6 text-xl text-gray-600">
            Capek ngurus media sosial tapi nggak keliatan hasilnya? Tenang, kami bantu kelola media sosial kamu, bikin konten yang keren, dan bangun sosmed kamu jadi mesin penghasil cuan. Fokus aja ke bisnismu, urusan media sosial biar kami yang handle!
            </p>
            <div className="mt-8">
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:shadow-lg transition-all"
              >
                Cek Layanan Kami
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Training Session"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}