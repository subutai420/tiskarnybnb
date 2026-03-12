import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { AdminPage } from './components/AdminPage';
import { ContentProvider } from './components/ContentContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'admin':
        return <AdminPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col">
        {currentPage !== 'admin' && (
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        )}
        <main className="flex-grow">
          {renderCurrentPage()}
        </main>
        {currentPage !== 'admin' && (
          <Footer onNavigate={handleNavigate} />
        )}
      </div>
    </ContentProvider>
  );
}