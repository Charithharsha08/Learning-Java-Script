console.log("class manipulation DOM Start . . . . ");

//select element by using id
const heading = document.querySelector("#heading");

// print class list in selected element
console.log(heading.classList);

// 02. class add dynamically
heading.classList.add("new-class");
console.log(heading.classList);

// 03. class remove dynamically
heading.classList.remove("heading");
console.log(heading.classList);

// 04.Toggle between

heading.classList.toggle("active");
console.log(heading.classList);

heading.classList.toggle("active");
console.log(heading.classList);
