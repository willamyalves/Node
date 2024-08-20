const url = require("url");
const myURL = new url.URL(
  "https://example.org:3000/foo/bar?name=ferret&color=purple"
);

const host = myURL.host;
const pathname = myURL.pathname;
const href = myURL.href;
const search = myURL.search;
const searchParams = myURL.searchParams;
const getParams = searchParams.get("color");

console.log(host);
console.log(pathname);
console.log(href);
console.log(search);
console.log(searchParams);
console.log(getParams);
