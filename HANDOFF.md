# Hämara projekti hetkeseis

Uuendatud: 27.11.2026

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
- Logo: HÄMAR, väikese leegiga kirja all.
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

## Töö jätkamine – 25.11.2026

- Supabase'i proovilehe ühendus õnnestus ja päring tabelisse `public.tooted` töötas.
- Tabel oli tühi ning olemas oli viis RLS-reeglit.
- Toodete lisamise reeglis kontrolliti kindlat `auth.uid()` väärtust.
- Veebilehe koodi ega andmebaasi selles etapis ei muudetud.

Järgmine samm: selle kontrolli põhjal uut arendusetappi ei määratud.

## Administraatori sisselogimine – 25.11.2026

- Loodud eraldi `admin-login.html`; poe ostukorvi, tooteloogikat ega andmebaasi ei muudetud.
- Supabase Auth kasutab e-posti/parooli ja publishable-võtit. Administraatoriõiguse kontroll nõuab serverist loetud `app_metadata.role=admin` väärtust; seda pole kasutajaandmetesse ega koodi vaikimisi määratud.
- Admini vaade ei sisalda veel toodete lisamise, muutmise ega kustutamise funktsioone. Tulevased andmebaasitoimingud peavad olema RLS-iga kaitstud.
- Varasema kontrolli järgi piirab olemasolev toodete lisamise RLS-reegel `auth.uid()` väärtust; selle kooskõla administraatori `app_metadata` rolliga pole kontrollitud.
- Brauseris kontrolliti lehe ja Supabase'i teegi laadimist ning et administraatori ala on esialgu peidetud. Päris sisselogimist ja õiguse kontrolli pole kontoga testitud.
- Git-ajaloos varem olnud salajase kujuga Supabase'i võtme kehtivus ja roteerimine on teadmata; ära kasuta vana võtit ning kontrolli/tühista see Supabase'i halduses.

Järgmine samm: pärast ajaloolise võtme tühistamise kontrolli testida sisselogimist brauseris ühe administraatori- ja ühe mitte-administraatori kontoga.

## Supabase'i Secret API võtme seis – 25.11.2026

- Kasutaja kinnituse järgi kustutati Supabase'i default Secret API key; juhtpaneel kuvati teated „Successfully deleted secret key” ja „No secret API keys found”. Publishable-võti jäi alles.
- Giti ajaloolist võtit kustutatud võtmega ei võrreldud. Seetõttu ei ole kinnitatud, et ajalooline võti oli kustutatud võti, ega märgita ajaloolise võtme riski lahendatuks.
- Veebilehe koodi ega projektifaile selles etapis ei muudetud.

Pooleli: ajaloolise võtme ja kustutatud võtme vastavus ning ajaloolise võtme tühistamise staatus on kinnitamata.

## Brändinime ühtlustamine – 25.11.2026

- Veebilehe logo kuvatakse ametliku nimega „Hämar“; halduspaneeli ja Supabase'i proovilehe pealkirjad kasutavad sama kuju.
- Tavalises lausetekstis säilitati grammatiliselt korrektne „Hämara“; Log.md ajaloolisi sissekandeid ei muudetud.
- Brauseris kontrolliti avalehte, Supabase'i proovilehte ja halduspaneeli. Proovilehe lugemispäring toimis ning tooteid ei tagastanud; administraatori sisselogimist ei testitud.

## Logo kirjakuju taastamine – 25.11.2026

- Kinnitatud logomärk on „HÄMAR“; CSS kuvab sõna suurtähtedega ning säilitab kirjastiili, tähevahe, leegi ja kaare.
- Brauseris kontrolliti logo visuaalset kuju ja SVG-dekoratsiooni.
- Halduspaneeli pealkiri „Hämar – halduspaneel“ säilis.

## Halduspaneeli logo – 25.11.2026

- `admin-login.html` päises kuvatakse kinnitatud HÄMARi logotüüp olemasoleva `logo-leek.svg` sümboli ja kaarega; all on eraldi „Halduspaneel“ pealkiri.
- Mobiilivaate logo suurus on kohandatud; brauseris kontrolliti logo ja pealkirja.
- Sisselogimisfunktsioone, värve ega turvakontrolle ei muudetud. Sisselogimist ei testitud.

## Sisselogimisväljade kontroll – 25.11.2026

- E-posti ja parooli väljad kontrolliti puhtas brauserivaates arvutis ja mobiilis ilma ajutise CSS-ita; mõlemad olid nähtavad, 44 px kõrged ning klaviatuurifookusega kasutatavad.
- Mobiilivaates ei esinenud horisontaalset ülevoolu. Sisestusväljade väärtusi ei loetud, kuvata ega salvestatud.
- Väljad olid korras ja koodimuudatust ei tehtud.

## Admini sisselogimislehe teksti lihtsustamine – 25.11.2026

- Eemaldati kolm kasutajale nähtavat tehnilist selgitust. Logo, „Halduspaneel“, sisselogimisväljad ning Supabase Authi ja administraatoriõiguste JavaScript säilitati.
- Arvuti- ja mobiilivaadet kontrolliti 1280 × 900 ning 375 × 812 mõõtudes; eemaldatud tekstid puudusid ja horisontaalset ülevoolu polnud.
- Päris sisselogimist ei testitud.

## Admini algse teatekasti eemaldamine – 25.11.2026

- Tühi algne `#status` ala on peidetud; dünaamiliste veateadete ja edukinnituste kuvamine säilib.
- Arvuti- ja mobiilivaates kontrolliti, et algset teatekasti pole ning veateate ja õiguse kinnituse teksti korral ilmub teateala nähtavale.
- Supabase Authi ega administraatoriõiguste kontrolli JavaScripti ei muudetud. Päris sisselogimist ei testitud.

## Püsivad turvanõuded – 26.11.2026

- Iga uut funktsiooni tuleb turvalisuse seisukohalt kontrollida enne valmiks lugemist.
- Saladusi ei salvestata ega avaldata; aruannetes eristatakse kontrollitud faktid, võimalikud riskid ja kontrollimata väited.
- Enne andmeid muutvate Supabase'i funktsioonide lisamist kontrollitakse administraatoriõigusi ja RLS-reegleid.
- Supabase'i turvaseadeid ega Giti ajalugu ei muudeta ilma projekti omaniku nõusolekuta.
- Log.md ja HANDOFF.md peavad kajastama tööetapi muudatusi, kontrolle ja tulemusi.

Kontroll: AGENTS.md juhiseid täiendati olemasolevaid punkte dubleerimata. Muudatusi kontrolliti diff'i ja whitespace'i kontrolliga; koodi, Supabase'i seadeid ega Giti ajalugu ei muudetud.

## Planeeritud tulevased funktsioonid – 27.11.2026

- Staatus: kõik alltoodud funktsioonid on planeeritud; neid ei ole veel rakendatud.
- Tootegaleriid.
- Mobiilimenüü.
- Tellimuse õnnestumise leht.
- Automaatsed tellimuse kinnituse ja saatmise e-kirjad.
- Halduspaneelist hallatavad hooajalised pakkumised.
- Halduspaneelist toodete, hindade ja fotode haldamine ning hooajalise avalehe sisu muutmine on juba varasemalt planeeritud; seda nõuet siin ei dubleerita.

## Järgmine vahetu tööetapp – Supabase'i RLS-i kontroll

- Kontrollida Supabase'i SQL Editoris `public.tooted` tabeli RLS-i olekut, kõigi poliitikate tingimusi ning tabeli ligipääsuõigusi.
- Copiloti koostatud ainult lugemiseks mõeldud SQL-päring on olemas, kuid seda pole veel käivitatud.
- Enne tulemuste saamist ei tehta järeldusi poliitikate sisust ega turvalisusest.