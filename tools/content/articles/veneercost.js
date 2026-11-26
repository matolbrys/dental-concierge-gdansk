/* Nacre article: veneercost. Rules: Nacre is a concierge, never a clinic. Medical decisions and final prices belong to the clinic.
   Price sources (November 2026): Polish clinic price lists and price comparison sites (Gdańsk), Nordic clinic price lists.
   Exchange rates: NBP, 20.11.2026 (1 EUR = 4.4559 PLN, 1 NOK = 0.4149 PLN, 1 SEK = 0.3982 PLN, 1 DKK = 0.5961 PLN). Update yearly. */
module.exports = {
  id: "veneercost",
  published: "2026-11-26",
  minutes: 5,
  related: ["veneers", "costs", "questions"],
  img: {"src":"/img/mother-of-pearl.webp","w":1800,"h":2200},
  alt: {
    en: "Close-up of polished mother-of-pearl with soft ribbons of pink, lavender and mint",
    sv: "Närbild av polerad pärlemor med mjuka band i rosa, lavendel och mint",
    no: "Nærbilde av polert perlemor med myke bånd i rosa, lavendel og mint",
    da: "Nærbillede af poleret perlemor med bløde bånd i rosa, lavendel og mint",
    fi: "Lähikuva kiillotetusta helmiäisestä, jossa on pehmeitä vaaleanpunaisia, laventelinvärisiä ja mintunvihreitä raitoja"
  },
  en: {
    slug: "veneers-cost-poland-scandinavia",
    title: "Veneer prices in Poland and the Nordic countries (2026)",
    desc: "What porcelain and composite veneers cost per tooth in Poland compared with Norway, Sweden, Denmark and Finland in 2026, and when travelling for veneers pays off.",
    lede: "What porcelain and composite veneers cost per tooth in Poland and in the Nordic countries, and what to check before you compare.",
    cta: "Would you like a quote?",
    faq: [
      ["How much does one porcelain veneer cost in Poland?",
       "In Gdańsk, a porcelain veneer typically costs about 2,000 to 2,800 PLN per tooth in 2026, about 450 to 630 EUR. Composite veneers cost about 600 to 1,000 PLN."],
      ["How many veneers do people usually get?",
       "Often six to ten teeth in the upper jaw, the ones that show when you smile. The dentist recommends the number after an examination and a smile design."],
      ["How long does a veneer treatment take?",
       "Porcelain veneers usually need two visits about a week apart: preparation and impressions first, then fitting. Many clients plan one stay of seven to ten days."]
    ],
    body: `
<p>Veneers are thin shells, usually porcelain, bonded to the front of the teeth. They are not covered by public dental support in any of the Nordic countries, so you pay the full price wherever you are treated. Below are typical prices per tooth from public price lists in November 2026. The clinic sets the final price after an examination. If you are still deciding between treatments, read <a href="{{veneers}}">veneers, crowns or whitening</a>.</p>
<h2>Prices at a glance (porcelain, per tooth)</h2>
<div class="table-wrap"><table>
<thead><tr><th>Country</th><th>Typical price per tooth</th></tr></thead>
<tbody>
<tr><td>Poland (Gdańsk)</td><td>About 2,000 to 2,800 PLN (450 to 630 EUR)</td></tr>
<tr><td>Norway</td><td>About 5,000 to 8,500 NOK</td></tr>
<tr><td>Sweden</td><td>From about 5,000 SEK; about 12,000 SEK in Stockholm</td></tr>
<tr><td>Denmark</td><td>About 3,500 to 8,000 DKK</td></tr>
<tr><td>Finland</td><td>About 820 to 1,700 EUR</td></tr>
</tbody></table></div>
<p>Exchange rates: Narodowy Bank Polski, 20 November 2026. Composite veneers are cheaper everywhere, in Poland about 600 to 1,000 PLN per tooth.</p>
<h2>Porcelain or composite?</h2>
<p>Porcelain keeps its colour and shine for many years and usually lasts ten years or more. Composite is built up directly on the tooth, costs less and can be repaired, but it stains and wears faster. Your dentist recommends a material after an examination.</p>
<h2>When does Poland pay off?</h2>
<p>Because most people get six to ten veneers, the difference per tooth adds up. Compared with Finland and with clinics in Stockholm, the saving is often clear. In Norway and Denmark, the cheapest local clinics are close to Polish prices, so compare written quotes for the same number of teeth and the same material. Remember travel and accommodation, usually for one stay, and our concierge fee, which is always shown separately.</p>
<h2>What to check in a quote</h2>
<p>Ask whether the price includes the examination, the smile design or mock-up, temporary veneers, the final veneers and a check-up. Ask which laboratory makes them and what the guarantee covers. Most of our <a href="{{questions}}">8 questions to ask before dental implants abroad</a> apply to veneers too, and our article on <a href="{{costs}}">dental implant prices</a> covers implants.</p>
<p>We coordinate your treatment with a licensed clinic in Gdańsk. The clinic sets the price and makes every medical decision.</p>`
  },
  sv: {
    slug: "skalfasader-pris-polen",
    title: "Skalfasader pris: Polen jämfört med Sverige (2026)",
    desc: "Vad skalfasader i porslin och komposit kostar per tand i Polen jämfört med Sverige 2026, varför tandvårdsstödet inte gäller och när det lönar sig att resa.",
    lede: "Vad skalfasader kostar per tand i Polen och i Sverige, och vad du ska kontrollera innan du jämför.",
    cta: "Vill du ha en offert?",
    faq: [
      ["Vad kostar en skalfasad i Polen?",
       "I Gdańsk kostar en skalfasad i porslin oftast cirka 2 000 till 2 800 zł per tand år 2026, ungefär 5 000 till 7 000 kronor. Kompositfasader kostar cirka 600 till 1 000 zł."],
      ["Får man tandvårdsstöd för skalfasader i Sverige?",
       "Nej, inte när behandlingen görs av estetiska skäl. Då betalar du hela kostnaden själv, och därför blir prisskillnaden mot Polen tydligare än för implantat."],
      ["Hur lång tid tar behandlingen?",
       "Skalfasader i porslin kräver oftast två besök med ungefär en vecka emellan. Många planerar en vistelse på sju till tio dagar."]
    ],
    body: `
<p>Skalfasader är tunna skal, oftast i porslin, som fästs på tändernas framsida. Behandling av estetiska skäl omfattas inte av tandvårdsstödet, så du betalar hela priset själv. Här är typiska priser per tand från offentliga prislistor i november 2026. Kliniken sätter alltid det slutliga priset efter undersökning. Väger du fortfarande mellan behandlingar? Läs <a href="{{veneers}}">skalfasader, kronor eller blekning</a>.</p>
<h2>Pris i Sverige</h2>
<p>En skalfasad i porslin kostar ofta omkring 12 000 kronor per tand i Stockholm. Vissa kliniker i andra delar av landet börjar runt 5 000 kronor. Eftersom de flesta gör sex till tio fasader blir totalbeloppet snabbt stort.</p>
<h2>Pris i Polen</h2>
<p>I Gdańsk kostar en skalfasad i porslin oftast cirka 2 000 till 2 800 zł, ungefär 5 000 till 7 000 kronor enligt Narodowy Bank Polskis kurs den 20 november 2026. Kompositfasader kostar cirka 600 till 1 000 zł per tand.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Sverige</th><th>Polen (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>Porslin, per tand</td><td>Från ca 5 000 kr, ca 12 000 kr i Stockholm</td><td>Ca 5 000 till 7 000 kr</td></tr>
<tr><td>Åtta fasader</td><td>Från ca 40 000 kr, ca 96 000 kr i Stockholm</td><td>Ca 40 000 till 56 000 kr</td></tr>
<tr><td>Tandvårdsstöd</td><td>Nej, vid estetisk behandling</td><td>Nej</td></tr>
</tbody></table></div>
<h2>Lönar det sig?</h2>
<p>Jämfört med kliniker i Stockholm och andra storstäder är skillnaden ofta stor. Jämfört med de billigaste svenska klinikerna är den liten, och då talar kortare restid för att stanna hemma. Jämför alltid samma antal tänder och samma material. Räkna med resa och boende, oftast för en vistelse, och vårt conciergearvode, som alltid visas separat.</p>
<h2>Det här ska offerten visa</h2>
<p>Fråga om priset omfattar undersökning, leendedesign eller provmodell, provisoriska fasader, de slutliga fasaderna och en kontroll. Fråga vilket laboratorium som tillverkar dem och vad garantin omfattar. De flesta av våra <a href="{{questions}}">8 frågor före tandimplantat utomlands</a> gäller även fasader, och <a href="{{costs}}">vad tandimplantat kostar i Polen och Sverige</a> gäller implantat.</p>
<p>Vi samordnar din behandling med en legitimerad klinik i Gdańsk. Kliniken sätter priset och fattar alla medicinska beslut.</p>`
  },
  no: {
    slug: "fasetter-pris-polen",
    title: "Fasetter pris: Polen sammenlignet med Norge (2026)",
    desc: "Hva fasetter i porselen og kompositt koster per tann i Polen sammenlignet med Norge i 2026, hva prisen bør inkludere og når det lønner seg å reise.",
    lede: "Hva fasetter koster per tann i Polen og i Norge, og hva du bør sjekke før du sammenligner.",
    cta: "Vil du ha et tilbud?",
    faq: [
      ["Hva koster en fasett i Polen?",
       "I Gdańsk koster en porselensfasett som regel omtrent 2 000 til 2 800 zł per tann i 2026, rundt 4 800 til 6 750 kroner. Komposittfasetter koster omtrent 600 til 1 000 zł."],
      ["Er fasetter billigere i Polen enn i Norge?",
       "Ofte, men forskjellen er mindre enn mange tror. Norske priser ligger på omtrent 5 000 til 8 500 kroner per tann. Sammenlign skriftlige tilbud for samme antall tenner og samme materiale."],
      ["Hvor lang tid tar behandlingen?",
       "Porselensfasetter krever som regel to besøk med omtrent en uke imellom. Mange planlegger ett opphold på sju til ti dager."]
    ],
    body: `
<p>Fasetter er tynne skall, som regel i porselen, som festes på forsiden av tennene. Helfo dekker ikke fasetter av estetiske grunner, så du betaler hele prisen selv. Her er vanlige priser per tann fra offentlige prislister i november 2026. Klinikken setter alltid den endelige prisen etter undersøkelse. Er du usikker på hvilken behandling du trenger? Les <a href="{{veneers}}">fasetter, kroner eller bleking</a>.</p>
<h2>Pris i Norge</h2>
<p>En porselensfasett koster som regel omtrent 5 000 til 8 500 kroner per tann, avhengig av klinikk og by. De fleste får seks til ti fasetter, så totalbeløpet blir fort høyt.</p>
<h2>Pris i Polen</h2>
<p>I Gdańsk koster en porselensfasett som regel omtrent 2 000 til 2 800 zł, rundt 4 800 til 6 750 kroner etter Narodowy Bank Polskis kurs 20. november 2026. Komposittfasetter koster omtrent 600 til 1 000 zł per tann.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Norge</th><th>Polen (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>Porselen, per tann</td><td>Ca. 5 000 til 8 500 kr</td><td>Ca. 4 800 til 6 750 kr</td></tr>
<tr><td>Åtte fasetter</td><td>Ca. 40 000 til 68 000 kr</td><td>Ca. 38 000 til 54 000 kr</td></tr>
<tr><td>Offentlig støtte</td><td>Nei, ved estetisk behandling</td><td>Nei</td></tr>
</tbody></table></div>
<h2>Når lønner det seg?</h2>
<p>Forskjellen er tydeligst når du sammenligner med de dyreste norske klinikkene, og når du trenger mange fasetter. Ligger det norske tilbudet ditt nær 5 000 kroner per tann, er besparelsen liten, og da taler kortere reisevei for å bli hjemme. Husk reise og opphold, som regel ett opphold, og conciergehonoraret vårt, som alltid vises separat.</p>
<h2>Dette bør tilbudet vise</h2>
<p>Spør om prisen inkluderer undersøkelse, smilsdesign eller prøvemodell, midlertidige fasetter, de endelige fasettene og en kontroll. Spør hvilket laboratorium som lager dem, og hva garantien dekker. De fleste av våre <a href="{{questions}}">8 spørsmål før tannimplantater i utlandet</a> gjelder også fasetter, og <a href="{{costs}}">hva tannimplantat koster i Polen og Norge</a> gjelder implantater.</p>
<p>Vi koordinerer behandlingen din med en autorisert klinikk i Gdańsk. Klinikken setter prisen og tar alle medisinske beslutninger.</p>`
  },
  da: {
    slug: "tandfacader-pris-polen",
    title: "Tandfacader pris: Polen sammenlignet med Danmark (2026)",
    desc: "Hvad facader i porcelæn og komposit koster pr. tand i Polen sammenlignet med Danmark i 2026, hvad prisen bør omfatte, og hvornår det betaler sig at rejse.",
    lede: "Hvad facader koster pr. tand i Polen og i Danmark, og hvad du skal tjekke, før du sammenligner.",
    cta: "Vil du have et tilbud?",
    faq: [
      ["Hvad koster en facade i Polen?",
       "I Gdańsk koster en porcelænsfacade som regel omkring 2 000 til 2 800 zł pr. tand i 2026, cirka 3 350 til 4 700 kr. Kompositfacader koster omkring 600 til 1 000 zł."],
      ["Er facader billigere i Polen end i Danmark?",
       "Ofte ja. Danske priser ligger typisk på 3 500 til 8 000 kr pr. tand. Forskellen er størst i forhold til de dyrere klinikker, så sammenlign altid samme antal tænder og samme materiale."],
      ["Hvor lang tid tager behandlingen?",
       "Porcelænsfacader kræver som regel to besøg med cirka en uge imellem. Mange planlægger ét ophold på syv til ti dage."]
    ],
    body: `
<p>Facader er tynde skaller, som regel i porcelæn, der limes på forsiden af tænderne. Den offentlige sygesikring giver ikke tilskud til facader, så du betaler hele prisen selv. Her er typiske priser pr. tand fra offentlige prislister i november 2026. Klinikken fastsætter altid den endelige pris efter undersøgelse. Er du i tvivl om behandlingen? Læs <a href="{{veneers}}">facader, kroner eller blegning</a>.</p>
<h2>Pris i Danmark</h2>
<p>En porcelænsfacade koster typisk omkring 3 500 til 8 000 kr pr. tand, og mange klinikker ligger over 6 000 kr. De fleste får seks til ti facader, så det samlede beløb bliver hurtigt stort.</p>
<h2>Pris i Polen</h2>
<p>I Gdańsk koster en porcelænsfacade som regel omkring 2 000 til 2 800 zł, cirka 3 350 til 4 700 kr efter Narodowy Bank Polskis kurs den 20. november 2026. Kompositfacader koster omkring 600 til 1 000 zł pr. tand.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Danmark</th><th>Polen (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>Porcelæn, pr. tand</td><td>Ca. 3 500 til 8 000 kr</td><td>Ca. 3 350 til 4 700 kr</td></tr>
<tr><td>Otte facader</td><td>Ca. 28 000 til 64 000 kr</td><td>Ca. 27 000 til 38 000 kr</td></tr>
<tr><td>Offentligt tilskud</td><td>Nej</td><td>Nej</td></tr>
</tbody></table></div>
<h2>Hvornår betaler det sig?</h2>
<p>Forskellen er tydelig, når du sammenligner med klinikker over 6 000 kr pr. tand og skal have flere facader. Har du et dansk tilbud tæt på 3 500 kr pr. tand, er besparelsen lille, og så taler den kortere rejse for at blive hjemme. Husk rejse og ophold, som regel ét ophold, samt vores conciergehonorar, som altid står særskilt.</p>
<h2>Det skal tilbuddet vise</h2>
<p>Spørg, om prisen omfatter undersøgelse, smiledesign eller prøvemodel, midlertidige facader, de endelige facader og en kontrol. Spørg, hvilket laboratorium der laver dem, og hvad garantien dækker. De fleste af vores <a href="{{questions}}">8 spørgsmål før tandimplantater i udlandet</a> gælder også facader, og <a href="{{costs}}">hvad tandimplantat koster i Polen og Danmark</a> handler om implantater.</p>
<p>Vi koordinerer din behandling med en autoriseret klinik i Gdańsk. Klinikken fastsætter prisen og træffer alle medicinske beslutninger.</p>`
  },
  fi: {
    slug: "hammaslaminaatit-hinta-puola",
    title: "Hammaslaminaattien hinta Puolassa ja Suomessa (2026)",
    desc: "Mitä posliini- ja yhdistelmämuovilaminaatit maksavat hammasta kohden Puolassa verrattuna Suomeen vuonna 2026 ja milloin matka laminaattien takia kannattaa.",
    lede: "Mitä hammaslaminaatit maksavat hammasta kohden Puolassa ja Suomessa, ja mitä kannattaa tarkistaa ennen vertailua.",
    cta: "Haluatko tarjouksen?",
    faq: [
      ["Paljonko yksi posliinilaminaatti maksaa Puolassa?",
       "Gdańskissa posliinilaminaatti maksaa yleensä noin 2 000–2 800 złotya hammasta kohden vuonna 2026, noin 450–630 euroa. Yhdistelmämuovilaminaatit maksavat noin 600–1 000 złotya."],
      ["Korvaako Kela hammaslaminaatteja?",
       "Ei, kun hoito tehdään esteettisistä syistä. Maksat koko hinnan itse, minkä vuoksi hintaero Puolaan näkyy selvästi."],
      ["Kauanko hoito kestää?",
       "Posliinilaminaatit vaativat yleensä kaksi käyntiä noin viikon välein. Moni suunnittelee yhden 7–10 päivän matkan."]
    ],
    body: `
<p>Hammaslaminaatit ovat ohuita, yleensä posliinisia kuoria, jotka kiinnitetään hampaiden etupintaan. Kela ei korvaa esteettistä laminaattihoitoa, joten maksat koko hinnan itse. Alla on tyypillisiä hintoja hammasta kohden julkisista hinnastoista marraskuussa 2026. Klinikka määrittää lopullisen hinnan aina tutkimuksen jälkeen. Jos mietit vielä hoitovaihtoehtoja, lue <a href="{{veneers}}">laminaatit, kruunut vai valkaisu</a>.</p>
<h2>Hinta Suomessa</h2>
<p>Posliinilaminaatti maksaa Suomessa yleensä noin 820–1 700 euroa hammasta kohden klinikasta ja kaupungista riippuen. Useimmat tekevät kuudesta kymmeneen laminaattia, joten kokonaissumma kasvaa nopeasti.</p>
<h2>Hinta Puolassa</h2>
<p>Gdańskissa posliinilaminaatti maksaa yleensä noin 2 000–2 800 złotya, noin 450–630 euroa Narodowy Bank Polskin 20.11.2026 kurssilla. Yhdistelmämuovilaminaatit maksavat noin 600–1 000 złotya hammasta kohden.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Suomi</th><th>Puola (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>Posliini, hammasta kohden</td><td>Noin 820–1 700 €</td><td>Noin 450–630 €</td></tr>
<tr><td>Kahdeksan laminaattia</td><td>Noin 6 600–13 600 €</td><td>Noin 3 600–5 000 €</td></tr>
<tr><td>Kela-korvaus</td><td>Ei esteettisessä hoidossa</td><td>Ei</td></tr>
</tbody></table></div>
<h2>Milloin hoito Puolassa kannattaa?</h2>
<p>Laminaateissa ero Suomeen on usein selvä, varsinkin kun hampaita on useita. Vertaa silti aina samaa määrää hampaita ja samaa materiaalia. Huomioi matka ja majoitus, yleensä yksi matka, sekä concierge-palkkiomme, joka näkyy aina erikseen.</p>
<h2>Mitä tarjouksesta kannattaa tarkistaa</h2>
<p>Kysy, sisältyvätkö hintaan tutkimus, hymysuunnittelu tai kokeilumalli, väliaikaiset laminaatit, lopulliset laminaatit ja tarkastus. Kysy, mikä laboratorio ne valmistaa ja mitä takuu kattaa. Useimmat <a href="{{questions}}">8 kysymyksestä ennen hammasimplantteja ulkomailla</a> sopivat myös laminaatteihin, ja <a href="{{costs}}">hammasimplantin hinta Puolassa ja Suomessa</a> käsittelee implantteja.</p>
<p>Koordinoimme hoitosi luvan saaneen klinikan kanssa Gdańskissa. Klinikka määrittää hinnan ja tekee kaikki lääketieteelliset päätökset.</p>`
  }
};
