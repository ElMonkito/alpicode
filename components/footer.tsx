import { Mountain, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold">AlpiCode</span>
            </div>
            <p className="text-gray-400 mb-4">
              Création de sites web premium.
              <br />
              Précision suisse. Excellence digitale.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Tarifs
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Réalisations
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-red-600" />
                <a
                  href="mailto:contact@alpicode.ch"
                  className="hover:text-red-600 transition-colors"
                >
                  contact@alpicode.ch
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-red-600" />
                <a
                  href="tel:+41123456789"
                  className="hover:text-red-600 transition-colors"
                >
                  +41 12 345 67 89
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                <span>
                  Rue du Mont-Blanc 1
                  <br />
                  1201 Genève, Suisse
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} AlpiCode. Tous droits réservés. Made with precision in Switzerland.
          </p>
        </div>
      </div>
    </footer>
  );
}
