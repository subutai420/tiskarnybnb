import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Building,
  CreditCard,
  Send
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    gdprConsent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    if (!formData.gdprConsent) {
      e.preventDefault();
      alert('Pro odeslání zprávy je nutný souhlas se zpracováním osobních údajů.');
      return;
    }
    // Formulář se odešle přes FormSubmit
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0A2342' }}>
            Kontaktujte nás
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Máte nápad, projekt nebo se jen chcete zeptat na detaily? Jsme tu pro vás a rádi 
            odpovíme na všechny vaše otázky.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#0A2342' }}>
              Kontaktní údaje
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#2CA58D]/10 flex-shrink-0">
                  <MapPin className="h-6 w-6" style={{ color: '#2CA58D' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#0A2342' }}>Adresa</h3>
                  <p className="text-gray-600">
                    Náchodská 672<br />
                    549 32 Velké Poříčí
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#2CA58D]/10 flex-shrink-0">
                  <Phone className="h-6 w-6" style={{ color: '#2CA58D' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#0A2342' }}>Telefon</h3>
                  <p className="text-gray-600">
                    <a href="tel:733517731" className="hover:text-[#2CA58D] transition-colors">
                      733 517 731
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#2CA58D]/10 flex-shrink-0">
                  <Mail className="h-6 w-6" style={{ color: '#2CA58D' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#0A2342' }}>E-mail</h3>
                  <p className="text-gray-600">
                    <a href="mailto:martina.buryskova@tiskarnybnb.cz" className="hover:text-[#2CA58D] transition-colors">
                      martina.buryskova@tiskarnybnb.cz
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#2CA58D]/10 flex-shrink-0">
                  <Clock className="h-6 w-6" style={{ color: '#2CA58D' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#0A2342' }}>Otevírací doba</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Pondělí - Pátek: 8:00 - 17:00</p>
                    <p>Sobota: 9:00 - 14:00</p>
                    <p>Neděle: Zavřeno</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Company Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5" style={{ color: '#6C757D' }} />
                <span className="text-gray-600">IČO: 45535175</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" style={{ color: '#6C757D' }} />
                <span className="text-gray-600">DIČ: CZ45535175</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl" style={{ color: '#0A2342' }}>
                  Napište nám
                </CardTitle>
                <CardDescription>
                  Vyplňte formulář a my se vám ozveme do 24 hodin.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-600 mb-2">
                      Zpráva byla odeslána!
                    </h3>
                    <p className="text-gray-600">
                      Děkujeme za vaši zprávu. Ozveme se vám do 24 hodin.
                    </p>
                  </div>
                ) : (
                  <form 
                    action="https://formsubmit.co/dan.bubak@gmail.com" 
                    method="POST"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    {/* Skryté pole pro nastavení FormSubmit */}
                    <input type="hidden" name="_subject" value="Nová zpráva z webu Tiskárny BNB" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Jméno a příjmení *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Předmět</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Vaše zpráva *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="mt-1"
                        placeholder="Popište nám váš projekt, požadavky nebo se zeptejte na cokoliv..."
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="gdpr"
                        checked={formData.gdprConsent}
                        onCheckedChange={(checked) => handleInputChange('gdprConsent', checked as boolean)}
                      />
                      <Label htmlFor="gdpr" className="text-sm leading-relaxed">
                        Souhlasím se zpracováním osobních údajů v souladu s GDPR. 
                        Vaše údaje budou použity pouze pro účely odpovědi na vaši poptávku.
                      </Label>
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-[#2CA58D] hover:bg-[#2CA58D]/90"
                      disabled={!formData.gdprConsent}
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Odeslat zprávu
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mb-12">
          <Card className="overflow-hidden">

            <CardContent className="p-0">
              <div className="w-full h-64">
                <iframe 
                  src="https://maps.google.com/maps?q=Náchodská+672,+549+32+Velké+Poříčí&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mapa - Tiskárny BNB"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Links */}
        <section className="text-center p-8 rounded-lg" style={{ backgroundColor: '#F8F9FA' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#0A2342' }}>
            Zajímají vás další informace?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              onClick={() => onNavigate('services')}
            >
              Prohlédnout služby
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('about')}
            >
              Poznat naši firmu
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
