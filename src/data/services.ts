import { BUSINESS_NAME, SITE_ORIGIN, SITE_URL } from "@/lib/site";

/** One visible price line. `offers` splits multi-price lines for JSON-LD. */
export type ServiceItem = { name: string; price: string; offers?: { name: string; price: number }[] };
export type ServiceSection = { title: string; items: ServiceItem[] };
export type Faq = { q: string; a: string };
export type ServicePageData = {
  path: "/nails" | "/hair";
  breadcrumb: string;
  serviceType: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
  faq: Faq[];
};

const item = (name: string, price: number): ServiceItem => ({ name, price: `${price}€` });

export const nailsPage: ServicePageData = {
  path: "/nails",
  breadcrumb: "Νύχια",
  serviceType: "Nail salon",
  title: "Νύχια Σύνταγμα: Ημιμόνιμο, Gel & Τεχνητά | Looks",
  description:
    "Manicure, pedicure, ημιμόνιμο, gel και τεχνητά νύχια στο Σύνταγμα (Φιλελλήνων 3). Δες τιμές και κλείσε online ραντεβού.",
  h1: "Νύχια στο Σύνταγμα, Αθήνα",
  intro:
    "Ημιμόνιμο, gel και τεχνητά νύχια στο κέντρο της Αθήνας, μέσα στη στοά της Φιλελλήνων 3, δίπλα στο μετρό Συντάγματος. Το Looks Beauty Boutique φροντίζει τα νύχια σου εδώ και πάνω από 15 χρόνια. Δες τις τιμές και κλείσε ραντεβού online, όποτε σε βολεύει.",
  sections: [
    {
      title: "Manicure & Pedicure",
      items: [
        item("Μανικιούρ πλήρες με ημιμόνιμο χρώμα", 23),
        item("Cat Eye μανικιούρ με ημιμόνιμο", 28),
        item("Ανδρικό μανικιούρ", 12),
        item("Πεντικιούρ πλήρες με ημιμόνιμο χρώμα", 28),
        item("Pedicure Spa Shellac", 32),
        item("Αφαίρεση ημιμόνιμου", 5),
      ],
    },
    {
      title: "Gel & Τεχνητά νύχια",
      items: [
        item("Φυσική ενίσχυση με Gel / Acrygel", 45),
        item("Τεχνητά νύχια με φόρμα, νούμερο 4–5", 60),
        item("Τεχνητά νύχια με φόρμα, νούμερο 6–7", 70),
        item("Συντήρηση τεχνητών νυχιών", 40),
      ],
    },
    {
      title: "Αποτρίχωση με κερί & φρύδια",
      items: [
        item("Πόδι ολόκληρο", 25),
        item("Μασχάλες", 10),
        item("Άνω χείλος", 5),
        item("Φρύδια (σχήμα)", 10),
        item("Φρύδια (καθάρισμα)", 8),
        item("Πρόσωπο και φρύδια", 18),
        item("Πρόσωπο χωρίς φρύδια", 10),
      ],
    },
  ],
  faq: [
    { q: "Πόσο κοστίζει ένα ημιμόνιμο μανικιούρ;", a: "Το πλήρες μανικιούρ με ημιμόνιμο χρώμα κοστίζει 23€ και το πεντικιούρ με ημιμόνιμο 28€." },
    { q: "Κάνετε τεχνητά νύχια;", a: "Ναι. Τεχνητά νύχια με φόρμα από 60€ και συντήρηση 40€. Κάνουμε και φυσική ενίσχυση με gel ή acrygel από 45€." },
    { q: "Αφαιρείτε το ημιμόνιμο από άλλο σαλόνι;", a: "Ναι, η αφαίρεση ημιμόνιμου κοστίζει 5€." },
    { q: "Πού βρίσκεστε;", a: "Φιλελλήνων 3, Αθήνα 105 57, μέσα στη στοά, στο Σύνταγμα." },
    {
      q: "Πώς κλείνω ραντεβού;",
      a: "Online, 24/7, από το κουμπί «Κλείσε ραντεβού», ή τηλεφωνικά στο 21 1740 9989. Δουλεύουμε Τρίτη–Πέμπτη 09:00–20:00, Παρασκευή 08:00–20:00 και Σάββατο 10:00–18:00.",
    },
  ],
};

export const hairPage: ServicePageData = {
  path: "/hair",
  breadcrumb: "Κομμωτήριο",
  serviceType: "Hair salon",
  title: "Κομμωτήριο Σύνταγμα: Βαφή, Balayage, Keratin | Looks",
  description:
    "Κούρεμα, βαφή, balayage, ανταύγειες και keratin στο Σύνταγμα (Φιλελλήνων 3). Δες τιμές και κλείσε online ραντεβού.",
  h1: "Κομμωτήριο στο Σύνταγμα, Αθήνα",
  intro:
    "Κούρεμα, βαφή, balayage και styling στο κέντρο της Αθήνας. Το κομμωτήριο του Looks Beauty Boutique είναι μέσα στη στοά της Φιλελλήνων 3, δίπλα στο Σύνταγμα. Διάλεξε υπηρεσία, δες την τιμή και κλείσε ώρα online.",
  sections: [
    {
      title: "Βαφή",
      items: [item("Βαφή ρίζα", 31), item("Βαφή όλο το κεφάλι", 41), item("Ρεφλέ", 15), item("Fashion colour", 60)],
    },
    {
      title: "Ανταύγειες, Balayage & Ντεκαπάζ",
      items: [
        item("Ανταύγειες ολόκληρο κεφάλι", 58),
        item("Ανταύγειες μισό κεφάλι", 43),
        item("Φλασάκια", 31),
        item("Balayage κοντά μαλλιά", 60),
        item("Balayage μεσαία μαλλιά", 75),
        item("Balayage μακριά μαλλιά", 90),
        item("Babylights", 68),
        item("Meches", 80),
        item("Ντεκαπάζ", 48),
      ],
    },
    {
      title: "Κουρέματα",
      items: [
        item("Κούρεμα γυναικείο (απλό)", 20),
        item("Κούρεμα γυναικείο, αλλαγή στυλ", 35),
        item("Κούρεμα αντρικό", 15),
        item("Κούρεμα και χτένισμα", 37),
        item("Βαφή, κούρεμα, χτένισμα", 78),
        item("Αφαίρεση ψαλίδας με τη μέθοδο Fasiz", 38),
      ],
    },
    {
      title: "Χτένισμα & Styling",
      items: [
        item("Χτένισμα απλό (μακριά μαλλιά)", 22),
        {
          name: "Χτένισμα με πρέσα",
          price: "20€ (μακριά 25€)",
          offers: [
            { name: "Χτένισμα με πρέσα", price: 20 },
            { name: "Χτένισμα με πρέσα, μακριά μαλλιά", price: 25 },
          ],
        },
        {
          name: "Χτένισμα με Steam pod",
          price: "25€ (μακριά 30€)",
          offers: [
            { name: "Χτένισμα με Steam pod", price: 25 },
            { name: "Χτένισμα με Steam pod, μακριά μαλλιά", price: 30 },
          ],
        },
        item("Χτένισμα βραδινό", 25),
        item("Νυφικό πακέτο (2 ώρες)", 50),
        item("Braids χωρίς πρόσθετα", 20),
        item("Braids με πρόσθετα", 35),
        item("Χτένισμα με extensions", 28),
      ],
    },
    {
      title: "Keratin",
      items: [item("Keratin κοντά μαλλιά", 130), item("Keratin μεσαία μαλλιά", 140), item("Keratin μακριά μαλλιά", 150)],
    },
    {
      title: "Θεραπείες μαλλιών",
      items: [
        item("Μάσκες (αντιγήρανσης, ενυδάτωσης, κατά του φριζαρίσματος)", 12),
        item("Θεραπεία Ultimate Smooth", 20),
        item("Θεραπεία Ultimate Repair", 20),
        {
          name: "Θεραπεία Absolut Repair Molecular",
          price: "κοντά 25€ · μεσαία 30€ · μακριά 35€",
          offers: [
            { name: "Θεραπεία Absolut Repair Molecular, κοντά μαλλιά", price: 25 },
            { name: "Θεραπεία Absolut Repair Molecular, μεσαία μαλλιά", price: 30 },
            { name: "Θεραπεία Absolut Repair Molecular, μακριά μαλλιά", price: 35 },
          ],
        },
      ],
    },
  ],
  faq: [
    { q: "Πόσο κοστίζει το balayage;", a: "60€ για κοντά μαλλιά, 75€ για μεσαία και 90€ για μακριά. Η διάρκεια είναι περίπου 2 ώρες και 15 λεπτά έως 3 ώρες και 15 λεπτά, ανάλογα με το μήκος." },
    { q: "Πόσο κοστίζει και πόση ώρα κρατάει η θεραπεία keratin;", a: "Από 130€ για κοντά έως 150€ για μακριά μαλλιά. Χρειάζεται περίπου 2 ώρες και 40 λεπτά έως 3 ώρες και 30 λεπτά." },
    { q: "Πόσο κοστίζει η βαφή ρίζας;", a: "31€. Η βαφή όλου του κεφαλιού κοστίζει 41€." },
    { q: "Κάνετε ανδρικό κούρεμα;", a: "Ναι, 15€." },
    { q: "Έχετε νυφικό χτένισμα;", a: "Ναι, το νυφικό πακέτο κοστίζει 50€ και διαρκεί περίπου 2 ώρες." },
    {
      q: "Πού βρίσκεστε και πότε είστε ανοιχτά;",
      a: "Φιλελλήνων 3, Αθήνα 105 57, μέσα στη στοά, στο Σύνταγμα. Τρίτη–Πέμπτη 09:00–20:00, Παρασκευή 08:00–20:00, Σάββατο 10:00–18:00. Κλειστά Δευτέρα και Κυριακή.",
    },
  ],
};

export function pageUrl(page: ServicePageData) {
  return `${SITE_ORIGIN}${page.path}`;
}

export function offersOf(page: ServicePageData) {
  return page.sections.flatMap((s) =>
    s.items.flatMap((i) => i.offers ?? [{ name: i.name, price: Number.parseInt(i.price, 10) }]),
  );
}

export function buildJsonLd(page: ServicePageData) {
  const url = pageUrl(page);
  return [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      serviceType: page.serviceType,
      url,
      provider: { "@type": ["HairSalon", "NailSalon"], name: BUSINESS_NAME, url: SITE_URL },
      areaServed: "Αθήνα",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: page.h1,
        itemListElement: page.sections.map((s) => ({
          "@type": "OfferCatalog",
          name: s.title,
          itemListElement: s.items.flatMap((i) =>
            (i.offers ?? [{ name: i.name, price: Number.parseInt(i.price, 10) }]).map((o) => ({
              "@type": "Offer",
              price: o.price,
              priceCurrency: "EUR",
              itemOffered: { "@type": "Service", name: o.name },
            })),
          ),
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Αρχική", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: page.breadcrumb, item: url },
      ],
    },
  ];
}

export function buildHead(page: ServicePageData) {
  const url = pageUrl(page);
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: buildJsonLd(page).map((d) => ({ type: "application/ld+json", children: JSON.stringify(d) })),
  };
}
