/* Nacre articles: one file per article in tools/content/articles/. Add new ids here. */
module.exports = ["complications", "concierge", "costs", "questions", "two-trips", "veneers", "fullarch", "veneercost"].map(function (id) { return require("./articles/" + id); });
