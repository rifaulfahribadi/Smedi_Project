import ServiceCard from './ServiceCard';

export default function ServiceSection() {
  const services = [
    {
      title: "Paket Hemat",
      price: "Rp 399K",
      features: [
        "4 konten video/motion graphic",
        "Durasi: 2 menit/video.",
        "Bahan dari client.",
        "Hemat biaya.",
        "Cocok untuk pemula."
      ]
    },
    {
      title: "Paket Optimal",
      price: "Rp 599K",
      features: [
        "8 konten video/motion graphic.",
        "Durasi: 2 menit/video.",
        "Bahan dari client.",
        "Harga lebih hemat per video.",
        "Cocok untuk kampanye intensif.",
        "Pilihan favorit banyak client.",
        "Menjadi Prioritas Pengerjaan"
      ],
      isPopular: true
    },
    {
      title: "Paket Exclusive",
      price: "Rp 899K",
      features: [
        "12 konten video/motion graphic.",
        "Durasi: 2 menit/video.",
        "Bahan dari client.",
        "Proses lebih cepat.",
        "Solusi premium dan eksklusif.",
        "Ideal untuk kebutuhan intens.",
        "Menjadi Prioritas Pengerjaan"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose Your Learning Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}