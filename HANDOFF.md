# Hämara projekti hetkeseis

Uuendatud: 24.11.2026

## Tehtud

- Arenduskeskkond ja GitHub on seadistatud.
- Äriplaan, esitlus ja projektiplaan on analüüsitud.
- Loodud index.html, style.css, script.js ja tooted.js.
- Lisatud navigatsioonimenüü ja kolm näidistoodet.
- Veebileht on avaldatud GitHub Pagesis.
- Tooteandmed on HTML-ist eraldatud.
- Tootekaardid luuakse automaatselt JavaScriptiga.
- Ostukorvi lisamine ja kogusumma arvutamine töötavad.
- Ostukorvis saab koguseid muuta ja tooteid eemaldada.
- Ostukorv salvestatakse localStorage abil.
- Ostukorvi funktsionaalsus on testitud.
- Projektiplaan ja töölogi on uuendatud.

## Kinnitatud kujundus

- Stiil: elegantne, hubane ja ajatu.
- Logo: HÄMAR, väikese täpiga kirja all.
- Elevandiluu: #F6F0EA
- Kašmiir: #E5D4CB
- Vanaroosa: #C5A2A1
- Ploomipruun: #62464A
- Espresso: #392E2B
- Kasutada originaalseid tootefotosid.
- Võimaldada hooajalise avalehe sisu muutmist.

## Järgmised sammud

- Kujundada ostukorv ja nupud.
- Rakendada kinnitatud veebilehe kujundus.
- Lisada tootepildid ja kollektsioonid.
- Kohandada veebileht mobiilseadmetele.
- Ühendada Supabase'i andmebaas.
- Luua turvaline halduspaneel.
- Lisada eritellimuste võimalus.
- Lisada tellimuste ja uudiskirja funktsioonid.
- Lisada tarne- ja makselahendused.
- Testida funktsionaalsust ja turvalisust.

## Töö jätkamine

- Järgi AGENTS.md tööreegleid.
- Säilita olemasolevad failid ja logikirjed.
- Kontrolli ja testi iga arendusetappi.
- Kasuta tokeneid säästlikult.
- Eelista tasuta lahendusi.

## Viimane seis – 21.11.2026

- Hämara värvipalett on rakendatud.
- Logo on täiendatud täpi ja kaarja joonega.
- Tootekaardid, nupud ja ostukorv on kujundatud.
- Lisatud mobiilivaate CSS-reeglid.

Järgmisena lisada avalehe küünlafoto ja testida mobiilivaadet.

## Viimane seis – 23.11.2026

- Hämara logo on täiendatud väikese leegiga.
- Loodud logo-leek.svg fail.
- Päise kujundus on korrastatud.
- Logo ja päis on brauseris kontrollitud.

Järgmine samm: lisada avalehele küünlafoto ja täiustada kujundust.

## Viimane seis – 24.11.2026

- Avalehe tutvustusala on kujundatud õrna CSS-valguslaigu, selgema teksti ja „Avasta küünlad” lingiga.
- Kasutatud on kinnitatud värvipaletti; pilte ega väliseid teeke ei lisatud.
- Logo, navigatsioon, ostukorv ja olemasolevad funktsioonid säilitati.
- Lauaarvuti- ja mobiilivaates kontrolliti, et horisontaalset ülevoolu pole ning link viib toodete juurde.
- Ostukorvis kontrolliti toote lisamist, koguse suurendamist ja vähendamist, koguhinna muutumist, toote eemaldamist ning sisu säilimist pärast lehe värskendamist; kõik toimis.

Järgmine samm: lisada päris küünlafotod ja täiustada toodete esitlust.

## Supabase'i proovileht – 24.11.2026

- Loodud `supabase-proov.html`, mida poe navigatsioon ei ava.
- Leht teeb ainult lugemispäringu tabelisse `public.tooted`, küsides välju `id` ja `nimi` ning piirates tulemuse tingimusega `avaldatud = true`.
- Project URL-i ja publishable-võtme jaoks on failis selgelt märgitud kohad; secret/service_role-võtit ei kasutata.
- Lehel pole andmete lisamise, muutmise ega kustutamise päringuid.
- Brauseris kontrolliti puuduva seadistuse teadet. Päris Supabase'i ühendust ei saanud kontrollida, sest URL ja publishable-võti pole projekti lisatud.
- Tulevase halduspaneeli nõue: võimaldada toodete, hindade ja fotode haldamist ning hooajalise veebilehe sisu ja kujundusvariandi muutmist. Kujundusvalikud peavad olema ette määratud, mitte vabalt sisestatav HTML või CSS.

Järgmine samm: lisada proovilehele Project URL ja publishable-võti ning kontrollida päringut RLS-reeglitega enne poe ühendamist.

## Töö jätkamine – 24.11.2026

- Live Server on paigaldatud; `supabase-proov.html` pole sellega veel avatud.
- Proovilehe Project URL on seadistatud, kuid publishable-võtme väli on kohatäitja. Varem sinna sisestatud secret-vormingus väärtus eemaldati; selle väärtust ei dokumenteerita ega kasutata.
- Brauseris kontrolliti proovilehe puuduva seadistuse teadet. Päris Supabase'i päringut pole veel tehtud.
- Proovileht ja dokumentide muudatused on kohalikus tööpuus; commit'i ega push'i ei tehtud.
- Node.js pole saadaval, mistõttu `node --check` süntaksikontrolli ei saanud käivitada. Proovilehe skript laaditi brauseris puuduva seadistuse haruga.

Järgmine samm: ava `supabase-proov.html` Live Serveriga, lisa Supabase'i publishable-võti ning kontrolli ühendust. Tühja tabeli korral peab leht teatama, et ühendus töötab, kuid avaldatud tooteid veel pole.