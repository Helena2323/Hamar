# HÄMAR – turvaülevaate kokkuvõte

**Kuupäev:** 27.11.2026
**Ulatus:** projekti failid ja kontrollimise ajal kättesaadav kohalik Giti ajalugu; Supabase'i tegelik konfiguratsioon ja andmebaas ei olnud selle aruande koostamisel iseseisvalt kontrollitavad.

## Tulemused

| # | Tõsidus | Fail / allikas | Read | Leid | Kindlus |
|---|---------|----------------|------|------|---------|
| 1 | 🟠 HIGH | Giti ajalugu, commit `97495bb25ef903e6c4531db405387bc64b8c9873` | — | Ajaloolises commit'is leidus `sb_secret_` tüüpi võti. See commit oli kättesaadav ainult kohalikust checkpoint-viitest, mitte `main`-i ega `origin/main`-i ajaloost; kontroll ei leidnud tõendit, et see jõudis GitHubi. Võtme tühistamist ei ole võimalik kinnitada. Tõsidus on ettevaatuslik, sest võtme aktiivsus ja levik on teadmata. | 9/10 |
| 2 | 🟡 MEDIUM | [admin-login.html](./admin-login.html#L198) | 198–206 | Administraatori rolli kontroll toimub brauseris. See sobib kasutajaliidese ligipääsu piiramiseks, kuid ei ole iseseisev kaitse andmete muutmisele. Haldus-CRUD-i praegu ei tuvastatud; tulevased kirjutustoimingud peavad olema kaitstud RLS-i või usaldatud serveripoolse kontrolliga. | 9/10 |
| 3 | 🟡 MEDIUM | [HANDOFF.md](./HANDOFF.md#L193) | 193–198 | Tabeli RLS-i kohta on dokumenteeritud kontrollitulemused ja viis reeglit, kuid reeglite täielikke tingimusi pole dokumenteeritud. Tabelis oli 0 rida, mistõttu avaldatud toodete nähtavuse päring ei tõesta lugemisreegli toimimist toodete korral. | 10/10 |
| 4 | 🟡 MEDIUM | [script.js](./script.js#L4) | 4–15, 68–121 | Ostukorvi kogused ja summa arvutatakse brauseris ning ostukorv salvestatakse `localStorage`-isse. See on praeguse kliendipoolse ostukorvi jaoks oodatud, kuid tulevane tellimuse töövoog ei tohi usaldada kliendi koguseid ega hindu; server peab hinna ja tellimuse valideerima. Praegust serveripoolset ostu/tellimuse voogu ei tuvastatud. | 10/10 |

Tõsidus kirjeldab tuvastatud riski ja vajaliku järelkontrolli prioriteeti; see ei tähenda, et rünnak või väärkasutus oleks toimunud.

## Kontrollitud asjaolud

- Kontrollitud projektifailides kasutati brauserisse sobivaid publishable-võtmeid; praegustes failides ei tuvastatud `sb_secret_` ega `service_role` võtit. Väärtusi ei avaldata.
- Varasemas Supabase'i kontrollis (kasutaja edastatud tulemus) teatati, et RLS oli sisse lülitatud ja viis toodete reeglit tuvastati. Anonüümsel kasutajal puudusid tabeli tasemel `UPDATE`- ja `DELETE`-õigused; tavakasutaja muutmis- ja kustutamiskatsed mõjutasid 0 rida. Testtoote toimingud tühistati `ROLLBACK`-iga.
- Avaldatud toodete päring ja tabeli loendus andsid mõlemad 0 toodet. Seetõttu ei kinnita need tulemused avaldatud toodete nähtavust ega poliitikate kõiki tingimusi.
- Vaadeldud toote- ja ostukorvitekst lisatakse DOM-i `textContent` kaudu, näiteks [script.js](./script.js#L33), mitte `innerHTML`-iga. Nende vaadeldud väljastuskohtade põhjal XSS-i ei tuvastatud; see ei tõenda kogu rakenduse ega tulevaste sisendite turvalisust.
- Administraatori leht kontrollib `app_metadata.role` väärtust pärast `getUser()` kutset ning logib rollita kasutaja välja. Päris administraatori sisselogimist ei ole dokumenteeritud testituna.

## Kontrollimata asjaolud ja piirangud

- Ajaloolise `sb_secret_` võtme tühistamise täpne staatus on kinnitamata. Varasem märge vaikimisi Secret API key kustutamisest ei seo kustutatud võtit ajaloolise võtmega.
- Ei ole tõendit, et ajalooline commit oleks GitHubi jõudnud; kohalik audit ei välista teisi koopiaid, harusid ega väliseid varukoopiaid.
- Supabase'i Dashboardi aktiivsete Secret API keys loendit ning tegelikke RLS-poliitikate tingimusi tuleb kontrollida Dashboardis.
- Administraatori päris sisselogimist, avaldatud toodete lugemist mittetühja tabeli korral ja kogu rakenduse XSS-i ei saa projektifailidest üksi kinnitada.

## Soovitatav tegevuste järjekord

1. Kontrollida Supabase'i Dashboardis aktiivseid **Secret API keys** võtmeid ning võrrelda kustutamise/auditiinfot, ilma võtmeid kopeerimata või jagamata.
2. Kontrollida `public.tooted` tabeli skeemi ja tegelikke RLS-poliitika tingimusi; koostatud ainult lugemiseks skeemipäringut pole veel käivitatud.
3. Enne toodete lisamist kinnitada hinnatüübid, piirangud ja RLS-i toimimine sobiva testandmestikuga.
4. Ühendada kolm näidistoodet, säilitades toote-ID-d, ostukorvi ja kujunduse; tellimuse loomisel arvutada hinnad serveris.
5. Jätkata halduspaneeli arendamist, tagades andmebaasitoimingute serveri- või RLS-poolse autoriseerimise.
