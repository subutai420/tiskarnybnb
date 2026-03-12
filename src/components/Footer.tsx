import { Mail, Phone, MapPin } from 'lucide-react';
import { useContent } from './ContentContext';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { content } = useContent();
  return (
    <footer style={{ backgroundColor: '#0A2342' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo a kontakt */}
          <div>
            <div className="mb-4">
              <Logo width={120} height={48} className="filter brightness-0 invert" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{content.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{content.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{content.contact.email}</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-300">
              <p>IČO: {content.contact.ico}</p>
              <p>DIČ: {content.contact.dic}</p>
            </div>
          </div>

          {/* Navigace */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-sm hover:text-[#2CA58D] transition-colors"
                >
                  Domů
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-sm hover:text-[#2CA58D] transition-colors"
                >
                  Služby
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-sm hover:text-[#2CA58D] transition-colors"
                >
                  O nás
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-sm hover:text-[#2CA58D] transition-colors"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('admin')}
                  className="text-sm hover:text-[#2CA58D] transition-colors opacity-60"
                >
                  Administrace
                </button>
              </li>
            </ul>
          </div>

          {/* Otevírací doba */}
          <div>
            <h3 className="text-xl font-bold mb-4">Otevírací doba</h3>
            <div className="text-sm space-y-1">
              <p>{content.contact.openingHours.monday}</p>
              <p>{content.contact.openingHours.tuesday}</p>
              <p>{content.contact.openingHours.wednesday}</p>
              <p>{content.contact.openingHours.thursday}</p>
              <p>{content.contact.openingHours.friday}</p>
              <p>{content.contact.openingHours.saturday}</p>
              <p>{content.contact.openingHours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 Tiskárny BNB. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}