/*
  Nacre: builds the article pages, article lists and privacy policy in all languages,
  plus sitemap.xml. Content lives in tools/content/. Run after any change:
    node tools/build-blog.js
*/
var fs = require("fs"), path = require("path");
var ROOT = path.join(__dirname, "..");
var CFG = require("./site-config");
var TXT = require("./content/site-text");
var ARTICLES = require("./content/articles");
var SITE = CFG.site, EMAIL = CFG.email;
var LANGS = ["en", "sv", "no", "da", "fi"];
var TRANSLATED_ON = "2026-10-27";

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function attr(s) { return esc(s).replace(/"/g, "&quot;"); }
function abs(u) { return /^https?:/.test(u) ? u : SITE + u; }
function fmtDate(d, lang) { return new Date(d + "T12:00:00Z").toLocaleDateString(TXT.locale[lang], { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }); }

// "Start a conversation" in every language, taken from the homepage dictionary
var src = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
var ta = src.indexOf("const T = {"), tb = src.indexOf("\n};", ta);
var T = JSON.parse(src.slice(ta + 10, tb + 2).replace(/([{,])(en|sv|no|da|fi):"/g, '$1"$2":"'));
function cta(lang) { return T.cta[lang] || T.cta.en; }

function companyHtml(cls) {
  var c = CFG.company || {};
  if (!c.name) return "";
  return '<p class="' + cls + '">' + [esc(c.name)].concat((c.lines || []).map(esc)).join(cls === "company-details" ? "<br>" : " &middot; ") + "</p>";
}

function head(o) {
  var h = [
    "<!doctype html>",
    '<html lang="' + TXT.htmlLang[o.lang] + '">',
    "<head>",
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    "<title>" + esc(o.title) + "</title>",
    '<meta name="description" content="' + attr(o.desc) + '">',
    '<link rel="canonical" href="' + SITE + o.path + '">'
  ];
  if (o.alts) {
    LANGS.forEach(function (l) { if (o.alts[l]) h.push('<link rel="alternate" hreflang="' + l + '" href="' + SITE + o.alts[l] + '">'); });
    h.push('<link rel="alternate" hreflang="x-default" href="' + SITE + o.alts.en + '">');
  }
  h.push('<meta property="og:site_name" content="Nacre">');
  h.push('<meta property="og:title" content="' + attr(o.ogTitle || o.title) + '">');
  h.push('<meta property="og:description" content="' + attr(o.desc) + '">');
  h.push('<meta property="og:type" content="' + (o.type || "website") + '">');
  h.push('<meta property="og:url" content="' + SITE + o.path + '">');
  h.push('<meta property="og:locale" content="' + TXT.ogLocale[o.lang] + '">');
  if (o.image) { h.push('<meta property="og:image" content="' + attr(o.image) + '">'); h.push('<meta name="twitter:card" content="summary_large_image">'); }
  h.push('<link rel="icon" href="/favicon.svg" type="image/svg+xml">');
  h.push('<link rel="preconnect" href="https://images.unsplash.com">');
  h.push('<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap">');
  h.push('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/light/style.css">');
  h.push('<link rel="stylesheet" href="/blog/blog.css">');
  if (o.ld) h.push('<script type="application/ld+json">' + JSON.stringify(o.ld).replace(/</g, "\\u003c") + "</script>");
  h.push("</head>", "<body>");
  h.push('<header class="nav">', '  <div class="wrap nav-inner">',
    '    <a class="logo" href="' + TXT.paths.home[o.lang] + '">NACRE</a>',
    '    <a class="btn" href="' + TXT.paths.home[o.lang] + '#request">' + esc(cta(o.lang)) + "</a>",
    "  </div>", "</header>");
  return h.join("\n");
}

function langLinks(lang, alts) {
  var u = TXT.ui[lang];
  var links = LANGS.filter(function (l) { return l !== lang && alts[l]; }).map(function (l) {
    return '<a href="' + alts[l] + '" hreflang="' + l + '" lang="' + TXT.htmlLang[l] + '">' + TXT.langName[l] + "</a>";
  });
  return '<p class="langs">' + esc(u.readIn) + ": " + links.join(" &middot; ") + "</p>";
}

function foot(lang, alts) {
  var u = TXT.ui[lang];
  return [
    "<footer>", '  <div class="wrap">',
    '    <a class="logo" href="' + TXT.paths.home[lang] + '">NACRE</a>',
    "    <p>" + esc(u.foot) + "</p>",
    '    <p class="links"><a href="' + TXT.paths.blog[lang] + '">' + esc(u.articles) + '</a> <span aria-hidden="true">&middot;</span> <a href="' + TXT.paths.privacy[lang] + '">' + esc(u.privacy) + '</a> <span aria-hidden="true">&middot;</span> <a href="mailto:' + EMAIL + '">' + EMAIL + "</a></p>",
    companyHtml("company") ? "    " + companyHtml("company") : null,
    alts ? "    " + langLinks(lang, alts) : null,
    "  </div>", "</footer>", "</body>", "</html>", ""
  ].filter(function (x) { return x !== null; }).join("\n");
}

function postDate(a, lang) { return lang === "en" ? a.published : (a.published > TRANSLATED_ON ? a.published : TRANSLATED_ON); }
function postPath(a, lang) { return TXT.paths.blog[lang] + a[lang].slug + ".html"; }
function postAlts(a) { var o = {}; LANGS.forEach(function (l) { o[l] = postPath(a, l); }); return o; }
function imgSrc(a) { return a.img.src; }
function thumbSrc(a) { return a.img.thumb || a.img.src; }
function ogImg(a) { return abs(a.img.og || a.img.src); }

var out = {};
function write(rel, html) { out[rel] = html; }

// Articles, newest first
var sorted = ARTICLES.slice().sort(function (x, y) { return x.published < y.published ? 1 : x.published > y.published ? -1 : 0; });

LANGS.forEach(function (lang) {
  var u = TXT.ui[lang];
  sorted.forEach(function (a) {
    var c = a[lang], p = postPath(a, lang), alts = postAlts(a), date = postDate(a, lang);
    var ld = { "@context": "https://schema.org", "@type": "BlogPosting", "headline": c.title, "description": c.desc,
      "image": ogImg(a), "datePublished": date, "dateModified": date, "inLanguage": TXT.htmlLang[lang],
      "mainEntityOfPage": SITE + p, "url": SITE + p,
      "author": { "@type": "Organization", "name": "Nacre", "url": SITE + "/" },
      "publisher": { "@type": "Organization", "@id": SITE + "/#org", "name": "Nacre", "url": SITE + "/" } };
    var html = head({ lang: lang, title: c.title + " | Nacre", ogTitle: c.title, desc: c.desc, path: p, alts: alts, type: "article", image: ogImg(a), ld: ld }) + "\n" + [
      "<main>", '<article class="post">',
      '  <a class="back" href="' + TXT.paths.blog[lang] + '"><i class="ph-light ph-arrow-left" aria-hidden="true"></i>' + esc(u.all) + "</a>",
      '  <p class="meta"><time datetime="' + date + '">' + esc(fmtDate(date, lang)) + "</time> &middot; " + a.minutes + " " + esc(u.read) + "</p>",
      "  <h1>" + esc(c.title) + "</h1>",
      '  <p class="lede">' + esc(c.lede) + "</p>",
      '  <figure class="cover"><img src="' + attr(imgSrc(a)) + '" width="' + a.img.w + '" height="' + a.img.h + '" alt="' + attr(a.alt[lang]) + '"></figure>',
      '  <div class="prose">' + c.body.replace(/\n/g, "\n    ") + "\n  </div>",
      '  <p class="disclaimer"><i class="ph-light ph-info" aria-hidden="true"></i><span>' + esc(u.disclaimer) + "</span></p>",
      '  <section class="post-cta">',
      "    <h2>" + esc(c.cta) + "</h2>",
      "    <p>" + esc(u.ctaP) + "</p>",
      '    <a class="btn" href="' + TXT.paths.home[lang] + '#request">' + esc(cta(lang)) + "</a>",
      "  </section>", "</article>", "</main>"
    ].join("\n") + "\n" + foot(lang, alts);
    write(p.slice(1), html);
  });

  // Article list
  var lp = TXT.paths.blog[lang], lalts = {};
  LANGS.forEach(function (l) { lalts[l] = TXT.paths.blog[l]; });
  var ld = { "@context": "https://schema.org", "@type": "Blog", "name": u.listTitle, "url": SITE + lp, "inLanguage": TXT.htmlLang[lang],
    "publisher": { "@type": "Organization", "@id": SITE + "/#org", "name": "Nacre", "url": SITE + "/" },
    "blogPost": sorted.map(function (a) { return { "@type": "BlogPosting", "headline": a[lang].title, "url": SITE + postPath(a, lang), "datePublished": postDate(a, lang) }; }) };
  var cards = sorted.map(function (a, i) {
    var c = a[lang], date = postDate(a, lang);
    return '    <a href="' + a[lang].slug + '.html"' + (i === 0 ? ' class="first"' : "") + '><div class="thumb"><img loading="' + (i ? "lazy" : "eager") + '" width="1000" height="625" src="' + attr(thumbSrc(a)) + '" alt="' + attr(a.alt[lang]) + '"></div><div><p class="meta"><time datetime="' + date + '">' + esc(fmtDate(date, lang)) + "</time> &middot; " + a.minutes + " " + esc(u.read) + "</p><h2>" + esc(c.title) + '</h2><p class="ex">' + esc(c.lede) + "</p></div></a>";
  }).join("\n");
  var list = head({ lang: lang, title: u.listTitle, ogTitle: u.listTitle, desc: u.listDesc, path: lp, alts: lalts, image: ogImg(sorted[0]), ld: ld }) + "\n" + [
    '<main class="wrap">', '  <div class="list-head">',
    "    <h1>" + esc(u.articles) + "</h1>",
    "    <p>" + esc(u.listIntro) + "</p>",
    "  </div>", '  <div class="posts" id="posts">', cards, "  </div>", "</main>"
  ].join("\n") + "\n" + foot(lang, lalts);
  write(lp.slice(1) + "index.html", list);

  // Privacy policy
  var pv = TXT.privacy[lang], pp = TXT.paths.privacy[lang], palts = {};
  LANGS.forEach(function (l) { palts[l] = TXT.paths.privacy[l]; });
  var body = pv.sections.map(function (s) { return "    <h2>" + esc(s[0]) + "</h2>\n    " + s[1].replace("{company}", companyHtml("company-details")); }).join("\n");
  var priv = head({ lang: lang, title: pv.title + " | Nacre", ogTitle: pv.title, desc: pv.desc, path: pp, alts: palts }) + "\n" + [
    '<main class="legal">',
    "  <h1>" + esc(pv.title) + "</h1>",
    '  <p class="meta">' + esc(u.updated) + ': <time datetime="' + TXT.privacy.updated + '">' + esc(fmtDate(TXT.privacy.updated, lang)) + "</time></p>",
    '  <div class="prose">', body, "  </div>", "</main>"
  ].join("\n") + "\n" + foot(lang, palts);
  write(pp.slice(1), priv);
});

// Sitemap
var today = TRANSLATED_ON;
function group(paths, lastmod) {
  return LANGS.map(function (l) {
    return "  <url>\n    <loc>" + SITE + paths[l] + "</loc>\n    <lastmod>" + (typeof lastmod === "function" ? lastmod(l) : lastmod) + "</lastmod>" +
      LANGS.map(function (k) { return '\n    <xhtml:link rel="alternate" hreflang="' + k + '" href="' + SITE + paths[k] + '"/>'; }).join("") +
      '\n    <xhtml:link rel="alternate" hreflang="x-default" href="' + SITE + paths.en + '"/>\n  </url>';
  }).join("\n");
}
var urls = [group(TXT.paths.home, today), group(TXT.paths.blog, today)];
sorted.forEach(function (a) { urls.push(group(postAlts(a), function (l) { return postDate(a, l); })); });
urls.push(group(TXT.paths.privacy, TXT.privacy.updated));
write("sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + urls.join("\n") + "\n</urlset>\n");

Object.keys(out).forEach(function (rel) {
  var f = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, out[rel]);
});
console.log("built " + Object.keys(out).length + " files");
