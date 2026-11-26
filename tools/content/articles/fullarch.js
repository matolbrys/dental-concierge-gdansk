/* Nacre article: fullarch. Rules: Nacre is a concierge, never a clinic. Medical decisions and final prices belong to the clinic.
   Price sources (November 2026): Polish clinic price lists (complete treatment, one jaw), Nordic clinic pages and price guides.
   Exchange rates: NBP, 20.11.2026 (1 EUR = 4.4559 PLN, 1 NOK = 0.4149 PLN, 1 SEK = 0.3982 PLN, 1 DKK = 0.5961 PLN). Update yearly. */
module.exports = {
  id: "fullarch",
  published: "2026-11-26",
  minutes: 6,
  related: ["costs", "two-trips", "complications"],
  img: {"src":"/img/airport-transfer.webp","w":2000,"h":1040},
  alt: {
    en: "A driver in a dark coat wheeling a traveller's suitcase to a dark car at a small airport",
    sv: "En chaufför i mörk rock drar en resenärs resväska mot en mörk bil på en liten flygplats",
    no: "En sjåfør i mørk frakk triller en reisendes koffert mot en mørk bil på en liten flyplass",
    da: "En chauffør i mørk frakke trækker en rejsendes kuffert hen til en mørk bil i en lille lufthavn",
    fi: "Kuljettaja tummassa takissa vetää matkustajan matkalaukkua kohti tummaa autoa pienellä lentokentällä"
  },
  en: {
    slug: "full-arch-dental-implants-cost-poland",
    title: "All-on-4 and full-arch implants: prices in Poland and the Nordic countries (2026)",
    desc: "What a full arch of fixed teeth on implants (All-on-4 or All-on-6) costs in Poland compared with Norway, Sweden, Denmark and Finland in 2026, and what the price includes.",
    lede: "What a full arch of fixed teeth on four to six implants costs in Poland and in the Nordic countries, and what to compare.",
    cta: "Would you like a quote?",
    faq: [
      ["How much does All-on-4 cost in Poland?",
       "A complete treatment for one jaw, with implants, a temporary bridge and the final bridge, typically costs about 30,000 to 65,000 PLN in 2026, about 6,700 to 14,600 EUR, depending on the implant system and bridge material."],
      ["What is the difference between All-on-4 and All-on-6?",
       "Both give a fixed bridge on implants for a whole jaw. All-on-4 uses four implants and All-on-6 uses six, which spreads the load more. Your dentist recommends one after a 3D scan."],
      ["How many trips does full-arch treatment need?",
       "Usually two or three. The implants and a temporary bridge are often placed during the first stay, and the final bridge is fitted after three to six months of healing."]
    ],
    body: `
<p>When all the teeth in a jaw are missing or failing, a fixed bridge on four to six implants can replace them. This is often called All-on-4 or All-on-6. It is the treatment where prices differ most between countries, and also where offers are hardest to compare. Below are typical prices from public price lists in November 2026. The clinic sets the final price after an examination and a 3D scan.</p>
<h2>What is full-arch treatment?</h2>
<p>The dentist places four to six implants in one jaw. In many cases a temporary bridge is attached the same day, so you leave with fixed teeth. After three to six months of healing, the final bridge is made, in acrylic, composite or zirconia. Read more about the usual course in <a href="{{two-trips}}">implant treatment step by step</a>.</p>
<h2>Prices at a glance (one jaw)</h2>
<div class="table-wrap"><table>
<thead><tr><th>Country</th><th>Typical price, one jaw</th><th>Public support for adults</th></tr></thead>
<tbody>
<tr><td>Poland (complete, with final bridge)</td><td>About 30,000 to 65,000 PLN (6,700 to 14,600 EUR)</td><td>None</td></tr>
<tr><td>Norway</td><td>From about 65,000 to over 140,000 NOK</td><td>Helfo may cover part in some cases</td></tr>
<tr><td>Denmark</td><td>About 100,000 to 180,000 DKK</td><td>Not covered by the public health insurance</td></tr>
<tr><td>Sweden</td><td>About 100,000 to 150,000 SEK</td><td>Yes, the high-cost protection covers a large part</td></tr>
<tr><td>Finland</td><td>Rarely published; four to six implants alone often cost 9,000 to 14,000 EUR before the bridge</td><td>Very limited (Kela)</td></tr>
</tbody></table></div>
<p>Exchange rates: Narodowy Bank Polski, 20 November 2026. Nordic prices vary widely between clinics, and published figures do not always say what they include.</p>
<h2>What affects the price</h2>
<p>The implant system, the number of implants, the material of the final bridge and whether you need extractions or bone grafting make the biggest difference. In Poland, a complete treatment with a final zirconia bridge from a premium implant system is usually at the top of the range. Always check whether a quote includes the final bridge or only the surgery and temporary teeth.</p>
<h2>When does Poland pay off?</h2>
<p>In Denmark and Finland, where adults pay for implants themselves, the difference for a full arch is often large. In Norway, prices vary so much between clinics that it is worth comparing a written quote from home with one from Gdańsk. In Sweden, the state subsidy covers most of the cost above a certain level, so a Swedish quote with the subsidy deducted is often hard to beat. Remember travel and accommodation for usually two or three stays, and our concierge fee, which is always shown separately.</p>
<h2>How to compare offers</h2>
<p>Ask for a written plan that names the implant system, the number of implants, the material of the temporary and final bridge, every visit and what the guarantee covers. Our <a href="{{questions}}">8 questions to ask before dental implants abroad</a> help you check this, and our article on <a href="{{costs}}">dental implant prices</a> covers single implants.</p>
<p>We coordinate your treatment with a licensed clinic in Gdańsk. The clinic sets the price and makes every medical decision.</p>`
  },
  sv: {
    slug: "helkake-implantat-pris-polen",
    title: "All-on-4 och helkäke på implantat: pris i Polen och Sverige (2026)",
    desc: "Vad en fast helkäke på implantat (All-on-4 eller All-on-6) kostar i Polen jämfört med Sverige 2026, hur högkostnadsskyddet påverkar och vad du ska jämföra.",
    lede: "Vad en fast tandbro på fyra till sex implantat kostar i Polen och i Sverige, och hur tandvårdsstödet påverkar.",
    cta: "Vill du ha en offert?",
    faq: [
      ["Vad kostar All-on-4 i Polen?",
       "En komplett behandling för en käke, med implantat, provisorisk bro och slutlig bro, kostar oftast cirka 30 000 till 65 000 zł år 2026, ungefär 75 000 till 163 000 kronor, beroende på implantatsystem och material."],
      ["Är All-on-4 billigare i Polen än i Sverige?",
       "Inte alltid. I Sverige täcker högkostnadsskyddet en stor del av kostnaden över en viss nivå, så en svensk offert med stödet avräknat kan bli lika billig eller billigare."],
      ["Hur många resor krävs för en helkäke?",
       "Oftast två eller tre. Implantat och provisorisk bro sätts ofta in vid första besöket, och den slutliga bron efter tre till sex månaders läkning."]
    ],
    body: `
<p>När alla tänder i en käke saknas eller är dåliga kan en fast bro på fyra till sex implantat ersätta dem. Det kallas ofta All-on-4 eller All-on-6. Här är typiska priser från offentliga prislistor i november 2026. Kliniken sätter alltid det slutliga priset efter undersökning och 3D-röntgen.</p>
<h2>Vad är en helkäke på implantat?</h2>
<p>Tandläkaren sätter fyra till sex implantat i en käke. Ofta fästs en provisorisk bro samma dag, så att du går därifrån med fasta tänder. Efter tre till sex månaders läkning görs den slutliga bron i akryl, komposit eller zirkonia. Läs mer om förloppet i <a href="{{two-trips}}">tandimplantat steg för steg</a>.</p>
<h2>Pris i Sverige</h2>
<p>En helkäke på implantat kostar ofta cirka 100 000 till 150 000 kronor före stöd. Det statliga högkostnadsskyddet täcker en stor del av kostnaden över 15 000 kronor räknat på referenspriset, så din egen kostnad kan bli betydligt lägre. Det du betalar över referenspriset ersätts inte.</p>
<h2>Pris i Polen</h2>
<p>En komplett behandling för en käke med slutlig bro kostar oftast cirka 30 000 till 65 000 zł, ungefär 75 000 till 163 000 kronor enligt Narodowy Bank Polskis kurs den 20 november 2026. Premiumsystem och en slutlig bro i zirkonia ligger i den övre delen av spannet.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Sverige</th><th>Polen (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>En käke, komplett</td><td>Cirka 100 000 till 150 000 kr före stöd</td><td>Cirka 75 000 till 163 000 kr</td></tr>
<tr><td>Statligt stöd</td><td>Högkostnadsskydd</td><td>Inget</td></tr>
<tr><td>Resor</td><td>Inga</td><td>Oftast två eller tre</td></tr>
</tbody></table></div>
<h2>Lönar det sig?</h2>
<p>Ofta inte för svenska patienter, och det säger vi hellre rakt ut. Med högkostnadsskyddet blir en svensk offert ofta svår att slå. Be om en skriftlig offert i Sverige där stödet är avräknat innan du jämför. Polen kan vara ett alternativ om den svenska kliniken ligger långt över referenspriset eller om du av andra skäl vill göra behandlingen i Gdańsk.</p>
<h2>Så jämför du</h2>
<p>Kontrollera att offerten anger implantatsystem, antal implantat, material i provisorisk och slutlig bro, alla besök och vad garantin omfattar. Våra <a href="{{questions}}">8 frågor att ställa före tandimplantat utomlands</a> hjälper dig, och <a href="{{costs}}">vad tandimplantat kostar i Polen och Sverige</a> gäller enstaka implantat.</p>
<p>Vi samordnar din behandling med en legitimerad klinik i Gdańsk. Kliniken sätter priset och fattar alla medicinska beslut.</p>`
  },
  no: {
    slug: "helkjeve-implantater-pris-polen",
    title: "All-on-4 og helkjeve på implantater: pris i Polen og Norge (2026)",
    desc: "Hva en fast helkjeve på implantater (All-on-4 eller All-on-6) koster i Polen sammenlignet med Norge i 2026, hva prisen inkluderer og hva du bør sammenligne.",
    lede: "Hva en fast bro på fire til seks implantater koster i Polen og i Norge, og hva du bør sjekke i tilbudet.",
    cta: "Vil du ha et tilbud?",
    faq: [
      ["Hva koster All-on-4 i Polen?",
       "En komplett behandling for én kjeve, med implantater, midlertidig bro og endelig bro, koster som regel omtrent 30 000 til 65 000 zł i 2026, rundt 72 000 til 157 000 kroner, avhengig av implantatsystem og materiale."],
      ["Er All-on-4 billigere i Polen enn i Norge?",
       "Ofte, men ikke alltid. Prisene i Norge varierer mye, fra rundt 65 000 til over 140 000 kroner per kjeve. Sammenlign et skriftlig tilbud fra Norge med et fra Gdańsk."],
      ["Hvor mange reiser trengs for en helkjeve?",
       "Som regel to eller tre. Implantater og midlertidig bro settes ofte inn på første reise, og den endelige broen etter tre til seks måneders tilheling."]
    ],
    body: `
<p>Når alle tennene i en kjeve mangler eller er dårlige, kan en fast bro på fire til seks implantater erstatte dem. Dette kalles ofte All-on-4 eller All-on-6. Her er vanlige priser fra offentlige prislister i november 2026. Klinikken setter alltid den endelige prisen etter undersøkelse og 3D-røntgen.</p>
<h2>Hva er en helkjeve på implantater?</h2>
<p>Tannlegen setter inn fire til seks implantater i én kjeve. Ofte festes en midlertidig bro samme dag, slik at du går derfra med faste tenner. Etter tre til seks måneders tilheling lages den endelige broen i akryl, kompositt eller zirkonia. Les mer om forløpet i <a href="{{two-trips}}">tannimplantat steg for steg</a>.</p>
<h2>Pris i Norge</h2>
<p>Prisene varierer mye mellom klinikker. Publiserte priser for én kjeve ligger fra rundt 65 000 til over 140 000 kroner, og det kommer ikke alltid fram hva som er inkludert. Helfo kan dekke en del i enkelte tilfeller.</p>
<h2>Pris i Polen</h2>
<p>En komplett behandling for én kjeve med endelig bro koster som regel omtrent 30 000 til 65 000 zł, rundt 72 000 til 157 000 kroner etter Narodowy Bank Polskis kurs 20. november 2026. Premiumsystemer og en endelig bro i zirkonia ligger øverst i spennet.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Norge</th><th>Polen (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>Én kjeve, komplett</td><td>Ca. 65 000 til over 140 000 kr</td><td>Ca. 72 000 til 157 000 kr</td></tr>
<tr><td>Offentlig støtte</td><td>Helfo i enkelte tilfeller</td><td>Ingen</td></tr>
<tr><td>Reiser</td><td>Ingen</td><td>Som regel to eller tre</td></tr>
</tbody></table></div>
<h2>Når lønner det seg?</h2>
<p>Siden prisene i Norge spriker så mye, er det viktigste å sammenligne konkrete, skriftlige tilbud for samme løsning: samme antall implantater, samme type endelig bro. Sjekk alltid om tilbudet inkluderer den endelige broen, eller bare operasjonen og de midlertidige tennene. Husk reise og opphold for som regel to eller tre opphold, og conciergehonoraret vårt, som alltid vises separat.</p>
<h2>Slik sammenligner du tilbud</h2>
<p>Be om en skriftlig plan som viser implantatsystem, antall implantater, materiale i midlertidig og endelig bro, alle besøk og hva garantien dekker. Våre <a href="{{questions}}">8 spørsmål før tannimplantater i utlandet</a> hjelper deg, og <a href="{{costs}}">hva tannimplantat koster i Polen og Norge</a> gjelder enkeltimplantater.</p>
<p>Vi koordinerer behandlingen din med en autorisert klinikk i Gdańsk. Klinikken setter prisen og tar alle medisinske beslutninger.</p>`
  },
  da: {
    slug: "helkaebe-implantater-pris-polen",
    title: "All-on-4 og helkæbe på implantater: pris i Polen og Danmark (2026)",
    desc: "Hvad en fast helkæbe på implantater (All-on-4 eller All-on-6) koster i Polen sammenlignet med Danmark i 2026, hvad prisen dækker, og hvad du skal sammenligne.",
    lede: "Hvad en fast bro på fire til seks implantater koster i Polen og i Danmark, og hvad du skal tjekke i tilbuddet.",
    cta: "Vil du have et tilbud?",
    faq: [
      ["Hvad koster All-on-4 i Polen?",
       "En komplet behandling for én kæbe, med implantater, midlertidig bro og endelig bro, koster som regel omkring 30 000 til 65 000 zł i 2026, cirka 50 000 til 109 000 kr, afhængigt af implantatsystem og materiale."],
      ["Er All-on-4 billigere i Polen end i Danmark?",
       "Som regel ja. I Danmark koster en helkæbe ofte 100 000 til 180 000 kr, og den offentlige sygesikring dækker ikke implantater. Sammenlign altid den samme løsning."],
      ["Hvor mange rejser kræver en helkæbe?",
       "Som regel to eller tre. Implantater og midlertidig bro sættes ofte i på første rejse, og den endelige bro efter tre til seks måneders heling."]
    ],
    body: `
<p>Når alle tænder i en kæbe mangler eller er dårlige, kan en fast bro på fire til seks implantater erstatte dem. Det kaldes ofte All-on-4 eller All-on-6. Her er typiske priser fra offentlige prislister i november 2026. Klinikken fastsætter altid den endelige pris efter undersøgelse og 3D-scanning.</p>
<h2>Hvad er en helkæbe på implantater?</h2>
<p>Tandlægen sætter fire til seks implantater i én kæbe. Ofte fastgøres en midlertidig bro samme dag, så du går derfra med faste tænder. Efter tre til seks måneders heling laves den endelige bro i akryl, komposit eller zirkonia. Læs mere om forløbet i <a href="{{two-trips}}">tandimplantat trin for trin</a>.</p>
<h2>Pris i Danmark</h2>
<p>En helkæbe på implantater koster ofte omkring 100 000 til 180 000 kr. Den offentlige sygesikring dækker ikke implantater, men en tandforsikring kan dække en del.</p>
<h2>Pris i Polen</h2>
<p>En komplet behandling for én kæbe med endelig bro koster som regel omkring 30 000 til 65 000 zł, cirka 50 000 til 109 000 kr efter Narodowy Bank Polskis kurs den 20. november 2026. Premiumsystemer og en endelig bro i zirkonia ligger øverst i intervallet.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Danmark</th><th>Polen (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>Én kæbe, komplet</td><td>Ca. 100 000 til 180 000 kr</td><td>Ca. 50 000 til 109 000 kr</td></tr>
<tr><td>Offentligt tilskud</td><td>Nej</td><td>Nej</td></tr>
<tr><td>Rejser</td><td>Ingen</td><td>Som regel to eller tre</td></tr>
</tbody></table></div>
<h2>Hvornår betaler det sig?</h2>
<p>Ved en helkæbe er forskellen ofte stor, fordi behandlingen koster langt mere end rejsen. Sammenlign altid den samme løsning: samme antal implantater og samme type endelig bro. Tjek, om tilbuddet omfatter den endelige bro eller kun operationen og de midlertidige tænder. Husk rejse og ophold til som regel to eller tre ophold samt vores conciergehonorar, som altid står særskilt.</p>
<h2>Sådan sammenligner du tilbud</h2>
<p>Bed om en skriftlig plan med implantatsystem, antal implantater, materiale i midlertidig og endelig bro, alle besøg og hvad garantien dækker. Vores <a href="{{questions}}">8 spørgsmål før tandimplantater i udlandet</a> hjælper dig, og <a href="{{costs}}">hvad tandimplantat koster i Polen og Danmark</a> handler om enkelte implantater.</p>
<p>Vi koordinerer din behandling med en autoriseret klinik i Gdańsk. Klinikken fastsætter prisen og træffer alle medicinske beslutninger.</p>`
  },
  fi: {
    slug: "koko-leuan-implantit-hinta-puola",
    title: "All-on-4 ja koko leuan implanttisilta: hinta Puolassa ja Suomessa (2026)",
    desc: "Mitä kiinteä koko leuan implanttisilta (All-on-4 tai All-on-6) maksaa Puolassa verrattuna Suomeen vuonna 2026, mitä hintaan sisältyy ja mitä kannattaa verrata.",
    lede: "Mitä kiinteä silta neljän tai kuuden implantin varaan maksaa Puolassa ja Suomessa, ja mitä tarjouksesta kannattaa tarkistaa.",
    cta: "Haluatko tarjouksen?",
    faq: [
      ["Paljonko All-on-4 maksaa Puolassa?",
       "Yhden leuan kokonaishoito implantteineen, väliaikaisine ja lopullisine siltoineen maksaa yleensä noin 30 000–65 000 złotya vuonna 2026, noin 6 700–14 600 euroa, implanttijärjestelmästä ja materiaalista riippuen."],
      ["Onko All-on-4 Puolassa halvempi kuin Suomessa?",
       "Yleensä kyllä. Suomalaiset klinikat julkaisevat koko leuan hintoja harvoin, mutta jo neljä tai kuusi implanttia maksaa Suomessa usein 9 000–14 000 euroa ennen siltaa."],
      ["Montako matkaa koko leuan hoito vaatii?",
       "Yleensä kaksi tai kolme. Implantit ja väliaikainen silta asennetaan usein ensimmäisellä matkalla ja lopullinen silta 3–6 kuukauden paranemisen jälkeen."]
    ],
    body: `
<p>Kun leuasta puuttuvat kaikki hampaat tai ne ovat huonossa kunnossa, ne voidaan korvata kiinteällä sillalla neljän tai kuuden implantin varassa. Tätä kutsutaan usein nimellä All-on-4 tai All-on-6. Alla on tyypillisiä hintoja julkisista hinnastoista marraskuussa 2026. Klinikka määrittää lopullisen hinnan aina tutkimuksen ja 3D-kuvauksen jälkeen.</p>
<h2>Mikä on koko leuan implanttisilta?</h2>
<p>Hammaslääkäri asentaa yhteen leukaan neljästä kuuteen implanttia. Usein väliaikainen silta kiinnitetään samana päivänä, joten lähdet klinikalta kiinteiden hampaiden kanssa. Lopullinen silta akryylista, yhdistelmämuovista tai zirkoniasta tehdään 3–6 kuukauden paranemisen jälkeen. Lue lisää hoidon kulusta artikkelista <a href="{{two-trips}}">implanttihoito vaihe vaiheelta</a>.</p>
<h2>Hinta Suomessa</h2>
<p>Suomalaiset klinikat julkaisevat koko leuan hintoja harvoin. Yksittäisen implantin mediaanihinta on noin 2 300 euroa, joten jo neljä tai kuusi implanttia maksaa usein noin 9 000–14 000 euroa ennen siltaa. Kela korvaa implanttihoitoa vain erityistapauksissa.</p>
<h2>Hinta Puolassa</h2>
<p>Yhden leuan kokonaishoito lopullisine siltoineen maksaa yleensä noin 30 000–65 000 złotya, noin 6 700–14 600 euroa Narodowy Bank Polskin 20.11.2026 kurssilla. Premium-implanttijärjestelmät ja zirkoniasilta ovat haarukan yläpäässä.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Suomi</th><th>Puola (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>Yksi leuka, kokonaishoito</td><td>Julkaistaan harvoin; pelkät implantit usein 9 000–14 000 €</td><td>Noin 6 700–14 600 €</td></tr>
<tr><td>Julkinen tuki</td><td>Hyvin vähäinen (Kela)</td><td>Ei tukea</td></tr>
<tr><td>Matkat</td><td>Ei matkoja</td><td>Yleensä kaksi tai kolme</td></tr>
</tbody></table></div>
<h2>Milloin hoito Puolassa kannattaa?</h2>
<p>Koko leuan hoidossa ero on usein suuri, koska hoito maksaa paljon enemmän kuin matkat. Vertaa aina samaa ratkaisua: sama määrä implantteja ja samanlainen lopullinen silta. Tarkista, sisältääkö tarjous lopullisen sillan vai vain leikkauksen ja väliaikaiset hampaat. Huomioi matkat ja majoitus yleensä kahdelle tai kolmelle matkalle sekä concierge-palkkiomme, joka näkyy aina erikseen.</p>
<h2>Näin vertaat tarjouksia</h2>
<p>Pyydä kirjallinen suunnitelma, jossa on implanttijärjestelmä, implanttien määrä, väliaikaisen ja lopullisen sillan materiaali, kaikki käynnit ja takuun sisältö. <a href="{{questions}}">8 kysymystä ennen hammasimplantteja ulkomailla</a> auttaa, ja <a href="{{costs}}">hammasimplantin hinta Puolassa ja Suomessa</a> käsittelee yksittäisiä implantteja.</p>
<p>Koordinoimme hoitosi luvan saaneen klinikan kanssa Gdańskissa. Klinikka määrittää hinnan ja tekee kaikki lääketieteelliset päätökset.</p>`
  }
};
