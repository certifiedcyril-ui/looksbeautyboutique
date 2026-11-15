import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/logo-looks-original-colors.png.asset.json";
import { LanguageProvider } from "@/lib/i18n";
import { BOOKING_URL } from "@/lib/site";
import type { ServicePageData } from "@/data/services";
import { Footer } from "./Footer";
import { RoseLine } from "./RoseLine";

function BookButton({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all hover:scale-[1.03] ${
        dark ? "bg-ink text-taupe hover:bg-ink/90" : "bg-rose-gold text-ink hover:bg-rose-gold/90"
      }`}
    >
      Κλείσε ραντεβού <ArrowRight size={16} />
    </a>
  );
}

function ServiceNav() {
  const links = [
    { to: "/", label: "Αρχική" },
    { to: "/nails", label: "Νύχια" },
    { to: "/hair", label: "Μαλλιά" },
  ] as const;
  return (
    <header className="bg-ink">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-10">
        <Link to="/" aria-label="Looks Beauty Boutique — Αρχική" className="shrink-0">
          <img src={logoAsset.url} alt="Looks Beauty Boutique" className="h-8 w-auto sm:h-10" />
        </Link>
        <nav className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 sm:gap-6 sm:text-[13px]">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hidden transition hover:text-rose-gold sm:inline" activeProps={{ className: "text-rose-gold" }}>
              {l.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose-gold px-4 py-2 text-ink transition hover:bg-rose-gold/90"
          >
            Κλείσε ραντεβού
          </a>
        </nav>
      </div>
      <nav className="flex justify-center gap-6 border-t border-rose-gold/20 py-2 text-[11px] uppercase tracking-[0.18em] text-white/80 sm:hidden">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="hover:text-rose-gold" activeProps={{ className: "text-rose-gold" }}>
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function ServicePage({ page }: { page: ServicePageData }) {
  return (
    <LanguageProvider forceLang="el">
      <div className="bg-pearl font-body text-ink">
        <ServiceNav />
        <main>
          <section className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-24">
            <h1 className="font-display text-4xl font-light leading-tight md:text-6xl">{page.h1}</h1>
            <RoseLine center />
            <p className="mt-8 text-lg leading-relaxed text-ink/80">{page.intro}</p>
            <div className="mt-10">
              <BookButton />
            </div>
          </section>

          <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto grid max-w-5xl gap-14 px-6 lg:px-10">
              {page.sections.map((s) => (
                <div key={s.title}>
                  <h2 className="font-display text-3xl font-light md:text-4xl">{s.title}</h2>
                  <RoseLine />
                  <ul className="mt-6">
                    {s.items.map((i) => (
                      <li key={i.name} className="flex items-baseline justify-between gap-6 border-b border-rose-gold/25 py-3">
                        <span className="text-base md:text-lg">{i.name}</span>
                        <span className="shrink-0 text-right font-medium text-rose-gold">{i.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-center text-sm text-ink/70">
                Ολόκληρη η λίστα με διάρκειες και επιπλέον υπηρεσίες υπάρχει στο{" "}
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-rose-gold underline underline-offset-4 hover:text-ink">
                  online σύστημα ραντεβού
                </a>
                .
              </p>
            </div>
          </section>

          <section className="py-16 lg:py-24">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="text-center font-display text-3xl font-light md:text-4xl">Συχνές ερωτήσεις</h2>
              <RoseLine center />
              <div className="mt-10 divide-y divide-rose-gold/25 border-y border-rose-gold/25">
                {page.faq.map((f) => (
                  <details key={f.q} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-medium">
                      <h3>{f.q}</h3>
                      <ChevronDown size={18} className="shrink-0 text-rose-gold transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 leading-relaxed text-ink/80">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section
            className="py-20 text-center text-ink lg:py-28"
            style={{ background: "linear-gradient(135deg, #988B84 0%, #EFE4CE 50%, #988B84 100%)" }}
          >
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="font-display text-4xl font-light md:text-5xl">Κλείσε το ραντεβού σου online</h2>
              <div className="mx-auto mt-6 h-[2px] w-[60px] bg-ink" />
              <div className="mt-10">
                <BookButton dark />
              </div>
            </div>
          </section>
        </main>
        <Footer linkBase="/" />
      </div>
    </LanguageProvider>
  );
}
