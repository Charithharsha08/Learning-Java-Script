console.log("Prototype file is loaded . . . . .");

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getFullName = function () {
  return this.name + " " + this.age;
};

let person = new Person("charith", 22);
console.log(person);
console.log(person.getFullName());
