console.log("Content modification file is loaded");

const heading = document.getElementById("heading");
console.log(heading.textContent);
heading.textContent = "new head";

const doc = document.querySelector(".card");
console.log(doc.innerHTML);
doc.innerHTML = "<h3>New title </h3> <p> this is new p </p>";

console.log(doc.innerText);
doc.innerText = "Just Change P ";

const input = document.querySelector("input[type=text]");
console.log(input);

input.value = "charith harsha";
console.log(input.value);
