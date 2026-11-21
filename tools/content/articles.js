/* Nacre articles: one file per article in tools/content/articles/. Add new ids here. */
module.exports = ["complications", "concierge", "questions", "two-trips", "veneers"].map(function (id) { return require("./articles/" + id); });
