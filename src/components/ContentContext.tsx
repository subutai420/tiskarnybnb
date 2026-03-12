import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import heroImage from 'figma:asset/d878cfc75226d4c112ce9a146d7606f46d8555eb.png';

export interface ContentData {
  // Hero section
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  
  // Services
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;

  // Why choose us
  whyChooseUs: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;

  // Portfolio
  portfolio: Array<{
    id: string;
    title: string;
    image: string;
  }>;

  // About page
  about: {
    title: string;
    subtitle: string;
    philosophy: string[];
    values: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
    }>;
    teamDescription: string;
  };

  // Equipment
  equipment: Array<{
    id: string;
    category: string;
    description: string;
    icon: string;
    machines: string[];
  }>;

  // Contact info
  contact: {
    address: string;
    phone: string;
    email: string;
    ico: string;
    dic: string;
    openingHours: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
  };

  // Service categories for services page
  serviceCategories: Array<{
    id: string;
    title: string;
    icon: string;
    services: Array<{
      id: string;
      name: string;
      description: string;
    }>;
  }>;
}

const defaultContent: ContentData = {
  hero: {
    title: "Kvalita, která mluví za Vás.",
    subtitle: "Jsme váš partner pro profesionální tisk od vizitek po katalogy. S nejmodernější technologií a důrazem na detail proměníme vaše nápady ve skutečnost.",
    backgroundImage: heroImage
  },
  services: [
    {
      id: "1",
      title: "Digitální tisk",
      description: "Flexibilita a rychlost pro tisk malých a středních nákladů.",
      icon: "Printer"
    },
    {
      id: "2", 
      title: "Ofsetový tisk",
      description: "Nejvyšší kvalita a efektivita pro velké objemy tiskovin.",
      icon: "Cog"
    },
    {
      id: "3",
      title: "Dokončující zpracování", 
      description: "Profesionální vazby, povrchové úpravy a personalizace.",
      icon: "BookOpen"
    },
    {
      id: "4",
      title: "DTP & CTP Studio",
      description: "Precizní předtisková příprava pro bezchybný tisk.",
      icon: "Palette"
    }
  ],
  whyChooseUs: [
    {
      id: "1",
      title: "Odbornost a zkušenosti",
      description: "Profesionální tým s dlouholetou praxí.",
      icon: "Users"
    },
    {
      id: "2",
      title: "Špičkové technologie", 
      description: "Používáme nejmodernější stroje a software.",
      icon: "Cog"
    },
    {
      id: "3",
      title: "Flexibilita a přístup",
      description: "Každý projekt je pro nás unikátní.",
      icon: "Zap"
    },
    {
      id: "4",
      title: "Důraz na detail",
      description: "Perfekcionismus v každém pixelu a písmenku.",
      icon: "Target"
    }
  ],
  portfolio: [
    {
      id: "1",
      title: "Luxusní katalogy",
      image: "https://images.unsplash.com/photo-1619795845878-27014d545342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGVkJTIwbWFnYXppbmUlMjBjYXRhbG9nfGVufDF8fHx8MTc1NjkxMTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "2",
      title: "Vizitky",
      image: "https://images.unsplash.com/photo-1579642984744-4dd0fe83c38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwcHJpbnRpbmd8ZW58MXx8fHwxNzU2OTExOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "3",
      title: "Knihy a publikace",
      image: "https://images.unsplash.com/photo-1630327722923-5ebd594ddda9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwYmluZGluZyUyMHByaW50aW5nfGVufDF8fHx8MTc1NjkxMTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "4",
      title: "Marketingové materiály",
      image: "https://images.unsplash.com/photo-1695634281463-4788ac6ddfdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBicm9jaHVyZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTY4NTAxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ],
  about: {
    title: "Tradice tisku s vizí budoucnosti",
    subtitle: "Už více než 15 let přinášíme našim klientům špičkové tiskové služby. Kombinujeme tradiční řemeslnou kvalitu s nejmodernějšími technologiemi.",
    philosophy: [
      "V Tiskárnách BNB věříme, že každý projekt, od malé vizitky po velký billboard, je pro nás výzvou a příležitostí ukázat naši expertizu. Naše filozofie je postavena na třech pilířích: kvalitě, inovacích a individuálním přístupu.",
      "Každý klient je pro nás jedinečný a má specifické potřeby. Proto se snažíme porozumět vašim cílům a navrhnout řešení, které nejlépe odpovídá vašim požadavkům a rozpočtu.", 
      "Investujeme nejen do nejmodernějších technologií, ale také do vzdělávání našeho týmu. Pouze tak můžeme garantovat, že vaše projekty budou realizovány na nejvyšší úrovni a splní i ty nejnáročnější očekávání."
    ],
    values: [
      {
        id: "1",
        title: "Preciznost",
        description: "Každý detail je pro nás důležitý. Věříme, že kvalita se skrývá v detailech.",
        icon: "Target"
      },
      {
        id: "2", 
        title: "Partnerství",
        description: "S klienty budujeme dlouhodobé vztahy založené na důvěře a vzájemné spolupráci.",
        icon: "Users"
      },
      {
        id: "3",
        title: "Inovace",
        description: "Investujeme do nejmodernějších technologií a neustále rozšiřujeme naše možnosti.",
        icon: "Award"
      },
      {
        id: "4",
        title: "Vášeň",
        description: "Tisk není jen naše práce, je to naše vášeň a způsob, jak pomáháme realizovat vaše vize.",
        icon: "Heart"
      }
    ],
    teamDescription: "Máme tým zkušených profesionálů, kteří se neustále vzdělávají v nejnovějších trendech a technologiích. Naši odborníci vám poradí s výběrem nejvhodnějšího řešení a provedou vás celým procesem od návrhu po finální produkt."
  },
  equipment: [
    {
      id: "1",
      category: "Digitální tiskové stroje",
      description: "Vynikající kvalita a flexibilita pro tisk na vyžádání a personalizaci.",
      icon: "Printer",
      machines: [
        "HP Indigo 7900 - prémiová kvalita pro komerční tisk",
        "Xerox Versant 280 - vysokorychlostní barevný tisk", 
        "Canon imagePRESS C270 - univerzální digitální tisk"
      ]
    },
    {
      id: "2",
      category: "Ofsetové tiskové stroje",
      description: "Konzistentní vysoká kvalita pro velké náklady a speciální barvy.",
      icon: "Cog",
      machines: [
        "Heidelberg Speedmaster XL 75 - 5-barevný ofset",
        "KBA-Sheetfed Rapida 106 - velkoformátový tisk",
        "Komori Lithrone G40 - přesný registr a kvalita"
      ]
    },
    {
      id: "3",
      category: "Dokončovací a vazačské zařízení",
      description: "Precizní finální úpravy pro dokonalý vzhled a funkčnost.",
      icon: "Scissors",
      machines: [
        "Heidelberg Stahlfolder Ti 52 - automatické skládání",
        "Muller Martini Sigma - perfektní vazba knih",
        "Horizon BQ-480 - komplexní dokončovací systém",
        "Komfi Komfimatic - Wire-O vazba a děrování"
      ]
    },
    {
      id: "4",
      category: "Předtisková příprava",
      description: "Moderní technologie pro přípravu a kontrolu tiskových data.",
      icon: "Monitor",
      machines: [
        "Screen PlateRite 8900S - CTP osvitová jednotka",
        "X-Rite i1 Pro 3 - kolorimetrické měření",
        "Esko ArtPro+ - profesionální předtisková příprava"
      ]
    }
  ],
  contact: {
    address: "Náchodská 672, 549 32 Velké Poříčí",
    phone: "733 517 731",
    email: "martina.buryskova@tiskarnybnb.cz",
    ico: "45535175",
    dic: "CZ12345678",
    openingHours: {
      monday: "Pondělí: 6:00 - 14:30",
      tuesday: "Úterý: 6:00 - 14:30", 
      wednesday: "Středa: 6:00 - 14:30",
      thursday: "Čtvrtek: 6:00 - 14:30",
      friday: "Pátek: 6:00 - 14:30",
      saturday: "Sobota: Zavřeno",
      sunday: "Neděle: Zavřeno"
    }
  },
  serviceCategories: [
    {
      id: "1",
      title: "Předtisková příprava",
      icon: "Palette",
      services: [
        {
          id: "1-1",
          name: "Profesionální DTP Studio",
          description: "Grafický design, layout, sazba, lokalizace, PDF workflow pro bezchybný tisk."
        },
        {
          id: "1-2",
          name: "Moderní CTP Pracoviště",
          description: "Přímý osvit desek, rychlost a přesnost, ekologický proces bez chemikálií."
        }
      ]
    },
    {
      id: "2",
      title: "Tiskové technologie",
      icon: "Printer",
      services: [
        {
          id: "2-1",
          name: "Archový digitální tisk",
          description: "Vysoká kvalita, personalizace, ideální pro malé a střední náklady do 1000 ks."
        },
        {
          id: "2-2",
          name: "Ofsetový tisk",
          description: "Konzistentní kvalita pro velké náklady, tisk speciálními Pantone® barvami."
        }
      ]
    },
    {
      id: "3",
      title: "Dokončující zpracování (Knihařina)",
      icon: "BookOpen",
      services: [
        {
          id: "3-1",
          name: "Knihařské vazby",
          description: "V8 (měkká vazba), pevná vazba, spirálová, Wire-O, šití nití pro dlouhou životnost."
        },
        {
          id: "3-2",
          name: "Povrchové úpravy",
          description: "Laminování (lesk/mat), UV lakování, reliéfní lak, fóliování, sleporažba."
        },
        {
          id: "3-3",
          name: "Další zpracování",
          description: "Výsek, perforace, číslování, personifikace, termoražba, zlatotisk."
        }
      ]
    },
    {
      id: "4",
      title: "Produkty",
      icon: "FileText",
      services: [
        {
          id: "4-1",
          name: "Tisk publikací",
          description: "Časopisy, katalogy, knihy, obrazové publikace, učebnice, výroční zprávy."
        },
        {
          id: "4-2",
          name: "Marketingové materiály", 
          description: "Letáky, brožury, vizitky, plakáty, prezentační složky."
        },
        {
          id: "4-3",
          name: "Kalendáře",
          description: "Stolní a nástěnné kalendáře, plánovače, diáře na míru."
        },
        {
          id: "4-4",
          name: "Obaly a kartonáž",
          description: "Krabice na míru, obaly, lehká kartonáž, dárkové krabičky."
        }
      ]
    },
    {
      id: "5",
      title: "Logistika",
      icon: "Truck",
      services: [
        {
          id: "5-1",
          name: "Distribuce a doručení",
          description: "Efektivní doručení vašich tiskovin na správné místo a včas po celé ČR."
        },
        {
          id: "5-2",
          name: "Skladování",
          description: "Možnost uskladnění vašich tiskovin a postupné vyskladňování dle potřeby."
        }
      ]
    }
  ]
};

interface ContentContextType {
  content: ContentData;
  updateContent: (newContent: Partial<ContentData>) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(defaultContent);

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('tiskarny-bnb-content');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent(parsedContent);
      } catch (error) {
        console.error('Error loading saved content:', error);
      }
    }
  }, []);

  const updateContent = (newContent: Partial<ContentData>) => {
    const updatedContent = { ...content, ...newContent };
    setContent(updatedContent);
    localStorage.setItem('tiskarny-bnb-content', JSON.stringify(updatedContent));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('tiskarny-bnb-content');
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}