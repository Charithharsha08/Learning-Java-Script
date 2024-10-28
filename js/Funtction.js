console.log("Function file is loaded . . . . .");

// 1 function declaration

function greet(firstName) {
  console.log(`${firstName} is a good person`);
  //   console.log("Hello " + firstName);
  console.log("Hello World");
}

greet("susantha");

// 2 function expression

let greet2 = function (firstName) {
  console.log(`${firstName} is a good person`);
  console.log("Hello World");
};

// 3 arrow function

let greet3 = (firstName) => {
  // if you have only one parameter you can remove the ()
  console.log(`${firstName} is a good person`);
  console.log("Hello World");
};

greet3("charith");

console.log("-------------------------");

let greet4 = (firstName) => console.log(`${firstName} is a good person`); // if you have only one parameter you can remove the ()
greet3("Harsha");

console.log("-------------------------");

// 4 default parameter

let greet5 = (
  firstName = "charith" // default parameter
) => console.log(`${firstName} is a good person`);
greet5("jayashan");

greet5();
console.log("-------------------------");

// rest parameter - ...

let greet6 = (firstName, ...hobbies) => {
  // you can have any number of parameters
  console.log(`${firstName} has ${hobbies.length} hobbies`);
  console.log(hobbies);
};
greet6("charith", "reading", "coding", "singing", "dancing"); // you can have any number of parameters

console.log("-------------------------");
