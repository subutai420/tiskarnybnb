import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Separator } from './ui/separator';
import { useContent } from './ContentContext';
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  Printer,
  Cog,
  Scissors,
  Monitor
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const iconMap: Record<string, any> = {
  Users, Award, Target, Heart, Printer, Cog, Scissors, Monitor
};

export function AboutPage({ onNavigate }: AboutPageProps) {
  const { content } = useContent();


  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0A2342' }}>
            {content.about.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.about.subtitle}
          </p>
        </div>

        {/* About Us Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A2342' }}>
              Naše filozofie
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              {content.about.philosophy.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1630327722923-5ebd594ddda9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcmludGluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTY5MTE5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Naše tiskárna"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#0A2342' }}>
            Naše hodnoty
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.about.values.map((value, index) => {
              const IconComponent = iconMap[value.icon] || Target;
              return (
                <div key={value.id} className="text-center p-6">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-[#2CA58D]/10 w-fit">
                    <IconComponent className="h-8 w-8" style={{ color: '#2CA58D' }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#0A2342' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Equipment Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0A2342' }}>
              Technologie, na které se můžete spolehnout
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naše moderní strojové vybavení nám umožňuje realizovat projekty v nejvyšší kvalitě 
              a dodržovat i ty nejkratší termíny.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.equipment.map((category, index) => {
              const IconComponent = iconMap[category.icon] || Printer;
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full bg-[#0A2342]/10">
                        <IconComponent className="h-6 w-6" style={{ color: '#0A2342' }} />
                      </div>
                      <CardTitle className="text-xl" style={{ color: '#0A2342' }}>
                        {category.category}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.machines.map((machine, machineIndex) => (
                        <li key={machineIndex} className="flex items-start gap-2">
                          <div 
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: '#2CA58D' }}
                          ></div>
                          <span className="text-gray-700">{machine}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="p-8 rounded-lg mb-16" style={{ backgroundColor: '#F8F9FA' }}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A2342' }}>
              Náš tým odborníků
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              {content.about.teamDescription}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#0A2342]/10 flex items-center justify-center mx-auto mb-3">
                  <Monitor className="h-8 w-8" style={{ color: '#0A2342' }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: '#0A2342' }}>DTP specialisté</h3>
                <p className="text-sm text-gray-600">Grafická příprava a předtisk</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#0A2342]/10 flex items-center justify-center mx-auto mb-3">
                  <Printer className="h-8 w-8" style={{ color: '#0A2342' }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: '#0A2342' }}>Tiskaři</h3>
                <p className="text-sm text-gray-600">Obsluha tiskových strojů</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#0A2342]/10 flex items-center justify-center mx-auto mb-3">
                  <Scissors className="h-8 w-8" style={{ color: '#0A2342' }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: '#0A2342' }}>Knihaři</h3>
                <p className="text-sm text-gray-600">Dokončovací zpracování</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center p-8 rounded-lg" style={{ backgroundColor: '#0A2342' }}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Máte otázky o naší firmě nebo technologiích?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Rádi vám představíme naše možnosti a ukážeme, jak můžeme pomoci s vaším projektem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#2CA58D] hover:bg-[#2CA58D]/90"
              onClick={() => onNavigate('contact')}
            >
              Kontaktujte nás
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-[#0A2342]"
              onClick={() => onNavigate('services')}
            >
              Prohlédnout služby
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}