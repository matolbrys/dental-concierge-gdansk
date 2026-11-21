/* Nacre article: concierge. Rules: Nacre is a concierge, never a clinic. Medical decisions belong to the dentist. */
module.exports = {
  id: "concierge",
  published: "2026-10-27",
  updated: "2026-11-21",
  minutes: 4,
  related: ["questions","complications","two-trips"],
  img: {"src":"/img/clinic-matching.webp","w":1000,"h":620},
  alt: {
    en: "A coordinator in a navy sweater reviewing a printed treatment plan, with a dental X-ray on a tablet",
    sv: "En koordinator i marinblå tröja går igenom en utskriven behandlingsplan, med en tandröntgen på en surfplatta",
    no: "En koordinator i marineblå genser går gjennom en utskrevet behandlingsplan, med et tannrøntgenbilde på et nettbrett",
    da: "En koordinator i marineblå sweater gennemgår en udskrevet behandlingsplan med et tandrøntgenbillede på en tablet",
    fi: "Tummansiniseen neuleeseen pukeutunut koordinaattori käy läpi tulostettua hoitosuunnitelmaa, tabletilla hammasröntgenkuva"
  },
  en: {
    slug: "what-is-a-dental-concierge",
    title: "What does a dental concierge do, and why is it not a clinic?",
    desc: "A dental concierge organises everything around your treatment, while a licensed clinic is responsible for the treatment itself. Here is where the line runs.",
    lede: "A dental concierge organises everything around your treatment. The treatment itself stays with a licensed clinic. Here is where that line runs, and why it matters to you.",
    cta: "Questions before you decide?",
    faq: [
      ["Is a dental concierge the same as a dental tourism agency?",
       "They overlap. A good dental concierge focuses on personal coordination around your treatment and is clear that every medical decision belongs to the licensed clinic."],
      ["Can a dental concierge give medical advice?",
       "No. A concierge passes your questions to the dentist and makes sure you get the answers, but diagnosis and treatment advice always come from licensed dentists."],
      ["How is a concierge paid?",
       "At Nacre, our concierge fee is shown separately from the clinic's treatment costs, in writing, before you commit."]
    ],
    body: `
<p>When people look into dental treatment abroad, they usually find two kinds of websites: clinics, and services that help patients reach them. From the outside they can look alike. They are not the same, and the difference decides who you speak to, who you pay and who is responsible for your care.</p>
<h2>What is a dental concierge?</h2>
<p>A dental concierge is a coordination service for patients. It helps you find a suitable clinic, gathers the information you need to decide and organises the practical side of the trip. It does not examine you, diagnose anything or carry out treatment. Those belong to licensed dentists.</p>
<h2>What a concierge does</h2>
<ul>
<li>Listens to what you are considering and what matters to you, such as timing, language or nerves about the dentist.</li>
<li>Suggests licensed clinics that suit your case and explains how they work.</li>
<li>Passes your questions to the clinic and makes sure you receive a written treatment plan and price.</li>
<li>Schedules your appointments and, if you wish, arranges an airport transfer and suggests quiet hotels nearby.</li>
<li>Stays in touch after you return home and helps arrange any follow-up with the clinic.</li>
</ul>
<h2>What a concierge does not do</h2>
<p>A concierge does not decide which treatment you need, does not assess X-rays and does not promise results. If a coordinator starts recommending implants over a bridge, or tells you a treatment is certain to work, they have stepped into the dentist's role. A good concierge says plainly that this is a question for the dentist, and then makes sure the dentist answers it.</p>
<h2>Why the line matters</h2>
<p><strong>Responsibility.</strong> The clinic that treats you is responsible for diagnosis, treatment and clinical aftercare, and its dentists are licensed and supervised for exactly that. The concierge is responsible for its own work: accurate information, careful organisation and being easy to reach.</p>
<p><strong>Clear costs.</strong> At Nacre, the clinic's treatment costs and our concierge fee are shown separately and in writing, before you commit. You always know what you pay for clinical care and what you pay for coordination.</p>
<p><strong>An independent medical decision.</strong> Your plan is made by a dentist after an examination, not by the person who organised your trip.</p>
<h2>How do you recognise a good dental concierge?</h2>
<ul>
<li>It tells you which clinic and which dentists will treat you. In Poland, you can check a dentist's right to practise in the central register kept by the Polish Supreme Medical Chamber (Naczelna Izba Lekarska).</li>
<li>It gives you the clinic's treatment plan and price in writing.</li>
<li>It is open about its own fee.</li>
<li>It never pressures you to decide quickly.</li>
<li>It is clear about what it cannot do.</li>
</ul>
<h2>How Nacre works</h2>
<p>Nacre is a dental concierge in Gdańsk, Poland. We work with licensed clinics, help you choose one and take care of everything around your treatment, from the first message to the follow-up at home. Every medical question is answered by the clinic's dentists. We make sure you receive those answers, in writing and in good time. Before you choose a clinic, these <a href="{{questions}}">8 questions</a> are a good place to start.</p>`
  },
  sv: {
    slug: "vad-ar-en-tandvardsconcierge",
    title: "Vad gör en tandvårdsconcierge, och varför är det ingen klinik?",
    desc: "En tandvårdsconcierge ordnar allt runt din behandling, medan en legitimerad klinik ansvarar för själva behandlingen. Här går gränsen.",
    lede: "En tandvårdsconcierge ordnar allt runt din behandling. Själva behandlingen ligger hos en legitimerad klinik. Här är var gränsen går, och varför den spelar roll för dig.",
    cta: "Har du frågor innan du bestämmer dig?",
    faq: [
      ["Är en tandvårdsconcierge samma sak som en tandvårdsresebyrå?",
       "De överlappar. En bra tandvårdsconcierge fokuserar på personlig samordning runt din behandling och är tydlig med att alla medicinska beslut hör till den legitimerade kliniken."],
      ["Kan en tandvårdsconcierge ge medicinska råd?",
       "Nej. En concierge förmedlar dina frågor till tandläkaren och ser till att du får svar, men diagnos och råd om behandling kommer alltid från legitimerade tandläkare."],
      ["Hur får en concierge betalt?",
       "Hos Nacre redovisas vårt conciergearvode separat från klinikens behandlingskostnader, skriftligt, innan du bestämmer dig."]
    ],
    body: `
<p>När man tittar på tandvård utomlands hittar man oftast två sorters webbplatser: kliniker och tjänster som hjälper patienter att nå dem. Utifrån kan de se likadana ut. De är inte samma sak, och skillnaden avgör vem du pratar med, vem du betalar och vem som ansvarar för din vård.</p>
<h2>Vad är en tandvårdsconcierge?</h2>
<p>En tandvårdsconcierge är en koordineringstjänst för patienter. Den hjälper dig att hitta en lämplig klinik, samlar den information du behöver för att bestämma dig och ordnar det praktiska kring resan. Den undersöker dig inte, ställer inga diagnoser och utför ingen behandling. Det hör till legitimerade tandläkare.</p>
<h2>Vad en concierge gör</h2>
<ul>
<li>Lyssnar på vad du funderar på och vad som är viktigt för dig, till exempel tidpunkt, språk eller nervositet inför tandläkaren.</li>
<li>Föreslår legitimerade kliniker som passar ditt fall och förklarar hur de arbetar.</li>
<li>Förmedlar dina frågor till kliniken och ser till att du får en skriftlig behandlingsplan och ett pris.</li>
<li>Bokar dina besök och ordnar, om du vill, transfer från flygplatsen och föreslår lugna hotell i närheten.</li>
<li>Håller kontakten när du är hemma igen och hjälper till att ordna eventuella återbesök hos kliniken.</li>
</ul>
<h2>Vad en concierge inte gör</h2>
<p>En concierge bestämmer inte vilken behandling du behöver, bedömer inte röntgenbilder och lovar inga resultat. Om en koordinator börjar rekommendera implantat framför en bro, eller säger att en behandling säkert kommer att lyckas, har hen klivit in i tandläkarens roll. En bra concierge säger rakt ut att det är en fråga för tandläkaren, och ser sedan till att tandläkaren svarar.</p>
<h2>Varför gränsen spelar roll</h2>
<p><strong>Ansvar.</strong> Kliniken som behandlar dig ansvarar för diagnos, behandling och klinisk eftervård, och dess tandläkare är legitimerade och står under tillsyn just för det. Conciergen ansvarar för sitt eget arbete: korrekt information, noggrann planering och att vara lätt att nå.</p>
<p><strong>Tydliga kostnader.</strong> Hos Nacre redovisas klinikens behandlingskostnader och vårt conciergearvode separat och skriftligt, innan du bestämmer dig. Du vet alltid vad du betalar för vården och vad du betalar för koordineringen.</p>
<p><strong>Ett självständigt medicinskt beslut.</strong> Din plan tas fram av en tandläkare efter en undersökning, inte av den som har ordnat din resa.</p>
<h2>Hur känner man igen en bra tandvårdsconcierge?</h2>
<ul>
<li>Den berättar vilken klinik och vilka tandläkare som ska behandla dig. I Polen kan du kontrollera en tandläkares legitimation i det centrala register som förs av den polska läkarkammaren (Naczelna Izba Lekarska).</li>
<li>Den ger dig klinikens behandlingsplan och pris skriftligt.</li>
<li>Den är öppen med sitt eget arvode.</li>
<li>Den pressar dig aldrig att bestämma dig snabbt.</li>
<li>Den är tydlig med vad den inte kan göra.</li>
</ul>
<h2>Så arbetar Nacre</h2>
<p>Nacre är en tandvårdsconcierge i Gdańsk, Polen. Vi arbetar med legitimerade kliniker, hjälper dig att välja en av dem och tar hand om allt runt din behandling, från det första meddelandet till uppföljningen hemma. Alla medicinska frågor besvaras av klinikens tandläkare. Vi ser till att du får de svaren, skriftligt och i god tid. Innan du väljer klinik är de här <a href="{{questions}}">8 frågorna</a> en bra utgångspunkt.</p>`
  },
  no: {
    slug: "hva-er-en-concierge-for-tannbehandling",
    title: "Hva gjør en concierge for tannbehandling, og hvorfor er det ikke en klinikk?",
    desc: "En concierge for tannbehandling ordner alt rundt behandlingen din, mens en autorisert klinikk har ansvaret for selve behandlingen. Her går grensen.",
    lede: "En concierge for tannbehandling ordner alt rundt behandlingen din. Selve behandlingen ligger hos en autorisert klinikk. Her er hvor grensen går, og hvorfor den betyr noe for deg.",
    cta: "Har du spørsmål før du bestemmer deg?",
    faq: [
      ["Er en concierge for tannbehandling det samme som et tannturismebyrå?",
       "De overlapper. En god concierge for tannbehandling konsentrerer seg om personlig koordinering rundt behandlingen din og er tydelig på at alle medisinske beslutninger hører til den autoriserte klinikken."],
      ["Kan en concierge for tannbehandling gi medisinske råd?",
       "Nei. En concierge formidler spørsmålene dine til tannlegen og sørger for at du får svar, men diagnose og råd om behandling kommer alltid fra autoriserte tannleger."],
      ["Hvordan får en concierge betalt?",
       "Hos Nacre vises conciergehonoraret vårt atskilt fra klinikkens behandlingskostnader, skriftlig, før du bestemmer deg."]
    ],
    body: `
<p>Når man undersøker tannbehandling i utlandet, finner man som regel to typer nettsider: klinikker, og tjenester som hjelper pasienter å komme dit. Utenfra kan de ligne på hverandre. De er ikke det samme, og forskjellen avgjør hvem du snakker med, hvem du betaler og hvem som har ansvaret for behandlingen din.</p>
<h2>Hva er en concierge for tannbehandling?</h2>
<p>En concierge for tannbehandling er en koordineringstjeneste for pasienter. Den hjelper deg å finne en egnet klinikk, samler informasjonen du trenger for å bestemme deg, og ordner det praktiske rundt reisen. Den undersøker deg ikke, stiller ingen diagnoser og utfører ingen behandling. Det hører til autoriserte tannleger.</p>
<h2>Hva en concierge gjør</h2>
<ul>
<li>Lytter til hva du vurderer og hva som er viktig for deg, for eksempel tidspunkt, språk eller nervøsitet for tannlegen.</li>
<li>Foreslår autoriserte klinikker som passer ditt tilfelle, og forklarer hvordan de jobber.</li>
<li>Formidler spørsmålene dine til klinikken og sørger for at du får en skriftlig behandlingsplan og pris.</li>
<li>Bestiller timene dine og ordner, hvis du ønsker det, transport fra flyplassen og foreslår rolige hoteller i nærheten.</li>
<li>Holder kontakten når du er hjemme igjen, og hjelper til med å ordne eventuell oppfølging hos klinikken.</li>
</ul>
<h2>Hva en concierge ikke gjør</h2>
<p>En concierge bestemmer ikke hvilken behandling du trenger, vurderer ikke røntgenbilder og lover ingen resultater. Hvis en koordinator begynner å anbefale implantater fremfor en bro, eller sier at en behandling helt sikkert vil lykkes, har vedkommende gått inn i tannlegens rolle. En god concierge sier rett ut at dette er et spørsmål for tannlegen, og sørger deretter for at tannlegen svarer.</p>
<h2>Hvorfor grensen betyr noe</h2>
<p><strong>Ansvar.</strong> Klinikken som behandler deg, har ansvaret for diagnose, behandling og klinisk oppfølging, og tannlegene der er autorisert og under tilsyn nettopp for dette. Conciergen har ansvaret for sitt eget arbeid: riktig informasjon, grundig organisering og å være lett å nå.</p>
<p><strong>Tydelige kostnader.</strong> Hos Nacre vises klinikkens behandlingskostnader og vårt conciergehonorar hver for seg og skriftlig, før du bestemmer deg. Du vet alltid hva du betaler for behandlingen og hva du betaler for koordineringen.</p>
<p><strong>En uavhengig medisinsk beslutning.</strong> Planen din lages av en tannlege etter en undersøkelse, ikke av den som organiserte reisen din.</p>
<h2>Hvordan kjenner du igjen en god concierge for tannbehandling?</h2>
<ul>
<li>Den forteller deg hvilken klinikk og hvilke tannleger som skal behandle deg. I Polen kan du sjekke en tannleges autorisasjon i det sentrale registeret som føres av det polske legekammeret (Naczelna Izba Lekarska).</li>
<li>Den gir deg klinikkens behandlingsplan og pris skriftlig.</li>
<li>Den er åpen om sitt eget honorar.</li>
<li>Den presser deg aldri til å bestemme deg raskt.</li>
<li>Den er tydelig på hva den ikke kan gjøre.</li>
</ul>
<h2>Slik jobber Nacre</h2>
<p>Nacre er en concierge for tannbehandling i Gdańsk i Polen. Vi samarbeider med autoriserte klinikker, hjelper deg å velge en av dem og tar oss av alt rundt behandlingen din, fra den første meldingen til oppfølgingen hjemme. Alle medisinske spørsmål besvares av klinikkens tannleger. Vi sørger for at du får svarene, skriftlig og i god tid. Før du velger klinikk, er disse <a href="{{questions}}">8 spørsmålene</a> et godt sted å begynne.</p>`
  },
  da: {
    slug: "hvad-er-en-concierge-for-tandbehandling",
    title: "Hvad laver en concierge for tandbehandling, og hvorfor er det ikke en klinik?",
    desc: "En concierge for tandbehandling ordner alt omkring din behandling, mens en autoriseret klinik har ansvaret for selve behandlingen. Her går grænsen.",
    lede: "En concierge for tandbehandling ordner alt omkring din behandling. Selve behandlingen ligger hos en autoriseret klinik. Her er, hvor grænsen går, og hvorfor den betyder noget for dig.",
    cta: "Har du spørgsmål, før du beslutter dig?",
    faq: [
      ["Er en concierge for tandbehandling det samme som et tandturismebureau?",
       "De overlapper. En god concierge for tandbehandling fokuserer på personlig koordinering omkring din behandling og er tydelig om, at alle medicinske beslutninger hører til den autoriserede klinik."],
      ["Kan en concierge for tandbehandling give medicinsk rådgivning?",
       "Nej. En concierge giver dine spørgsmål videre til tandlægen og sørger for, at du får svar, men diagnose og råd om behandling kommer altid fra autoriserede tandlæger."],
      ["Hvordan bliver en concierge betalt?",
       "Hos Nacre vises vores conciergehonorar adskilt fra klinikkens behandlingsudgifter, skriftligt, før du beslutter dig."]
    ],
    body: `
<p>Når man undersøger tandbehandling i udlandet, finder man som regel to slags hjemmesider: klinikker og tjenester, der hjælper patienter med at komme dertil. Udefra kan de ligne hinanden. De er ikke det samme, og forskellen afgør, hvem du taler med, hvem du betaler, og hvem der har ansvaret for din behandling.</p>
<h2>Hvad er en concierge for tandbehandling?</h2>
<p>En concierge for tandbehandling er en koordineringstjeneste for patienter. Den hjælper dig med at finde en egnet klinik, samler de oplysninger, du har brug for til at beslutte dig, og ordner det praktiske omkring rejsen. Den undersøger dig ikke, stiller ingen diagnoser og udfører ingen behandling. Det hører til autoriserede tandlæger.</p>
<h2>Hvad en concierge gør</h2>
<ul>
<li>Lytter til, hvad du overvejer, og hvad der er vigtigt for dig, for eksempel tidspunkt, sprog eller nervøsitet for tandlægen.</li>
<li>Foreslår autoriserede klinikker, der passer til dit tilfælde, og forklarer, hvordan de arbejder.</li>
<li>Giver dine spørgsmål videre til klinikken og sørger for, at du får en skriftlig behandlingsplan og pris.</li>
<li>Booker dine tider og arrangerer, hvis du ønsker det, transport fra lufthavnen og foreslår rolige hoteller i nærheden.</li>
<li>Holder kontakten, når du er hjemme igen, og hjælper med at arrangere eventuel opfølgning hos klinikken.</li>
</ul>
<h2>Hvad en concierge ikke gør</h2>
<p>En concierge bestemmer ikke, hvilken behandling du har brug for, vurderer ikke røntgenbilleder og lover ingen resultater. Hvis en koordinator begynder at anbefale implantater frem for en bro eller siger, at en behandling helt sikkert vil lykkes, har vedkommende taget tandlægens rolle. En god concierge siger ligeud, at det er et spørgsmål til tandlægen, og sørger derefter for, at tandlægen svarer.</p>
<h2>Hvorfor grænsen betyder noget</h2>
<p><strong>Ansvar.</strong> Klinikken, der behandler dig, har ansvaret for diagnose, behandling og klinisk efterbehandling, og dens tandlæger er autoriserede og under tilsyn netop til det. Conciergen har ansvaret for sit eget arbejde: korrekte oplysninger, omhyggelig planlægning og at være let at få fat i.</p>
<p><strong>Klare omkostninger.</strong> Hos Nacre vises klinikkens behandlingsudgifter og vores conciergehonorar hver for sig og skriftligt, før du beslutter dig. Du ved altid, hvad du betaler for behandlingen, og hvad du betaler for koordineringen.</p>
<p><strong>En uafhængig medicinsk beslutning.</strong> Din plan lægges af en tandlæge efter en undersøgelse, ikke af den, der har arrangeret din rejse.</p>
<h2>Hvordan genkender man en god concierge for tandbehandling?</h2>
<ul>
<li>Den fortæller dig, hvilken klinik og hvilke tandlæger der skal behandle dig. I Polen kan du tjekke en tandlæges autorisation i det centrale register, som føres af det polske lægekammer (Naczelna Izba Lekarska).</li>
<li>Den giver dig klinikkens behandlingsplan og pris skriftligt.</li>
<li>Den er åben om sit eget honorar.</li>
<li>Den presser dig aldrig til at beslutte dig hurtigt.</li>
<li>Den er tydelig om, hvad den ikke kan.</li>
</ul>
<h2>Sådan arbejder Nacre</h2>
<p>Nacre er en concierge for tandbehandling i Gdańsk i Polen. Vi samarbejder med autoriserede klinikker, hjælper dig med at vælge en af dem og tager os af alt omkring din behandling, fra den første besked til opfølgningen derhjemme. Alle medicinske spørgsmål besvares af klinikkens tandlæger. Vi sørger for, at du får svarene, skriftligt og i god tid. Før du vælger klinik, er disse <a href="{{questions}}">8 spørgsmål</a> et godt sted at starte.</p>`
  },
  fi: {
    slug: "mika-on-hammashoidon-concierge",
    title: "Mitä hammashoidon concierge tekee, ja miksi se ei ole klinikka?",
    desc: "Hammashoidon concierge järjestää kaiken hoitosi ympärillä, mutta itse hoidosta vastaa luvan saanut klinikka. Tässä raja kulkee.",
    lede: "Hammashoidon concierge järjestää kaiken hoitosi ympärillä. Itse hoito on luvan saaneen klinikan vastuulla. Tässä kerromme, missä raja kulkee ja miksi sillä on merkitystä sinulle.",
    cta: "Onko sinulla kysyttävää ennen päätöstä?",
    faq: [
      ["Onko hammashoidon concierge sama asia kuin hammasmatkatoimisto?",
       "Ne menevät osittain päällekkäin. Hyvä hammashoidon concierge keskittyy henkilökohtaiseen koordinointiin hoitosi ympärillä ja kertoo selvästi, että kaikki lääketieteelliset päätökset kuuluvat luvan saaneelle klinikalle."],
      ["Voiko hammashoidon concierge antaa lääketieteellisiä neuvoja?",
       "Ei. Concierge välittää kysymyksesi hammaslääkärille ja huolehtii, että saat vastaukset, mutta diagnoosit ja hoitoneuvot tulevat aina luvan saaneilta hammaslääkäreiltä."],
      ["Miten concierge saa palkkionsa?",
       "Nacrella concierge-palkkiomme esitetään erillään klinikan hoitokuluista, kirjallisesti, ennen kuin sitoudut mihinkään."]
    ],
    body: `
<p>Kun ulkomailla tehtävää hammashoitoa alkaa selvittää, löytää yleensä kahdenlaisia sivustoja: klinikoita ja palveluita, jotka auttavat potilaita löytämään ne. Ulkoapäin ne voivat näyttää samanlaisilta. Ne eivät kuitenkaan ole sama asia, ja ero ratkaisee, kenen kanssa puhut, kenelle maksat ja kuka vastaa hoidostasi.</p>
<h2>Mikä on hammashoidon concierge?</h2>
<p>Hammashoidon concierge on potilaille tarkoitettu koordinointipalvelu. Se auttaa sinua löytämään sopivan klinikan, kokoaa tiedot, joita tarvitset päätöksen tekemiseen, ja järjestää matkan käytännön asiat. Se ei tutki sinua, tee diagnooseja eikä anna hoitoa. Ne kuuluvat luvan saaneille hammaslääkäreille.</p>
<h2>Mitä concierge tekee</h2>
<ul>
<li>Kuuntelee, mitä harkitset ja mikä sinulle on tärkeää, esimerkiksi aikataulu, kieli tai hammaslääkärijännitys.</li>
<li>Ehdottaa tapaukseesi sopivia, luvan saaneita klinikoita ja kertoo, miten ne toimivat.</li>
<li>Välittää kysymyksesi klinikalle ja huolehtii, että saat kirjallisen hoitosuunnitelman ja hinnan.</li>
<li>Varaa vastaanottoajat ja järjestää halutessasi lentokenttäkuljetuksen sekä ehdottaa rauhallisia hotelleja läheltä.</li>
<li>Pitää yhteyttä kotiinpaluun jälkeen ja auttaa järjestämään mahdolliset jälkikäynnit klinikalla.</li>
</ul>
<h2>Mitä concierge ei tee</h2>
<p>Concierge ei päätä, mitä hoitoa tarvitset, ei arvioi röntgenkuvia eikä lupaa tuloksia. Jos koordinaattori alkaa suositella implantteja sillan sijaan tai sanoo hoidon onnistuvan varmasti, hän on astunut hammaslääkärin rooliin. Hyvä concierge sanoo suoraan, että kysymys kuuluu hammaslääkärille, ja huolehtii sitten, että hammaslääkäri vastaa siihen.</p>
<h2>Miksi rajalla on merkitystä</h2>
<p><strong>Vastuu.</strong> Sinua hoitava klinikka vastaa diagnoosista, hoidosta ja kliinisestä jälkihoidosta, ja sen hammaslääkärit ovat luvan saaneita ja valvottuja juuri tätä varten. Concierge vastaa omasta työstään: oikeista tiedoista, huolellisesta järjestelystä ja siitä, että sen tavoittaa helposti.</p>
<p><strong>Selkeät kustannukset.</strong> Nacrella klinikan hoitokulut ja concierge-palkkiomme esitetään erikseen ja kirjallisesti ennen kuin sitoudut mihinkään. Tiedät aina, mitä maksat hoidosta ja mitä koordinoinnista.</p>
<p><strong>Riippumaton lääketieteellinen päätös.</strong> Hoitosuunnitelmasi laatii hammaslääkäri tutkimuksen jälkeen, ei se, joka järjesti matkasi.</p>
<h2>Miten tunnistaa hyvän hammashoidon conciergen?</h2>
<ul>
<li>Se kertoo, mikä klinikka ja ketkä hammaslääkärit sinua hoitavat. Puolassa hammaslääkärin ammatinharjoittamisoikeuden voi tarkistaa Puolan lääkärikamarin (Naczelna Izba Lekarska) ylläpitämästä keskusrekisteristä.</li>
<li>Se antaa klinikan hoitosuunnitelman ja hinnan kirjallisena.</li>
<li>Se kertoo avoimesti oman palkkionsa.</li>
<li>Se ei koskaan painosta sinua päättämään nopeasti.</li>
<li>Se kertoo selvästi, mitä se ei voi tehdä.</li>
</ul>
<h2>Näin Nacre toimii</h2>
<p>Nacre on hammashoidon concierge Gdańskissa, Puolassa. Teemme yhteistyötä luvan saaneiden klinikoiden kanssa, autamme sinua valitsemaan niistä sopivan ja huolehdimme kaikesta hoitosi ympärillä ensimmäisestä viestistä kotona tehtävään seurantaan asti. Kaikkiin lääketieteellisiin kysymyksiin vastaavat klinikan hammaslääkärit. Me huolehdimme, että saat vastaukset kirjallisena ja ajoissa. Ennen klinikan valintaa näistä <a href="{{questions}}">8 kysymyksestä</a> on hyvä aloittaa.</p>`
  }
};
