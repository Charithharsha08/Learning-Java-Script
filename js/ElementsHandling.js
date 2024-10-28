console.log("ElementHandling DOM started . . . . ");

const div = document.createElement("div");
console.log(div);

div.className = "new-div ";
div.id = "alert";
div.textContent = "new dev created successfully";
div.style.backgroundColor = "blue";
div.style.borderradious = "20px";
div.style.border = "10px solid lightGreen";
div.style.width = "440px";
div.style.height = "auto";

const card = document.querySelector(".card");
card.append(div);

// card.insertBefore(div, card.firstChild);

// card.removeChild(div);
const newDiv = document.createElement("div");
newDiv.className = "new-Div ";
newDiv.id = "danger-alert";
newDiv.textContent = "Danger ! ";
newDiv.style.backgroundColor = "red";
newDiv.style.borderradious = "20px";
newDiv.style.border = "2px solid black";
newDiv.style.width = "440px";
newDiv.style.height = "auto";

card.replaceChild(newDiv, div);

const cloneDiv = newDiv.cloneNode(true);
card.append(cloneDiv);

//card.remove();

console.log(card.hasChildNodes());
