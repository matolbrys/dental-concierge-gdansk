/*
  Nacre articles in all languages. Source for tools/build-blog.js.
  Each article has one entry per language: slug (file name), title, desc (search snippet),
  lede (intro under the title), body (HTML) and cta (heading of the box at the end).
  Rules: Nacre is a concierge, never a clinic. Medical decisions always belong to the dentist.
*/
module.exports = [
  {
    id: "concierge",
    published: "2026-10-27",
    minutes: 4,
    img: { src: "/img/clinic-matching.webp", w: 1000, h: 620 },
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
<p>Nacre is a dental concierge in Gdańsk, Poland. We work with licensed clinics, help you choose one and take care of everything around your treatment, from the first message to the follow-up at home. Every medical question is answered by the clinic's dentists. We make sure you receive those answers, in writing and in good time.</p>`
    },
    sv: {
      slug: "vad-ar-en-tandvardsconcierge",
      title: "Vad gör en tandvårdsconcierge, och varför är det ingen klinik?",
      desc: "En tandvårdsconcierge ordnar allt runt din behandling, medan en legitimerad klinik ansvarar för själva behandlingen. Här går gränsen.",
      lede: "En tandvårdsconcierge ordnar allt runt din behandling. Själva behandlingen ligger hos en legitimerad klinik. Här är var gränsen går, och varför den spelar roll för dig.",
      cta: "Har du frågor innan du bestämmer dig?",
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
<p>Nacre är en tandvårdsconcierge i Gdańsk, Polen. Vi arbetar med legitimerade kliniker, hjälper dig att välja en av dem och tar hand om allt runt din behandling, från det första meddelandet till uppföljningen hemma. Alla medicinska frågor besvaras av klinikens tandläkare. Vi ser till att du får de svaren, skriftligt och i god tid.</p>`
    },
    no: {
      slug: "hva-er-en-concierge-for-tannbehandling",
      title: "Hva gjør en concierge for tannbehandling, og hvorfor er det ikke en klinikk?",
      desc: "En concierge for tannbehandling ordner alt rundt behandlingen din, mens en autorisert klinikk har ansvaret for selve behandlingen. Her går grensen.",
      lede: "En concierge for tannbehandling ordner alt rundt behandlingen din. Selve behandlingen ligger hos en autorisert klinikk. Her er hvor grensen går, og hvorfor den betyr noe for deg.",
      cta: "Har du spørsmål før du bestemmer deg?",
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
<p>Nacre er en concierge for tannbehandling i Gdańsk i Polen. Vi samarbeider med autoriserte klinikker, hjelper deg å velge en av dem og tar oss av alt rundt behandlingen din, fra den første meldingen til oppfølgingen hjemme. Alle medisinske spørsmål besvares av klinikkens tannleger. Vi sørger for at du får svarene, skriftlig og i god tid.</p>`
    },
    da: {
      slug: "hvad-er-en-concierge-for-tandbehandling",
      title: "Hvad laver en concierge for tandbehandling, og hvorfor er det ikke en klinik?",
      desc: "En concierge for tandbehandling ordner alt omkring din behandling, mens en autoriseret klinik har ansvaret for selve behandlingen. Her går grænsen.",
      lede: "En concierge for tandbehandling ordner alt omkring din behandling. Selve behandlingen ligger hos en autoriseret klinik. Her er, hvor grænsen går, og hvorfor den betyder noget for dig.",
      cta: "Har du spørgsmål, før du beslutter dig?",
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
<p>Nacre er en concierge for tandbehandling i Gdańsk i Polen. Vi samarbejder med autoriserede klinikker, hjælper dig med at vælge en af dem og tager os af alt omkring din behandling, fra den første besked til opfølgningen derhjemme. Alle medicinske spørgsmål besvares af klinikkens tandlæger. Vi sørger for, at du får svarene, skriftligt og i god tid.</p>`
    },
    fi: {
      slug: "mika-on-hammashoidon-concierge",
      title: "Mitä hammashoidon concierge tekee, ja miksi se ei ole klinikka?",
      desc: "Hammashoidon concierge järjestää kaiken hoitosi ympärillä, mutta itse hoidosta vastaa luvan saanut klinikka. Tässä raja kulkee.",
      lede: "Hammashoidon concierge järjestää kaiken hoitosi ympärillä. Itse hoito on luvan saaneen klinikan vastuulla. Tässä kerromme, missä raja kulkee ja miksi sillä on merkitystä sinulle.",
      cta: "Onko sinulla kysyttävää ennen päätöstä?",
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
<p>Nacre on hammashoidon concierge Gdańskissa, Puolassa. Teemme yhteistyötä luvan saaneiden klinikoiden kanssa, autamme sinua valitsemaan niistä sopivan ja huolehdimme kaikesta hoitosi ympärillä ensimmäisestä viestistä kotona tehtävään seurantaan asti. Kaikkiin lääketieteellisiin kysymyksiin vastaavat klinikan hammaslääkärit. Me huolehdimme, että saat vastaukset kirjallisena ja ajoissa.</p>`
    }
  },

  {
    id: "questions",
    published: "2026-09-23",
    minutes: 5,
    img: { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&h=788&fit=crop&q=75&auto=format", w: 1400, h: 788,
      thumb: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1000&h=625&fit=crop&q=75&auto=format",
      og: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=630&fit=crop&q=75&auto=format" },
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
      desc: "These are the questions we put to every clinic on behalf of our patients. The answers say more about a clinic than its price list does.",
      lede: "These are the questions we put to every clinic on behalf of our patients. The answers say more about a clinic than its price list does.",
      cta: "Considering implants in Gdańsk?",
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
<p>Many implant treatments take two visits a few months apart, because the implant has to heal into the bone before the final crown goes on. Ask for the timeline in writing so you can plan your trips.</p>
<h2>6. What if I need a bone graft?</h2>
<p>If there is not enough bone, you may need a bone graft or a sinus lift first, which adds cost and healing time. A good clinic tells you after looking at your scan, before you travel.</p>
<h2>7. What guarantee do you give?</h2>
<p>Ask what the guarantee covers, for how long, and what you have to do to keep it valid, such as regular check-ups. Get the terms in writing.</p>
<h2>8. Who looks after me when I am back home?</h2>
<p>Most questions come up after you have travelled home. Agree in advance how you will reach the clinic, whether video consultations are possible and how a follow-up visit would be arranged.</p>
<p>We ask these questions for you and send you the answers in writing, together with the clinic's treatment plan and price, before you book anything.</p>`
    },
    sv: {
      slug: "tandimplantat-utomlands-8-fragor",
      title: "Tandimplantat utomlands: 8 frågor att ställa innan du bokar",
      desc: "Frågorna vi ställer till varje klinik för våra patienters räkning. Svaren säger mer om en klinik i Polen än dess prislista.",
      lede: "Det här är frågorna vi ställer till varje klinik för våra patienters räkning. Svaren säger mer om en klinik än dess prislista.",
      cta: "Funderar du på implantat i Gdańsk?",
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
<p>Många implantatbehandlingar kräver två besök med några månaders mellanrum, eftersom implantatet måste läka in i benet innan den slutliga kronan sätts på. Be om tidsplanen skriftligt så att du kan planera dina resor.</p>
<h2>6. Vad händer om jag behöver benuppbyggnad?</h2>
<p>Om benet inte räcker kan du först behöva en benuppbyggnad eller en sinuslyft, vilket ökar kostnaden och läkningstiden. En bra klinik säger det efter att ha sett din röntgen, innan du reser.</p>
<h2>7. Vilken garanti ger ni?</h2>
<p>Fråga vad garantin omfattar, hur länge den gäller och vad du måste göra för att den ska gälla, till exempel regelbundna kontroller. Be om villkoren skriftligt.</p>
<h2>8. Vem tar hand om mig när jag är hemma igen?</h2>
<p>De flesta frågor dyker upp när du har rest hem. Kom överens i förväg om hur du når kliniken, om videokonsultationer är möjliga och hur ett återbesök skulle ordnas.</p>
<p>Vi ställer de här frågorna åt dig och skickar svaren skriftligt, tillsammans med klinikens behandlingsplan och pris, innan du bokar något.</p>`
    },
    no: {
      slug: "tannimplantater-i-utlandet-8-sporsmal",
      title: "Tannimplantater i utlandet: 8 spørsmål du bør stille før du bestiller",
      desc: "Spørsmålene vi stiller hver klinikk på vegne av pasientene våre. Svarene sier mer om en klinikk i Polen enn prislisten gjør.",
      lede: "Dette er spørsmålene vi stiller hver klinikk på vegne av pasientene våre. Svarene sier mer om en klinikk enn prislisten gjør.",
      cta: "Vurderer du implantater i Gdańsk?",
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
<p>Mange implantatbehandlinger krever to besøk med noen måneders mellomrom, fordi implantatet må gro fast i beinet før den endelige kronen settes på. Be om tidsplanen skriftlig, så du kan planlegge reisene dine.</p>
<h2>6. Hva om jeg trenger beinoppbygging?</h2>
<p>Hvis det ikke er nok bein, kan du først trenge beinoppbygging eller et sinusløft, noe som gir høyere kostnad og lengre tilhelingstid. En god klinikk sier fra etter å ha sett røntgenbildene dine, før du reiser.</p>
<h2>7. Hvilken garanti gir dere?</h2>
<p>Spør hva garantien dekker, hvor lenge den gjelder og hva du må gjøre for at den skal gjelde, for eksempel regelmessige kontroller. Få vilkårene skriftlig.</p>
<h2>8. Hvem tar seg av meg når jeg er hjemme igjen?</h2>
<p>De fleste spørsmål dukker opp etter at du har reist hjem. Avtal på forhånd hvordan du når klinikken, om videokonsultasjoner er mulig og hvordan et kontrollbesøk skal ordnes.</p>
<p>Vi stiller disse spørsmålene for deg og sender deg svarene skriftlig, sammen med klinikkens behandlingsplan og pris, før du bestiller noe.</p>`
    },
    da: {
      slug: "tandimplantater-i-udlandet-8-spoergsmaal",
      title: "Tandimplantater i udlandet: 8 spørgsmål, du bør stille, før du booker",
      desc: "Spørgsmålene vi stiller hver klinik på vegne af vores patienter. Svarene siger mere om en klinik i Polen end dens prisliste.",
      lede: "Det er de spørgsmål, vi stiller hver klinik på vegne af vores patienter. Svarene siger mere om en klinik end dens prisliste.",
      cta: "Overvejer du implantater i Gdańsk?",
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
<p>Mange implantatbehandlinger kræver to besøg med nogle måneders mellemrum, fordi implantatet skal vokse fast i knoglen, før den endelige krone sættes på. Bed om tidsplanen skriftligt, så du kan planlægge dine rejser.</p>
<h2>6. Hvad hvis jeg har brug for knogleopbygning?</h2>
<p>Hvis der ikke er nok knogle, kan du først få brug for en knogleopbygning eller et sinusløft, hvilket øger prisen og helingstiden. En god klinik fortæller dig det, når den har set din scanning, før du rejser.</p>
<h2>7. Hvilken garanti giver I?</h2>
<p>Spørg, hvad garantien dækker, hvor længe den gælder, og hvad du skal gøre for at holde den gyldig, for eksempel regelmæssige kontroller. Få betingelserne skriftligt.</p>
<h2>8. Hvem tager sig af mig, når jeg er hjemme igen?</h2>
<p>De fleste spørgsmål opstår, når du er rejst hjem. Aftal på forhånd, hvordan du kontakter klinikken, om videokonsultationer er mulige, og hvordan et kontrolbesøg arrangeres.</p>
<p>Vi stiller disse spørgsmål for dig og sender dig svarene skriftligt sammen med klinikkens behandlingsplan og pris, før du booker noget.</p>`
    },
    fi: {
      slug: "hammasimplantit-ulkomailla-8-kysymysta",
      title: "Hammasimplantit ulkomailla: 8 kysymystä ennen kuin varaat",
      desc: "Kysymykset, jotka esitämme jokaiselle klinikalle potilaidemme puolesta. Vastaukset kertovat Puolan klinikasta enemmän kuin hinnasto.",
      lede: "Nämä ovat kysymykset, jotka esitämme jokaiselle klinikalle potilaidemme puolesta. Vastaukset kertovat klinikasta enemmän kuin sen hinnasto.",
      cta: "Harkitsetko implantteja Gdańskissa?",
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
<p>Monet implanttihoidot vaativat kaksi käyntiä muutaman kuukauden välein, koska implantin on luuduttava ennen kuin lopullinen kruunu kiinnitetään. Pyydä aikataulu kirjallisena, jotta voit suunnitella matkasi.</p>
<h2>6. Entä jos tarvitsen luunsiirron?</h2>
<p>Jos luuta ei ole tarpeeksi, saatat tarvita ensin luunsiirron tai poskiontelonpohjan kohotuksen, mikä lisää kustannuksia ja paranemisaikaa. Hyvä klinikka kertoo tämän nähtyään kuvasi, ennen kuin matkustat.</p>
<h2>7. Millaisen takuun annatte?</h2>
<p>Kysy, mitä takuu kattaa, kuinka kauan se on voimassa ja mitä sinun on tehtävä, jotta se pysyy voimassa, esimerkiksi säännölliset tarkastukset. Pyydä ehdot kirjallisena.</p>
<h2>8. Kuka huolehtii minusta, kun olen taas kotona?</h2>
<p>Useimmat kysymykset heräävät vasta kotiin palattua. Sopikaa etukäteen, miten tavoitat klinikan, onko videovastaanotto mahdollinen ja miten mahdollinen jälkikäynti järjestetään.</p>
<p>Esitämme nämä kysymykset puolestasi ja lähetämme vastaukset kirjallisena yhdessä klinikan hoitosuunnitelman ja hinnan kanssa, ennen kuin varaat mitään.</p>`
    }
  },

  {
    id: "two-trips",
    published: "2026-09-23",
    minutes: 4,
    img: { src: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1400&h=788&fit=crop&q=75&auto=format", w: 1400, h: 788,
      thumb: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1000&h=625&fit=crop&q=75&auto=format",
      og: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1200&h=630&fit=crop&q=75&auto=format" },
    alt: {
      en: "A model of a dental implant placed between two natural teeth",
      sv: "En modell av ett tandimplantat mellan två naturliga tänder",
      no: "En modell av et tannimplantat mellom to naturlige tenner",
      da: "En model af et tandimplantat mellem to naturlige tænder",
      fi: "Hammasimplantin malli kahden luonnollisen hampaan välissä"
    },
    en: {
      slug: "how-implant-treatment-is-planned",
      title: "Why implant treatment usually means two trips",
      desc: "How a typical implant plan runs from the first scan to the final crown, and why the healing time decides your travel dates.",
      lede: "How a typical implant plan runs from the first scan to the final crown, and why the healing time decides your travel dates.",
      cta: "Planning implant treatment?",
      body: `
<p>Your dentist sets the final plan, and every case is different. Most implant treatments still follow the same outline, and knowing it makes it easier to plan your time off work.</p>
<h2>Before you travel</h2>
<p>Recent X-rays or photos give the clinic a first idea of whether implants are an option for you. The decision itself is made in person, after an examination.</p>
<h2>First visit: examination, 3D scan and placement</h2>
<p>The clinic examines you and takes a 3D scan (CBCT) to measure the bone and plan where each implant goes. If everything looks right, the implant can often be placed during the same stay, usually under local anaesthesia. If the gap shows when you smile, you go home with a temporary tooth.</p>
<h2>Healing</h2>
<p>After placement, bone grows onto the surface of the implant. This is called osseointegration and usually takes three to six months, longer if you needed a bone graft. You spend this time at home and live normally, although you need to be a little careful when eating.</p>
<h2>Second visit: the final crown</h2>
<p>Once the implant has healed, the clinic fits the abutment and takes an impression or a digital scan. A dental laboratory makes the final crown or bridge, which is often fitted within a few days. You leave this visit with your final teeth.</p>
<h2>Are there faster options?</h2>
<p>Sometimes a temporary tooth can be attached to the implant on the day of surgery. That depends on the quality of your bone and on how stable the implant is, and only your dentist can decide it after the scan.</p>
<h2>After treatment</h2>
<p>Clean your implants the way you clean your natural teeth, including between them, and go for regular check-ups. Your dentist at home can do these if you bring a record of the implant system that was used.</p>
<p>We plan both trips with you and stay in touch with the clinic between your visits.</p>`
    },
    sv: {
      slug: "tandimplantat-tva-resor",
      title: "Därför kräver implantatbehandling oftast två resor",
      desc: "Så går en typisk implantatbehandling till, från första röntgen till den slutliga kronan, och varför läkningstiden avgör dina resedatum.",
      lede: "Så går en typisk implantatbehandling till, från första röntgen till den slutliga kronan, och varför läkningstiden avgör dina resedatum.",
      cta: "Planerar du en implantatbehandling?",
      body: `
<p>Din tandläkare bestämmer den slutliga planen, och varje fall är olika. De flesta implantatbehandlingar följer ändå samma upplägg, och när du känner till det blir det lättare att planera ledigheten från jobbet.</p>
<h2>Innan du reser</h2>
<p>Aktuella röntgenbilder eller foton ger kliniken en första bild av om implantat är ett alternativ för dig. Själva beslutet fattas på plats, efter en undersökning.</p>
<h2>Första besöket: undersökning, 3D-röntgen och insättning</h2>
<p>Kliniken undersöker dig och tar en 3D-röntgen (CBCT) för att mäta benet och planera var varje implantat ska sitta. Om allt ser bra ut kan implantatet ofta sättas in under samma vistelse, oftast med lokalbedövning. Om luckan syns när du ler får du åka hem med en provisorisk tand.</p>
<h2>Läkning</h2>
<p>Efter insättningen växer benet fast mot implantatets yta. Det kallas osseointegration och tar vanligtvis tre till sex månader, längre om du behövde benuppbyggnad. Den tiden tillbringar du hemma och lever som vanligt, men du behöver vara lite försiktig när du äter.</p>
<h2>Andra besöket: den slutliga kronan</h2>
<p>När implantatet har läkt fäster kliniken distansen och tar ett avtryck eller en digital skanning. Ett tandtekniskt laboratorium tillverkar den slutliga kronan eller bron, som ofta sätts på inom några dagar. Du lämnar det här besöket med dina slutliga tänder.</p>
<h2>Finns det snabbare alternativ?</h2>
<p>Ibland kan en provisorisk tand fästas på implantatet samma dag som det sätts in. Det beror på kvaliteten på ditt ben och hur stabilt implantatet sitter, och det kan bara din tandläkare avgöra efter röntgen.</p>
<h2>Efter behandlingen</h2>
<p>Rengör implantaten som dina egna tänder, även mellanrummen, och gå på regelbundna kontroller. Din tandläkare hemma kan sköta dem om du har med dig en uppgift om vilket implantatsystem som har använts.</p>
<p>Vi planerar båda resorna tillsammans med dig och håller kontakten med kliniken mellan dina besök.</p>`
    },
    no: {
      slug: "tannimplantat-to-reiser",
      title: "Derfor betyr implantatbehandling som regel to reiser",
      desc: "Slik foregår en typisk implantatbehandling, fra første røntgen til den endelige kronen, og hvorfor tilhelingstiden bestemmer reisedatoene dine.",
      lede: "Slik foregår en typisk implantatbehandling, fra første røntgen til den endelige kronen, og hvorfor tilhelingstiden bestemmer reisedatoene dine.",
      cta: "Planlegger du implantatbehandling?",
      body: `
<p>Tannlegen din bestemmer den endelige planen, og hvert tilfelle er forskjellig. De fleste implantatbehandlinger følger likevel samme opplegg, og når du kjenner det, blir det lettere å planlegge fri fra jobben.</p>
<h2>Før du reiser</h2>
<p>Nye røntgenbilder eller bilder gir klinikken et første inntrykk av om implantater er et alternativ for deg. Selve avgjørelsen tas på stedet, etter en undersøkelse.</p>
<h2>Første besøk: undersøkelse, 3D-røntgen og innsetting</h2>
<p>Klinikken undersøker deg og tar et 3D-røntgenbilde (CBCT) for å måle beinet og planlegge hvor hvert implantat skal sitte. Hvis alt ser riktig ut, kan implantatet ofte settes inn under samme opphold, vanligvis med lokalbedøvelse. Hvis tannluken synes når du smiler, reiser du hjem med en midlertidig tann.</p>
<h2>Tilheling</h2>
<p>Etter innsettingen vokser beinet fast til overflaten på implantatet. Dette kalles osseointegrasjon og tar vanligvis tre til seks måneder, lenger hvis du trengte beinoppbygging. Denne tiden er du hjemme og lever som normalt, men du må være litt forsiktig når du spiser.</p>
<h2>Andre besøk: den endelige kronen</h2>
<p>Når implantatet har grodd, fester klinikken distansen og tar et avtrykk eller en digital skanning. Et tannteknisk laboratorium lager den endelige kronen eller broen, som ofte settes på i løpet av noen dager. Du forlater dette besøket med de endelige tennene dine.</p>
<h2>Finnes det raskere alternativer?</h2>
<p>Noen ganger kan en midlertidig tann festes på implantatet samme dag som det settes inn. Det avhenger av kvaliteten på beinet ditt og hvor stabilt implantatet sitter, og det kan bare tannlegen din avgjøre etter røntgen.</p>
<h2>Etter behandlingen</h2>
<p>Rengjør implantatene slik du rengjør dine egne tenner, også mellom dem, og gå til regelmessige kontroller. Tannlegen din hjemme kan ta seg av dem hvis du har med deg en oversikt over hvilket implantatsystem som ble brukt.</p>
<p>Vi planlegger begge reisene sammen med deg og holder kontakten med klinikken mellom besøkene dine.</p>`
    },
    da: {
      slug: "tandimplantat-to-rejser",
      title: "Derfor kræver implantatbehandling som regel to rejser",
      desc: "Sådan forløber en typisk implantatbehandling fra første scanning til den endelige krone, og hvorfor helingstiden bestemmer dine rejsedatoer.",
      lede: "Sådan forløber en typisk implantatbehandling fra første scanning til den endelige krone, og hvorfor helingstiden bestemmer dine rejsedatoer.",
      cta: "Planlægger du implantatbehandling?",
      body: `
<p>Din tandlæge fastlægger den endelige plan, og hvert tilfælde er forskelligt. De fleste implantatbehandlinger følger alligevel samme forløb, og når du kender det, er det lettere at planlægge fri fra arbejdet.</p>
<h2>Før du rejser</h2>
<p>Nye røntgenbilleder eller fotos giver klinikken et første indtryk af, om implantater er en mulighed for dig. Selve beslutningen træffes på stedet efter en undersøgelse.</p>
<h2>Første besøg: undersøgelse, 3D-scanning og indsættelse</h2>
<p>Klinikken undersøger dig og tager en 3D-scanning (CBCT) for at måle knoglen og planlægge, hvor hvert implantat skal sidde. Hvis alt ser fint ud, kan implantatet ofte sættes i under samme ophold, som regel i lokalbedøvelse. Hvis hullet kan ses, når du smiler, rejser du hjem med en midlertidig tand.</p>
<h2>Heling</h2>
<p>Efter indsættelsen vokser knoglen fast på implantatets overflade. Det kaldes osseointegration og tager normalt tre til seks måneder, længere hvis du havde brug for knogleopbygning. Den tid tilbringer du derhjemme og lever normalt, men du skal være lidt forsigtig, når du spiser.</p>
<h2>Andet besøg: den endelige krone</h2>
<p>Når implantatet er helet, monterer klinikken distancen og tager et aftryk eller en digital scanning. Et tandteknisk laboratorium fremstiller den endelige krone eller bro, som ofte sættes på inden for få dage. Du forlader dette besøg med dine endelige tænder.</p>
<h2>Findes der hurtigere muligheder?</h2>
<p>Nogle gange kan en midlertidig tand sættes på implantatet samme dag, som det indsættes. Det afhænger af kvaliteten af din knogle og af, hvor stabilt implantatet sidder, og det kan kun din tandlæge afgøre efter scanningen.</p>
<h2>Efter behandlingen</h2>
<p>Rengør dine implantater, som du rengør dine egne tænder, også mellem dem, og gå til regelmæssige kontroller. Din tandlæge herhjemme kan stå for dem, hvis du har en oversigt over det anvendte implantatsystem med.</p>
<p>Vi planlægger begge rejser sammen med dig og holder kontakten med klinikken mellem dine besøg.</p>`
    },
    fi: {
      slug: "hammasimplantti-kaksi-matkaa",
      title: "Miksi implanttihoito vaatii yleensä kaksi matkaa",
      desc: "Näin tyypillinen implanttihoito etenee ensimmäisestä kuvauksesta lopulliseen kruunuun, ja miksi paranemisaika ratkaisee matkapäiväsi.",
      lede: "Näin tyypillinen implanttihoito etenee ensimmäisestä kuvauksesta lopulliseen kruunuun, ja miksi paranemisaika ratkaisee matkapäiväsi.",
      cta: "Suunnitteletko implanttihoitoa?",
      body: `
<p>Hammaslääkärisi päättää lopullisesta suunnitelmasta, ja jokainen tapaus on erilainen. Useimmat implanttihoidot etenevät silti samalla tavalla, ja kun tunnet vaiheet, on helpompi suunnitella vapaat töistä.</p>
<h2>Ennen matkaa</h2>
<p>Tuoreet röntgenkuvat tai valokuvat antavat klinikalle ensivaikutelman siitä, sopivatko implantit sinulle. Varsinainen päätös tehdään paikan päällä tutkimuksen jälkeen.</p>
<h2>Ensimmäinen käynti: tutkimus, 3D-kuvaus ja asennus</h2>
<p>Klinikka tutkii sinut ja ottaa 3D-kuvan (CBCT), jolla mitataan luu ja suunnitellaan kunkin implantin paikka. Jos kaikki näyttää hyvältä, implantti voidaan usein asentaa saman matkan aikana, yleensä paikallispuudutuksessa. Jos hammasrako näkyy hymyillessä, palaat kotiin väliaikaisen hampaan kanssa.</p>
<h2>Paraneminen</h2>
<p>Asennuksen jälkeen luu kasvaa kiinni implantin pintaan. Tätä kutsutaan luutumiseksi (osseointegraatio), ja se kestää yleensä kolmesta kuuteen kuukautta, pidempään jos tarvitsit luunsiirron. Vietät tämän ajan kotona ja elät normaalisti, mutta syödessä on oltava hieman varovainen.</p>
<h2>Toinen käynti: lopullinen kruunu</h2>
<p>Kun implantti on parantunut, klinikka kiinnittää jatkeen ja ottaa jäljennöksen tai digitaalisen skannauksen. Hammaslaboratorio valmistaa lopullisen kruunun tai sillan, joka kiinnitetään usein muutaman päivän kuluessa. Lähdet tältä käynniltä lopullisten hampaiden kanssa.</p>
<h2>Onko nopeampia vaihtoehtoja?</h2>
<p>Joskus väliaikainen hammas voidaan kiinnittää implanttiin jo asennuspäivänä. Se riippuu luusi laadusta ja implantin tukevuudesta, ja sen voi päättää vain hammaslääkärisi kuvauksen jälkeen.</p>
<h2>Hoidon jälkeen</h2>
<p>Puhdista implantit kuten omat hampaasi, myös hammasvälit, ja käy säännöllisesti tarkastuksissa. Kotimaasi hammaslääkäri voi hoitaa tarkastukset, jos sinulla on mukana tieto käytetystä implanttijärjestelmästä.</p>
<p>Suunnittelemme molemmat matkat kanssasi ja pidämme yhteyttä klinikkaan käyntiesi välillä.</p>`
    }
  },

  {
    id: "veneers",
    published: "2026-09-23",
    minutes: 4,
    img: { src: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=1400&h=788&fit=crop&q=75&auto=format", w: 1400, h: 788,
      thumb: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=1000&h=625&fit=crop&q=75&auto=format",
      og: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=1200&h=630&fit=crop&q=75&auto=format" },
    alt: {
      en: "A woman with dark curly hair smiling widely",
      sv: "En kvinna med mörkt lockigt hår som ler stort",
      no: "En kvinne med mørkt krøllete hår som smiler bredt",
      da: "En kvinde med mørkt krøllet hår, der smiler bredt",
      fi: "Leveästi hymyilevä nainen, jolla on tummat kiharat hiukset"
    },
    en: {
      slug: "veneers-crowns-or-whitening",
      title: "Veneers, crowns or whitening: what is the difference?",
      desc: "What whitening, veneers and crowns each do, how much of the tooth they change, and when a dentist is likely to suggest each of them.",
      lede: "What whitening, veneers and crowns each do, and when a dentist is likely to suggest them.",
      cta: "Thinking about a new smile?",
      body: `
<p>Many people contact us because they want a brighter or more even smile. Which treatment fits depends on the health of your teeth as much as on how they look.</p>
<h2>Whitening</h2>
<p>Whitening lightens the natural colour of your teeth with a bleaching gel, applied at the clinic or at home with trays your dentist gives you. It does not change the shape of your teeth or the colour of fillings, crowns or veneers. It is the least invasive option, and the effect fades gradually.</p>
<h2>Veneers</h2>
<p>Veneers are thin shells, usually porcelain, bonded to the front of a tooth. They can change the colour and shape of a tooth and close small gaps, so they are mostly used on the teeth that show when you smile. In most cases the dentist removes a thin layer of enamel first, which makes the treatment permanent.</p>
<h2>Crowns</h2>
<p>A crown covers the whole visible part of a tooth. Dentists use crowns on teeth that are badly damaged or weakened by a large filling or root canal treatment, and on top of implants. A crown protects the tooth and changes how it looks, but the dentist has to remove more of the tooth than for a veneer.</p>
<h2>Whitening, veneers and crowns at a glance</h2>
<div class="table-wrap"><table>
<thead><tr><th>Treatment</th><th>What it changes</th><th>How much tooth is removed</th><th>Usually suits</th></tr></thead>
<tbody>
<tr><td>Whitening</td><td>The colour of natural teeth</td><td>None</td><td>Healthy teeth that look darker or more yellow than you would like</td></tr>
<tr><td>Veneers</td><td>Colour, shape and small gaps of the front teeth</td><td>Usually a thin layer of enamel</td><td>Healthy front teeth you would like to reshape slightly</td></tr>
<tr><td>Crowns</td><td>The whole visible part of a tooth</td><td>More than for a veneer</td><td>Damaged or heavily filled teeth, and implants</td></tr>
</tbody></table></div>
<h2>Which one is right for me?</h2>
<p>If your teeth are healthy and the colour is what bothers you, whitening is usually the first step. Veneers may suit healthy teeth whose shape or position you would like to change slightly. For damaged or heavily filled teeth, crowns tend to last longer.</p>
<p>Many smile makeovers combine these treatments. Whitening often comes first, so that new veneers or crowns can be matched to the lighter shade.</p>
<p>Before you travel, we make sure you have a written plan from the clinic that says which treatment is proposed for each tooth and why.</p>`
    },
    sv: {
      slug: "skalfasader-kronor-eller-blekning",
      title: "Skalfasader, kronor eller blekning: vad är skillnaden?",
      desc: "Vad blekning, skalfasader och kronor gör, hur mycket av tanden de påverkar och när en tandläkare brukar föreslå dem.",
      lede: "Vad blekning, skalfasader och kronor gör, och när en tandläkare brukar föreslå dem.",
      cta: "Funderar du på ett nytt leende?",
      body: `
<p>Många kontaktar oss för att de vill ha ett ljusare eller jämnare leende. Vilken behandling som passar beror lika mycket på hur friska tänderna är som på hur de ser ut.</p>
<h2>Blekning</h2>
<p>Blekning gör tändernas naturliga färg ljusare med en blekgel, som läggs på hos tandläkaren eller hemma med skenor som du får av tandläkaren. Den ändrar inte tändernas form eller färgen på fyllningar, kronor eller skalfasader. Det är det minst ingripande alternativet, och effekten avtar gradvis.</p>
<h2>Skalfasader</h2>
<p>Skalfasader är tunna skal, oftast av porslin, som fästs på framsidan av en tand. De kan ändra tandens färg och form och sluta små mellanrum, så de används mest på de tänder som syns när du ler. Oftast slipar tandläkaren först bort ett tunt lager emalj, vilket gör behandlingen permanent.</p>
<h2>Kronor</h2>
<p>En krona täcker hela den synliga delen av en tand. Tandläkare använder kronor på tänder som är svårt skadade eller försvagade av en stor fyllning eller rotbehandling, och ovanpå implantat. En krona skyddar tanden och ändrar hur den ser ut, men tandläkaren måste ta bort mer av tanden än för en skalfasad.</p>
<h2>Blekning, skalfasader och kronor i korthet</h2>
<div class="table-wrap"><table>
<thead><tr><th>Behandling</th><th>Vad den ändrar</th><th>Hur mycket av tanden som tas bort</th><th>Passar oftast</th></tr></thead>
<tbody>
<tr><td>Blekning</td><td>De naturliga tändernas färg</td><td>Inget</td><td>Friska tänder som ser mörkare eller gulare ut än du vill</td></tr>
<tr><td>Skalfasader</td><td>Framtändernas färg, form och små mellanrum</td><td>Oftast ett tunt lager emalj</td><td>Friska framtänder vars form du vill ändra något</td></tr>
<tr><td>Kronor</td><td>Hela den synliga delen av tanden</td><td>Mer än för en skalfasad</td><td>Skadade eller kraftigt lagade tänder, och implantat</td></tr>
</tbody></table></div>
<h2>Vilken passar mig?</h2>
<p>Om dina tänder är friska och det är färgen som stör dig, är blekning oftast det första steget. Skalfasader kan passa friska tänder vars form eller läge du vill ändra något. För skadade eller kraftigt lagade tänder håller kronor oftast längre.</p>
<p>Många leendebehandlingar kombinerar de här metoderna. Blekningen görs ofta först, så att nya skalfasader eller kronor kan matchas mot den ljusare nyansen.</p>
<p>Innan du reser ser vi till att du har en skriftlig plan från kliniken som anger vilken behandling som föreslås för varje tand och varför.</p>`
    },
    no: {
      slug: "fasetter-kroner-eller-bleking",
      title: "Fasetter, kroner eller bleking: hva er forskjellen?",
      desc: "Hva bleking, fasetter og kroner gjør, hvor mye av tannen de endrer, og når en tannlege som regel foreslår dem.",
      lede: "Hva bleking, fasetter og kroner gjør, og når en tannlege som regel foreslår dem.",
      cta: "Tenker du på et nytt smil?",
      body: `
<p>Mange kontakter oss fordi de ønsker et lysere eller jevnere smil. Hvilken behandling som passer, avhenger like mye av hvor friske tennene er som av hvordan de ser ut.</p>
<h2>Bleking</h2>
<p>Bleking gjør tennenes naturlige farge lysere med en blekegel, som legges på hos tannlegen eller hjemme med skinner du får av tannlegen. Den endrer ikke formen på tennene eller fargen på fyllinger, kroner eller fasetter. Det er det minst inngripende alternativet, og effekten avtar gradvis.</p>
<h2>Fasetter</h2>
<p>Fasetter er tynne skall, som regel av porselen, som festes på forsiden av en tann. De kan endre farge og form på tannen og lukke små mellomrom, så de brukes mest på tennene som synes når du smiler. Som regel sliper tannlegen først bort et tynt lag emalje, noe som gjør behandlingen permanent.</p>
<h2>Kroner</h2>
<p>En krone dekker hele den synlige delen av en tann. Tannleger bruker kroner på tenner som er sterkt skadet eller svekket av en stor fylling eller rotfylling, og oppå implantater. En krone beskytter tannen og endrer hvordan den ser ut, men tannlegen må fjerne mer av tannen enn for en fasett.</p>
<h2>Bleking, fasetter og kroner i korthet</h2>
<div class="table-wrap"><table>
<thead><tr><th>Behandling</th><th>Hva den endrer</th><th>Hvor mye av tannen som fjernes</th><th>Passer som regel</th></tr></thead>
<tbody>
<tr><td>Bleking</td><td>Fargen på de naturlige tennene</td><td>Ingenting</td><td>Friske tenner som ser mørkere eller gulere ut enn du ønsker</td></tr>
<tr><td>Fasetter</td><td>Farge, form og små mellomrom på fortennene</td><td>Som regel et tynt lag emalje</td><td>Friske fortenner du ønsker å forme litt om</td></tr>
<tr><td>Kroner</td><td>Hele den synlige delen av tannen</td><td>Mer enn for en fasett</td><td>Skadde eller mye fylte tenner, og implantater</td></tr>
</tbody></table></div>
<h2>Hvilken passer for meg?</h2>
<p>Hvis tennene dine er friske og det er fargen som plager deg, er bleking vanligvis første steg. Fasetter kan passe friske tenner der du ønsker å endre formen eller plasseringen litt. For skadde eller mye fylte tenner varer kroner som regel lenger.</p>
<p>Mange smilbehandlinger kombinerer disse metodene. Ofte blekes tennene først, slik at nye fasetter eller kroner kan tilpasses den lysere fargen.</p>
<p>Før du reiser, sørger vi for at du har en skriftlig plan fra klinikken som viser hvilken behandling som foreslås for hver tann, og hvorfor.</p>`
    },
    da: {
      slug: "facader-kroner-eller-blegning",
      title: "Facader, kroner eller blegning: hvad er forskellen?",
      desc: "Hvad blegning, facader og kroner gør, hvor meget af tanden de ændrer, og hvornår en tandlæge typisk foreslår dem.",
      lede: "Hvad blegning, facader og kroner gør, og hvornår en tandlæge typisk foreslår dem.",
      cta: "Overvejer du et nyt smil?",
      body: `
<p>Mange kontakter os, fordi de ønsker et lysere eller mere jævnt smil. Hvilken behandling der passer, afhænger lige så meget af tændernes sundhed som af, hvordan de ser ud.</p>
<h2>Blegning</h2>
<p>Blegning gør tændernes naturlige farve lysere med en blegegel, som påføres hos tandlægen eller derhjemme med skinner, du får af tandlægen. Den ændrer ikke tændernes form eller farven på fyldninger, kroner eller facader. Det er den mindst indgribende mulighed, og effekten aftager gradvist.</p>
<h2>Facader</h2>
<p>Facader er tynde skaller, oftest af porcelæn, som limes på forsiden af en tand. De kan ændre tandens farve og form og lukke små mellemrum, så de bruges mest på de tænder, der ses, når du smiler. I de fleste tilfælde sliber tandlægen først et tyndt lag emalje væk, hvilket gør behandlingen permanent.</p>
<h2>Kroner</h2>
<p>En krone dækker hele den synlige del af en tand. Tandlæger bruger kroner på tænder, der er stærkt beskadigede eller svækkede af en stor fyldning eller rodbehandling, og oven på implantater. En krone beskytter tanden og ændrer dens udseende, men tandlægen skal fjerne mere af tanden end ved en facade.</p>
<h2>Blegning, facader og kroner i overblik</h2>
<div class="table-wrap"><table>
<thead><tr><th>Behandling</th><th>Hvad den ændrer</th><th>Hvor meget af tanden der fjernes</th><th>Passer typisk til</th></tr></thead>
<tbody>
<tr><td>Blegning</td><td>De naturlige tænders farve</td><td>Intet</td><td>Sunde tænder, der ser mørkere eller gulere ud, end du ønsker</td></tr>
<tr><td>Facader</td><td>Fortændernes farve, form og små mellemrum</td><td>Som regel et tyndt lag emalje</td><td>Sunde fortænder, du gerne vil forme lidt om</td></tr>
<tr><td>Kroner</td><td>Hele den synlige del af tanden</td><td>Mere end ved en facade</td><td>Beskadigede eller stærkt fyldte tænder samt implantater</td></tr>
</tbody></table></div>
<h2>Hvilken passer til mig?</h2>
<p>Hvis dine tænder er sunde, og det er farven, der generer dig, er blegning som regel første skridt. Facader kan passe til sunde tænder, hvis form eller placering du gerne vil ændre lidt. Til beskadigede eller stærkt fyldte tænder holder kroner som regel længere.</p>
<p>Mange smilbehandlinger kombinerer disse metoder. Ofte bleges tænderne først, så nye facader eller kroner kan matches til den lysere nuance.</p>
<p>Før du rejser, sørger vi for, at du har en skriftlig plan fra klinikken, der viser, hvilken behandling der foreslås for hver tand, og hvorfor.</p>`
    },
    fi: {
      slug: "laminaatit-kruunut-vai-valkaisu",
      title: "Laminaatit, kruunut vai valkaisu: mikä on ero?",
      desc: "Mitä valkaisu, laminaatit ja kruunut tekevät, kuinka paljon ne muuttavat hammasta ja milloin hammaslääkäri yleensä ehdottaa niitä.",
      lede: "Mitä valkaisu, laminaatit ja kruunut tekevät, ja milloin hammaslääkäri yleensä ehdottaa niitä.",
      cta: "Mietitkö uutta hymyä?",
      body: `
<p>Moni ottaa meihin yhteyttä, koska haluaa vaaleamman tai tasaisemman hymyn. Sopiva hoito riippuu yhtä paljon hampaiden terveydestä kuin niiden ulkonäöstä.</p>
<h2>Valkaisu</h2>
<p>Valkaisu vaalentaa hampaiden luonnollista väriä valkaisugeelillä, joka levitetään vastaanotolla tai kotona hammaslääkäriltä saatavilla kiskoilla. Se ei muuta hampaiden muotoa eikä paikkojen, kruunujen tai laminaattien väriä. Se on vähiten kajoava vaihtoehto, ja vaikutus haalistuu vähitellen.</p>
<h2>Laminaatit</h2>
<p>Laminaatit ovat ohuita, yleensä posliinisia kuoria, jotka kiinnitetään hampaan etupintaan. Niillä voidaan muuttaa hampaan väriä ja muotoa sekä sulkea pieniä rakoja, joten niitä käytetään lähinnä hymyssä näkyviin hampaisiin. Useimmiten hammaslääkäri hioo ensin pois ohuen kerroksen kiillettä, mikä tekee hoidosta pysyvän.</p>
<h2>Kruunut</h2>
<p>Kruunu peittää hampaan koko näkyvän osan. Hammaslääkärit käyttävät kruunuja pahasti vaurioituneisiin tai suuren paikan tai juurihoidon heikentämiin hampaisiin sekä implanttien päällä. Kruunu suojaa hammasta ja muuttaa sen ulkonäköä, mutta hampaasta on poistettava enemmän kuin laminaattia varten.</p>
<h2>Valkaisu, laminaatit ja kruunut lyhyesti</h2>
<div class="table-wrap"><table>
<thead><tr><th>Hoito</th><th>Mitä se muuttaa</th><th>Kuinka paljon hammasta poistetaan</th><th>Sopii yleensä</th></tr></thead>
<tbody>
<tr><td>Valkaisu</td><td>Luonnollisten hampaiden väriä</td><td>Ei lainkaan</td><td>Terveisiin hampaisiin, jotka näyttävät toivottua tummemmilta tai keltaisemmilta</td></tr>
<tr><td>Laminaatit</td><td>Etuhampaiden väriä, muotoa ja pieniä rakoja</td><td>Yleensä ohut kerros kiillettä</td><td>Terveisiin etuhampaisiin, joiden muotoa haluat hieman muuttaa</td></tr>
<tr><td>Kruunut</td><td>Hampaan koko näkyvää osaa</td><td>Enemmän kuin laminaatissa</td><td>Vaurioituneisiin tai paljon paikattuihin hampaisiin sekä implantteihin</td></tr>
</tbody></table></div>
<h2>Mikä sopii minulle?</h2>
<p>Jos hampaasi ovat terveet ja väri häiritsee sinua, valkaisu on yleensä ensimmäinen askel. Laminaatit voivat sopia terveisiin hampaisiin, joiden muotoa tai asentoa haluat hieman muuttaa. Vaurioituneissa tai paljon paikatuissa hampaissa kruunut kestävät yleensä pidempään.</p>
<p>Monessa hymyn muotoilussa näitä hoitoja yhdistetään. Valkaisu tehdään usein ensin, jotta uudet laminaatit tai kruunut voidaan sävyttää vaaleampaan väriin.</p>
<p>Ennen matkaa varmistamme, että sinulla on klinikan kirjallinen suunnitelma, josta näkyy, mitä hoitoa kullekin hampaalle ehdotetaan ja miksi.</p>`
    }
  }
];
