/*
  Nacre site settings shared by tools/build-pages.js and tools/build-blog.js.

  COMPANY DETAILS (template)
  Leave the fields empty until the business is registered. While "name" is empty,
  nothing is shown on the site. When you fill them in, run:
    node tools/build-pages.js && node tools/build-blog.js
  The details then appear in the footer of every page and in the privacy policy.

  Example:
    name: "Company name Sp. z o.o.",
    lines: ["NIP: 0000000000", "ul. Example 1, 80-000 Gdańsk, Poland"]
*/
module.exports = {
  site: "https://wearenacre.com",
  email: "hello@wearenacre.com",
  company: {
    name: "",
    lines: []
  }
};
