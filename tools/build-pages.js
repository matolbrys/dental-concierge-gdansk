/*
  Nacre: builds the per-language homepages (/sv/, /no/, /da/, /fi/) from the root index.html,
  and the SEO block (title, description, hreflang, Open Graph, JSON-LD) for every language.
  The root index.html is the single source. After changing it, rebuild the language pages:
    node tools/build-pages.js
  Works in Node and in a browser (buildPage(src, lang) has no dependencies).
*/
var SITE = "https://wearenacre.com";
var LANG_PATH = { en: "/", sv: "/sv/", no: "/no/", da: "/da/", fi: "/fi/" };
var HTML_LANG = { en: "en", sv: "sv", no: "nb", da: "da", fi: "fi" };
var LANG_NAME = { en: "English", sv: "Svenska", no: "Norsk", da: "Dansk", fi: "Suomi" };
var SEO = {
  en: { locale: "en_GB",
    title: "Nacre | Private dental concierge in Gdańsk, Poland",
    desc: "Considering dental implants in Poland? Nacre, an independent concierge in Gdańsk, matches you with a licensed clinic and coordinates your stay. Not a clinic." },
  sv: { locale: "sv_SE",
    title: "Tandimplantat och tandvård i Polen | Nacre, concierge i Gdańsk",
    desc: "Funderar du på tandimplantat i Polen? Nacre är en oberoende concierge i Gdańsk som hittar en legitimerad klinik och samordnar din resa. Vi är ingen klinik." },
  no: { locale: "nb_NO",
    title: "Tannimplantater og tannbehandling i Polen | Nacre, concierge i Gdańsk",
    desc: "Vurderer du tannimplantater i Polen? Nacre er en uavhengig concierge i Gdańsk som finner en autorisert klinikk og koordinerer reisen din. Vi er ingen klinikk." },
  da: { locale: "da_DK",
    title: "Tandimplantater og tandbehandling i Polen | Nacre, concierge i Gdańsk",
    desc: "Overvejer du tandimplantater i Polen? Nacre er en uafhængig concierge i Gdańsk, der finder en autoriseret klinik og koordinerer din rejse. Vi er ikke en klinik." },
  fi: { locale: "fi_FI",
    title: "Hammasimplantit ja hammashoito Puolassa | Nacre, concierge Gdańskissa",
    desc: "Harkitsetko hammasimplantteja Puolassa? Nacre on riippumaton concierge Gdańskissa: löydämme luvan saaneen klinikan ja koordinoimme matkasi. Emme ole klinikka." }
};
var OG_IMAGE = "https://images.unsplash.com/photo-1574060603747-421196bce3f4?w=1200&h=630&fit=crop&q=75&auto=format";

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function escAttr(s) { return esc(s).replace(/"/g, "&quot;"); }

function parseT(src) {
  var a = src.indexOf("const T = {"), b = src.indexOf("\n};", a);
  if (a < 0 || b < 0) throw new Error("T dictionary not found");
  var body = src.slice(a + 10, b + 2);
  return JSON.parse(body.replace(/([{,])(en|sv|no|da|fi):"/g, '$1"$2":"'));
}

function seoBlock(T, lang) {
  var s = SEO[lang], url = SITE + LANG_PATH[lang];
  var tr = function (k) { var e = T[k]; return e ? (e[lang] || e.en) : ""; };
  var out = [];
  out.push("<title>" + esc(s.title) + "</title>");
  out.push('<meta name="description" content="' + escAttr(s.desc) + '">');
  out.push('<link rel="canonical" href="' + url + '">');
  ["en", "sv", "no", "da", "fi"].forEach(function (l) {
    out.push('<link rel="alternate" hreflang="' + l + '" href="' + SITE + LANG_PATH[l] + '">');
  });
  out.push('<link rel="alternate" hreflang="x-default" href="' + SITE + '/">');
  out.push('<meta property="og:site_name" content="Nacre">');
  out.push('<meta property="og:title" content="' + escAttr(s.title) + '">');
  out.push('<meta property="og:description" content="' + escAttr(s.desc) + '">');
  out.push('<meta property="og:type" content="website">');
  out.push('<meta property="og:url" content="' + url + '">');
  out.push('<meta property="og:locale" content="' + s.locale + '">');
  out.push('<meta property="og:image" content="' + OG_IMAGE + '">');
  out.push('<meta name="twitter:card" content="summary_large_image">');
  var faq = Object.keys(T).filter(function (k) { return /^q\d+$/.test(k) && T["a" + k.slice(1)]; }).map(function (k) {
    return { "@type": "Question", "name": tr(k), "acceptedAnswer": { "@type": "Answer", "text": tr("a" + k.slice(1)) } };
  });
  var ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": SITE + "/#org", "name": "Nacre", "url": SITE + "/",
      "email": "hello@wearenacre.com", "description": s.desc,
      "address": { "@type": "PostalAddress", "addressLocality": "Gdańsk", "addressCountry": "PL" },
      "areaServed": ["Sweden", "Norway", "Denmark", "Finland"].map(function (c) { return { "@type": "Country", "name": c }; }) },
    { "@type": "WebSite", "@id": SITE + "/#website", "url": SITE + "/", "name": "Nacre", "publisher": { "@id": SITE + "/#org" } },
    { "@type": "WebPage", "@id": url + "#page", "url": url, "name": s.title, "description": s.desc,
      "inLanguage": HTML_LANG[lang], "isPartOf": { "@id": SITE + "/#website" }, "about": { "@id": SITE + "/#org" } },
    { "@type": "FAQPage", "@id": url + "#faq", "inLanguage": HTML_LANG[lang], "mainEntity": faq }
  ] };
  out.push('<script type="application/ld+json">' + JSON.stringify(ld).replace(/</g, "\\u003c") + "</script>");
  return "<!-- seo -->\n" + out.join("\n") + "\n<!-- /seo -->";
}

function buildPage(src, lang) {
  if (!LANG_PATH[lang]) throw new Error("Unknown language " + lang);
  var T = parseT(src);
  var tr = function (k) { var e = T[k]; return e ? (e[lang] || e.en) : null; };
  var out = src;
  var a = out.indexOf("<!-- seo -->"), b = out.indexOf("<!-- /seo -->");
  if (a < 0 || b < 0) throw new Error("SEO markers not found");
  out = out.slice(0, a) + seoBlock(T, lang) + out.slice(b + "<!-- /seo -->".length);
  out = out.replace(/<html lang="[^"]*" data-page="[^"]*">/, '<html lang="' + HTML_LANG[lang] + '" data-page="' + lang + '">');
  if (lang === "en") return out;
  // Translate the page body (everything before the main script)
  var cut = out.indexOf("<script>\n/* SimplyForms");
  var head = out.slice(0, cut), tail = out.slice(cut);
  head = head.replace(/(<([a-zA-Z0-9]+)\b[^>]*?\sdata-i18n="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/g, function (m, open, tag, key, inner, close) {
    var v = tr(key); return v == null ? m : open + esc(v) + close;
  });
  head = head.replace(/<img\b[^>]*>/g, function (tag) {
    var m = tag.match(/data-i18n-alt="([^"]+)"/); if (!m) return tag;
    var v = tr(m[1]); return v == null ? tag : tag.replace(/\balt="[^"]*"/, 'alt="' + escAttr(v) + '"');
  });
  // Language switcher state
  head = head.replace('<use href="#flag-en"/></svg><span id="langName">English</span>', '<use href="#flag-' + lang + '"/></svg><span id="langName">' + LANG_NAME[lang] + '</span>');
  head = head.replace('aria-label="Language: English"', 'aria-label="' + escAttr(tr("nav.lang") + ": " + LANG_NAME[lang]) + '"');
  head = head.replace(/(<li role="option" id="lang-(\w+)"[^>]*aria-selected=")(true|false)(")/g, function (m, p, l, v, q) { return p + (l === lang) + q; });
  head = head.replace('id="fLang" value="en"', 'id="fLang" value="' + lang + '"');
  return head + tail;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { buildPage: buildPage, LANG_PATH: LANG_PATH, SITE: SITE };
  if (require.main === module) {
    var fs = require("fs"), path = require("path"), root = path.join(__dirname, "..");
    var src = fs.readFileSync(path.join(root, "index.html"), "utf8");
    var en = buildPage(src, "en");
    if (en !== src) { fs.writeFileSync(path.join(root, "index.html"), en); console.log("updated index.html"); }
    ["sv", "no", "da", "fi"].forEach(function (l) {
      fs.mkdirSync(path.join(root, l), { recursive: true });
      fs.writeFileSync(path.join(root, l, "index.html"), buildPage(en, l));
      console.log("built /" + l + "/");
    });
  }
}
