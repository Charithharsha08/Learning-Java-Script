console.log("DOM Traversing Started . . . . .");

const cardSelector = document.querySelector(".card-body");
console.log(cardSelector);

console.log(cardSelector.parentNode);

console.log(cardSelector.parentNode.parentNode.parentNode);

const card = document.querySelector(".card");
console.log(card.children);

console.log(card.children[0]);

console.log(card.firstChild);

console.log(card.lastChild);
