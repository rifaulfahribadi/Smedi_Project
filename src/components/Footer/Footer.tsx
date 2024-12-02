import { Instagram, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">smedi.id</h2>
            <p className="text-gray-400 mb-6">
            Nggak perlu pusing mikirin ide atau desain iklan, serahkan aja ke kami. Yuk, bikin iklan yang langsung menarik perhatian dan jadi CUAN!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          <div className="text-right">
            <a
              href="https://wa.me/6285772466643"
              target='blank'
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:shadow-lg transition-all"
            >
              Contact Us
              <Send className="ml-2" size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} smedi.id. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}