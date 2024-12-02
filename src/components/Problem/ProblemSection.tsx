import { BookX, BrainCircuit, Clock, DollarSign } from 'lucide-react';
import ProblemCard from './ProblemCard';

export default function ProblemSection() {
  const problems = [
    {
      icon: <BookX size={24} />,
      title: "Kurang Tim yang Ngerti",
      description: "Belum punya tim khusus yang ngerti tren dan algoritma terbaru."
    },
    {
      icon: <Clock size={24} />,
      title: "Nggak Punya Waktu",
      description: "Sibuk ngurusin bisnis bikin kamu nggak sempat bikin konten."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Bayar Profesional Mahal",
      description: "Pengin rekrut karyawan profesional tapi biayanya mahal banget."
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Bingung Sama Data",
      description: "Nggak tau gimana cara baca dan manfaatin data performa media sosial."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Kenapa Media Sosial Kamu Butuh Bantuan?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
}