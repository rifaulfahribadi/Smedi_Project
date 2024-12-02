import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export default function ServiceCard({ title, price, features, isPopular }: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${isPopular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
      {isPopular && (
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium absolute -top-3 left-1/2 -translate-x-1/2">
          Paling Populer
        </span>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/proyek</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <Check className="text-blue-500 mr-2" size={20} />
            {feature}
          </li>
        ))}
      </ul>
      <a
        target='blank'
        href="https://wa.me/6285772466643"
        className={`block text-center py-3 px-6 rounded-full font-medium transition-all ${
          isPopular
            ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:shadow-lg'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Konsultasi Sekarang
      </a>
    </div>
  );
}