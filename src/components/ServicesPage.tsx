import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { useContent } from './ContentContext';
import { 
  Palette, 
  Printer, 
  Cog, 
  BookOpen, 
  Scissors, 
  Truck, 
  FileText,
  Package,
  Calendar,
  CreditCard
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const iconMap: Record<string, any> = {
  Palette, Printer, Cog, BookOpen, Scissors, Truck, FileText, Package, Calendar, CreditCard
};

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { content } = useContent();


  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0A2342' }}>
            Komplexní tiskové služby na jednom místě
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Od návrhu až po doručení - poskytujeme kompletní řešení pro všechny vaše tiskové potřeby 
            s důrazem na kvalitu, rychlost a individuální přístup.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-12">
          {content.serviceCategories.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.icon] || Printer;
            return (
              <div key={category.id} className="bg-white rounded-lg shadow-sm border p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-full bg-[#2CA58D]/10">
                    <IconComponent className="h-8 w-8" style={{ color: '#2CA58D' }} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#0A2342' }}>
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={service.id} className="border-l-4 hover:shadow-md transition-shadow"
                          style={{ borderLeftColor: '#2CA58D' }}>
                      <CardHeader>
                        <CardTitle className="text-lg" style={{ color: '#0A2342' }}>
                          {service.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {categoryIndex < content.serviceCategories.length - 1 && (
                  <Separator className="mt-8" />
                )}
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <section className="mt-16 p-8 rounded-lg" style={{ backgroundColor: '#F8F9FA' }}>
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#0A2342' }}>
            Jak probíhá spolupráce?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Konzultace",
                description: "Prodiskutujeme vaše požadavky a navrhneme optimální řešení."
              },
              {
                step: "2", 
                title: "Návrh a cena",
                description: "Připravíme detailní návrh a transparentní cenovou nabídku."
              },
              {
                step: "3",
                title: "Realizace",
                description: "Zahájíme výrobu s pravidelným informováním o průběhu."
              },
              {
                step: "4",
                title: "Doručení",
                description: "Doručíme hotové produkty včas a v perfektní kvalitě."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: '#2CA58D' }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#0A2342' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center p-8 rounded-lg" style={{ backgroundColor: '#0A2342' }}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Máte projekt? Pojďme ho společně zrealizovat.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktujte nás pro nezávaznou konzultaci a získejte cenovou nabídku na míru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#2CA58D] hover:bg-[#2CA58D]/90"
              onClick={() => onNavigate('contact')}
            >
              Odeslat poptávku
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-[#0A2342]"
              onClick={() => onNavigate('about')}
            >
              Poznat nás lépe
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}