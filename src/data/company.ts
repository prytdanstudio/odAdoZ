import {
  Bath,
  Brush,
  Building2,
  CheckCircle2,
  Hammer,
  Home,
  Layers3,
  PaintRoller,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";

export type Language = "pl" | "en";

export type LocalizedString = Record<Language, string>;

export type CompanyData = {
  companyName: string;
  legalName: string;
  slogan: LocalizedString;
  headline: LocalizedString;
  subheadline: LocalizedString;
  description: LocalizedString;
  mission: LocalizedString;
  approach: LocalizedString;
  yearsOfExperience: string;
  completedProjects: string;
  customerSatisfaction: string;
  responseTime: LocalizedString;
  overallRating: number;
  reviewCount: number;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    region: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  openingHours: Array<{
    day: LocalizedString;
    hours: string;
  }>;
  serviceArea: {
    summary: LocalizedString;
    cities: string[];
  };
  googleMapsLink: string;
  googleMapsEmbedUrl: string;
  socialLinks: Array<{
    label: string;
    url: string;
  }>;
  ctaLinks: {
    quote: string;
    phone: string;
    email: string;
  };
  pricing: {
    note: LocalizedString;
    items: Array<{
      label: LocalizedString;
      value: LocalizedString;
    }>;
  };
  certifications: LocalizedString[];
  guarantees: LocalizedString[];
  heroImage: {
    src: string;
    alt: LocalizedString;
  };
  aboutImage: {
    src: string;
    alt: LocalizedString;
  };
  services: Array<{
    icon: string;
    name: LocalizedString;
    description: LocalizedString;
  }>;
  process: Array<{
    title: LocalizedString;
    description: LocalizedString;
  }>;
  advantages: Array<{
    icon: string;
    title: LocalizedString;
    description: LocalizedString;
  }>;
  galleryImages: Array<{
    src: string;
    category: LocalizedString;
    title: LocalizedString;
    alt: LocalizedString;
  }>;
  beforeAfterProjects: Array<{
    category: LocalizedString;
    title: LocalizedString;
    before: string;
    after: string;
  }>;
  reviews: Array<{
    customerName: string;
    rating: number;
    text: LocalizedString;
  }>;
  faqs: Array<{
    question: LocalizedString;
    answer: LocalizedString;
  }>;
  seo: {
    title: LocalizedString;
    description: LocalizedString;
    ogImage: string;
  };
};

// Adaptation guide:
// To create a website for another renovation company, change the values in this file only.
// Update company identity, contact details, Google Maps URLs, ratings/reviews, service areas,
// services, images, pricing notes, guarantees, FAQs, and SEO copy below.
export const company: CompanyData = {
  companyName: "odAdoZ",
  legalName:
    "odAdoZ - Remonty PRUSZCZ GDAŃSKI Remont Mieszkania Domu, Malowanie Mieszkania Domu, Układanie Płytek Paneli",
  slogan: {
    pl: "Remonty mieszkań i domów w Pruszczu Gdańskim",
    en: "Apartment and house renovations in Pruszcz Gdański"
  },
  headline: {
    pl: "Profesjonalne remonty wykonane dokładnie, czysto i terminowo",
    en: "Professional renovations delivered with precision, cleanliness and care"
  },
  subheadline: {
    pl: "Kompleksowe prace remontowe, malowanie, płytki, panele i wykończenia wnętrz dla właścicieli mieszkań, domów oraz inwestorów.",
    en: "Complete renovation work, painting, tiling, flooring and interior finishing for homeowners, apartment owners and investors."
  },
  description: {
    pl: "odAdoZ realizuje remonty mieszkań i domów w Pruszczu Gdańskim oraz okolicach. Firma specjalizuje się w malowaniu, układaniu płytek i paneli, wykończeniach oraz dobrze zaplanowanych pracach remontowych.",
    en: "odAdoZ provides apartment and house renovations in Pruszcz Gdański and nearby areas, specializing in painting, tile installation, flooring, finishing work and well-managed renovation projects."
  },
  mission: {
    pl: "Pomagamy zamieniać mieszkania i domy w funkcjonalne, estetyczne przestrzenie, które są gotowe do codziennego życia lub wynajmu.",
    en: "We help turn apartments and houses into functional, polished spaces ready for everyday living or rental."
  },
  approach: {
    pl: "Każdy projekt zaczynamy od rozmowy, oględzin i uczciwej wyceny. Pracujemy z dbałością o detale, porządek na miejscu i stały kontakt z klientem.",
    en: "Every project starts with a conversation, site visit and transparent estimate. We work with attention to detail, a tidy job site and consistent communication."
  },
  yearsOfExperience: "10+",
  completedProjects: "250+",
  customerSatisfaction: "98%",
  responseTime: {
    pl: "do 24h",
    en: "within 24h"
  },
  overallRating: 4.9,
  reviewCount: 52,
  phone: "+48 507 899 942",
  email: "kontakt@odadoz.pl",
  address: {
    street: "Wojska Polskiego 22",
    city: "Pruszcz Gdański",
    postalCode: "83-000",
    region: "Pomorskie",
    country: "Polska"
  },
  coordinates: {
    latitude: 54.2594494,
    longitude: 18.633239
  },
  openingHours: [
    { day: { pl: "Poniedziałek", en: "Monday" }, hours: "08:00-20:00" },
    { day: { pl: "Wtorek", en: "Tuesday" }, hours: "08:00-20:00" },
    { day: { pl: "Środa", en: "Wednesday" }, hours: "08:00-20:00" },
    { day: { pl: "Czwartek", en: "Thursday" }, hours: "08:00-20:00" },
    { day: { pl: "Piątek", en: "Friday" }, hours: "08:00-20:00" },
    { day: { pl: "Sobota", en: "Saturday" }, hours: "08:00-18:00" },
    { day: { pl: "Niedziela", en: "Sunday" }, hours: "Zamknięte / Closed" }
  ],
  serviceArea: {
    summary: {
      pl: "Obsługujemy Pruszcz Gdański, Gdańsk i okoliczne miejscowości na terenie województwa pomorskiego.",
      en: "We serve Pruszcz Gdański, Gdańsk and surrounding towns across the Pomeranian region."
    },
    cities: [
      "Pruszcz Gdański",
      "Gdańsk",
      "Straszyn",
      "Borkowo",
      "Rotmanka",
      "Łęgowo",
      "Cieplewo",
      "Tczew",
      "Kolbudy",
      "Trójmiasto"
    ]
  },
  googleMapsLink:
    "https://www.google.com/maps/place/odAdoZ+-+Remonty+PRUSZCZ+GDA%C5%83SKI+Remont+Mieszkania+Domu,+Malowanie+Mieszkania+Domu,+Uk%C5%82adanie+P%C5%82ytek+Paneli/@54.2594494,18.633239,17z",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Wojska%20Polskiego%2022%2C%2083-000%20Pruszcz%20Gda%C5%84ski&output=embed",
  socialLinks: [
    {
      label: "Google Maps",
      url: "https://www.google.com/maps/place/odAdoZ+-+Remonty+PRUSZCZ+GDA%C5%83SKI+Remont+Mieszkania+Domu,+Malowanie+Mieszkania+Domu,+Uk%C5%82adanie+P%C5%82ytek+Paneli/@54.2594494,18.633239,17z"
    }
  ],
  ctaLinks: {
    quote: "#wycena",
    phone: "tel:+48000000000",
    email: "mailto:kontakt@odadoz.pl?subject=Pro%C5%9Bba%20o%20bezp%C5%82atn%C4%85%20wycen%C4%99%20remontu"
  },
  pricing: {
    note: {
      pl: "Wycena zależy od zakresu prac, metrażu, standardu materiałów i terminu realizacji. Oględziny oraz wstępna konsultacja są bezpłatne.",
      en: "Pricing depends on scope, area, material standard and schedule. The initial consultation and site visit are free."
    },
    items: [
      {
        label: { pl: "Wstępna konsultacja", en: "Initial consultation" },
        value: { pl: "bezpłatnie", en: "free" }
      },
      {
        label: { pl: "Wycena online", en: "Online estimate" },
        value: { pl: "dostępna", en: "available" }
      },
      {
        label: { pl: "Kosztorys", en: "Cost estimate" },
        value: { pl: "po oględzinach", en: "after site visit" }
      }
    ]
  },
  certifications: [
    {
      pl: "Doświadczona ekipa remontowo-budowlana",
      en: "Experienced renovation and construction team"
    },
    {
      pl: "Prace realizowane zgodnie z ustalonym zakresem",
      en: "Work delivered according to agreed scope"
    }
  ],
  guarantees: [
    {
      pl: "Gwarancja na wykonane prace",
      en: "Warranty on completed work"
    },
    {
      pl: "Transparentna wycena przed rozpoczęciem",
      en: "Transparent estimate before work begins"
    },
    {
      pl: "Dbałość o czystość i zabezpieczenie wnętrz",
      en: "Clean job site and protected interiors"
    }
  ],
  heroImage: {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=82",
    alt: {
      pl: "Profesjonalna ekipa podczas prac remontowych",
      en: "Professional team working on a renovation project"
    }
  },
  aboutImage: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82",
    alt: {
      pl: "Nowoczesne wykończone wnętrze domu",
      en: "Modern finished home interior"
    }
  },
  services: [
    {
      icon: "Home",
      name: { pl: "Remont mieszkania", en: "Apartment renovation" },
      description: {
        pl: "Kompleksowe odświeżenie lub generalny remont mieszkań, od przygotowania powierzchni po finalne wykończenie.",
        en: "Complete refreshes and full apartment renovations, from surface preparation to final finishing."
      }
    },
    {
      icon: "Building2",
      name: { pl: "Remont domu", en: "House renovation" },
      description: {
        pl: "Prace remontowe dla domów jednorodzinnych, modernizacje pomieszczeń i przygotowanie wnętrz do użytkowania.",
        en: "Renovation work for houses, room upgrades and interiors prepared for everyday use."
      }
    },
    {
      icon: "Sparkles",
      name: { pl: "Wykończenia wnętrz", en: "Interior finishing" },
      description: {
        pl: "Estetyczne wykończenia pod klucz z naciskiem na trwałość, funkcjonalność i spójny efekt.",
        en: "Turnkey finishing focused on durability, function and a cohesive result."
      }
    },
    {
      icon: "PaintRoller",
      name: { pl: "Malowanie", en: "Painting" },
      description: {
        pl: "Malowanie mieszkań i domów, zabezpieczenie powierzchni, przygotowanie ścian i dokładne wykończenie.",
        en: "Interior painting for apartments and houses with careful surface protection and wall preparation."
      }
    },
    {
      icon: "Layers3",
      name: { pl: "Układanie płytek", en: "Tile installation" },
      description: {
        pl: "Precyzyjne układanie płytek w łazienkach, kuchniach, korytarzach i pomieszczeniach technicznych.",
        en: "Precise tile installation in bathrooms, kitchens, hallways and utility spaces."
      }
    },
    {
      icon: "Ruler",
      name: { pl: "Układanie paneli", en: "Flooring installation" },
      description: {
        pl: "Montaż paneli, listew i wykończeń podłogowych z właściwym przygotowaniem podłoża.",
        en: "Laminate and floor installation with trims and proper subfloor preparation."
      }
    },
    {
      icon: "Hammer",
      name: { pl: "Zabudowy GK", en: "Drywall work" },
      description: {
        pl: "Ścianki działowe, sufity podwieszane, obudowy i praktyczne rozwiązania z płyt gipsowo-kartonowych.",
        en: "Partition walls, suspended ceilings, enclosures and practical drywall solutions."
      }
    },
    {
      icon: "Bath",
      name: { pl: "Remont łazienki", en: "Bathroom renovation" },
      description: {
        pl: "Remonty łazienek obejmujące płytki, przygotowanie podłoża, montaż elementów i wykończenie detali.",
        en: "Bathroom renovations covering tiles, substrate preparation, fixture installation and details."
      }
    },
    {
      icon: "Wrench",
      name: { pl: "Remont kuchni", en: "Kitchen renovation" },
      description: {
        pl: "Modernizacja kuchni, przygotowanie ścian i podłóg, płytki, malowanie oraz prace wykończeniowe.",
        en: "Kitchen upgrades, wall and floor preparation, tiling, painting and finishing work."
      }
    },
    {
      icon: "Brush",
      name: { pl: "Szpachlowanie i gładzie", en: "Plastering and skim coats" },
      description: {
        pl: "Wyrównywanie ścian, gładzie, naprawy powierzchni i przygotowanie pod malowanie.",
        en: "Wall leveling, skim coats, surface repairs and preparation for painting."
      }
    },
    {
      icon: "Hammer",
      name: { pl: "Prace rozbiórkowe", en: "Demolition work" },
      description: {
        pl: "Demontaże, skuwanie starych okładzin i przygotowanie pomieszczeń do właściwego remontu.",
        en: "Dismantling, removing old finishes and preparing rooms for renovation."
      }
    },
    {
      icon: "CheckCircle2",
      name: { pl: "Remont pod klucz", en: "Turnkey renovation" },
      description: {
        pl: "Koordynacja zakresu prac od pierwszej konsultacji po końcowy odbiór gotowej przestrzeni.",
        en: "Coordinated renovation from the first consultation to final handover."
      }
    }
  ],
  process: [
    {
      title: { pl: "Kontakt", en: "Contact" },
      description: {
        pl: "Opowiedz nam o mieszkaniu, domu lub lokalu oraz planowanym zakresie prac.",
        en: "Tell us about the property and the renovation scope you have in mind."
      }
    },
    {
      title: { pl: "Konsultacja", en: "Consultation" },
      description: {
        pl: "Umawiamy oględziny, omawiamy potrzeby, materiały i oczekiwany termin.",
        en: "We schedule a site visit and discuss needs, materials and timing."
      }
    },
    {
      title: { pl: "Wycena", en: "Quote" },
      description: {
        pl: "Przygotowujemy przejrzystą wycenę oraz zakres prac do akceptacji.",
        en: "We prepare a clear estimate and scope of work for approval."
      }
    },
    {
      title: { pl: "Realizacja", en: "Work execution" },
      description: {
        pl: "Wykonujemy prace zgodnie z ustaleniami, pilnując jakości, porządku i komunikacji.",
        en: "We carry out the work as agreed, keeping quality, cleanliness and communication in focus."
      }
    },
    {
      title: { pl: "Odbiór", en: "Final inspection" },
      description: {
        pl: "Sprawdzamy detale, porządkujemy miejsce pracy i przekazujemy gotową przestrzeń.",
        en: "We check details, clean the site and hand over the finished space."
      }
    }
  ],
  advantages: [
    {
      icon: "ShieldCheck",
      title: { pl: "Solidna realizacja", en: "Reliable delivery" },
      description: {
        pl: "Prace prowadzone według uzgodnionego zakresu i standardu wykonania.",
        en: "Work completed to the agreed scope and quality standard."
      }
    },
    {
      icon: "CheckCircle2",
      title: { pl: "Transparentna wycena", en: "Transparent pricing" },
      description: {
        pl: "Wiesz, za co płacisz, zanim rozpoczniemy remont.",
        en: "You know what you are paying for before work begins."
      }
    },
    {
      icon: "Layers3",
      title: { pl: "Dobre materiały", en: "Quality materials" },
      description: {
        pl: "Doradzamy rozwiązania dopasowane do budżetu i sposobu użytkowania wnętrza.",
        en: "We advise on solutions matched to budget and everyday use."
      }
    },
    {
      icon: "Ruler",
      title: { pl: "Dbałość o detale", en: "Attention to detail" },
      description: {
        pl: "Estetyczne wykończenia, równe linie i staranne przygotowanie powierzchni.",
        en: "Neat finishes, straight lines and careful surface preparation."
      }
    },
    {
      icon: "ShieldCheck",
      title: { pl: "Gwarancja", en: "Warranty" },
      description: {
        pl: "Wykonane prace objęte są ustaloną gwarancją.",
        en: "Completed work is covered by an agreed warranty."
      }
    },
    {
      icon: "PaintRoller",
      title: { pl: "Czystość pracy", en: "Clean work site" },
      description: {
        pl: "Zabezpieczamy wnętrza i dbamy o porządek na każdym etapie.",
        en: "We protect interiors and keep the site orderly at every stage."
      }
    }
  ],
  galleryImages: [
    {
      src: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1100&q=80",
      category: { pl: "Kuchnie", en: "Kitchens" },
      title: { pl: "Nowoczesna kuchnia po remoncie", en: "Modern renovated kitchen" },
      alt: { pl: "Jasna kuchnia po remoncie", en: "Bright kitchen after renovation" }
    },
    {
      src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1100&q=80",
      category: { pl: "Łazienki", en: "Bathrooms" },
      title: { pl: "Łazienka z precyzyjnie ułożonymi płytkami", en: "Bathroom with precise tile work" },
      alt: { pl: "Wyremontowana łazienka", en: "Renovated bathroom" }
    },
    {
      src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1100&q=80",
      category: { pl: "Salony", en: "Living rooms" },
      title: { pl: "Salon gotowy do zamieszkania", en: "Move-in ready living room" },
      alt: { pl: "Elegancki salon po wykończeniu", en: "Elegant finished living room" }
    },
    {
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1100&q=80",
      category: { pl: "Podłogi", en: "Flooring" },
      title: { pl: "Ciepłe wykończenie podłogi", en: "Warm flooring finish" },
      alt: { pl: "Nowa podłoga w mieszkaniu", en: "New apartment flooring" }
    },
    {
      src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1100&q=80",
      category: { pl: "Malowanie", en: "Painting" },
      title: { pl: "Gładkie ściany i świeże kolory", en: "Smooth walls and fresh colors" },
      alt: { pl: "Malowanie ścian w domu", en: "Painting walls in a home" }
    }
  ],
  beforeAfterProjects: [
    {
      category: { pl: "Łazienka", en: "Bathroom" },
      title: { pl: "Od starej łazienki do nowoczesnego wnętrza", en: "From dated bathroom to modern interior" },
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=78",
      after: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=78"
    },
    {
      category: { pl: "Kuchnia", en: "Kitchen" },
      title: { pl: "Praktyczna kuchnia po kompleksowym remoncie", en: "Practical kitchen after full renovation" },
      before: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=900&q=78",
      after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=78"
    }
  ],
  reviews: [
    {
      customerName: "Magdalena Syryca",
      rating: 5,
      text: {
        pl: "Z całego serca polecam firmę od A do Z! Remont naszego domu był naprawdę gruntowny. Na początku budynek ciężko było nazwać domem, wymagał totalnego remontu i pełnego wykończenia. Ciężko było mi uwierzyć, gdy Olek powiedział, że zajmie to tylko 3 miesiące - a jednak udało im się to bez żadnego problemu. Olek to prawdziwy fachowiec – pomocny, zaangażowany i zawsze służący dobrą radą. Przez cały proces remontu nie było ani jednej rzeczy, której Olek by nie potrafił załatwić. Cała ekipa pracowała solidnie, dokładnie i z ogromną dbałością o szczegóły. Jeden z pracowników Olka- Pan Mirek to anioł, a nie człowiek. Ogromnie się cieszymy, że mieliśmy okazję go poznać i współpracować. Współpraca z całą ekipą przebiegała sprawnie i bezproblemowo, a efekt końcowy przeszedł nasze oczekiwania. Jesteśmy bardzo zadowoleni i z czystym sumieniem polecamy tę firmę każdemu, kto szuka rzetelnych wykonawców!",
        en: "I wholeheartedly recommend this company from A to Z! The renovation of our house was truly extensive. At the beginning, it was hard to even call the building a home—it required a complete renovation and full finishing work. I found it difficult to believe when Olek said it would take only three months, but they managed to do it without any problems. Olek is a true professional—helpful, dedicated, and always ready with good advice. Throughout the entire renovation process, there wasn’t a single issue that Olek couldn’t handle. The whole team worked diligently, accurately, and with great attention to detail. One of Olek’s employees, Mr. Mirek, is an angel rather than a man. We are incredibly happy that we had the opportunity to meet him and work with him. Working with the entire team was smooth and hassle-free, and the final result exceeded our expectations. We are extremely satisfied and can wholeheartedly recommend this company to anyone looking for reliable and trustworthy contractors!"
      }
    },
    {
      customerName: "Jagoda Goll",
      rating: 5,
      text: {
       pl: "Pan Olek w kryzysowej sytuacji (po porzuceniu robót przez poprzedniego wykonawcę) pomógł nam ze swoją ekpią z dnia na dzień. Ze względu na napięte terminy potrzebowaliśmy poprawek glazurniczych po poprzednim wykonawcy, położenia podłóg, naprawienia szkód po poprzednim wykonawcy oraz całego białego montażu w ciągu 4 dni, wliczając w to niedzielę. Pan Olek zgodził się pomóc w takich okolicznościach mimo swoich innych zobowiązań. Cała ekipa jest w pełni profesjonalna, dokładna w każdym calu i na każdą prośbę lub uwagę odpowiada \"da się\", co jest rzadko spotykane w tej branży. Dzięki Panu Olkowi i jego pracownikom udało nam się skończyć remont w terminie, uzyskać super efekt mimo rażących błędów poprzednich \"fachowców\", a w dodatku wszystko było w świetnej atmosferze. Naprawdę gorąco polecam i raz jeszcze OGROMNIE DZIĘKUJĘ!",
        en: "Mr. Olek helped us in a crisis situation (after the previous contractor abandoned the project) with his team virtually overnight. Due to tight deadlines, we needed tilework corrections after the previous contractor, flooring installation, repairs of the damage left behind, and the complete installation of all bathroom and sanitary fixtures within 4 days, including Sunday. Mr. Olek agreed to help despite his other commitments. The entire team is fully professional, meticulous in every detail, and responds to every request or comment with “it can be done,” which is rare in this industry. Thanks to Mr. Olek and his employees, we managed to finish the renovation on time and achieve an excellent result despite the glaring mistakes made by the previous “professionals.” On top of that, everything was done in a great atmosphere. I truly and wholeheartedly recommend them, and once again, a HUGE THANK YOU!"
      }
    },
    {
      customerName: "Aleksandra Myslak",
      rating: 5,
      text: {
        pl: "Firma godna polecenia. Wysoka jakość , terminowość , profesjonalne wykonanie i kontakt. Dodatkowy atut to punktualność i zostawianie po sobie porządku.  Polecam",
        en: "A company well worth recommending. High quality, timeliness, professional workmanship, and excellent communication. An additional advantage is their punctuality and the fact that they always leave the workspace clean and tidy after completing the job. I highly recommend them."
      }
    }
  ],
  faqs: [
    {
      question: { pl: "Ile kosztuje remont mieszkania?", en: "How much does an apartment renovation cost?" },
      answer: {
        pl: "Koszt zależy od metrażu, zakresu prac, standardu materiałów i stanu technicznego lokalu. Najlepiej zacząć od bezpłatnej konsultacji i oględzin.",
        en: "The price depends on area, scope, material standard and the condition of the property. The best first step is a free consultation and site visit."
      }
    },
    {
      question: { pl: "Jak długo trwa remont?", en: "How long does a renovation take?" },
      answer: {
        pl: "Czas realizacji ustalamy po poznaniu zakresu prac. Odświeżenie może zająć kilka dni, a kompleksowy remont kilka tygodni.",
        en: "Timing is agreed after reviewing the scope. A refresh may take a few days, while a full renovation can take several weeks."
      }
    },
    {
      question: { pl: "Czy pomagacie dobrać materiały?", en: "Can you help choose materials?" },
      answer: {
        pl: "Tak. Doradzamy materiały dopasowane do budżetu, stylu wnętrza i sposobu użytkowania pomieszczeń.",
        en: "Yes. We advise on materials matched to budget, interior style and how the rooms will be used."
      }
    },
    {
      question: { pl: "Czy prace są objęte gwarancją?", en: "Is the work guaranteed?" },
      answer: {
        pl: "Tak, wykonane prace obejmujemy ustaloną gwarancją. Szczegóły potwierdzamy przed rozpoczęciem realizacji.",
        en: "Yes, completed work is covered by an agreed warranty. Details are confirmed before the project starts."
      }
    },
    {
      question: { pl: "Czy mogę otrzymać bezpłatną wycenę?", en: "Can I get a free quote?" },
      answer: {
        pl: "Tak. Skontaktuj się telefonicznie lub mailowo, opisz zakres prac i umówimy dogodny termin konsultacji.",
        en: "Yes. Contact us by phone or email, describe the scope and we will arrange a convenient consultation."
      }
    }
  ],
  seo: {
    title: {
      pl: "odAdoZ - Remonty Pruszcz Gdański | Remont mieszkania i domu",
      en: "odAdoZ - Renovations Pruszcz Gdański | Apartment and house renovation"
    },
    description: {
      pl: "Profesjonalne remonty mieszkań i domów w Pruszczu Gdańskim. Malowanie, płytki, panele, łazienki, kuchnie i wykończenia pod klucz. Bezpłatna wycena.",
      en: "Professional apartment and house renovations in Pruszcz Gdański. Painting, tiles, flooring, bathrooms, kitchens and turnkey finishing. Free quote."
    },
    ogImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=82"
  }
};

export const iconMap = {
  Bath,
  Brush,
  Building2,
  CheckCircle2,
  Hammer,
  Home,
  Layers3,
  PaintRoller,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench
};
