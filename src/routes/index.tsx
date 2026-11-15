import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroHairBg from "@/assets/hero-hair.jpg.asset.json";

import heroLogoAsset from "@/assets/logo-looks-original-colors.png.asset.json";
const heroLogo = heroLogoAsset.url;
import nails01 from "@/assets/nails-new-01.jpg.asset.json";
import nails06 from "@/assets/nails-new-06.jpg.asset.json";
import nails08 from "@/assets/nails-new-08.jpg.asset.json";
import nails09 from "@/assets/nails-new-09.jpg.asset.json";
import nails10 from "@/assets/nails-new-10.jpg.asset.json";
import nails11 from "@/assets/nails-new-11.jpg.asset.json";
import nails12 from "@/assets/nails-new-12.jpg.asset.json";
import nails13 from "@/assets/nails-new-13.jpg.asset.json";
import nails14 from "@/assets/nails-new-14.jpg.asset.json";
import nails15 from "@/assets/nails-15-black-snowflake.jpg.asset.json";
import nails17 from "@/assets/nails-17-french-glam.jpg.asset.json";
import nails18 from "@/assets/nails-18-burgundy-stiletto.jpg.asset.json";
import nails19 from "@/assets/nails-19-mauve-stiletto.jpg.asset.json";
import nails20 from "@/assets/nails-20-pastel.jpg.asset.json";
import nails26 from "@/assets/nails-26-ivory-ombre.jpg.asset.json";
import nails27 from "@/assets/nails-27-pink-orange-ombre.jpg.asset.json";
import nails28 from "@/assets/nails-28-mint.jpg.asset.json";
import nails29 from "@/assets/nails-29-silver.jpg.asset.json";
import nails30 from "@/assets/nails-30-burgundy-before-after.jpg.asset.json";
import nails31 from "@/assets/nails-31-colorful-dots.jpg.asset.json";
import nails32 from "@/assets/nails-32-pink-purple-dots.jpg.asset.json";
import nails33 from "@/assets/nails-33-nude-gloss.jpg.asset.json";
import nails34 from "@/assets/nails-34-navy-french-before-after.jpg.asset.json";
import hair01 from "@/assets/hair-original-01.jpg.asset.json";
import hair02 from "@/assets/hair-original-02.jpg.asset.json";
import hair03 from "@/assets/hair-original-03.jpg.asset.json";
import hair04 from "@/assets/hair-original-04.jpg.asset.json";
import hair05 from "@/assets/hair-original-05.jpg.asset.json";
import hair06 from "@/assets/hair-original-06.jpg.asset.json";
import hair07 from "@/assets/hair-original-07.jpg.asset.json";
import hair08 from "@/assets/hair-original-08.jpg.asset.json";
import hair09 from "@/assets/hair-original-09.jpg.asset.json";
import hair10 from "@/assets/hair-original-10.jpg.asset.json";
import hair11 from "@/assets/hair-original-11.jpg.asset.json";
import hair12 from "@/assets/hair-original-12.jpg.asset.json";
import hair13 from "@/assets/hair-original-13.jpg.asset.json";
import hair14 from "@/assets/hair-original-14.jpg.asset.json";
import hair15 from "@/assets/hair-original-15.jpg.asset.json";
import hair16 from "@/assets/hair-original-16.jpg.asset.json";
import hair17 from "@/assets/hair-original-17.jpg.asset.json";
import hair18 from "@/assets/hair-original-18.jpg.asset.json";
import hair19 from "@/assets/hair-original-19.jpg.asset.json";
import hair20 from "@/assets/hair-original-20.jpg.asset.json";
import salonReception from "@/assets/salon-01-reception.jpg.asset.json";
import salonStations from "@/assets/salon-02-stations.jpg.asset.json";
import salonPedicure from "@/assets/salon-03-pedicure.jpg.asset.json";
import salonOverview from "@/assets/salon-04-overview.jpg.asset.json";
import salonManicure from "@/assets/salon-05-manicure.jpg.asset.json";
import salonPolishWall from "@/assets/salon-06-polish-wall.jpg.asset.json";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/site/Footer";
import { RoseLine } from "@/components/site/RoseLine";
import { SITE_URL, BOOKING_URL, MAPS_URL, SOCIAL_URLS } from "@/lib/site";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Star,
  Phone,
  Clock,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SEO_IMAGE = `https://looksbeautyboutique.gr${heroHairBg.url}`;
const SEO_TITLE = "Κομμωτήριο & Nail Salon στο Σύνταγμα, Αθήνα | Looks";
const SEO_DESCRIPTION =
  "Κομμωτήριο και nail salon στο Σύνταγμα (Φιλελλήνων 3). Manicure, pedicure, ημιμόνιμο, gel, balayage και βαφή. 4.6★ στο Google. Κλείσε online.";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["HairSalon", "NailSalon"],
  name: "Looks Beauty Boutique",
  url: SITE_URL,
  telephone: "+302117409989",
  email: "Looksbb-syntagma@hotmail.com",
  image: SEO_IMAGE,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Φιλελλήνων 3",
    addressLocality: "Αθήνα",
    postalCode: "10557",
    addressCountry: "GR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "18:00" },
  ],
  sameAs: [SOCIAL_URLS.instagram, SOCIAL_URLS.facebook, SOCIAL_URLS.tiktok, MAPS_URL],
  hasMap: MAPS_URL,
  potentialAction: {
    "@type": "ReserveAction",
    target: { "@type": "EntryPoint", urlTemplate: BOOKING_URL },
  },
};

export const Route = createFileRoute("/")({
  component: LumierePage,
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESCRIPTION },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SEO_TITLE },
      { name: "twitter:description", content: SEO_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(businessJsonLd) }],
  }),
});

const hourTimes = [
  null,
  "09:00 – 20:00",
  "09:00 – 20:00",
  "09:00 – 20:00",
  "08:00 – 20:00",
  "10:00 – 18:00",
  null,
];

function LumierePage() {
  return (
    <LanguageProvider>
      <div className="font-body bg-pearl text-ink">
        <div className="intro-splash" aria-hidden="true">
          <img src={heroLogo} alt="" className="intro-logo" />
          <span className="intro-line" />
        </div>
        <Hero />
        <Story />
        <Gallery />
        <Stats />
        <Booking />
        <Reviews />
        <About />
        <FinalCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

/* -------------------- LANGUAGE SWITCH -------------------- */
function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      className={`inline-flex items-center rounded-full border border-rose-gold/60 overflow-hidden ${
        compact ? "text-[11px]" : "text-[11px] lg:text-[12px]"
      }`}
    >
      {(["el", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-1.5 uppercase tracking-[0.15em] transition ${
            lang === l ? "bg-rose-gold text-ink" : "text-inherit hover:text-rose-gold"
          }`}
        >
          {l === "el" ? "ΕΛ" : "EN"}
        </button>
      ))}
    </div>
  );
}

/* -------------------- HERO NAV -------------------- */
function HeroNav() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#story", label: t.nav.about },
    { href: "#gallery", label: t.nav.gallery },
    { href: "/nails", label: lang === "en" ? "Nails" : "Νύχια" },
    { href: "/hair", label: lang === "en" ? "Hair" : "Μαλλιά" },
    { href: "#gallery", label: t.nav.events, outline: true },
    { href: "#booking", label: t.nav.book, cta: true },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="#home" aria-label={t.nav.home} className="shrink-0 w-8 h-8" />

        <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8 text-[12px] lg:text-[13px] font-medium tracking-[0.18em] uppercase text-white/80">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={
                l.cta
                  ? "rounded-full bg-rose-gold text-ink px-4 lg:px-5 py-2 hover:bg-rose-gold/90 transition"
                  : l.outline
                    ? "rounded-full border border-rose-gold/60 text-rose-gold px-4 lg:px-5 py-2 hover:bg-rose-gold/10 transition"
                    : "hover:text-rose-gold transition"
              }
            >
              {l.label}
            </a>
          ))}
          <div className="text-white/80">
            <LangSwitch />
          </div>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <div className="text-white/80">
            <LangSwitch compact />
          </div>
          <button
            className="p-2 text-white shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-rose-gold/30 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={
                l.cta
                  ? "inline-flex items-center justify-center rounded-full bg-rose-gold text-ink px-6 py-3 font-medium text-sm uppercase tracking-[0.18em]"
                  : l.outline
                    ? "inline-flex items-center justify-center rounded-full border border-rose-gold text-rose-gold px-6 py-3 font-medium text-sm uppercase tracking-[0.18em]"
                    : "text-ink/80 text-sm uppercase tracking-[0.18em]"
              }
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* -------------------- HERO -------------------- */
function Tagline() {
  const { t } = useI18n();
  const [before, after] = t.hero.tagline.split("&");
  return (
    <>
      {before}
      <span className="not-italic font-normal" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400 }}>
        &amp;
      </span>
      {after}
    </>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative bg-black text-white overflow-hidden min-h-[100svh]">
      {/* Fills the screen on mobile (face kept in frame), contained on desktop */}
      <img
        src={heroHairBg.url}
        alt={t.hero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-[97%_center] sm:object-contain sm:object-right"
      />
      <HeroNav />

      <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-40">
        <a href="#home" aria-label={t.nav.home}>
          <img
            src={heroLogo}
            alt="looks. beauty boutique"
            className="w-48 min-[430px]:w-56 sm:w-60 lg:w-[28rem] h-auto object-contain"
          />
        </a>
      </div>

      {/* Mobile-only: tagline right under the logo, white and larger */}
      <p className="sm:hidden absolute z-10 top-[114px] left-6 w-48 min-[430px]:top-[130px] min-[430px]:w-56 text-left whitespace-nowrap font-display italic text-white text-[14px] min-[430px]:text-[16px] tracking-[0.12em] leading-[1.25]">
        <Tagline />
      </p>

      {/* Mobile-only: 15+ line — under the EL/EN toggle, over the woman's hair */}
      <p
        className="sm:hidden absolute z-10 top-[62px] right-3 min-[430px]:top-[68px] text-center italic text-white text-[14px] min-[430px]:text-[16px] leading-[1.3] whitespace-nowrap"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        <span className="block type-in-1"><span className="block shimmer-text">{t.hero.line2Short.first}</span></span>
        <span className="block type-in-2"><span className="block shimmer-text">{t.hero.line2Short.second}</span></span>
      </p>

      {/* 15+ years line — desktop */}
      <p
        className="hidden sm:block absolute z-10 sm:top-[8.5%] sm:left-[34%] sm:w-[36%] lg:top-[17%] lg:left-[46%] lg:w-[38%] xl:left-[34%] xl:w-[36%] text-center italic sm:text-2xl lg:text-[2rem]"
        style={{
          fontFamily: "'Times New Roman', Times, serif",
          letterSpacing: "0.05em",
          wordSpacing: "0.08em",
          lineHeight: 1.25,
        }}
      >
        <span className="block type-in-1"><span className="block desktop-shimmer-text">{t.hero.line2.first}</span></span>
        <span className="block type-in-2"><span className="block desktop-shimmer-text">{t.hero.line2.second}</span></span>
      </p>

      {/* Main phrase — desktop */}
      <p className="hidden sm:block absolute z-10 sm:top-1/2 sm:left-[34%] lg:left-[38%] sm:-translate-x-1/2 sm:-translate-y-1/2 font-display italic text-pearl sm:text-4xl lg:text-5xl leading-[1.15] text-left sm:max-w-none">
        <span className="block">{t.hero.line1.first}</span>
        <span className="block sm:pl-64 lg:pl-80">{t.hero.line1.second}</span>
      </p>

      {/* Single page H1 — one element, positioned per breakpoint */}
      <h1 className="absolute z-10 top-[146px] left-6 min-[430px]:top-[164px] sm:top-[calc(50%+5.5rem)] sm:left-[34%] lg:left-[38%] sm:-translate-x-1/2 whitespace-nowrap font-sans font-medium uppercase text-pearl/80 sm:text-taupe text-[9.5px] min-[430px]:text-[10.5px] sm:text-xs lg:text-sm tracking-[0.16em] sm:tracking-[0.3em]">
        {t.hero.h1}
      </h1>

      <p className="hidden sm:block absolute z-10 sm:bottom-10 sm:left-[34%] lg:left-[30%] font-display italic font-bold text-taupe sm:text-xl lg:text-3xl text-left">
        <Tagline />
      </p>

      <div className="absolute z-10 bottom-10 left-4 min-[450px]:left-6 min-[450px]:right-6 flex items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#booking"
            className="inline-flex items-center justify-center w-auto rounded-full bg-rose-gold text-ink px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-rose-gold/90 transition"
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile-only: headline beside the stacked buttons, second line pushed right */}
        <p className="sm:hidden relative -left-3 flex-1 text-left font-display italic text-pearl text-[24px] min-[430px]:text-[30px] leading-[1.3]">
          <span className="block">{t.hero.line1.first}</span>
          <span className="block text-right pr-4 min-[430px]:pr-6 text-[21px] min-[430px]:text-[27px] whitespace-nowrap">
            {t.hero.line1.second}
          </span>
        </p>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */

function PhotoCarousel({
  slides,
  portrait = false,
  fit = false,
  autoPlay = false,
}: {
  slides: { src: string; alt: string }[];
  portrait?: boolean;
  fit?: boolean;
  autoPlay?: boolean;
}) {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const prev = () => setActive((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setActive((i) => (i === slides.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (!autoPlay || slides.length < 2) return;
    const id = window.setInterval(() => {
      const hovered = wrapRef.current?.matches(":hover") ?? false;
      if (!paused.current && !hovered && document.visibilityState === "visible") {
        setActive((i) => (i === slides.length - 1 ? 0 : i + 1));
      }
    }, 4000);
    return () => window.clearInterval(id);
  }, [autoPlay, slides.length]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
      onTouchEnd={() => (paused.current = false)}
    >
      <div className={`relative w-full overflow-hidden rounded-sm border border-rose-gold bg-blush ${portrait ? (fit ? "aspect-square" : "") : "aspect-[4/3]"}`}>
        <div
          className={`flex transition-transform duration-700 ease-out ${portrait && !fit ? "items-center" : "h-full"}`}
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.src} className={portrait && !fit ? "flex w-full shrink-0 justify-center" : "relative h-full w-full shrink-0 overflow-hidden"}>
              {fit && (
                <img
                  src={slide.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-35"
                />
              )}
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                className={portrait ? (fit ? "relative h-full w-full object-contain" : "h-auto w-full") : "h-full w-full object-cover"}
              />
            </div>
          ))}
        </div>
        <Button variant="carousel" size="icon" onClick={prev} aria-label={t.gallery.prev} title={t.gallery.prev} className="absolute left-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full">
          <ChevronLeft size={20} />
        </Button>
        <Button variant="carousel" size="icon" onClick={next} aria-label={t.gallery.next} title={t.gallery.next} className="absolute right-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full">
          <ChevronRight size={20} />
        </Button>
      </div>
      <div className="mt-5 flex min-w-0 items-center justify-center gap-2 sm:gap-4">
        <div className="flex min-w-0 gap-1 sm:gap-2">
          {slides.map((_, i) => (
            <Button
              variant="ghost"
              key={i}
              onClick={() => setActive(i)}
              aria-label={`${t.gallery.next} ${i + 1}`}
              aria-pressed={i === active}
              className={`h-1.5 rounded-full p-0 transition-all sm:h-2 ${i === active ? "w-4 bg-rose-gold sm:w-6" : "w-1.5 bg-rose-gold/40 hover:bg-rose-gold/70 sm:w-2"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.3em] font-medium ${
        dark ? "text-ink" : "text-rose-gold"
      }`}
    >
      {children}
    </p>
  );
}


// Renders a heading with the word "look" in the logo's serif font
function LookTitle({ text }: { text: string }) {
  const parts = text.split(/(look)/i);
  return (
    <>
      {parts.map((part, i) =>
        /^look$/i.test(part) ? (
          <em key={i} className="font-bodoni font-black look-emphasis">
            {part.toLowerCase()}
          </em>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <PhotoCarousel
            autoPlay
            portrait
            slides={[
              { src: salonReception.url, alt: t.about.salonAlts[0] },
              { src: salonStations.url, alt: t.about.salonAlts[1] },
              { src: salonPedicure.url, alt: t.about.salonAlts[2] },
              { src: salonOverview.url, alt: t.about.salonAlts[3] },
              { src: salonManicure.url, alt: t.about.salonAlts[4] },
              { src: salonPolishWall.url, alt: t.about.salonAlts[5] },
            ]}
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionLabel>{t.about.label}</SectionLabel>
          <RoseLine />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl leading-[1.1]">
            <LookTitle text={t.about.title} />
          </h2>
          <p className="mt-8 text-ink/70 text-base leading-[1.8] max-w-lg">{t.about.body}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {t.about.chips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full border border-rose-gold text-rose-gold bg-white px-5 py-2 text-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- STATS -------------------- */
function Stats() {
  const { t } = useI18n();
  const items = [
    { n: "4.6★", l: t.stats.rating },
    { n: "164+", l: t.stats.reviews },
    { n: "5", l: t.stats.days },
    { n: "Online", l: t.stats.online },
  ];
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        {items.map((s, i) => (
          <div
            key={s.l}
            className={`text-center px-6 ${i > 0 ? "lg:border-l lg:border-rose-gold/40" : ""}`}
          >
            <div className="font-display text-rose-gold text-[clamp(2.25rem,10.5vw,3.75rem)] md:text-7xl leading-none">
              {s.n}
            </div>
            <div className="mt-4 text-white text-[11px] uppercase tracking-[0.25em]">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- BOOKING -------------------- */
function Booking() {
  const { t } = useI18n();
  return (
    <section id="booking" className="bg-blush py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <SectionLabel dark>{t.nav.book}</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">{t.booking.title}</h2>
          <p className="mt-4 text-ink/70">{t.booking.subtitle}</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-[0_25px_60px_-25px_rgba(194,178,128,0.35)]">
            <iframe
              src={BOOKING_URL}
              title={t.booking.iframeTitle}
              className="w-full h-[720px] border-0"
              loading="lazy"
            />
          </div>

          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-[0_25px_60px_-25px_rgba(194,178,128,0.35)]">
            <div className="flex items-center gap-3">
              <Clock size={22} className="text-rose-gold" />
              <h3 className="font-display text-3xl">{t.booking.hours}</h3>
            </div>
            <ul className="mt-6 divide-y divide-rose-gold/20 text-sm">
              {t.booking.days.map((day, i) => {
                const time = hourTimes[i];
                return (
                  <li key={day} className="flex items-center justify-between py-2.5">
                    <span className="text-ink/80">{day}</span>
                    <span className={`font-medium ${time ? "text-ink" : "text-ink/40"}`}>
                      {time ?? t.booking.closed}
                    </span>
                  </li>
                );
              })}
            </ul>
            <a
              href="tel:+302117409989"
              className="mt-6 inline-flex items-center gap-2 text-rose-gold text-sm font-medium hover:underline"
            >
              <Phone size={14} /> 21 1740 9989
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- STORY -------------------- */
function Story() {
  const { t } = useI18n();
  return (
    <section id="story" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] font-medium text-rose-gold">
          {t.story.label}
        </p>
        <RoseLine center />
        <div className="mt-12 text-ink/80 text-base md:text-lg leading-[1.9] space-y-6">
          {t.story.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <blockquote className="relative mt-10 pl-6 md:pl-8 border-l-2 border-rose-gold text-left italic text-ink">
            <p>{t.story.quote}</p>
            <footer className="mt-4 text-rose-gold text-xs uppercase tracking-[0.25em] not-italic">
              — LOOKS Beauty Boutique
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* -------------------- GALLERY (CAROUSEL) -------------------- */
function Gallery() {
  const { t, lang } = useI18n();
  const nailSlides = [
    { src: nails01.url, alt: t.gallery.alts[0] },
    { src: nails06.url, alt: t.gallery.alts[5] },
    { src: nails08.url, alt: t.gallery.alts[7] },
    { src: nails09.url, alt: t.gallery.alts[8] },
    { src: nails10.url, alt: t.gallery.alts[9] },
    { src: nails11.url, alt: t.gallery.alts[10] },
    { src: nails12.url, alt: t.gallery.alts[11] },
    { src: nails13.url, alt: t.gallery.alts[12] },
    { src: nails14.url, alt: t.gallery.alts[13] },
    { src: nails15.url, alt: t.gallery.alts[14] },
    { src: nails17.url, alt: t.gallery.alts[16] },
    { src: nails18.url, alt: t.gallery.alts[17] },
    { src: nails19.url, alt: t.gallery.alts[18] },
    { src: nails20.url, alt: t.gallery.alts[19] },
    { src: nails26.url, alt: t.gallery.alts[25] },
    { src: nails27.url, alt: t.gallery.alts[26] },
    { src: nails28.url, alt: t.gallery.alts[27] },
    { src: nails29.url, alt: t.gallery.alts[28] },
    { src: nails30.url, alt: t.gallery.alts[29] },
    { src: nails31.url, alt: t.gallery.alts[30] },
    { src: nails32.url, alt: t.gallery.alts[31] },
    { src: nails33.url, alt: t.gallery.alts[32] },
    { src: nails34.url, alt: t.gallery.alts[33] },
  ];
  const hairSlides = [
    { src: hair01.url, alt: t.hair.alts[0] },
    { src: hair02.url, alt: t.hair.alts[1] },
    { src: hair03.url, alt: t.hair.alts[2] },
    { src: hair04.url, alt: t.hair.alts[3] },
    { src: hair05.url, alt: t.hair.alts[4] },
    { src: hair06.url, alt: t.hair.alts[5] },
    { src: hair07.url, alt: t.hair.alts[6] },
    { src: hair08.url, alt: t.hair.alts[7] },
    { src: hair09.url, alt: t.hair.alts[8] },
    { src: hair10.url, alt: t.hair.alts[9] },
    { src: hair11.url, alt: t.hair.alts[10] },
    { src: hair12.url, alt: t.hair.alts[11] },
    { src: hair13.url, alt: t.hair.alts[12] },
    { src: hair14.url, alt: t.hair.alts[13] },
    { src: hair15.url, alt: t.hair.alts[14] },
    { src: hair16.url, alt: t.hair.alts[15] },
    { src: hair17.url, alt: t.hair.alts[16] },
    { src: hair18.url, alt: t.hair.alts[17] },
    { src: hair19.url, alt: t.hair.alts[18] },
    { src: hair20.url, alt: t.hair.alts[19] },
  ];

  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">{t.gallery.title}</h2>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <h3 className="text-center font-display text-3xl font-light">{t.gallery.nails}</h3>
            <p className="mb-7 mt-2 text-center text-sm"><Link to="/nails" className="text-rose-gold underline underline-offset-4 hover:text-ink">{lang === "en" ? "See nail prices →" : "Δες τιμές νυχιών →"}</Link></p>
            <PhotoCarousel autoPlay slides={nailSlides} portrait fit />
          </div>
          <div className="min-w-0">
            <h3 className="text-center font-display text-3xl font-light">{t.gallery.hair}</h3>
            <p className="mb-7 mt-2 text-center text-sm"><Link to="/hair" className="text-rose-gold underline underline-offset-4 hover:text-ink">{lang === "en" ? "See hair prices →" : "Δες τιμές κομμωτηρίου →"}</Link></p>
            <PhotoCarousel autoPlay slides={hairSlides} portrait />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- REVIEWS -------------------- */
function Reviews() {
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollReviews = (direction: number) => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !card) return;
    const step = card.getBoundingClientRect().width + 24;
    const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
    const atStart = track.scrollLeft <= 2;
    const left = direction > 0 && atEnd ? 0 : direction < 0 && atStart ? track.scrollWidth - track.clientWidth : track.scrollLeft + direction * step;
    track.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return (
    <section id="reviews" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>{t.reviews.label}</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl text-primary-foreground">
            {t.reviews.title}
          </h2>
        </div>
        <div className="mt-10 flex justify-end gap-3">
          <Button variant="carousel" size="icon" onClick={() => scrollReviews(-1)} aria-label={t.gallery.prev} title={t.gallery.prev} className="h-10 w-10 rounded-full"><ChevronLeft /></Button>
          <Button variant="carousel" size="icon" onClick={() => scrollReviews(1)} aria-label={t.gallery.next} title={t.gallery.next} className="h-10 w-10 rounded-full"><ChevronRight /></Button>
        </div>
        <div ref={trackRef} className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="region" aria-label={t.reviews.title} tabIndex={0}>
          {t.reviews.items.map((r, index) => (
            <article
              key={`${index}-${r.name ?? "google"}`}
              className="relative flex w-full shrink-0 snap-start flex-col rounded-lg bg-review-surface p-8 pt-14 md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
            >
              <span className="absolute top-4 left-8 font-display text-rose-gold text-[80px] leading-none">
                “
              </span>
              <p className="mb-6 text-primary-foreground text-base leading-[1.8]">{r.text}</p>
              <div className="mt-auto flex gap-1 text-rose-gold" aria-label="5/5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="mt-4 text-rose-gold text-[11px] uppercase tracking-[0.25em]">
                {r.name ?? t.reviews.anonymous}
              </div>
              {r.source && <div className="mt-2 text-xs text-primary-foreground/60">{r.source} · {r.age}</div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */
function FinalCTA() {
  const { t } = useI18n();
  return (
    <section
      className="py-28 lg:py-36 text-center text-ink"
      style={{
        background: "linear-gradient(135deg, #988B84 0%, #EFE4CE 50%, #988B84 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.05]">
          <LookTitle text={t.cta.title} />
        </h2>
        <div className="mt-6 h-[2px] w-[60px] bg-ink mx-auto" />
        <p className="mt-6 text-ink/80 text-lg">{t.cta.subtitle}</p>
        <a
          href="#booking"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink text-taupe px-8 py-4 text-sm font-medium hover:scale-[1.03] hover:bg-ink/90 transition-all shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35)]"
        >
          {t.nav.book} <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
