console.log("Dom selector file is loaded . . . . . ");

console.log(document);

// 01. selects an element by class name

const heading = document.getElementById("heading");
console.log(heading);

// 02. selects an element by class name - returns and HTMLCollection

const container = document.getElementsByClassName("container");
console.log(container);

// 03. selects an element by tag name

const tags = document.getElementsByTagName("p");
console.log(tags);

// 04. select the first element that mach a specified CSS selector(s).

const querySelector = document.querySelector(".paragraph");
console.log(querySelector);

// 05.select all element that mach a specified CSS selector(s). Return type :  node list

const querySelectorAll = document.querySelectorAll(".paragraph");
console.log(querySelectorAll);
