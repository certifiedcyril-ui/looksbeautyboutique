import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "el" | "en";

type Dict = {
  nav: { home: string; about: string; gallery: string; events: string; book: string; menu: string };
  hero: { line1: { first: string; second: string }; line2: { first: string; second: string }; line2Short: { first: string; second: string }; about: string; tagline: string; h1: string; imageAlt: string };
  about: {
    label: string;
    title: string;
    body: string;
    chips: string[];
    before: string;
    after: string;
    altNails: string;
    altHair: string;
    carouselAlts: string[];
    salonAlts: string[];
  };
  stats: { rating: string; reviews: string; days: string; online: string };
  hair: { label: string; title: string; alts: string[] };
  booking: {
    title: string;
    subtitle: string;
    iframeTitle: string;
    hours: string;
    closed: string;
    days: string[];
  };
  story: { label: string; paragraphs: string[]; quote: string };
  gallery: { title: string; hair: string; nails: string; prev: string; next: string; alts: string[] };
  reviews: { label: string; title: string; anonymous: string; items: { text: string; name?: string; age?: string; source?: string }[] };
  cta: { title: string; subtitle: string };
  footer: {
    blurb: string;
    title: string;
    addressLabel: string;
    phoneLabel: string;
    follow: string;
    nav: string;
    contact: string;
    links: { home: string; about: string; booking: string; contact: string };
    address: string;
    directions: string;
    mapTitle: string;
    rights: string;
  };
};

const el: Dict = {
  nav: { home: "Αρχική", about: "Σχετικά", gallery: "Gallery", events: "Events", book: "BOOK NOW", menu: "Μενού" },
  hero: {
    line1: { first: "Beauty is in the details", second: "...we make it yours !" },
    line2: { first: "15 χρόνια εμπιστοσύνης", second: "Syntagma-Athens" },
    line2Short: { first: "15 χρόνια εμπιστοσύνης", second: "Syntagma-Athens" },
    about: "Σχετικά",
    tagline: "All about Nails-Hair & more!",
    h1: "Κομμωτήριο & Nail Salon στο Σύνταγμα, Αθήνα",
    imageAlt: "Περιποιημένα νύχια και λαμπερά μαλλιά από το Looks Beauty Boutique, κομμωτήριο και nail salon στο Σύνταγμα",
  },
  about: {
    label: "Το Salon μας",
    title: "Εμπιστευτείτε το look σας σε αληθινούς καλλιτέχνες",
    body:
      "Στο Looks Beauty Boutique πιστεύουμε ότι κάθε λεπτομέρεια μετράει. Χρησιμοποιούμε μόνο premium προϊόντα και τεχνικές για να σας χαρίσουμε άψογο αποτέλεσμα — κάθε φορά.",
    chips: ["Premium Προϊόντα", "Πιστοποιημένες Τεχνικοί", "Signature Σχέδια"],
    before: "Πριν",
    after: "Μετά",
    altNails: "Πριν και μετά manicure στο Looks Beauty Boutique",
    altHair: "Πριν και μετά θεραπεία μαλλιών στο Looks Beauty Boutique",
    carouselAlts: [
      "Πριν και μετά μπλε γαλλικό manicure στο Looks Beauty Boutique",
      "Πριν και μετά nude manicure στο Looks Beauty Boutique",
      "Πριν και μετά σκούρο manicure στο Looks Beauty Boutique",
    ],
    salonAlts: [
      "Η υποδοχή του Looks Beauty Boutique",
      "Οι θέσεις manicure του salon",
      "Ο χώρος pedicure του salon",
      "Πανοραμική άποψη του Looks Beauty Boutique",
      "Οι φωτεινές θέσεις περιποίησης νυχιών",
      "Η συλλογή βερνικιών του salon",
    ],
  },
  stats: {
    rating: "Αξιολόγηση Google",
    reviews: "Κριτικές",
    days: "Μέρες Ανοιχτά",
    online: "Ραντεβού 24/7",
  },
  hair: {
    label: "Μαλλιά",
    title: "Μεταμορφώσεις μαλλιών που μιλάνε από μόνες τους",
    alts: [
      "Σκούρα μαλλιά πριν από το βάψιμο",
      "Ζωντανό μπλε bob κούρεμα",
      "Μπλε βαφή — πλάνο πλύσιμο",
      "Σκούρα bob με κόκκινες ανταύγειες",
      "Κόκκινο-μαύρο bob με ίσια γραμμή",
      "Κόκκινο-μαύρο bob — πλάνο όψη",
      "Πριν: φριζαρισμένα καστανά μαλλιά",
      "Ασημί μαλλιά με απαλά κύματα",
      "Ασημί-ξανθό balayage με χαλαρά κύματα",
      "Πριν: καστανά μαλλιά με ξανθές άκρες",
      "Κυματιστό ξανθό balayage",
      "Πριν: ασημί κατσαρό μαλλιά",
      "Μετά: ασημί ίσια μαλλιά",
      "Πριν: πορτοκαλί αποχρώσεις με σκούρες ρίζες",
      "Χάλκινο copper κύματα",
      "Πριν: καμένη ξανθιά ombré με κόκκινες ανταύγειες",
      "Μετά: ash blonde balayage",
      "Πριν: κοντό καστανό-χάλκινο μαλλί",
      "Μετά: κοντό layered κούρεμα",
      "Πριν: ίσια καστανά μαλλιά",
      "Μετά: σγουρό balayage από καστανό σε ξανθό",
      "Πριν: ξανθά μαλλιά με σκούρες ρίζες",
      "Μετά: caramel κύματα με ζεστούς τόνους",
      "Πριν και μετά: αισθητή αραίωση και χτενίσμα σε έντονα κυματαρά",
      "Κολάζ μεταμόρφωσης: από σκούρα μαλλιά σε έντονο κόκκινο χρώμα",
      "Πριν και μετά: balayage με φυσικό ξανθό τόνο σε bob",
      "Πριν και μετά: από κίτρινες ανταύγειες σε ασημί γκρι μαλλιά",
      "Πριν και μετά: καστανά σγουρά μαλλιά σε ξανθό balayage με μπούκλες",
      "Πριν και μετά: φριζαρισμένα ξανθά μαλλιά σε λείο καστανό χρώμα",
      "Πριν και μετά: γκρι μαλλιά από σγουρά σε απόλυτα ίσια",
      "Πριν και μετά: από πορτοκαλί ανταύγειες σε ψυχρό ash blonde",
      "Πριν και μετά: φριζαρισμένα καστανά μαλλιά σε ίσιο γυαλιστερό χτένισμα",
      "Πριν και μετά: από κίτρινες ανταύγειες σε φωτεινό ξανθό",
    ],
  },
  booking: {
    title: "Κάντε την Κράτησή σας",
    subtitle: "Κράτηση μέσω φόρμας ή εφαρμογής",
    iframeTitle: "Κράτηση στο Setmore",
    hours: "Ώρες Λειτουργίας",
    closed: "Κλειστά",
    days: ["Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο", "Κυριακή"],
  },
  story: {
    label: "Σχετικά με εμάς",
    paragraphs: [
      "Στην καρδιά της Αθήνας στο Σύνταγμα, λίγα μόλις βήματα από το σταθμό του μετρό, το LOOKS Beauty Boutique αποτελεί εδώ και περισσότερα από 15 χρόνια έναν σταθερό προορισμό ομορφιάς όπου η ποιότητα, η αισθητική και η προσωπική φροντίδα συναντιούνται.",
      "Με ανανεωμένη φιλοσοφία και σύγχρονη προσέγγιση στην ομορφιά, εξελίσσουμε καθημερινά τον χώρο και τις υπηρεσίες μας, παραμένοντας πιστοί σε όσα έχουν αξία για εμάς: επαγγελματισμό, συνέπεια, υψηλή ποιότητα και μια εμπειρία που κάνει την κάθε επίσκεψη ξεχωριστή...",
      "Για εμάς, η πραγματική ομορφιά ξεκινά από το πώς νιώθει κανείς. Γι' αυτό δημιουργήσαμε έναν ζεστό και φιλόξενο χώρο, όπου η φροντίδα, η προσοχή στη λεπτομέρεια και η προσωπική επαφή αποτελούν μέρος της καθημερινής μας φιλοσοφίας. Η εμπιστοσύνη των πελατών μας όλα αυτά τα χρόνια είναι η μεγαλύτερη έμπνευσή μας.",
      "Η ομάδα μας, με εξειδίκευση στους τομείς Nails Hair & Beauty και συνεχή εκπαίδευση στις σύγχρονες τεχνικές, δημιουργεί εξατομικευμένες υπηρεσίες που αναδεικνύουν την ομορφιά και το προσωπικό σας στυλ.",
    ],
    quote:
      "«Γιατί η ομορφιά δεν είναι μόνο αυτό που βλέπουμε στον καθρέφτη. Είναι ο τρόπος που νιώθουμε όταν επιλέγουμε να φροντίσουμε τον εαυτό μας ..»",
  },
  gallery: {
    title: "A closer look...",
    hair: "Μαλλιά",
    nails: "Νύχια",
    prev: "Προηγούμενο",
    next: "Επόμενο",
    alts: [
      "Πριν και μετά: φυσικά νύχια και μαύρα μυτερά νύχια",
      "Ροζ-πορτοκαλί ομπρέ νύχια",
      "Κλασικό γαλλικό manicure",
      "Μέντα νύχια σε αμυγδαλωτό σχήμα",
      "Nude-ροζ νύχια με δαχτυλίδια",
      "Nude νύχια με chrome λάμψη",
      "Νύχια με ασημί glitter και στρας",
      "Μαύρα νύχια με κόκκινες καρδιές και love design",
      "Σκούρα μπλε μυτερά νύχια με ιριδίζουσα λάμψη",
      "Φωτεινό ροζ manicure με λουλουδάτο design",
      "Κολάζ με γαλλικά manicure σε διάφορες αποχρώσεις",
      "Κολάζ με κόκκινα και λευκά νύχια με πασχαλίτσα και το σήμα του boutique",
      "Λευκά νύχια με μαύρα γραμμικά σχέδια",
      "Σκούρα μυτερά νύχια με glitter λάμψη",
      "Μαύρα νύχια με νιφάδα χιονιού",
      "Λευκά νύχια με μαύρη γραμμική τέχνη στο καπέλο",
      "Γαλλικό manicure με δαχτυλίδια",
      "Κολάζ με μπορντό στίλετο νύχια",
      "Μοβ-γκρι γυαλιστερά νύχια στίλετο",
      "Παστέλ νύχια σε ανοιχτά χρώματα",
      "Κολάζ με μαύρα νύχια γαλαξίας στίλετο",
      "Γαλαξίας στίλετο με χρυσή αλυσίδα",
      "Κολάζ με ροζ νύχια και λουλουδάτα μοτίβα",
      "Κολάζ με νύχια πασχαλίτσα και κόκκινες αποχρώσεις",
      "Μαύρα ματ νύχια με κόκκινες καρδιές και love",
      "Ιβουάρ ombré αμυγδαλωτά νύχια με δαχτυλίδια",
      "Ροζ και πορτοκαλί ombré αμυγδαλωτά νύχια",
      "Μέντα αμυγδαλωτά νύχια",
      "Ασημί γαλλικό manicure με glitter και στρας",
      "Πριν και μετά μπορντό γαλλικό manicure",
      "Πολύχρωμα παστέλ νύχια με πουά σχέδιο",
      "Απαλά ροζ νύχια με μοβ πουά",
      "Γυαλιστερά nude ροζ αμυγδαλωτά νύχια",
      "Πριν και μετά navy γαλλικό manicure",
    ],
  },
  reviews: {
    label: "Κριτικές",
    title: "Τι λένε οι πελάτες μας",
    anonymous: "Κριτική Google",
    items: [
      {
        text:
          "Αυτό το σαλόνι νυχιών ήταν καταπληκτικό. Τόσο καθαρό, επαγγελματικό και προσεγμένο στη λεπτομέρεια. Λάτρεψα το αποτέλεσμα στα νύχια μου!",
        name: "KENDA HARRIS",
      },
      {
        text:
          "Ήρθα χωρίς ραντεβού και έφυγα μια ώρα μετά υπερευχαριστημένη με πανέμορφα φροντισμένα νύχια. Ευχαριστώ για την επαγγελματική, γρήγορη και φιλική εξυπηρέτηση!",
        name: "SABINE PROKSCH-BAUER",
      },
      {
        text:
          "Είχα υπέροχη εμπειρία εδώ — mani/pedi. Ήρθα με μερικά σπασμένα νύχια σε λίγο επείγουσα κατάσταση. Η Σοφία ήταν φανταστική — τη συνιστώ ανεπιφύλακτα!",
        name: "MELINA PAPADOPOULOS",
      },
      {
        text: "Εξαιρετική ποιότητα υπηρεσιών, φιλικό προσωπικό, ασφαλές και υγιεινό περιβάλλον. Πηγαίνω εδώ για χρόνια και ούτε μία φορά δεν έφυγα δυσαρεστημένη ή δυστυχισμένη!",
        name: "Konstantia Sotiropoulou",
        source: "Google",
        age: "Πριν από 4 χρόνια",
      },
      { text: "Καταπληκτική εμπειρία. Σας ευχαριστώ πολύ!", source: "Google", age: "Πριν από 3 χρόνια" },
      { text: "Η Σοφία με περιποιήθηκε, ήταν εξαιρετικά επαγγελματίας και έκανε τα νύχια μου τέλεια.", source: "Google", age: "Πριν από 3 χρόνια" },
      { text: "Συνιστώ ανεπιφύλακτα αυτό το salon. Έκανα συντήρηση νυχιών gel, ο χώρος ήταν πολύ επαγγελματικός και καθαρός. Η τεχνίτρια ήταν φιλική και έκανε εξαιρετική δουλειά.", source: "Google", age: "Πριν από 3 χρόνια" },
      { text: "Είναι πολύ φιλικοί και υπομονετικοί, μου πρότειναν ένα όμορφο χρώμα, έδωσαν τέλειο σχήμα στα νύχια μου και εφάρμοσαν το gel πολύ ομοιόμορφα. Κορυφαία εξυπηρέτηση!", source: "Google", age: "Πριν από 4 χρόνια" },
    ],
  },
  cta: { title: "Έτοιμοι για το Τέλειο Look;", subtitle: "Κλείστε το ραντεβού σας online — 24/7" },
  footer: {
    blurb:
      "Σαλόνι νυχιών & μαλλιών στην καρδιά του Συντάγματος — Φιλελλήνων 3, Αθήνα 105 57 (Μέσα στη στοά). Κάθε look είναι έργο τέχνης.",
    title: "Τοποθεσία & Επικοινωνία",
    addressLabel: "Διεύθυνση",
    phoneLabel: "Τηλέφωνο",
    follow: "Ακολουθήστε μας",
    nav: "Πλοήγηση",
    contact: "Επικοινωνία",
    links: { home: "Αρχική", about: "Σχετικά", booking: "Ραντεβού", contact: "Επικοινωνία" },
    address: "Φιλελλήνων 3, Αθήνα 105 57 (Μέσα στη στοά)",
    directions: "Οδηγίες",
    mapTitle: "Looks Beauty Boutique — Φιλελλήνων 3, Αθήνα",
    rights: "© 2026 Looks Beauty Boutique. Με επιφύλαξη κάθε δικαιώματος.",
  },
};

const en: Dict = {
  nav: { home: "Home", about: "About", gallery: "Gallery", events: "Events", book: "BOOK NOW", menu: "Menu" },
  hero: {
    line1: { first: "Beauty is in the details", second: "...we make it yours !" },
    line2: { first: "15 years of trust", second: "Syntagma-Athens" },
    line2Short: { first: "15 years of trust", second: "Syntagma-Athens" },
    about: "About",
    tagline: "All about Nails-Hair & more!",
    h1: "Hair & Nail Salon in Syntagma, Athens",
    imageAlt: "Manicured nails and glossy hair by Looks Beauty Boutique, hair and nail salon in Syntagma, Athens",
  },
  about: {
    label: "Our Salon",
    title: "Trust your look to true artists",
    body:
      "At Looks Beauty Boutique we believe every detail matters. We use only premium products and techniques to give you a flawless result — every single time.",
    chips: ["Premium Products", "Certified Technicians", "Signature Designs"],
    before: "Before",
    after: "After",
    altNails: "Before and after manicure at Looks Beauty Boutique",
    altHair: "Before and after hair treatment at Looks Beauty Boutique",
    carouselAlts: [
      "Before and after blue French manicure at Looks Beauty Boutique",
      "Before and after nude manicure at Looks Beauty Boutique",
      "Before and after dark manicure at Looks Beauty Boutique",
    ],
    salonAlts: [
      "Looks Beauty Boutique reception",
      "Salon manicure stations",
      "Salon pedicure area",
      "Overview of Looks Beauty Boutique",
      "Bright nail-care stations",
      "Salon nail-polish collection",
    ],
  },
  stats: {
    rating: "Google Rating",
    reviews: "Reviews",
    days: "Days Open",
    online: "Booking 24/7",
  },
  hair: {
    label: "Hair",
    title: "Hair transformations that speak for themselves",
    alts: [
      "Dark hair before colouring",
      "Vivid blue bob haircut",
      "Blue hair colour — back view at the basin",
      "Dark bob with red highlights",
      "Black and red sleek bob",
      "Black and red bob — back view",
      "Before: frizzy brown hair",
      "Silver hair with soft waves",
      "Silver-blonde balayage with loose waves",
      "Before: brown hair with blonde ends",
      "Wavy blonde balayage",
      "Before: grey curly hair",
      "After: grey straight hair",
      "Before: brassy tones with dark roots",
      "Copper curls",
      "Before: brassy ombré with red tones",
      "After: ash blonde balayage",
      "Before: short copper-toned hair",
      "After: layered short cut",
      "Before: straight brown hair",
      "After: wavy brown-to-blonde balayage",
      "Before: blonde hair with dark roots",
      "After: caramel waves with warm tones",
      "Before and after: visible thinning transformed into a curly blonde bob",
      "Transformation collage: from dark hair to a vivid red colour",
      "Before and after: natural blonde balayage on a bob",
      "Before and after: from brassy tones to silver-grey hair",
      "Before and after: brunette waves into blonde balayage curls",
      "Before and after: frizzy blonde hair smoothed into sleek brown",
      "Before and after: grey hair from wavy to perfectly straight",
      "Before and after: from brassy tones to cool ash blonde",
      "Before and after: frizzy brown hair into a sleek straight style",
      "Before and after: from brassy tones to bright blonde",
    ],
  },
  booking: {
    title: "Make Your Booking",
    subtitle: "Book via form or app",
    iframeTitle: "Book on Setmore",
    hours: "Opening Hours",
    closed: "Closed",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  story: {
    label: "About us",
    paragraphs: [
      "In the heart of Athens at Syntagma, just a few steps from the metro station, LOOKS Beauty Boutique has been a lasting beauty destination for more than 15 years — a place where quality, aesthetics and personal care meet.",
      "With a renewed philosophy and a modern approach to beauty, we evolve our space and our services every day, staying true to what matters to us: professionalism, consistency, high quality and an experience that makes every visit special...",
      "For us, real beauty starts with how you feel. That is why we created a warm and welcoming space, where care, attention to detail and personal connection are part of our daily philosophy. The trust of our clients over all these years is our greatest inspiration.",
      "Our team, specialised in Nails, Hair & Beauty and continuously trained in modern techniques, creates personalised services that bring out your beauty and your personal style.",
    ],
    quote:
      "\u201CBecause beauty is not only what we see in the mirror. It is the way we feel when we choose to take care of ourselves ..\u201D",
  },
  gallery: {
    title: "A closer look...",
    hair: "Hair",
    nails: "Nails",
    prev: "Previous",
    next: "Next",
    alts: [
      "Before and after: natural nails and black almond nails",
      "Pink-to-orange ombré nails",
      "Classic French manicure",
      "Mint green almond nails",
      "Nude-pink nails with rings",
      "Nude nails with chrome shine",
      "Nails with silver glitter and rhinestones",
      "Black nails with red hearts and love design",
      "Dark blue stiletto nails with iridescent shine",
      "Bright pink manicure with floral design",
      "Collage of French manicures in different shades",
      "Collage of red and white ladybug nails and the boutique sign",
      "White nails with black line art",
      "Dark stiletto nails with glitter shine",
      "Black nails with a snowflake accent",
      "White nails with black line art on a hat",
      "French manicure with rings",
      "Collage of burgundy stiletto nails",
      "Glossy mauve-grey stiletto nails",
      "Pale pastel nails in soft colors",
      "Collage of black galaxy stiletto nails",
      "Galaxy stiletto nails with a gold chain",
      "Collage of pink nails with floral accents",
      "Collage of ladybug nails in red shades",
      "Matte black nails with red hearts and love",
      "Ivory ombré almond nails with rings",
      "Pink and orange ombré almond nails",
      "Mint green almond nails",
      "Silver French manicure with glitter and rhinestones",
      "Before and after burgundy French manicure",
      "Colorful pastel nails with a polka-dot design",
      "Soft pink nails with purple dots",
      "Glossy nude-pink almond nails",
      "Before and after navy French manicure",
    ],
  },
  reviews: {
    label: "Reviews",
    title: "What our clients say",
    anonymous: "Google review",
    items: [
      {
        text:
          "This nail salon was amazing. So clean, professional, and detail oriented. Loved how my nails turned out!",
        name: "KENDA HARRIS",
      },
      {
        text:
          "I came in without an appointment and left an hour later super happy with beautifully manicured nails. Thanks for your professional, efficient and friendly service!",
        name: "SABINE PROKSCH-BAUER",
      },
      {
        text:
          "Had a wonderful experience here — mani/pedi. I came with a few broken nails and a bit of an emergency situation. Sophia was amazing — I highly recommend!",
        name: "MELINA PAPADOPOULOS",
      },
      {
        text: "Excellent quality of service, friendly staff, safe and hygienic environment. I’ve been going there for years and not once did I leave this place displeased or unhappy!",
        name: "Konstantia Sotiropoulou",
        source: "Google",
        age: "4 years ago",
      },
      { text: "Amazing experience. Thank you very much!", source: "Google", age: "3 years ago" },
      { text: "Sophia did for me and she was extremely professional and did my nails just perfect.", source: "Google", age: "3 years ago" },
      { text: "I highly recommend this salon. I had gel nail infill, the salon was very professional and clean. The lady was friendly and did a great job.", source: "Google", age: "3 years ago" },
      { text: "They are very friendly and patient, advised me a beautiful color, made the shape of my nails perfectly and applied the gel very evenly. Top service!", source: "Google", age: "4 years ago" },
    ],
  },
  cta: { title: "Ready for the Perfect Look?", subtitle: "Book your appointment online — 24/7" },
  footer: {
    blurb:
      "Nail & hair salon in the heart of Syntagma — Filellinon 3, Athens 105 57 (Inside the arcade). Every look is a work of art.",
    title: "Location & Contact",
    addressLabel: "Address",
    phoneLabel: "Phone",
    follow: "Follow us",
    nav: "Navigation",
    contact: "Contact",
    links: { home: "Home", about: "About", booking: "Booking", contact: "Contact" },
    address: "Filellinon 3, Athens 105 57 (Inside the arcade)",
    directions: "Directions",
    mapTitle: "Looks Beauty Boutique — Filellinon 3, Athens",
    rights: "© 2026 Looks Beauty Boutique. All rights reserved.",
  },
};

const dictionaries: Record<Lang, Dict> = { el, en };

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "el",
  setLang: () => {},
  t: el,
});

export function LanguageProvider({ children, forceLang }: { children: ReactNode; forceLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(forceLang ?? "el");

  useEffect(() => {
    if (forceLang) return;
    const stored = window.localStorage.getItem("lbb-lang");
    if (stored === "el" || stored === "en") setLang(stored);
  }, [forceLang]);

  useEffect(() => {
    if (!forceLang) window.localStorage.setItem("lbb-lang", lang);
    document.documentElement.lang = lang;
  }, [lang, forceLang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useI18n() {
  return useContext(LangContext);
}
