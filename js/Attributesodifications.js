console.log("Attributes Modification DOM Started  . . . . .");

// 01. get attribute
const link = document.querySelector("a");
console.log(link.getAttribute("href"));

//02. set attribute
link.setAttribute("href", "https://web.facebook.com/?_rdc=1&_rdr");
console.log(link.getAttribute("href"));

//03. add ne attribute
link.setAttribute("target", "_blank");

// 04. attribute remove
link.removeAttribute("target");
