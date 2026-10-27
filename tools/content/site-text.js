/*
  Shared texts for the article pages and the privacy policy, in all languages.
  Privacy policy: a template. Have it reviewed by a lawyer before running campaigns.
*/
const EMAIL = "hello@wearenacre.com";
const mail = '<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>';

module.exports = {
  paths: {
    home: { en: "/", sv: "/sv/", no: "/no/", da: "/da/", fi: "/fi/" },
    blog: { en: "/blog/", sv: "/sv/artiklar/", no: "/no/artikler/", da: "/da/artikler/", fi: "/fi/artikkelit/" },
    privacy: { en: "/privacy.html", sv: "/sv/integritetspolicy.html", no: "/no/personvern.html", da: "/da/privatlivspolitik.html", fi: "/fi/tietosuoja.html" }
  },
  htmlLang: { en: "en", sv: "sv", no: "nb", da: "da", fi: "fi" },
  locale: { en: "en-GB", sv: "sv-SE", no: "nb-NO", da: "da-DK", fi: "fi-FI" },
  ogLocale: { en: "en_GB", sv: "sv_SE", no: "nb_NO", da: "da_DK", fi: "fi_FI" },
  langName: { en: "English", sv: "Svenska", no: "Norsk", da: "Dansk", fi: "Suomi" },

  ui: {
    en: { articles: "Articles", listTitle: "Articles on dental treatment in Poland | Nacre",
      listDesc: "Plain-language guides about dental implants, veneers, crowns and how a dental concierge in Gdańsk works.",
      listIntro: "Short guides for patients who are considering dental treatment in Gdańsk, Poland.",
      all: "All articles", read: "min read", readIn: "Read in",
      disclaimer: "This article is general information and not medical advice. Your treating dentist will advise you on the treatment that is right for you.",
      ctaP: "Tell us what you are considering. We reply personally, with no obligation.",
      foot: "Nacre is a patient coordination service and does not provide medical or dental treatment. All treatment is planned and performed by independent licensed clinics, which are responsible for clinical care.",
      privacy: "Privacy policy", updated: "Last updated" },
    sv: { articles: "Artiklar", listTitle: "Artiklar om tandvård i Polen | Nacre",
      listDesc: "Lättlästa guider om tandimplantat, skalfasader, kronor och hur en tandvårdsconcierge i Gdańsk arbetar.",
      listIntro: "Korta guider för dig som funderar på tandvård i Gdańsk, Polen.",
      all: "Alla artiklar", read: "min läsning", readIn: "Läs på",
      disclaimer: "Den här artikeln är allmän information och inte medicinsk rådgivning. Din behandlande tandläkare ger dig råd om den behandling som passar dig.",
      ctaP: "Berätta vad du funderar på. Vi svarar personligen, utan förpliktelser.",
      foot: "Nacre är en tjänst för patientkoordination och utför ingen medicinsk behandling eller tandvård. All behandling planeras och utförs av oberoende legitimerade kliniker, som ansvarar för den kliniska vården.",
      privacy: "Integritetspolicy", updated: "Senast uppdaterad" },
    no: { articles: "Artikler", listTitle: "Artikler om tannbehandling i Polen | Nacre",
      listDesc: "Lettleste guider om tannimplantater, fasetter, kroner og hvordan en concierge for tannbehandling i Gdańsk jobber.",
      listIntro: "Korte guider for deg som vurderer tannbehandling i Gdańsk i Polen.",
      all: "Alle artikler", read: "min lesing", readIn: "Les på",
      disclaimer: "Denne artikkelen er generell informasjon og ikke medisinske råd. Tannlegen som behandler deg, gir deg råd om behandlingen som passer for deg.",
      ctaP: "Fortell oss hva du vurderer. Vi svarer personlig og uforpliktende.",
      foot: "Nacre er en tjeneste for pasientkoordinering og tilbyr ikke medisinsk behandling eller tannbehandling. All behandling planlegges og utføres av uavhengige autoriserte klinikker, som har ansvaret for den kliniske behandlingen.",
      privacy: "Personvernerklæring", updated: "Sist oppdatert" },
    da: { articles: "Artikler", listTitle: "Artikler om tandbehandling i Polen | Nacre",
      listDesc: "Letlæste guider om tandimplantater, facader, kroner og hvordan en concierge for tandbehandling i Gdańsk arbejder.",
      listIntro: "Korte guider til dig, der overvejer tandbehandling i Gdańsk i Polen.",
      all: "Alle artikler", read: "min. læsning", readIn: "Læs på",
      disclaimer: "Denne artikel er generel information og ikke medicinsk rådgivning. Din behandlende tandlæge rådgiver dig om den behandling, der passer til dig.",
      ctaP: "Fortæl os, hvad du overvejer. Vi svarer personligt og uforpligtende.",
      foot: "Nacre er en tjeneste for patientkoordinering og udfører ikke medicinsk behandling eller tandbehandling. Al behandling planlægges og udføres af uafhængige autoriserede klinikker, som har ansvaret for den kliniske behandling.",
      privacy: "Privatlivspolitik", updated: "Senest opdateret" },
    fi: { articles: "Artikkelit", listTitle: "Artikkeleita hammashoidosta Puolassa | Nacre",
      listDesc: "Selkeitä oppaita hammasimplanteista, laminaateista, kruunuista ja siitä, miten hammashoidon concierge Gdańskissa toimii.",
      listIntro: "Lyhyitä oppaita sinulle, joka harkitset hammashoitoa Gdańskissa, Puolassa.",
      all: "Kaikki artikkelit", read: "min lukuaika", readIn: "Lue kielellä",
      disclaimer: "Tämä artikkeli on yleistä tietoa eikä lääketieteellistä neuvontaa. Hoitava hammaslääkärisi neuvoo, mikä hoito sopii sinulle.",
      ctaP: "Kerro, mitä harkitset. Vastaamme henkilökohtaisesti, ilman sitoumuksia.",
      foot: "Nacre on potilaskoordinointipalvelu eikä tarjoa lääketieteellistä hoitoa tai hammashoitoa. Kaikki hoidot suunnittelevat ja toteuttavat itsenäiset, luvan saaneet klinikat, jotka vastaavat kliinisestä hoidosta.",
      privacy: "Tietosuojaseloste", updated: "Päivitetty viimeksi" }
  },

  privacy: {
    updated: "2026-10-27",
    en: { title: "Privacy policy", desc: "How Nacre handles the personal data you send us through the website and by email.", sections: [
      ["Who is responsible for your data", "<p>The controller of your personal data is Nacre. You can reach us at " + mail + ".</p>{company}"],
      ["What we collect", "<p>When you send a request through our form, we receive the details you enter: your name, email address, phone number (optional), country, the treatment you are interested in, when you would like to travel, your message and the language of the page. When you write to us by email, we receive your message and email address.</p>"],
      ["Why we use it", "<p>We use your details only to answer your request and, if you wish, to coordinate your treatment. The legal basis is taking steps at your request before entering into an agreement (Article 6(1)(b) GDPR). We do not use your details for marketing, and we never sell them.</p>"],
      ["Health information", "<p>Please do not send medical records through the form. If your message contains information about your health, we process it only to answer you, based on your explicit consent (Article 9(2)(a) GDPR), which you give by sending it. You can withdraw your consent at any time.</p>"],
      ["Who we share it with", "<p>We share your details with a partner clinic only with your permission. To run this website and our email, we use these service providers, which process data on our behalf:</p><ul><li>SimplyForms (form delivery, EU)</li><li>OVHcloud (email, EU)</li><li>statichost.eu (website hosting, Sweden)</li><li>Google (email inbox)</li></ul><p>The website also loads fonts from Fontshare, icons from jsDelivr and some images from Unsplash. These services receive your IP address when the page loads.</p>"],
      ["How long we keep it", "<p>We keep requests for up to 12 months after our last contact, unless you become a client. In that case we keep your details for as long as needed to coordinate your treatment and to meet our legal obligations.</p>"],
      ["Your rights", "<p>You have the right to access, correct or delete your data, to restrict or object to its use, to receive it in a portable format and to withdraw your consent. Write to " + mail + ". You can also complain to a data protection authority: in Poland, the Personal Data Protection Office (UODO), or the authority in your own country.</p>"],
      ["Cookies", "<p>We do not use cookies for tracking or advertising. Your browser stores your language choice locally, so the site opens in your language next time.</p>"]
    ] },
    sv: { title: "Integritetspolicy", desc: "Så hanterar Nacre de personuppgifter du skickar till oss via webbplatsen och via e-post.", sections: [
      ["Vem ansvarar för dina uppgifter", "<p>Personuppgiftsansvarig är Nacre. Du når oss på " + mail + ".</p>{company}"],
      ["Vilka uppgifter vi samlar in", "<p>När du skickar en förfrågan via vårt formulär får vi de uppgifter du fyller i: namn, e-postadress, telefonnummer (frivilligt), land, vilken behandling du är intresserad av, när du vill resa, ditt meddelande och sidans språk. När du mejlar oss får vi ditt meddelande och din e-postadress.</p>"],
      ["Varför vi använder dem", "<p>Vi använder dina uppgifter bara för att besvara din förfrågan och, om du vill, för att samordna din behandling. Den rättsliga grunden är att vidta åtgärder på din begäran innan ett avtal ingås (artikel 6.1 b i GDPR). Vi använder inte dina uppgifter för marknadsföring och säljer dem aldrig.</p>"],
      ["Hälsouppgifter", "<p>Skicka inga journaler via formuläret. Om ditt meddelande innehåller uppgifter om din hälsa behandlar vi dem bara för att kunna svara dig, med stöd av ditt uttryckliga samtycke (artikel 9.2 a i GDPR), som du lämnar genom att skicka meddelandet. Du kan när som helst återkalla ditt samtycke.</p>"],
      ["Vem vi delar dem med", "<p>Vi delar dina uppgifter med en partnerklinik endast med ditt tillstånd. För webbplatsen och vår e-post använder vi följande tjänsteleverantörer, som behandlar uppgifter för vår räkning:</p><ul><li>SimplyForms (leverans av formulär, EU)</li><li>OVHcloud (e-post, EU)</li><li>statichost.eu (webbhotell, Sverige)</li><li>Google (e-postinkorg)</li></ul><p>Webbplatsen hämtar också typsnitt från Fontshare, ikoner från jsDelivr och vissa bilder från Unsplash. Dessa tjänster får din IP-adress när sidan laddas.</p>"],
      ["Hur länge vi sparar dem", "<p>Vi sparar förfrågningar i upp till 12 månader efter vår senaste kontakt, om du inte blir kund. I så fall sparar vi uppgifterna så länge det behövs för att samordna din behandling och uppfylla våra rättsliga skyldigheter.</p>"],
      ["Dina rättigheter", "<p>Du har rätt att få tillgång till, rätta eller radera dina uppgifter, att begränsa eller invända mot behandlingen, att få ut dem i ett överförbart format och att återkalla ditt samtycke. Skriv till " + mail + ". Du kan också klaga hos en dataskyddsmyndighet: i Sverige Integritetsskyddsmyndigheten (IMY), i Polen UODO.</p>"],
      ["Cookies", "<p>Vi använder inga cookies för spårning eller annonser. Din webbläsare sparar ditt språkval lokalt, så att webbplatsen öppnas på ditt språk nästa gång.</p>"]
    ] },
    no: { title: "Personvernerklæring", desc: "Slik behandler Nacre personopplysningene du sender oss via nettstedet og på e-post.", sections: [
      ["Hvem er ansvarlig for opplysningene dine", "<p>Behandlingsansvarlig er Nacre. Du når oss på " + mail + ".</p>{company}"],
      ["Hvilke opplysninger vi samler inn", "<p>Når du sender en forespørsel via skjemaet vårt, mottar vi opplysningene du fyller inn: navn, e-postadresse, telefonnummer (valgfritt), land, behandlingen du er interessert i, når du ønsker å reise, meldingen din og språket på siden. Når du sender oss e-post, mottar vi meldingen og e-postadressen din.</p>"],
      ["Hvorfor vi bruker dem", "<p>Vi bruker opplysningene dine bare til å svare på forespørselen din og, hvis du ønsker det, til å koordinere behandlingen din. Behandlingsgrunnlaget er å gjennomføre tiltak på din forespørsel før en avtale inngås (artikkel 6 nr. 1 bokstav b i GDPR). Vi bruker ikke opplysningene dine til markedsføring og selger dem aldri.</p>"],
      ["Helseopplysninger", "<p>Ikke send journaler via skjemaet. Hvis meldingen din inneholder opplysninger om helsen din, behandler vi dem bare for å kunne svare deg, basert på ditt uttrykkelige samtykke (artikkel 9 nr. 2 bokstav a i GDPR), som du gir ved å sende meldingen. Du kan når som helst trekke samtykket tilbake.</p>"],
      ["Hvem vi deler dem med", "<p>Vi deler opplysningene dine med en partnerklinikk bare med din tillatelse. For nettstedet og e-posten vår bruker vi disse tjenesteleverandørene, som behandler opplysninger på våre vegne:</p><ul><li>SimplyForms (levering av skjema, EU)</li><li>OVHcloud (e-post, EU)</li><li>statichost.eu (webhotell, Sverige)</li><li>Google (innboks for e-post)</li></ul><p>Nettstedet laster også inn skrifttyper fra Fontshare, ikoner fra jsDelivr og enkelte bilder fra Unsplash. Disse tjenestene mottar IP-adressen din når siden lastes inn.</p>"],
      ["Hvor lenge vi lagrer dem", "<p>Vi lagrer forespørsler i opptil 12 måneder etter siste kontakt, med mindre du blir kunde. Da lagrer vi opplysningene så lenge det er nødvendig for å koordinere behandlingen din og oppfylle våre lovpålagte plikter.</p>"],
      ["Dine rettigheter", "<p>Du har rett til innsyn, retting og sletting, til å begrense eller protestere mot behandlingen, til å få opplysningene utlevert i et overførbart format og til å trekke tilbake samtykke. Skriv til " + mail + ". Du kan også klage til en tilsynsmyndighet: i Norge Datatilsynet, i Polen UODO.</p>"],
      ["Informasjonskapsler", "<p>Vi bruker ikke informasjonskapsler til sporing eller reklame. Nettleseren din lagrer språkvalget ditt lokalt, slik at nettstedet åpnes på ditt språk neste gang.</p>"]
    ] },
    da: { title: "Privatlivspolitik", desc: "Sådan behandler Nacre de personoplysninger, du sender os via hjemmesiden og på e-mail.", sections: [
      ["Hvem er ansvarlig for dine oplysninger", "<p>Dataansvarlig er Nacre. Du kan kontakte os på " + mail + ".</p>{company}"],
      ["Hvilke oplysninger vi indsamler", "<p>Når du sender en forespørgsel via vores formular, modtager vi de oplysninger, du udfylder: navn, e-mailadresse, telefonnummer (valgfrit), land, den behandling, du er interesseret i, hvornår du gerne vil rejse, din besked og sidens sprog. Når du skriver til os på e-mail, modtager vi din besked og din e-mailadresse.</p>"],
      ["Hvorfor vi bruger dem", "<p>Vi bruger kun dine oplysninger til at besvare din forespørgsel og, hvis du ønsker det, til at koordinere din behandling. Retsgrundlaget er at træffe foranstaltninger på din anmodning, før der indgås en aftale (artikel 6, stk. 1, litra b, i GDPR). Vi bruger ikke dine oplysninger til markedsføring og sælger dem aldrig.</p>"],
      ["Helbredsoplysninger", "<p>Send ikke journaler via formularen. Hvis din besked indeholder oplysninger om dit helbred, behandler vi dem kun for at kunne svare dig, på grundlag af dit udtrykkelige samtykke (artikel 9, stk. 2, litra a, i GDPR), som du giver ved at sende beskeden. Du kan til enhver tid trække dit samtykke tilbage.</p>"],
      ["Hvem vi deler dem med", "<p>Vi deler kun dine oplysninger med en partnerklinik med din tilladelse. Til hjemmesiden og vores e-mail bruger vi følgende leverandører, som behandler oplysninger på vores vegne:</p><ul><li>SimplyForms (levering af formularer, EU)</li><li>OVHcloud (e-mail, EU)</li><li>statichost.eu (webhosting, Sverige)</li><li>Google (e-mailindbakke)</li></ul><p>Hjemmesiden henter også skrifttyper fra Fontshare, ikoner fra jsDelivr og enkelte billeder fra Unsplash. Disse tjenester modtager din IP-adresse, når siden indlæses.</p>"],
      ["Hvor længe vi gemmer dem", "<p>Vi gemmer forespørgsler i op til 12 måneder efter vores seneste kontakt, medmindre du bliver kunde. I så fald gemmer vi oplysningerne, så længe det er nødvendigt for at koordinere din behandling og opfylde vores lovmæssige forpligtelser.</p>"],
      ["Dine rettigheder", "<p>Du har ret til indsigt, berigtigelse og sletning, til at begrænse eller gøre indsigelse mod behandlingen, til at få dine oplysninger udleveret i et overførbart format og til at trække dit samtykke tilbage. Skriv til " + mail + ". Du kan også klage til en tilsynsmyndighed: i Danmark Datatilsynet, i Polen UODO.</p>"],
      ["Cookies", "<p>Vi bruger ikke cookies til sporing eller annoncer. Din browser gemmer dit sprogvalg lokalt, så hjemmesiden åbner på dit sprog næste gang.</p>"]
    ] },
    fi: { title: "Tietosuojaseloste", desc: "Näin Nacre käsittelee henkilötietoja, jotka lähetät meille verkkosivuston kautta tai sähköpostilla.", sections: [
      ["Kuka vastaa tiedoistasi", "<p>Henkilötietojesi rekisterinpitäjä on Nacre. Tavoitat meidät osoitteesta " + mail + ".</p>{company}"],
      ["Mitä tietoja keräämme", "<p>Kun lähetät yhteydenoton lomakkeellamme, saamme täyttämäsi tiedot: nimesi, sähköpostiosoitteesi, puhelinnumerosi (vapaaehtoinen), maasi, sinua kiinnostavan hoidon, toivomasi matka-ajankohdan, viestisi ja sivun kielen. Kun lähetät meille sähköpostia, saamme viestisi ja sähköpostiosoitteesi.</p>"],
      ["Miksi käytämme niitä", "<p>Käytämme tietojasi vain vastataksemme yhteydenottoosi ja, jos niin haluat, hoitosi koordinointiin. Käsittelyn oikeusperuste on pyynnöstäsi ennen sopimuksen tekemistä toteutettavat toimet (tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohta). Emme käytä tietojasi markkinointiin emmekä koskaan myy niitä.</p>"],
      ["Terveystiedot", "<p>Älä lähetä potilasasiakirjoja lomakkeella. Jos viestisi sisältää terveyttäsi koskevia tietoja, käsittelemme niitä vain vastataksemme sinulle, nimenomaisen suostumuksesi perusteella (tietosuoja-asetuksen 9 artiklan 2 kohdan a alakohta), jonka annat lähettämällä viestin. Voit peruuttaa suostumuksesi milloin tahansa.</p>"],
      ["Kenelle luovutamme niitä", "<p>Luovutamme tietojasi yhteistyöklinikalle vain luvallasi. Verkkosivuston ja sähköpostin toteuttamiseen käytämme seuraavia palveluntarjoajia, jotka käsittelevät tietoja puolestamme:</p><ul><li>SimplyForms (lomakkeiden välitys, EU)</li><li>OVHcloud (sähköposti, EU)</li><li>statichost.eu (verkkosivuston ylläpito, Ruotsi)</li><li>Google (sähköpostilaatikko)</li></ul><p>Sivusto lataa myös fontteja Fontsharesta, kuvakkeita jsDelivristä ja joitakin kuvia Unsplashista. Nämä palvelut saavat IP-osoitteesi, kun sivu latautuu.</p>"],
      ["Kuinka kauan säilytämme niitä", "<p>Säilytämme yhteydenotot enintään 12 kuukautta viimeisen yhteydenpidon jälkeen, ellei sinusta tule asiakastamme. Siinä tapauksessa säilytämme tiedot niin kauan kuin hoitosi koordinointi ja lakisääteiset velvoitteemme edellyttävät.</p>"],
      ["Oikeutesi", "<p>Sinulla on oikeus saada pääsy tietoihisi, oikaista tai poistaa ne, rajoittaa niiden käsittelyä tai vastustaa sitä, saada ne siirrettävässä muodossa ja peruuttaa suostumuksesi. Kirjoita osoitteeseen " + mail + ". Voit myös tehdä valituksen valvontaviranomaiselle: Suomessa tietosuojavaltuutetun toimistolle, Puolassa UODO:lle.</p>"],
      ["Evästeet", "<p>Emme käytä evästeitä seurantaan tai mainontaan. Selaimesi tallentaa kielivalintasi paikallisesti, jotta sivusto avautuu ensi kerralla omalla kielelläsi.</p>"]
    ] }
  }
};
