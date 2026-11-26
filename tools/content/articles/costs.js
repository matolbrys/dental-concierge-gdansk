/* Nacre article: costs. Rules: Nacre is a concierge, never a clinic. Medical decisions and final prices belong to the clinic.
   Price sources (November 2026): public clinic price lists and price guides in each country. Exchange rates: NBP, 20.11.2026
   (1 EUR = 4.4559 PLN, 1 NOK = 0.4149 PLN, 1 SEK = 0.3982 PLN, 1 DKK = 0.5961 PLN). Update yearly. */
module.exports = {
  id: "costs",
  published: "2026-11-22",
  minutes: 6,
  related: ["fullarch", "two-trips", "questions"],
  img: {"src":"/img/hotel-room.webp","w":1440,"h":960},
  alt: {
    en: "A calm hotel room with linen bedding and a window overlooking the old-town rooftops of Gdańsk",
    sv: "Ett lugnt hotellrum med linnesängkläder och ett fönster mot Gdańsks gamla stads tak",
    no: "Et rolig hotellrom med sengetøy i lin og et vindu med utsikt over takene i Gdańsks gamleby",
    da: "Et roligt hotelværelse med sengetøj i hør og et vindue med udsigt over tagene i Gdańsks gamle bydel",
    fi: "Rauhallinen hotellihuone pellavavuodevaatteineen ja ikkuna Gdańskin vanhankaupungin kattojen ylle"
  },
  en: {
    slug: "dental-implant-prices-poland-scandinavia",
    title: "Dental implant prices: Poland compared with Norway, Sweden, Denmark and Finland (2026)",
    desc: "What a dental implant with crown costs in Poland compared with Norway, Sweden, Denmark and Finland in 2026, what the price includes, and when treatment abroad pays off.",
    lede: "What a dental implant with crown costs in Poland and in the Nordic countries, what is not included, and when it pays off.",
    cta: "Would you like a quote?",
    faq: [
      ["How much does a dental implant cost in Poland?",
       "At clinics in Gdańsk, a single implant with abutment and crown typically costs 6,500 to 8,500 PLN in 2026, about 1,450 to 1,900 EUR. A bone graft, if needed, is extra."],
      ["Is a dental implant cheaper in Poland than in Scandinavia?",
       "Usually yes in Norway, Denmark and Finland, where adults pay for implants themselves. In Sweden the state dental subsidy can make a single implant as cheap at home, so it is worth comparing both."],
      ["What is not included in the price?",
       "Travel and accommodation for usually two trips, any bone graft or sinus lift, and our concierge fee, which is always shown separately in your quote."]
    ],
    body: `
<p>Price is the main reason many people from the Nordic countries look at dental treatment in Poland. Below are typical prices for one implant with abutment and crown in each country, based on public price lists in November 2026. They are a guide only: the clinic sets the final price after an examination and a 3D scan.</p>
<h2>Prices at a glance</h2>
<div class="table-wrap"><table>
<thead><tr><th>Country</th><th>One implant with crown</th><th>Public support for adults</th></tr></thead>
<tbody>
<tr><td>Poland (Gdańsk)</td><td>6,500 to 8,500 PLN (about 1,450 to 1,900 EUR)</td><td>None</td></tr>
<tr><td>Norway</td><td>About 20,000 to 40,000 NOK</td><td>Only in specific cases (Helfo)</td></tr>
<tr><td>Denmark</td><td>About 15,000 to 27,000 DKK</td><td>Not covered by the public health insurance</td></tr>
<tr><td>Finland</td><td>About 3,000 EUR (implant about 2,300 EUR plus crown)</td><td>Very limited (Kela)</td></tr>
<tr><td>Sweden</td><td>Reference price about 19,000 SEK</td><td>Yes, the high-cost protection can cover a large part</td></tr>
</tbody></table></div>
<p>Exchange rates: Narodowy Bank Polski, 20 November 2026.</p>
<h2>What is included</h2>
<p>The prices above usually include the implant, the surgery, the abutment and the final crown. Scans, temporary teeth, a bone graft or a sinus lift are often charged separately. A clear quote lists each of these, so you can compare offers line by line.</p>
<h2>What is not included</h2>
<p>Implant treatment usually takes <a href="{{two-trips}}">two trips</a> a few months apart. Add flights and accommodation for both stays, time off work, and our concierge fee, which we always show separately from the clinic's costs before you commit.</p>
<h2>When does treatment in Poland pay off?</h2>
<p>For a single implant, the saving after travel can be modest, especially compared with lower-priced clinics at home. The difference grows with several implants, bridges or a full arch, where the treatment cost is much higher than the travel cost. In Sweden, the state subsidy can make a single implant as cheap at home, so it is worth getting a Swedish quote too.</p>
<h2>Why are prices lower in Poland?</h2>
<p>Mainly because salaries and running costs are lower. Many Polish clinics use the same international implant systems as clinics in the Nordic countries. Ask which system and which laboratory will be used, so you can compare like with like.</p>
<h2>How to compare offers</h2>
<p>Ask for a written plan with the price of every step, the implant system, the guarantee and how follow-up works. Our <a href="{{questions}}">8 questions to ask before dental implants abroad</a> are a good checklist.</p>
<p>We coordinate your treatment with a licensed clinic in Gdańsk. The clinic sets the price and makes every medical decision.</p>`
  },
  sv: {
    slug: "tandimplantat-polen-pris",
    title: "Tandimplantat i Polen eller Sverige: vad blir billigast med tandvårdsstödet? (2026)",
    desc: "Vad ett tandimplantat med krona kostar i Polen jämfört med Sverige 2026, hur högkostnadsskyddet påverkar din kostnad och när behandling i Polen kan löna sig.",
    lede: "Vad ett implantat med krona kostar i Polen och i Sverige, hur högkostnadsskyddet påverkar priset och när det kan löna sig att resa.",
    cta: "Vill du ha en offert?",
    faq: [
      ["Vad kostar ett tandimplantat i Polen?",
       "På kliniker i Gdańsk kostar ett implantat med distans och krona oftast 6 500 till 8 500 zł år 2026, cirka 16 000 till 21 500 kronor. Benuppbyggnad tillkommer vid behov."],
      ["Är det billigare att göra tandimplantat i Polen än i Sverige?",
       "Inte alltid. Med det statliga högkostnadsskyddet kan ett enstaka implantat bli lika billigt eller billigare i Sverige. Räkna på båda alternativen innan du bestämmer dig."],
      ["Gäller tandvårdsstödet för behandling i Polen?",
       "Det svenska högkostnadsskyddet gäller i första hand tandvård i Sverige. Kontrollera med Försäkringskassan om ersättning för tandvård i ett annat EU-land kan gälla dig."]
    ],
    body: `
<p>Många jämför priset på tandimplantat i Polen och Sverige. För svenska patienter är bilden annorlunda än i övriga Norden, eftersom det statliga tandvårdsstödet kan täcka en stor del av kostnaden. Här är siffrorna, baserade på offentliga prislistor och referenspriser i november 2026. De är vägledande: kliniken sätter alltid det slutliga priset efter undersökning och 3D-röntgen.</p>
<h2>Vad kostar ett tandimplantat i Sverige?</h2>
<p>Statens referenspris för ett implantat med distans och krona är drygt 19 000 kronor. Klinikerna sätter egna priser, som kan ligga över eller under referenspriset.</p>
<h2>Så påverkar högkostnadsskyddet</h2>
<p>Är du under 67 år betalar du själv de första 3 000 kronorna under en tolvmånadersperiod, hälften av kostnaden mellan 3 000 och 15 000 kronor och 15 procent av det som överstiger 15 000 kronor, räknat på referenspriset. Om kliniken tar referenspris blir din kostnad för ett implantat därför ungefär 9 600 kronor. Är du 67 år eller äldre betalar du från 2026 cirka 10 procent av referenspriset. Det du betalar över referenspriset ersätts inte.</p>
<h2>Vad kostar ett tandimplantat i Polen?</h2>
<p>På kliniker i Gdańsk kostar ett implantat med distans och krona oftast 6 500 till 8 500 zł, cirka 16 000 till 21 500 kronor enligt Narodowy Bank Polskis kurs den 20 november 2026. Benuppbyggnad, provisoriska tänder och röntgen kan tillkomma.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Sverige</th><th>Polen (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>Ett implantat med krona</td><td>Referenspris cirka 19 000 kr</td><td>Cirka 16 000 till 21 500 kr</td></tr>
<tr><td>Statligt stöd</td><td>Högkostnadsskydd</td><td>Inget polskt stöd</td></tr>
<tr><td>Exempel på egen kostnad, under 67 år</td><td>Cirka 9 600 kr vid referenspris</td><td>Hela beloppet, plus resor</td></tr>
</tbody></table></div>
<h2>När kan Polen löna sig?</h2>
<p>För ett enstaka implantat blir Sverige ofta lika billigt eller billigare tack vare stödet, och vi säger det hellre rakt ut. Polen kan vara ett alternativ om din svenska klinik ligger långt över referenspriset, för behandlingar utan stöd som <a href="{{veneers}}">skalfasader</a>, eller om du av andra skäl vill göra behandlingen i Gdańsk. Kom ihåg resor och boende för oftast <a href="{{two-trips}}">två resor</a>, samt vårt conciergearvode, som alltid redovisas separat.</p>
<h2>Så jämför du</h2>
<p>Be om en skriftlig offert i Sverige där tandvårdsstödet är avräknat, och en skriftlig plan med pris för varje steg från kliniken i Polen. Våra <a href="{{questions}}">8 frågor att ställa före tandimplantat utomlands</a> hjälper dig att jämföra.</p>
<p>Vi samordnar din behandling med en legitimerad klinik i Gdańsk. Kliniken sätter priset och fattar alla medicinska beslut.</p>`
  },
  no: {
    slug: "tannimplantat-pris-polen",
    title: "Tannimplantat i Polen: pris sammenlignet med Norge (2026)",
    desc: "Hva et tannimplantat med krone koster i Polen sammenlignet med Norge i 2026, hva som er inkludert i prisen, og når det lønner seg å ta implantat i Polen.",
    lede: "Hva et tannimplantat med krone koster i Polen og i Norge, hva som ikke er med i prisen, og når det lønner seg.",
    cta: "Vil du ha et tilbud?",
    faq: [
      ["Hva koster et tannimplantat i Polen?",
       "På klinikker i Gdańsk koster et implantat med distanse og krone som regel 6 500 til 8 500 zł i 2026, omtrent 15 500 til 20 500 kroner. Beinoppbygging kommer i tillegg ved behov."],
      ["Er det billigere å ta tannimplantat i Polen enn i Norge?",
       "Som regel ja. I Norge koster et implantat med krone ofte 20 000 til 40 000 kroner, og voksne betaler selv. Etter reise blir besparelsen størst når du trenger flere implantater."],
      ["Hva er ikke med i prisen?",
       "Reise og opphold for som regel to turer, eventuell beinoppbygging eller sinusløft, og conciergehonoraret vårt, som alltid vises separat i tilbudet."]
    ],
    body: `
<p>Pris er hovedgrunnen til at mange nordmenn vurderer tannimplantat i Polen. Her er vanlige priser for ett implantat med distanse og krone, basert på offentlige prislister i november 2026. Tallene er veiledende: klinikken setter alltid den endelige prisen etter undersøkelse og 3D-røntgen.</p>
<h2>Hva koster et tannimplantat i Norge?</h2>
<p>Et implantat med krone koster som regel 20 000 til 40 000 kroner per tann, avhengig av klinikk og by. Voksne betaler selv. Helfo dekker bare i bestemte tilfeller, for eksempel etter visse sykdommer eller skader.</p>
<h2>Hva koster et tannimplantat i Polen?</h2>
<p>På klinikker i Gdańsk koster et implantat med distanse og krone oftest 6 500 til 8 500 zł, omtrent 15 500 til 20 500 kroner etter Narodowy Bank Polskis kurs 20. november 2026. Røntgen, midlertidige tenner og beinoppbygging kan komme i tillegg.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Norge</th><th>Polen (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>Ett implantat med krone</td><td>Ca. 20 000 til 40 000 kr</td><td>Ca. 15 500 til 20 500 kr</td></tr>
<tr><td>Offentlig støtte for voksne</td><td>Bare i bestemte tilfeller (Helfo)</td><td>Ingen</td></tr>
<tr><td>Reise</td><td>Ingen</td><td>Som regel to reiser</td></tr>
</tbody></table></div>
<h2>Hva er ikke med i prisen?</h2>
<p>Implantatbehandling krever som regel <a href="{{two-trips}}">to reiser</a> med noen måneders mellomrom. Regn med fly og overnatting for begge oppholdene, fri fra jobb og conciergehonoraret vårt, som vi alltid viser atskilt fra klinikkens kostnader før du bestemmer deg.</p>
<h2>Når lønner det seg?</h2>
<p>For ett enkelt implantat kan besparelsen etter reise være beskjeden, særlig sammenlignet med rimelige klinikker i Norge. Forskjellen blir større med flere implantater, broer eller en hel kjeve, der behandlingen koster langt mer enn reisen.</p>
<h2>Hvorfor er det billigere i Polen?</h2>
<p>Hovedsakelig fordi lønninger og driftskostnader er lavere. Mange polske klinikker bruker de samme internasjonale implantatsystemene som klinikker i Norge. Spør hvilket system og hvilket laboratorium som brukes, så du sammenligner likt med likt.</p>
<h2>Slik sammenligner du tilbud</h2>
<p>Be om en skriftlig plan med pris for hvert steg, implantatsystem, garanti og hvordan oppfølgingen foregår. Våre <a href="{{questions}}">8 spørsmål før tannimplantater i utlandet</a> er en god sjekkliste.</p>
<p>Vi koordinerer behandlingen din med en autorisert klinikk i Gdańsk. Klinikken setter prisen og tar alle medisinske beslutninger.</p>`
  },
  da: {
    slug: "tandimplantat-pris-polen",
    title: "Tandimplantat i Polen: pris sammenlignet med Danmark (2026)",
    desc: "Hvad et tandimplantat med krone koster i Polen sammenlignet med Danmark i 2026, hvad prisen dækker, og hvornår det kan betale sig at få implantat i Polen.",
    lede: "Hvad et tandimplantat med krone koster i Polen og i Danmark, hvad der ikke er med i prisen, og hvornår det betaler sig.",
    cta: "Vil du have et tilbud?",
    faq: [
      ["Hvad koster et tandimplantat i Polen?",
       "På klinikker i Gdańsk koster et implantat med distance og krone som regel 6 500 til 8 500 zł i 2026, omkring 11 000 til 14 500 kr. Knogleopbygning kommer oveni ved behov."],
      ["Er det billigere at få tandimplantat i Polen end i Danmark?",
       "Som regel ja. I Danmark koster et implantat med krone ofte 15 000 til 27 000 kr, og den offentlige sygesikring dækker ikke implantater. Besparelsen er størst ved flere implantater."],
      ["Hvad er ikke med i prisen?",
       "Rejse og ophold for som regel to rejser, eventuel knogleopbygning eller sinusløft og vores conciergehonorar, som altid står særskilt i tilbuddet."]
    ],
    body: `
<p>Prisen er hovedgrunden til, at mange danskere overvejer tandimplantat i Polen. Her er typiske priser for ét implantat med distance og krone, baseret på offentlige prislister i november 2026. Tallene er vejledende: klinikken fastsætter altid den endelige pris efter undersøgelse og 3D-scanning.</p>
<h2>Hvad koster et tandimplantat i Danmark?</h2>
<p>Et implantat med krone koster som regel 15 000 til 27 000 kr. Den offentlige sygesikring dækker ikke implantater, men en tandforsikring kan dække en del.</p>
<h2>Hvad koster et tandimplantat i Polen?</h2>
<p>På klinikker i Gdańsk koster et implantat med distance og krone oftest 6 500 til 8 500 zł, omkring 11 000 til 14 500 kr efter Narodowy Bank Polskis kurs den 20. november 2026. Scanninger, midlertidige tænder og knogleopbygning kan komme oveni.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Danmark</th><th>Polen (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>Ét implantat med krone</td><td>Ca. 15 000 til 27 000 kr</td><td>Ca. 11 000 til 14 500 kr</td></tr>
<tr><td>Offentligt tilskud</td><td>Nej, sygesikringen dækker ikke</td><td>Nej</td></tr>
<tr><td>Rejser</td><td>Ingen</td><td>Som regel to rejser</td></tr>
</tbody></table></div>
<h2>Hvad er ikke med i prisen?</h2>
<p>Implantatbehandling kræver som regel <a href="{{two-trips}}">to rejser</a> med nogle måneders mellemrum. Regn med fly og overnatning til begge ophold, fri fra arbejde og vores conciergehonorar, som vi altid viser adskilt fra klinikkens udgifter, før du beslutter dig.</p>
<h2>Hvornår betaler det sig?</h2>
<p>Ved ét enkelt implantat kan besparelsen efter rejsen være beskeden. Forskellen bliver større ved flere implantater, broer eller en hel kæbe, hvor behandlingen koster langt mere end rejsen.</p>
<h2>Hvorfor er det billigere i Polen?</h2>
<p>Primært fordi lønninger og driftsudgifter er lavere. Mange polske klinikker bruger de samme internationale implantatsystemer som klinikker i Danmark. Spørg, hvilket system og hvilket laboratorium der bruges, så du sammenligner lige med lige.</p>
<h2>Sådan sammenligner du tilbud</h2>
<p>Bed om en skriftlig plan med pris for hvert trin, implantatsystem, garanti og hvordan opfølgningen foregår. Vores <a href="{{questions}}">8 spørgsmål før tandimplantater i udlandet</a> er en god tjekliste.</p>
<p>Vi koordinerer din behandling med en autoriseret klinik i Gdańsk. Klinikken fastsætter prisen og træffer alle medicinske beslutninger.</p>`
  },
  fi: {
    slug: "hammasimplantti-hinta-puola",
    title: "Hammasimplantin hinta Puolassa verrattuna Suomeen (2026)",
    desc: "Mitä hammasimplantti kruunuineen maksaa Puolassa verrattuna Suomeen vuonna 2026, mitä hintaan sisältyy ja milloin implanttihoito Puolassa kannattaa.",
    lede: "Mitä hammasimplantti kruunuineen maksaa Puolassa ja Suomessa, mitä hintaan ei sisälly ja milloin se kannattaa.",
    cta: "Haluatko tarjouksen?",
    faq: [
      ["Paljonko hammasimplantti maksaa Puolassa?",
       "Gdańskin klinikoilla implantti jatkeineen ja kruunuineen maksaa yleensä 6 500–8 500 złotya vuonna 2026, noin 1 450–1 900 euroa. Mahdollinen luunsiirto maksaa erikseen."],
      ["Onko hammasimplantti Puolassa halvempi kuin Suomessa?",
       "Yleensä kyllä. Suomessa implantti maksaa usein noin 2 300 euroa ja kruunu lisäksi noin 700 euroa, eikä Kela juuri korvaa implantteja. Säästö on suurin, kun implantteja tarvitaan useampia."],
      ["Mitä hintaan ei sisälly?",
       "Matkat ja majoitus yleensä kahdelle matkalle, mahdollinen luunsiirto tai poskiontelon pohjan nosto sekä concierge-palkkiomme, joka näkyy tarjouksessa aina erikseen."]
    ],
    body: `
<p>Hinta on tärkein syy, miksi moni suomalainen harkitsee implanttihoitoa Puolassa. Alla on tyypillisiä hintoja yhdelle implantille jatkeineen ja kruunuineen julkisten hinnastojen perusteella marraskuussa 2026. Luvut ovat suuntaa antavia: klinikka määrittää lopullisen hinnan aina tutkimuksen ja 3D-kuvauksen jälkeen.</p>
<h2>Paljonko hammasimplantti maksaa Suomessa?</h2>
<p>Implantin mediaanihinta on noin 2 300 euroa, ja kruunu maksaa usein noin 700 euroa lisää. Kokonaisuus on siis tavallisesti noin 3 000 euroa. Kela korvaa implanttihoitoa vain erityistapauksissa ja pienellä summalla.</p>
<h2>Paljonko hammasimplantti maksaa Puolassa?</h2>
<p>Gdańskin klinikoilla implantti jatkeineen ja kruunuineen maksaa yleensä 6 500–8 500 złotya, noin 1 450–1 900 euroa Narodowy Bank Polskin 20.11.2026 kurssilla. Kuvaukset, väliaikaiset hampaat ja luunsiirto voivat maksaa erikseen.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Suomi</th><th>Puola (Gdańsk)</th></tr></thead>
<tbody>
<tr><td>Yksi implantti kruunuineen</td><td>Noin 3 000 €</td><td>Noin 1 450–1 900 €</td></tr>
<tr><td>Julkinen tuki aikuisille</td><td>Hyvin vähäinen (Kela)</td><td>Ei tukea</td></tr>
<tr><td>Matkat</td><td>Ei matkoja</td><td>Yleensä kaksi matkaa</td></tr>
</tbody></table></div>
<h2>Mitä hintaan ei sisälly?</h2>
<p>Implanttihoito vaatii yleensä <a href="{{two-trips}}">kaksi matkaa</a> muutaman kuukauden välein. Huomioi lennot ja majoitus molemmille matkoille, vapaapäivät töistä sekä concierge-palkkiomme, jonka näytämme aina erillään klinikan kuluista ennen kuin sitoudut.</p>
<h2>Milloin hoito Puolassa kannattaa?</h2>
<p>Yhden implantin kohdalla säästö matkakulujen jälkeen voi jäädä pieneksi. Ero kasvaa, kun tarvitaan useita implantteja, siltoja tai koko leuan ratkaisu, jolloin hoidon hinta on paljon matkakuluja suurempi.</p>
<h2>Miksi hinnat ovat Puolassa edullisempia?</h2>
<p>Lähinnä siksi, että palkat ja toimintakulut ovat pienemmät. Monet puolalaiset klinikat käyttävät samoja kansainvälisiä implanttijärjestelmiä kuin suomalaiset klinikat. Kysy, mitä järjestelmää ja laboratoriota käytetään, jotta vertaat samanlaisia hoitoja.</p>
<h2>Näin vertaat tarjouksia</h2>
<p>Pyydä kirjallinen suunnitelma, jossa on hinta jokaiselle vaiheelle, implanttijärjestelmä, takuu ja jälkiseurannan järjestelyt. <a href="{{questions}}">8 kysymystä ennen hammasimplantteja ulkomailla</a> on hyvä tarkistuslista.</p>
<p>Koordinoimme hoitosi luvan saaneen klinikan kanssa Gdańskissa. Klinikka määrittää hinnan ja tekee kaikki lääketieteelliset päätökset.</p>`
  }
};
