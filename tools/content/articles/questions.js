/* Nacre article: questions. Rules: Nacre is a concierge, never a clinic. Medical decisions belong to the dentist. */
module.exports = {
  id: "questions",
  published: "2026-09-23",
  updated: "2026-11-21",
  minutes: 6,
  related: ["two-trips","complications","concierge"],
  img: {"src":"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&h=788&fit=crop&q=75&auto=format","w":1400,"h":788,"thumb":"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1000&h=625&fit=crop&q=75&auto=format","og":"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=630&fit=crop&q=75&auto=format"},
  alt: {
    en: "A dentist explaining a scan on a screen to a patient in the chair",
    sv: "En tandläkare förklarar en röntgenbild på en skärm för en patient i stolen",
    no: "En tannlege forklarer et røntgenbilde på en skjerm for en pasient i stolen",
    da: "En tandlæge forklarer en scanning på en skærm for en patient i stolen",
    fi: "Hammaslääkäri selittää näytöllä olevaa kuvaa tuolissa istuvalle potilaalle"
  },
  en: {
    slug: "questions-before-dental-implants-abroad",
    title: "Dental implants abroad: 8 questions to ask before you book",
    desc: "Planning dental implants abroad or in Poland? These are the 8 questions we put to every clinic, from the dentist's experience to the guarantee.",
    lede: "These are the questions we put to every clinic on behalf of our patients. The answers say more about a clinic than its price list does.",
    cta: "Considering implants in Gdańsk?",
    faq: [
      ["Is it safe to get dental implants abroad?",
       "It can be, when you choose a licensed clinic, have a 3D scan before treatment, get the plan and price in writing and agree in advance how follow-up will work."],
      ["How do I check a dentist's licence in Poland?",
       "Ask the clinic for the dentist's licence number and check it in the central register kept by the Polish Supreme Medical Chamber (Naczelna Izba Lekarska)."],
      ["What should a quote for dental implants include?",
       "The implant, the abutment and the crown, plus scans, temporary teeth, medication and follow-up visits, each listed separately."]
    ],
    body: `
<p>An implant sits in your jawbone and should last for many years, so the way the treatment is planned matters more than the headline price. Here are the questions worth asking any clinic, at home or abroad.</p>
<h2>1. Who will place the implant?</h2>
<p>Ask who will treat you, what their qualifications are and how often they place implants. Experience with cases like yours counts most, for example several missing teeth or a full arch. In Poland, you can ask for the dentist's licence number and check it in the central register kept by the Polish Supreme Medical Chamber (Naczelna Izba Lekarska).</p>
<h2>2. Will I have a 3D scan before treatment?</h2>
<p>A cone beam CT scan (CBCT) shows how much bone you have and where the nerves and sinuses are, so the dentist can plan exactly where the implant goes. If a clinic gives you a plan without a 3D scan, ask why.</p>
<h2>3. Which implant system do you use?</h2>
<p>Ask for the manufacturer and the product line. Established systems are well documented and their parts are easy to get. Ask for a written record of the brand, type and size as well, so a dentist at home can work on the implant later.</p>
<h2>4. What exactly is included in the price?</h2>
<p>An implant usually has three parts: the implant itself, a connector called an abutment, and the crown on top. Check that the quote covers all of them, plus scans, temporary teeth, medication and follow-up visits.</p>
<h2>5. How many visits will I need?</h2>
<p>Many implant treatments take two visits a few months apart, because the implant has to heal into the bone before the final crown goes on. Ask for the timeline in writing so you can plan your trips. Our guide to <a href="{{two-trips}}">implant treatment step by step</a> explains the usual timeline.</p>
<h2>6. What if I need a bone graft?</h2>
<p>If there is not enough bone, you may need a bone graft or a sinus lift first, which adds cost and healing time. A good clinic tells you after looking at your scan, before you travel.</p>
<h2>7. What guarantee do you give?</h2>
<p>Ask what the guarantee covers, for how long, and what you have to do to keep it valid, such as regular check-ups. Get the terms in writing.</p>
<h2>8. Who looks after me when I am back home?</h2>
<p>Most questions come up after you have travelled home. Agree in advance how you will reach the clinic, whether video consultations are possible and how a follow-up visit would be arranged. Our article on <a href="{{complications}}">dental implant complications</a> explains which signs need a dentist.</p>
<p>We ask these questions for you and send you the answers in writing, together with the clinic's treatment plan and price, before you book anything.</p>`
  },
  sv: {
    slug: "tandimplantat-utomlands-8-fragor",
    title: "Tandimplantat utomlands: 8 frågor att ställa innan du bokar",
    desc: "Planerar du tandimplantat utomlands eller i Polen? Här är de 8 frågor vi ställer till varje klinik, från tandläkarens erfarenhet till garantin.",
    lede: "Det här är frågorna vi ställer till varje klinik för våra patienters räkning. Svaren säger mer om en klinik än dess prislista.",
    cta: "Funderar du på implantat i Gdańsk?",
    faq: [
      ["Är det säkert att göra tandimplantat utomlands?",
       "Det kan det vara, om du väljer en legitimerad klinik, gör en 3D-röntgen före behandlingen, får plan och pris skriftligt och i förväg kommer överens om hur uppföljningen ska gå till."],
      ["Hur kontrollerar jag en tandläkares legitimation i Polen?",
       "Be kliniken om tandläkarens legitimationsnummer och kontrollera det i det centrala register som förs av den polska läkarkammaren (Naczelna Izba Lekarska)."],
      ["Vad ska en offert för tandimplantat innehålla?",
       "Implantatet, distansen och kronan, plus röntgen, provisoriska tänder, läkemedel och återbesök, var för sig."]
    ],
    body: `
<p>Ett implantat sitter i käkbenet och ska hålla i många år, så hur behandlingen planeras betyder mer än priset i annonsen. Här är frågorna som är värda att ställa till alla kliniker, hemma eller utomlands, till exempel i Polen.</p>
<h2>1. Vem sätter in implantatet?</h2>
<p>Fråga vem som behandlar dig, vilka kvalifikationer tandläkaren har och hur ofta hen sätter in implantat. Erfarenhet av fall som ditt väger tyngst, till exempel flera saknade tänder eller en hel käke. I Polen kan du be om tandläkarens legitimationsnummer och kontrollera det i det centrala register som förs av den polska läkarkammaren (Naczelna Izba Lekarska).</p>
<h2>2. Görs en 3D-röntgen före behandlingen?</h2>
<p>En CBCT-undersökning (3D-röntgen) visar hur mycket ben du har och var nerver och bihålor ligger, så att tandläkaren kan planera exakt var implantatet ska sitta. Om en klinik ger dig en plan utan 3D-röntgen, fråga varför.</p>
<h2>3. Vilket implantatsystem använder ni?</h2>
<p>Fråga efter tillverkare och produktlinje. Etablerade system är väl dokumenterade och delarna är lätta att få tag på. Be också om en skriftlig uppgift om märke, typ och storlek, så att en tandläkare hemma kan arbeta med implantatet senare.</p>
<h2>4. Vad ingår exakt i priset?</h2>
<p>Ett implantat består oftast av tre delar: själva implantatet, en distans (abutment) och kronan ovanpå. Kontrollera att offerten omfattar alla tre, plus röntgen, provisoriska tänder, läkemedel och återbesök.</p>
<h2>5. Hur många besök behöver jag?</h2>
<p>Många implantatbehandlingar kräver två besök med några månaders mellanrum, eftersom implantatet måste läka in i benet innan den slutliga kronan sätts på. Be om tidsplanen skriftligt så att du kan planera dina resor. Vår guide om <a href="{{two-trips}}">implantatbehandling steg för steg</a> förklarar den vanliga tidsplanen.</p>
<h2>6. Vad händer om jag behöver benuppbyggnad?</h2>
<p>Om benet inte räcker kan du först behöva en benuppbyggnad eller en sinuslyft, vilket ökar kostnaden och läkningstiden. En bra klinik säger det efter att ha sett din röntgen, innan du reser.</p>
<h2>7. Vilken garanti ger ni?</h2>
<p>Fråga vad garantin omfattar, hur länge den gäller och vad du måste göra för att den ska gälla, till exempel regelbundna kontroller. Be om villkoren skriftligt.</p>
<h2>8. Vem tar hand om mig när jag är hemma igen?</h2>
<p>De flesta frågor dyker upp när du har rest hem. Kom överens i förväg om hur du når kliniken, om videokonsultationer är möjliga och hur ett återbesök skulle ordnas. Vår artikel om <a href="{{complications}}">komplikationer vid tandimplantat</a> förklarar vilka tecken som kräver en tandläkare.</p>
<p>Vi ställer de här frågorna åt dig och skickar svaren skriftligt, tillsammans med klinikens behandlingsplan och pris, innan du bokar något.</p>`
  },
  no: {
    slug: "tannimplantater-i-utlandet-8-sporsmal",
    title: "Tannimplantater i utlandet: 8 spørsmål du bør stille før du bestiller",
    desc: "Planlegger du tannimplantater i utlandet eller i Polen? Her er de 8 spørsmålene vi stiller hver klinikk, fra tannlegens erfaring til garantien.",
    lede: "Dette er spørsmålene vi stiller hver klinikk på vegne av pasientene våre. Svarene sier mer om en klinikk enn prislisten gjør.",
    cta: "Vurderer du implantater i Gdańsk?",
    faq: [
      ["Er det trygt å ta tannimplantater i utlandet?",
       "Det kan det være, hvis du velger en autorisert klinikk, blir 3D-røntget før behandlingen, får plan og pris skriftlig og avtaler på forhånd hvordan oppfølgingen skal foregå."],
      ["Hvordan sjekker jeg en tannleges autorisasjon i Polen?",
       "Be klinikken om tannlegens autorisasjonsnummer og sjekk det i det sentrale registeret som føres av det polske legekammeret (Naczelna Izba Lekarska)."],
      ["Hva bør et tilbud på tannimplantater inneholde?",
       "Implantatet, distansen og kronen, i tillegg til røntgen, midlertidige tenner, medisiner og kontrollbesøk, hver for seg."]
    ],
    body: `
<p>Et implantat sitter i kjevebeinet og skal vare i mange år, så hvordan behandlingen planlegges betyr mer enn prisen i annonsen. Her er spørsmålene det er verdt å stille enhver klinikk, hjemme eller i utlandet, for eksempel i Polen.</p>
<h2>1. Hvem setter inn implantatet?</h2>
<p>Spør hvem som skal behandle deg, hvilke kvalifikasjoner tannlegen har og hvor ofte han eller hun setter inn implantater. Erfaring med tilfeller som ditt teller mest, for eksempel flere manglende tenner eller en hel kjeve. I Polen kan du be om tannlegens autorisasjonsnummer og sjekke det i det sentrale registeret som føres av det polske legekammeret (Naczelna Izba Lekarska).</p>
<h2>2. Blir jeg 3D-røntget før behandlingen?</h2>
<p>En CBCT-undersøkelse (3D-røntgen) viser hvor mye bein du har og hvor nerver og bihuler ligger, slik at tannlegen kan planlegge nøyaktig hvor implantatet skal sitte. Hvis en klinikk gir deg en plan uten 3D-røntgen, spør hvorfor.</p>
<h2>3. Hvilket implantatsystem bruker dere?</h2>
<p>Spør etter produsent og produktserie. Etablerte systemer er godt dokumentert, og delene er lette å få tak i. Be også om en skriftlig oversikt over merke, type og størrelse, slik at en tannlege hjemme kan jobbe med implantatet senere.</p>
<h2>4. Hva er egentlig inkludert i prisen?</h2>
<p>Et implantat består vanligvis av tre deler: selve implantatet, en distanse (abutment) og kronen på toppen. Sjekk at tilbudet dekker alle tre, i tillegg til røntgen, midlertidige tenner, medisiner og kontrollbesøk.</p>
<h2>5. Hvor mange besøk trenger jeg?</h2>
<p>Mange implantatbehandlinger krever to besøk med noen måneders mellomrom, fordi implantatet må gro fast i beinet før den endelige kronen settes på. Be om tidsplanen skriftlig, så du kan planlegge reisene dine. Guiden vår om <a href="{{two-trips}}">implantatbehandling steg for steg</a> forklarer den vanlige tidsplanen.</p>
<h2>6. Hva om jeg trenger beinoppbygging?</h2>
<p>Hvis det ikke er nok bein, kan du først trenge beinoppbygging eller et sinusløft, noe som gir høyere kostnad og lengre tilhelingstid. En god klinikk sier fra etter å ha sett røntgenbildene dine, før du reiser.</p>
<h2>7. Hvilken garanti gir dere?</h2>
<p>Spør hva garantien dekker, hvor lenge den gjelder og hva du må gjøre for at den skal gjelde, for eksempel regelmessige kontroller. Få vilkårene skriftlig.</p>
<h2>8. Hvem tar seg av meg når jeg er hjemme igjen?</h2>
<p>De fleste spørsmål dukker opp etter at du har reist hjem. Avtal på forhånd hvordan du når klinikken, om videokonsultasjoner er mulig og hvordan et kontrollbesøk skal ordnes. Artikkelen vår om <a href="{{complications}}">komplikasjoner ved tannimplantater</a> forklarer hvilke tegn som krever tannlege.</p>
<p>Vi stiller disse spørsmålene for deg og sender deg svarene skriftlig, sammen med klinikkens behandlingsplan og pris, før du bestiller noe.</p>`
  },
  da: {
    slug: "tandimplantater-i-udlandet-8-spoergsmaal",
    title: "Tandimplantater i udlandet: 8 spørgsmål, du bør stille, før du booker",
    desc: "Planlægger du tandimplantater i udlandet eller i Polen? Her er de 8 spørgsmål, vi stiller hver klinik, fra tandlægens erfaring til garantien.",
    lede: "Det er de spørgsmål, vi stiller hver klinik på vegne af vores patienter. Svarene siger mere om en klinik end dens prisliste.",
    cta: "Overvejer du implantater i Gdańsk?",
    faq: [
      ["Er det sikkert at få tandimplantater i udlandet?",
       "Det kan det være, hvis du vælger en autoriseret klinik, får en 3D-scanning før behandlingen, får plan og pris skriftligt og på forhånd aftaler, hvordan opfølgningen skal foregå."],
      ["Hvordan tjekker jeg en tandlæges autorisation i Polen?",
       "Bed klinikken om tandlægens autorisationsnummer, og tjek det i det centrale register, som føres af det polske lægekammer (Naczelna Izba Lekarska)."],
      ["Hvad skal et tilbud på tandimplantater indeholde?",
       "Implantatet, distancen og kronen samt scanninger, midlertidige tænder, medicin og kontrolbesøg, hver for sig."]
    ],
    body: `
<p>Et implantat sidder i kæbeknoglen og skal holde i mange år, så måden, behandlingen planlægges på, betyder mere end prisen i annoncen. Her er de spørgsmål, der er værd at stille enhver klinik, herhjemme eller i udlandet, for eksempel i Polen.</p>
<h2>1. Hvem sætter implantatet i?</h2>
<p>Spørg, hvem der skal behandle dig, hvilke kvalifikationer tandlægen har, og hvor ofte vedkommende sætter implantater i. Erfaring med tilfælde som dit tæller mest, for eksempel flere manglende tænder eller en hel kæbe. I Polen kan du bede om tandlægens autorisationsnummer og tjekke det i det centrale register, som føres af det polske lægekammer (Naczelna Izba Lekarska).</p>
<h2>2. Får jeg en 3D-scanning før behandlingen?</h2>
<p>En CBCT-scanning (3D-røntgen) viser, hvor meget knogle du har, og hvor nerver og bihuler ligger, så tandlægen kan planlægge præcis, hvor implantatet skal sidde. Hvis en klinik giver dig en plan uden 3D-scanning, så spørg hvorfor.</p>
<h2>3. Hvilket implantatsystem bruger I?</h2>
<p>Spørg efter producent og produktserie. Etablerede systemer er veldokumenterede, og delene er lette at skaffe. Bed også om en skriftlig oversigt over mærke, type og størrelse, så en tandlæge herhjemme senere kan arbejde med implantatet.</p>
<h2>4. Hvad er præcis inkluderet i prisen?</h2>
<p>Et implantat består normalt af tre dele: selve implantatet, en distance (abutment) og kronen ovenpå. Tjek, at tilbuddet dækker alle tre, plus scanninger, midlertidige tænder, medicin og kontrolbesøg.</p>
<h2>5. Hvor mange besøg skal jeg regne med?</h2>
<p>Mange implantatbehandlinger kræver to besøg med nogle måneders mellemrum, fordi implantatet skal vokse fast i knoglen, før den endelige krone sættes på. Bed om tidsplanen skriftligt, så du kan planlægge dine rejser. Vores guide til <a href="{{two-trips}}">implantatbehandling trin for trin</a> forklarer den typiske tidsplan.</p>
<h2>6. Hvad hvis jeg har brug for knogleopbygning?</h2>
<p>Hvis der ikke er nok knogle, kan du først få brug for en knogleopbygning eller et sinusløft, hvilket øger prisen og helingstiden. En god klinik fortæller dig det, når den har set din scanning, før du rejser.</p>
<h2>7. Hvilken garanti giver I?</h2>
<p>Spørg, hvad garantien dækker, hvor længe den gælder, og hvad du skal gøre for at holde den gyldig, for eksempel regelmæssige kontroller. Få betingelserne skriftligt.</p>
<h2>8. Hvem tager sig af mig, når jeg er hjemme igen?</h2>
<p>De fleste spørgsmål opstår, når du er rejst hjem. Aftal på forhånd, hvordan du kontakter klinikken, om videokonsultationer er mulige, og hvordan et kontrolbesøg arrangeres. Vores artikel om <a href="{{complications}}">komplikationer ved tandimplantater</a> forklarer, hvilke tegn der kræver en tandlæge.</p>
<p>Vi stiller disse spørgsmål for dig og sender dig svarene skriftligt sammen med klinikkens behandlingsplan og pris, før du booker noget.</p>`
  },
  fi: {
    slug: "hammasimplantit-ulkomailla-8-kysymysta",
    title: "Hammasimplantit ulkomailla: 8 kysymystä ennen kuin varaat",
    desc: "Suunnitteletko hammasimplantteja ulkomailla tai Puolassa? Nämä 8 kysymystä esitämme jokaiselle klinikalle hammaslääkärin kokemuksesta takuuseen.",
    lede: "Nämä ovat kysymykset, jotka esitämme jokaiselle klinikalle potilaidemme puolesta. Vastaukset kertovat klinikasta enemmän kuin sen hinnasto.",
    cta: "Harkitsetko implantteja Gdańskissa?",
    faq: [
      ["Onko hammasimplantti ulkomailla turvallinen?",
       "Se voi olla, kun valitset luvan saaneen klinikan, sinusta otetaan 3D-kuva ennen hoitoa, saat suunnitelman ja hinnan kirjallisena ja sovit etukäteen, miten jälkiseuranta järjestetään."],
      ["Miten tarkistan hammaslääkärin ammattioikeuden Puolassa?",
       "Pyydä klinikalta hammaslääkärin ammatinharjoittamisoikeuden numero ja tarkista se Puolan lääkärikamarin (Naczelna Izba Lekarska) ylläpitämästä keskusrekisteristä."],
      ["Mitä hammasimplanttitarjouksen pitäisi sisältää?",
       "Implantti, jatke ja kruunu sekä kuvaukset, väliaikaiset hampaat, lääkkeet ja jälkitarkastukset, kukin eriteltynä."]
    ],
    body: `
<p>Implantti kiinnittyy leukaluuhun, ja sen on tarkoitus kestää monta vuotta, joten hoidon suunnittelu on tärkeämpää kuin mainoksen hinta. Tässä ovat kysymykset, jotka kannattaa esittää mille tahansa klinikalle, kotimaassa tai ulkomailla, esimerkiksi Puolassa.</p>
<h2>1. Kuka asentaa implantin?</h2>
<p>Kysy, kuka sinua hoitaa, mikä on hammaslääkärin koulutus ja kuinka usein hän asentaa implantteja. Eniten merkitsee kokemus kaltaisistasi tapauksista, esimerkiksi useasta puuttuvasta hampaasta tai koko leuan hoidosta. Puolassa voit pyytää hammaslääkärin ammatinharjoittamisoikeuden numeroa ja tarkistaa sen Puolan lääkärikamarin (Naczelna Izba Lekarska) ylläpitämästä keskusrekisteristä.</p>
<h2>2. Otetaanko minusta 3D-kuva ennen hoitoa?</h2>
<p>Kartiokeilatietokonetomografia eli CBCT-kuvaus näyttää, kuinka paljon luuta sinulla on ja missä hermot ja poskiontelot sijaitsevat, jotta hammaslääkäri voi suunnitella implantin paikan tarkasti. Jos klinikka antaa hoitosuunnitelman ilman 3D-kuvaa, kysy miksi.</p>
<h2>3. Mitä implanttijärjestelmää käytätte?</h2>
<p>Kysy valmistaja ja tuotesarja. Vakiintuneet järjestelmät on dokumentoitu hyvin, ja niiden osia on helppo saada. Pyydä myös kirjallinen tieto merkistä, tyypistä ja koosta, jotta kotimaasi hammaslääkäri voi myöhemmin hoitaa implanttia.</p>
<h2>4. Mitä hintaan tarkalleen sisältyy?</h2>
<p>Implantissa on yleensä kolme osaa: itse implantti, kruunun kiinnittävä jatke (abutmentti) ja kruunu. Varmista, että tarjous kattaa ne kaikki sekä kuvaukset, väliaikaiset hampaat, lääkkeet ja jälkitarkastukset.</p>
<h2>5. Montako käyntiä tarvitsen?</h2>
<p>Monet implanttihoidot vaativat kaksi käyntiä muutaman kuukauden välein, koska implantin on luuduttava ennen kuin lopullinen kruunu kiinnitetään. Pyydä aikataulu kirjallisena, jotta voit suunnitella matkasi. Oppaamme <a href="{{two-trips}}">implanttihoidosta vaihe vaiheelta</a> kertoo tavallisen aikataulun.</p>
<h2>6. Entä jos tarvitsen luunsiirron?</h2>
<p>Jos luuta ei ole tarpeeksi, saatat tarvita ensin luunsiirron tai poskiontelonpohjan kohotuksen, mikä lisää kustannuksia ja paranemisaikaa. Hyvä klinikka kertoo tämän nähtyään kuvasi, ennen kuin matkustat.</p>
<h2>7. Millaisen takuun annatte?</h2>
<p>Kysy, mitä takuu kattaa, kuinka kauan se on voimassa ja mitä sinun on tehtävä, jotta se pysyy voimassa, esimerkiksi säännölliset tarkastukset. Pyydä ehdot kirjallisena.</p>
<h2>8. Kuka huolehtii minusta, kun olen taas kotona?</h2>
<p>Useimmat kysymykset heräävät vasta kotiin palattua. Sopikaa etukäteen, miten tavoitat klinikan, onko videovastaanotto mahdollinen ja miten mahdollinen jälkikäynti järjestetään. Artikkelimme <a href="{{complications}}">hammasimplantin komplikaatioista</a> kertoo, mitkä merkit vaativat hammaslääkäriä.</p>
<p>Esitämme nämä kysymykset puolestasi ja lähetämme vastaukset kirjallisena yhdessä klinikan hoitosuunnitelman ja hinnan kanssa, ennen kuin varaat mitään.</p>`
  }
};
