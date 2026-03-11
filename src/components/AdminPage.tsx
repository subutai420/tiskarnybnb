import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { useContent } from './ContentContext';
import { Logo } from './Logo';
import { 
  Lock, 
  Settings, 
  Save, 
  RefreshCw, 
  Eye, 
  Image, 
  Type,
  Plus,
  Trash2,
  AlertCircle
} from 'lucide-react';

interface AdminPageProps {
  onNavigate: (page: string) => void;
}

export function AdminPage({ onNavigate }: AdminPageProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  
  const { content, updateContent, resetContent } = useContent();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Tiskarnybnb2025') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Neplatné heslo');
    }
  };

  const handleSave = () => {
    setSaveStatus('saving');
    // Simulate save process
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 500);
  };

  const handleReset = () => {
    if (confirm('Opravdu chcete obnovit všechen obsah na výchozí hodnoty? Tato akce je nevratná.')) {
      resetContent();
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }
  };

  const updateHeroContent = (field: string, value: string) => {
    updateContent({
      hero: {
        ...content.hero,
        [field]: value
      }
    });
  };

  const updateContactInfo = (field: string, value: string) => {
    updateContent({
      contact: {
        ...content.contact,
        [field]: value
      }
    });
  };

  const updateService = (index: number, field: string, value: string) => {
    const updatedServices = [...content.services];
    updatedServices[index] = { ...updatedServices[index], [field]: value };
    updateContent({ services: updatedServices });
  };

  const addService = () => {
    const newService = {
      id: Date.now().toString(),
      title: "Nová služba",
      description: "Popis nové služby",
      icon: "Star"
    };
    updateContent({ services: [...content.services, newService] });
  };

  const removeService = (index: number) => {
    const updatedServices = content.services.filter((_, i) => i !== index);
    updateContent({ services: updatedServices });
  };

  const updatePortfolioItem = (index: number, field: string, value: string) => {
    const updatedPortfolio = [...content.portfolio];
    updatedPortfolio[index] = { ...updatedPortfolio[index], [field]: value };
    updateContent({ portfolio: updatedPortfolio });
  };

  const addPortfolioItem = () => {
    const newItem = {
      id: Date.now().toString(),
      title: "Nový projekt",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzY4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzU2OTExOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    };
    updateContent({ portfolio: [...content.portfolio, newItem] });
  };

  const removePortfolioItem = (index: number) => {
    const updatedPortfolio = content.portfolio.filter((_, i) => i !== index);
    updateContent({ portfolio: updatedPortfolio });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 rounded-full bg-[#0A2342]/10 w-fit">
              <Lock className="h-8 w-8" style={{ color: '#0A2342' }} />
            </div>
            <CardTitle className="text-2xl" style={{ color: '#0A2342' }}>
              Administrace
            </CardTitle>
            <CardDescription>
              Přihlaste se pro přístup k administračnímu rozhraní
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Heslo</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                  placeholder="Zadejte heslo"
                />
              </div>
              
              {loginError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{loginError}</AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full bg-[#0A2342] hover:bg-[#0A2342]/90"
              >
                Přihlásit se
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Button 
                variant="link" 
                onClick={() => onNavigate('home')}
                className="text-gray-600"
              >
                ← Zpět na web
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Settings className="h-6 w-6" style={{ color: '#0A2342' }} />
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold" style={{ color: '#0A2342' }}>Administrace</span>
                <span className="text-gray-400">-</span>
                <Logo width={100} height={40} />
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge variant={saveStatus === 'saved' ? 'default' : 'secondary'}>
                {saveStatus === 'saved' ? 'Uloženo' : 'Upraveno'}
              </Badge>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => onNavigate('home')}
              >
                <Eye className="h-4 w-4 mr-2" />
                Zobrazit web
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="text-red-600 hover:text-red-700"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              
              <Button
                size="sm"
                onClick={handleSave}
                className="bg-[#2CA58D] hover:bg-[#2CA58D]/90"
                disabled={saveStatus === 'saving'}
              >
                <Save className="h-4 w-4 mr-2" />
                {saveStatus === 'saving' ? 'Ukládá...' : 'Uložit'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid grid-cols-2 lg:grid-cols-6 w-full">
            <TabsTrigger value="hero">Hero sekce</TabsTrigger>
            <TabsTrigger value="services">Služby</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="about">O nás</TabsTrigger>
            <TabsTrigger value="contact">Kontakt</TabsTrigger>
            <TabsTrigger value="advanced">Pokročilé</TabsTrigger>
          </TabsList>

          {/* Hero Section */}
          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  Úvodní sekce (Hero)
                </CardTitle>
                <CardDescription>
                  Editace hlavního nadpisu, podnadpisu a obrázku na úvodní stránce
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="hero-title">Hlavní nadpis</Label>
                  <Input
                    id="hero-title"
                    value={content.hero.title}
                    onChange={(e) => updateHeroContent('title', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="hero-subtitle">Podnadpis</Label>
                  <Textarea
                    id="hero-subtitle"
                    value={content.hero.subtitle}
                    onChange={(e) => updateHeroContent('subtitle', e.target.value)}
                    rows={3}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="hero-image">URL obrázku na pozadí</Label>
                  <Input
                    id="hero-image"
                    value={content.hero.backgroundImage}
                    onChange={(e) => updateHeroContent('backgroundImage', e.target.value)}
                    className="mt-1"
                    placeholder="https://..."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Služby na domovské stránce
                    </CardTitle>
                    <CardDescription>
                      Správa služeb zobrazených na úvodní stránce
                    </CardDescription>
                  </div>
                  <Button onClick={addService} size="sm" className="bg-[#2CA58D] hover:bg-[#2CA58D]/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Přidat službu
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {content.services.map((service, index) => (
                    <div key={service.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold">Služba {index + 1}</h3>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeService(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>Název služby</Label>
                          <Input
                            value={service.title}
                            onChange={(e) => updateService(index, 'title', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label>Ikona (Lucide název)</Label>
                          <Input
                            value={service.icon}
                            onChange={(e) => updateService(index, 'icon', e.target.value)}
                            className="mt-1"
                            placeholder="např. Printer, Settings..."
                          />
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Label>Popis služby</Label>
                        <Textarea
                          value={service.description}
                          onChange={(e) => updateService(index, 'description', e.target.value)}
                          rows={2}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Portfolio */}
          <TabsContent value="portfolio">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Image className="h-5 w-5" />
                      Portfolio
                    </CardTitle>
                    <CardDescription>
                      Správa obrázků a názvů v portfoliu
                    </CardDescription>
                  </div>
                  <Button onClick={addPortfolioItem} size="sm" className="bg-[#2CA58D] hover:bg-[#2CA58D]/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Přidat projekt
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.portfolio.map((item, index) => (
                    <div key={item.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold">Projekt {index + 1}</h3>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removePortfolioItem(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label>Název projektu</Label>
                          <Input
                            value={item.title}
                            onChange={(e) => updatePortfolioItem(index, 'title', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label>URL obrázku</Label>
                          <Input
                            value={item.image}
                            onChange={(e) => updatePortfolioItem(index, 'image', e.target.value)}
                            className="mt-1"
                            placeholder="https://..."
                          />
                        </div>
                        
                        {item.image && (
                          <div className="mt-2">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-32 object-cover rounded border"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* About */}
          <TabsContent value="about">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Základní informace o firmě</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Hlavní nadpis</Label>
                    <Input
                      value={content.about.title}
                      onChange={(e) => updateContent({
                        about: { ...content.about, title: e.target.value }
                      })}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label>Podnadpis</Label>
                    <Textarea
                      value={content.about.subtitle}
                      onChange={(e) => updateContent({
                        about: { ...content.about, subtitle: e.target.value }
                      })}
                      rows={2}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label>Popis týmu</Label>
                    <Textarea
                      value={content.about.teamDescription}
                      onChange={(e) => updateContent({
                        about: { ...content.about, teamDescription: e.target.value }
                      })}
                      rows={3}
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Filozofie firmy</CardTitle>
                  <CardDescription>
                    Upravte text popisující filozofii a přístup firmy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {content.about.philosophy.map((paragraph, index) => (
                    <div key={index}>
                      <Label>Odstavec {index + 1}</Label>
                      <Textarea
                        value={paragraph}
                        onChange={(e) => {
                          const updatedPhilosophy = [...content.about.philosophy];
                          updatedPhilosophy[index] = e.target.value;
                          updateContent({
                            about: { ...content.about, philosophy: updatedPhilosophy }
                          });
                        }}
                        rows={3}
                        className="mt-1"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contact */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Kontaktní informace</CardTitle>
                <CardDescription>
                  Upravte kontaktní údaje zobrazované napříč webem
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Adresa</Label>
                    <Input
                      value={content.contact.address}
                      onChange={(e) => updateContactInfo('address', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label>Telefon</Label>
                    <Input
                      value={content.contact.phone}
                      onChange={(e) => updateContactInfo('phone', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label>E-mail</Label>
                    <Input
                      value={content.contact.email}
                      onChange={(e) => updateContactInfo('email', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label>IČO</Label>
                    <Input
                      value={content.contact.ico}
                      onChange={(e) => updateContactInfo('ico', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label>DIČ</Label>
                    <Input
                      value={content.contact.dic}
                      onChange={(e) => updateContactInfo('dic', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <Separator />
                
                <div>
                  <h3 className="font-semibold mb-4">Otevírací doba</h3>
                  <div className="space-y-3">
                    <div>
                      <Label>Všední dny</Label>
                      <Input
                        value={content.contact.openingHours.weekdays}
                        onChange={(e) => updateContent({
                          contact: {
                            ...content.contact,
                            openingHours: {
                              ...content.contact.openingHours,
                              weekdays: e.target.value
                            }
                          }
                        })}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label>Sobota</Label>
                      <Input
                        value={content.contact.openingHours.saturday}
                        onChange={(e) => updateContent({
                          contact: {
                            ...content.contact,
                            openingHours: {
                              ...content.contact.openingHours,
                              saturday: e.target.value
                            }
                          }
                        })}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label>Neděle</Label>
                      <Input
                        value={content.contact.openingHours.sunday}
                        onChange={(e) => updateContent({
                          contact: {
                            ...content.contact,
                            openingHours: {
                              ...content.contact.openingHours,
                              sunday: e.target.value
                            }
                          }
                        })}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Advanced */}
          <TabsContent value="advanced">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Pokročilé možnosti</CardTitle>
                <CardDescription>
                  Tyto možnosti mohou ovlivnit funkcionalitu webu. Používejte opatrně.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Resetování obsahu odstraní všechny vaše úpravy a obnoví původní obsah webu.
                    Tato akce je nevratná.
                  </AlertDescription>
                </Alert>
                
                <div className="flex justify-center">
                  <Button
                    variant="destructive"
                    onClick={handleReset}
                    className="px-8"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Resetovat veškerý obsah
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}