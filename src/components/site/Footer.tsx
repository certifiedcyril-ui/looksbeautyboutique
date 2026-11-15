import { ArrowRight, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { MAPS_EMBED, MAPS_URL, SOCIAL_URLS } from "@/lib/site";
import { RoseLine } from "./RoseLine";

export function Footer({ linkBase = "" }: { linkBase?: string }) {
  const { t } = useI18n();
  const socials = [
    { name: "Instagram", href: SOCIAL_URLS.instagram, icon: <Instagram size={15} /> },
    { name: "Facebook", href: SOCIAL_URLS.facebook, icon: <Facebook size={15} /> },
    { name: "TikTok", href: SOCIAL_URLS.tiktok, icon: null },
  ];
  return (
    <footer id="contact" className="bg-ink py-12 text-primary-foreground font-body lg:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-8 text-center">
          <h2 className="font-display text-4xl font-light md:text-5xl">{t.footer.title}</h2>
          <RoseLine center />
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="min-w-0 overflow-hidden rounded-lg border border-rose-gold/25 bg-review-surface">
            <iframe title={t.footer.mapTitle} src={MAPS_EMBED} width="100%" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-[300px] w-full grayscale transition-all duration-500 hover:grayscale-0 md:h-full md:min-h-[420px]" />
          </div>
          <div className="min-w-0 py-2 md:py-4">
            <dl className="space-y-5">
              <div>
                <dt className="mb-2 text-xs font-medium uppercase text-rose-gold">{t.footer.addressLabel}</dt>
                <dd className="text-base leading-relaxed md:text-lg">{t.footer.address}</dd>
              </div>
              <div>
                <dt className="mb-2 text-xs font-medium uppercase text-rose-gold">{t.footer.phoneLabel}</dt>
                <dd><a href="tel:+302117409989" className="text-2xl transition-colors hover:text-rose-gold">21 1740 9989</a></dd>
              </div>
              <div>
                <dt className="mb-2 text-xs font-medium uppercase text-rose-gold">Email</dt>
                <dd><a href="mailto:Looksbb-syntagma@hotmail.com" className="break-words text-base text-primary-foreground/80 transition-colors hover:text-rose-gold md:text-lg">Looksbb-syntagma@hotmail.com</a></dd>
              </div>
            </dl>
            <Button asChild variant="carousel" className="mt-5 rounded-full px-5">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">{t.footer.directions}<ArrowRight size={15} /></a>
            </Button>
            <div className="mt-6 border-t border-rose-gold/20 pt-5">
              <p className="mb-3 text-xs font-medium uppercase text-rose-gold">{t.footer.follow}</p>
              <div className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <Button asChild key={social.name} variant="ghost" size="sm" className="rounded-full border border-rose-gold/30 text-primary-foreground/80 hover:bg-primary-foreground hover:text-ink">
                    <a href={social.href} target="_blank" rel="noopener noreferrer">{social.icon}{social.name}</a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-5 border-t border-rose-gold/20 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-primary-foreground/60">{t.footer.blurb}</p>
          <nav aria-label={t.footer.contact} className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-primary-foreground/80">
            <a href={`${linkBase}#home`} className="hover:text-rose-gold">{t.footer.links.home}</a>
            <a href={`${linkBase}#story`} className="hover:text-rose-gold">{t.footer.links.about}</a>
            <a href={`${linkBase}#booking`} className="hover:text-rose-gold">{t.footer.links.booking}</a>
            <a href={`${linkBase}#contact`} className="hover:text-rose-gold">{t.footer.links.contact}</a>
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-xs text-primary-foreground/60 md:flex-row md:justify-between">
          <p>{t.footer.rights}</p>
          <p>Designed by <a href="https://nexusmedia.biz" target="_blank" rel="noopener noreferrer" className="text-rose-gold underline underline-offset-4 hover:text-primary-foreground">Nexus Media</a></p>
        </div>
      </div>
    </footer>
  );
}
