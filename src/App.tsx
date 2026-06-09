import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  X
} from "lucide-react";
import { company, iconMap, Language, LocalizedString } from "./data/company";

const labels = {
  pl: {
    nav: ["O firmie", "Usługi", "Realizacje", "Opinie", "Kontakt"],
    quote: "Darmowa wycena",
    call: "Zadzwoń teraz",
    stats: {
      experience: "lat doświadczenia",
      projects: "zrealizowanych projektów",
      satisfaction: "satysfakcji klientów",
      response: "czas odpowiedzi",
      area: "obszar działania"
    },
    sections: {
      about: "O firmie",
      services: "Usługi remontowe",
      process: "Jak pracujemy",
      why: "Dlaczego warto wybrać",
      portfolio: "Zrealizowane projekty",
      beforeAfter: "Przed i po",
      reviews: "Opinie klientów",
      area: "Obszar działania",
      contact: "Lokalizacja i kontakt",
      faq: "Najczęstsze pytania",
      estimate: "Poproś o bezpłatną wycenę"
    },
    serviceCta: "Zapytaj o usługę",
    openMaps: "Otwórz w Google Maps",
    form: {
      name: "Imię i nazwisko",
      email: "Email",
      phone: "Telefon",
      message: "Opisz zakres prac",
      submit: "Wyślij zapytanie",
      note: "Formularz otworzy wiadomość email z gotową treścią."
    },
    footer: "Wszelkie prawa zastrzeżone.",
    rating: "ocena Google",
    reviews: "opinii",
    languages: "Zmień język"
  },
  en: {
    nav: ["About", "Services", "Projects", "Reviews", "Contact"],
    quote: "Get Free Quote",
    call: "Call Now",
    stats: {
      experience: "years of experience",
      projects: "completed projects",
      satisfaction: "customer satisfaction",
      response: "response time",
      area: "service area"
    },
    sections: {
      about: "About the company",
      services: "Renovation services",
      process: "How we work",
      why: "Why choose",
      portfolio: "Completed projects",
      beforeAfter: "Before and after",
      reviews: "Customer reviews",
      area: "Service area",
      contact: "Location and contact",
      faq: "Frequently asked questions",
      estimate: "Request a free estimate"
    },
    serviceCta: "Ask about this service",
    openMaps: "Open in Google Maps",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      message: "Describe the work",
      submit: "Send request",
      note: "The form opens a prepared email message."
    },
    footer: "All rights reserved.",
    rating: "Google rating",
    reviews: "reviews",
    languages: "Change language"
  }
};

function t(value: LocalizedString, language: Language) {
  return value[language];
}

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} ${label}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < Math.round(rating) ? "fill-copper text-copper" : "text-slate-300"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function IconByName({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? Check;
  return <Icon className={className} aria-hidden="true" />;
}

function Seo({ language }: { language: Language }) {
  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "GeneralContractor", "HomeAndConstructionBusiness"],
      name: company.companyName,
      legalName: company.legalName,
      description: t(company.seo.description, language),
      image: company.seo.ogImage,
      url: window.location.href,
      telephone: company.phone,
      email: company.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        postalCode: company.address.postalCode,
        addressRegion: company.address.region,
        addressCountry: company.address.country
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: company.coordinates.latitude,
        longitude: company.coordinates.longitude
      },
      areaServed: company.serviceArea.cities,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: company.overallRating,
        reviewCount: company.reviewCount
      },
      openingHours: company.openingHours.map((item) => `${t(item.day, "en").slice(0, 2)} ${item.hours}`),
      serviceType: company.services.map((service) => t(service.name, language))
    }),
    [language]
  );

  document.documentElement.lang = language;
  document.title = t(company.seo.title, language);
  setMeta("description", t(company.seo.description, language));
  setMeta("og:title", t(company.seo.title, language), "property");
  setMeta("og:description", t(company.seo.description, language), "property");
  setMeta("og:image", company.seo.ogImage, "property");
  setMeta("og:type", "website", "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", t(company.seo.title, language));
  setMeta("twitter:description", t(company.seo.description, language));
  setMeta("twitter:image", company.seo.ogImage);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function setMeta(name: string, content: string, attr = "name") {
  let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function App() {
  const [language, setLanguage] = useState<Language>("pl");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const l = labels[language];
  const contactEmail = company.email;

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${l.quote} - ${company.companyName}`);
    const body = encodeURIComponent(
      [
        `${l.form.name}: ${form.get("name")}`,
        `${l.form.email}: ${form.get("email")}`,
        `${l.form.phone}: ${form.get("phone")}`,
        "",
        `${l.form.message}:`,
        form.get("message")
      ].join("\n")
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Seo language={language} />
      <div className="min-h-screen bg-white text-ink">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-ink/90 text-white backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <a href="#top" className="flex items-center gap-3" aria-label={company.companyName}>
              <span className="grid h-10 w-10 place-items-center rounded-md bg-white text-lg font-black text-ink">
                oA
              </span>
              <span>
                <span className="block text-base font-bold">{company.companyName}</span>
                <span className="block text-xs text-slate-300">{t(company.slogan, language)}</span>
              </span>
            </a>
            <nav className="hidden items-center gap-7 text-sm font-medium lg:flex" aria-label="Primary navigation">
              {l.nav.map((item, index) => (
                <a key={item} href={["#about", "#services", "#portfolio", "#reviews", "#contact"][index]} className="text-slate-200 transition hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
            <div className="hidden items-center gap-3 lg:flex">
              <LanguageSwitch language={language} setLanguage={setLanguage} label={l.languages} />
              <a className="btn btn-light" href={company.ctaLinks.quote}>{l.quote}</a>
            </div>
            <button className="rounded-md p-2 text-white lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Open menu" aria-expanded={menuOpen}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {menuOpen && (
            <div className="border-t border-white/10 bg-ink px-4 py-4 lg:hidden">
              <div className="flex flex-col gap-3">
                {l.nav.map((item, index) => (
                  <a key={item} href={["#about", "#services", "#portfolio", "#reviews", "#contact"][index]} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 text-slate-100">
                    {item}
                  </a>
                ))}
                <LanguageSwitch language={language} setLanguage={setLanguage} label={l.languages} />
              </div>
            </div>
          )}
        </header>

        <main id="top">
          <section className="relative isolate min-h-[92vh] overflow-hidden pt-24 text-white">
            <img src={company.heroImage.src} alt={t(company.heroImage.alt, language)} className="absolute inset-0 -z-20 h-full w-full object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/78 to-ink/35" />
            <div className="mx-auto grid min-h-[calc(92vh-6rem)] max-w-7xl items-center px-4 pb-12 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                  <Stars rating={company.overallRating} label={l.rating} />
                  <span>{company.overallRating} / {company.reviewCount} {l.reviews}</span>
                </div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">{t(company.slogan, language)}</p>
                <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{t(company.headline, language)}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">{t(company.subheadline, language)}</p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href={company.ctaLinks.quote} className="btn btn-primary">{l.quote}<ArrowRight className="h-4 w-4" /></a>
                  <a href={company.ctaLinks.phone} className="btn btn-glass"><Phone className="h-4 w-4" />{l.call}</a>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-mist py-10">
            <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
              {[
                [company.yearsOfExperience, l.stats.experience],
                [company.completedProjects, l.stats.projects],
                [company.customerSatisfaction, l.stats.satisfaction],
                [t(company.responseTime, language), l.stats.response],
                [company.address.city, l.stats.area]
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-3xl font-black text-ink">{value}</div>
                  <div className="mt-1 text-sm font-medium text-steel">{label}</div>
                </div>
              ))}
            </div>
          </section>

          <Section id="about" eyebrow={l.sections.about} title={t(company.mission, language)}>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
              <div>
                <p className="text-lg leading-8 text-steel">{t(company.description, language)}</p>
                <p className="mt-5 text-lg leading-8 text-steel">{t(company.approach, language)}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[...company.certifications, ...company.guarantees].map((item) => (
                    <div key={t(item, language)} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm font-semibold text-ink">{t(item, language)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img src={company.aboutImage.src} alt={t(company.aboutImage.alt, language)} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft" />
            </div>
          </Section>

          <Section id="services" eyebrow={l.sections.services} title={t(company.headline, language)} muted>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {company.services.map((service) => (
                <article key={t(service.name, language)} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-blue-50 text-accent">
                    <IconByName name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{t(service.name, language)}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-6 text-steel">{t(service.description, language)}</p>
                  <a href={company.ctaLinks.quote} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent">
                    {l.serviceCta}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </article>
              ))}
            </div>
          </Section>

          <Section eyebrow={l.sections.process} title={language === "pl" ? "Prosty proces od pierwszego telefonu do końcowego odbioru" : "A clear path from first call to final handover"}>
            <div className="grid gap-4 lg:grid-cols-5">
              {company.process.map((step, index) => (
                <div key={t(step.title, language)} className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-ink text-sm font-black text-white">{index + 1}</div>
                  <h3 className="text-lg font-bold">{t(step.title, language)}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel">{t(step.description, language)}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section eyebrow={`${l.sections.why} ${company.companyName}`} title={language === "pl" ? "Rzemiosło, komunikacja i porządek na każdym etapie" : "Craftsmanship, communication and order at every stage"} muted>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {company.advantages.map((advantage) => (
                <div key={t(advantage.title, language)} className="rounded-lg border border-slate-200 bg-white p-6">
                  <IconByName name={advantage.icon} className="h-7 w-7 text-accent" />
                  <h3 className="mt-5 text-lg font-bold">{t(advantage.title, language)}</h3>
                  <p className="mt-2 text-sm leading-6 text-steel">{t(advantage.description, language)}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="portfolio" eyebrow={l.sections.portfolio} title={language === "pl" ? "Przestrzenie wykończone z myślą o codziennym użytkowaniu" : "Spaces finished for real everyday use"}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {company.galleryImages.map((image) => (
                <figure key={t(image.title, language)} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:first:col-span-2 lg:first:row-span-2">
                  <img src={image.src} alt={t(image.alt, language)} loading="lazy" className="h-64 w-full object-cover transition duration-500 hover:scale-105 lg:first:h-full" />
                  <figcaption className="p-4">
                    <span className="text-xs font-bold uppercase text-accent">{t(image.category, language)}</span>
                    <p className="mt-1 font-bold">{t(image.title, language)}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <h3 className="mt-14 text-2xl font-black">{l.sections.beforeAfter}</h3>
            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              {company.beforeAfterProjects.map((project) => (
                <article key={t(project.title, language)} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                  <div className="grid grid-cols-2">
                    <img src={project.before} alt={`${t(project.title, language)} before`} loading="lazy" className="h-64 w-full object-cover" />
                    <img src={project.after} alt={`${t(project.title, language)} after`} loading="lazy" className="h-64 w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold uppercase text-accent">{t(project.category, language)}</span>
                    <h4 className="mt-1 text-lg font-bold">{t(project.title, language)}</h4>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="reviews" eyebrow={l.sections.reviews} title={`${company.overallRating}/5 ${l.rating} - ${company.reviewCount} ${l.reviews}`} muted>
            <div className="grid gap-5 lg:grid-cols-3">
              {company.reviews.map((review) => (
                <figure key={review.customerName} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <Stars rating={review.rating} label={l.rating} />
                  <blockquote className="mt-5 text-base leading-7 text-steel">"{t(review.text, language)}"</blockquote>
                  <figcaption className="mt-5 font-bold text-ink">{review.customerName}</figcaption>
                </figure>
              ))}
            </div>
          </Section>

          <Section eyebrow={l.sections.area} title={t(company.serviceArea.summary, language)}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <div className="rounded-lg bg-ink p-7 text-white">
                <MapPin className="h-8 w-8 text-blue-200" />
                <div className="mt-6 flex flex-wrap gap-2">
                  {company.serviceArea.cities.map((city) => (
                    <span key={city} className="rounded-full bg-white/10 px-3 py-2 text-sm font-semibold">{city}</span>
                  ))}
                </div>
              </div>
              <iframe title={`${company.companyName} map`} src={company.googleMapsEmbedUrl} loading="lazy" className="min-h-80 w-full rounded-lg border-0 shadow-soft" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Section>

          <Section id="contact" eyebrow={l.sections.contact} title={l.sections.estimate} muted>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <ContactLine icon={<MapPin />} label={`${company.address.street}, ${company.address.postalCode} ${company.address.city}`} />
                <ContactLine icon={<Phone />} label={company.phone} href={company.ctaLinks.phone} />
                <ContactLine icon={<Mail />} label={company.email} href={company.ctaLinks.email} />
                <div className="pt-4">
                  <h3 className="mb-3 font-bold"><Clock className="mr-2 inline h-5 w-5 text-accent" />{language === "pl" ? "Godziny otwarcia" : "Opening hours"}</h3>
                  <div className="space-y-2">
                    {company.openingHours.map((item) => (
                      <div key={t(item.day, language)} className="flex justify-between gap-4 text-sm text-steel">
                        <span>{t(item.day, language)}</span>
                        <span className="font-semibold text-ink">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a href={company.googleMapsLink} target="_blank" rel="noreferrer" className="btn btn-dark w-full">
                  {l.openMaps}<ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <form id="wycena" onSubmit={submitQuote} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input name="name" label={l.form.name} required />
                  <Input name="phone" label={l.form.phone} />
                  <Input name="email" label={l.form.email} type="email" required />
                  <label className="sm:col-span-2">
                    <span className="form-label">{l.form.message}</span>
                    <textarea name="message" required rows={6} className="form-field resize-y" />
                  </label>
                </div>
                <p className="mt-4 text-sm text-steel">{l.form.note}</p>
                <button className="btn btn-primary mt-5" type="submit">{l.form.submit}<ArrowRight className="h-4 w-4" /></button>
              </form>
            </div>
          </Section>

          <Section eyebrow={l.sections.faq} title={language === "pl" ? "Odpowiedzi przed rozpoczęciem remontu" : "Answers before your renovation begins"}>
            <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
              {company.faqs.map((faq, index) => (
                <div key={t(faq.question, language)}>
                  <button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                    {t(faq.question, language)}
                    <ChevronDown className={`h-5 w-5 shrink-0 transition ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && <p className="px-5 pb-5 leading-7 text-steel">{t(faq.answer, language)}</p>}
                </div>
              ))}
            </div>
          </Section>
        </main>

        <footer className="bg-ink py-10 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black">{company.companyName}</h2>
              <p className="mt-3 max-w-xl text-slate-300">{t(company.description, language)}</p>
            </div>
            <div>
              <h3 className="font-bold">{l.sections.contact}</h3>
              <p className="mt-3 text-sm text-slate-300">{company.address.street}, {company.address.city}</p>
              <p className="mt-2 text-sm text-slate-300">{company.phone}</p>
              <p className="mt-2 text-sm text-slate-300">{company.email}</p>
            </div>
            <div>
              <h3 className="font-bold">{l.stats.area}</h3>
              <p className="mt-3 text-sm text-slate-300">{company.serviceArea.cities.slice(0, 6).join(", ")}</p>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-slate-400 sm:px-6 lg:px-8">
            © {new Date().getFullYear()} {company.companyName}. {l.footer}
          </div>
        </footer>
      </div>
    </>
  );
}

function LanguageSwitch({ language, setLanguage, label }: { language: Language; setLanguage: (language: Language) => void; label: string }) {
  return (
    <div className="inline-flex rounded-md border border-white/20 bg-white/10 p-1" aria-label={label}>
      {(["pl", "en"] as Language[]).map((option) => (
        <button
          key={option}
          onClick={() => setLanguage(option)}
          className={`rounded px-3 py-1.5 text-sm font-bold transition ${language === option ? "bg-white text-ink" : "text-white hover:bg-white/10"}`}
          aria-pressed={language === option}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Section({ id, eyebrow, title, children, muted = false }: { id?: string; eyebrow: string; title: string; children: ReactNode; muted?: boolean }) {
  return (
    <section id={id} className={`${muted ? "bg-mist" : "bg-white"} py-20`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ContactLine({ icon, label, href }: { icon: ReactNode; label: string; href?: string }) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-blue-50 text-accent">{icon}</span>
      <span className="font-semibold text-ink">{label}</span>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-3 rounded-md p-2 transition hover:bg-slate-50">{content}</a>
  ) : (
    <div className="flex items-center gap-3 rounded-md p-2">{content}</div>
  );
}

function Input({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label>
      <span className="form-label">{label}</span>
      <input name={name} type={type} required={required} className="form-field" />
    </label>
  );
}
