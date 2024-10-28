console.log("Objects file is loaded . . . . .");

let person = {
  // creating an object using object literal
  firstName: "charith",
  lastName: "harsha",
  age: 22,
  hobbies: ["reading", "coding"],
  address: {
    city: "habaraduwa",
  },
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("Person details :", person);

console.log("-------------------------");

// Dot notation

console.log("Person first name :", person.firstName);
console.log("Person last name :", person.lastName);
console.log("Person age :", person.age);
console.log("Person hobbies :", person.hobbies);
console.log("Person Full name :", person.getFullName());
console.log("Person city :", person.address.city);

// Bracket notation

console.log("Person first name :", person["firstName"]);
console.log("Person last name :", person["lastName"]);
console.log("Person age :", person["age"]);
console.log("Person hobbies :", person["hobbies"]);
console.log("Person Full name :", person["getFullName"]());
console.log("Person city :", person["address"]["city"]);

person.number = 12234567502124;

console.log(person.number);

person.firstName = "john";
person.lastName = "silva";

console.log(person.getFullName());

// delete property

delete person.firstName;
delete person.lastName;

console.log(person.getFullName()); // undefined undefined

console.log("-------------------------");
let car = {
  brand: "Toyota",
  model: "Corolla",

  getDescription: function () {
    // return this.brand + " - " + this.model;
    //return ;
  },
};

console.log(car.getDescription());

console.log("-------------------------");

// object as function parameter

function printPerson(person) {
  console.log(person.getFullName());
}

//printPerson((firstName = "charith"), (lastName = "harsha"));

console.log("-------------------------");

// looping through objects

for (let key in person) {
  console.log(key, ":", person[key]);
}

console.log("-------------------------");

// object destructuring

let { firstName, lastName } = person;

console.log(firstName);
console.log(lastName);

console.log("-------------------------");

// object keys

let keys = Object.keys(person);
console.log(keys);

console.log("-------------------------");

// object values

let values = Object.values(person);
console.log(values);

console.log("-------------------------");

// // object entries

// let entries = Object.entries(person);
// console.log(entries);

// console.log("-------------------------");

// // object freeze

// let newPerson = Object.freeze(person);
// console.log(newPerson);
// console.log(newPerson.number);

// console.log("-------------------------");

// // object seal

// let newPerson1 = Object.seal(person);
// console.log(newPerson1);
// console.log(newPerson1.number);

// console.log("-------------------------");

// // object assign

// let newPerson2 = Object.assign({}, person);
// console.log(newPerson2);
// console.log(newPerson2.number);

// console.log("-------------------------");

// // object prototype

// let newPerson3 = Object.create(person);
// console.log(newPerson3);
// console.log(newPerson3.number);

// console.log("-------------------------");

// // object prototype inheritance

// let newPerson4 = Object.create(person, {
//   number: {
//     value: 1234567890,
//   },
// });
// console.log(newPerson4);
// console.log(newPerson4.number);
// console.log(newPerson4.getFullName());

console.log("-------------------------");

// contraction function

function Student(firstName, lastName) {
  //creating object using contractor function
  this.firstName = firstName;
  this.lastName = lastName;
}

let student = new Student("charith", "harsha");
console.log(student);

console.log("-------------------------");

//

class newPerson1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let person1 = new newPerson1("charith", "harsha");
console.log(person1);
console.log(person1.getFullName());

console.log("-------------------------");
