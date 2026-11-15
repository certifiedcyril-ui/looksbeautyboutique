# Resolve the domain connection with Papaki

## Confirmed status
- The `_lovable` TXT verification record is published and correct.
- Both authoritative Papaki nameservers return no A record for `looksbeautyboutique.gr`.
- Lovable is therefore correctly waiting for DNS; Papaki must publish the saved root A record.

## Send this to Papaki support

> Καλησπέρα σας,
>
> Στο DNS management του domain `looksbeautyboutique.gr` έχω αποθηκεύσει την εγγραφή:
>
> - Τύπος: A
> - Host/Name: @
> - Τιμή: `185.158.133.1`
>
> Ωστόσο, οι authoritative nameservers `dns1.papaki.gr` και `dns2.papaki.gr` εξακολουθούν να μην επιστρέφουν καμία A εγγραφή για το root domain. Η TXT εγγραφή `_lovable` δημοσιεύεται κανονικά.
>
> Παρακαλώ ελέγξτε αν η A εγγραφή είναι pending ή δεν έχει δημοσιευτεί στη DNS zone και προχωρήστε στη δημοσίευσή της. Παρακαλώ μην αλλάξετε τις MX, SPF ή DMARC εγγραφές email.
>
> Ευχαριστώ.

## After Papaki replies
1. Recheck the public A record.
2. Once it returns `185.158.133.1`, press **Check status** under **Project Settings → Domains**.
3. Wait for automatic certificate setup; the status should then become Active.
