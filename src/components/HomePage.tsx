import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Printer, Palette, BookOpen, Cog, Users, Award, Target, Zap } from 'lucide-react';
import { useContent } from './ContentContext';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const iconMap: Record<string, any> = {
  Printer, Palette, BookOpen, Cog, Users, Award, Target, Zap
};

export function HomePage({ onNavigate }: HomePageProps) {
  const { content } = useContent();


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={content.hero.backgroundImage}
            alt="Moderní tiskové stroje"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center -200px' }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#2CA58D] hover:bg-[#2CA58D]/90"
              onClick={() => onNavigate('services')}
            >
              Prohlédnout služby
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-[#0A2342]"
              onClick={() => onNavigate('contact')}
            >
              Kontaktujte nás
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0A2342' }}>
              Naše služby pro dokonalý výsledek
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Printer;
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow cursor-pointer group"
                      onClick={() => onNavigate('services')}>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-[#2CA58D]/10 w-fit group-hover:bg-[#2CA58D]/20 transition-colors">
                      <IconComponent className="h-8 w-8" style={{ color: '#2CA58D' }} />
                    </div>
                    <CardTitle className="text-lg" style={{ color: '#0A2342' }}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                    <Button variant="link" className="mt-3 p-0" style={{ color: '#2CA58D' }}>
                      Zjistit více →
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0A2342' }}>
              Proč Tiskárny BNB?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whyChooseUs.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Users;
              return (
                <div key={item.id} className="text-center p-6">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-[#0A2342]/10 w-fit">
                    <IconComponent className="h-8 w-8" style={{ color: '#0A2342' }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#0A2342' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0A2342' }}>
              Inspirujte se naší prací
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.portfolio.map((item, index) => (
              <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernizační fond Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <img
            src="/src/assets/modernizacni_fond.png"
            alt="Instalace FVE – Tiskárny BNB – Modernizační fond"
            className="w-full max-w-xl rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#0A2342' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Máte projekt? Pojďme ho společně zrealizovat.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku.
          </p>
          <Button 
            size="lg"
            className="bg-[#2CA58D] hover:bg-[#2CA58D]/90"
            onClick={() => onNavigate('contact')}
          >
            Odeslat poptávku
          </Button>
        </div>
      </section>
    </div>
  );
}