import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Domů' },
    { id: 'services', label: 'Služby' },
    { id: 'about', label: 'O nás' },
    { id: 'contact', label: 'Kontakt' }
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Logo width={140} height={56} className="hover:opacity-80 transition-opacity" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`hover:text-[#2CA58D] transition-colors ${
                  currentPage === item.id ? 'text-[#2CA58D]' : 'text-[#0A2342]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            className="hidden md:block bg-[#2CA58D] hover:bg-[#2CA58D]/90"
            onClick={() => onNavigate('contact')}
          >
            Nezávazná poptávka
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[#0A2342]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0A2342]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left hover:text-[#2CA58D] transition-colors ${
                    currentPage === item.id ? 'text-[#2CA58D]' : 'text-[#0A2342]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="w-full bg-[#2CA58D] hover:bg-[#2CA58D]/90"
                onClick={() => {
                  onNavigate('contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Nezávazná poptávka
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}