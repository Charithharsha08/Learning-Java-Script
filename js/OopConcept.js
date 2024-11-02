console.log("oop concept loading");

// 1. class

// 1.1 class declaration
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfomation() {
    return `${this.make} - ${this.model} - ${this.year}`;
  }
}
let car = new Vehicle("toyota", "CHR", 2020);
console.log(car.displayInfomation());
console.log("================================");

// 1.2 class inheritance
class Car extends Vehicle {
  constructor(make, model, year, color) {
    super(make, model, year);
    this.color = color;
  }
  displayInfomation() {
    return `${super.displayInfomation()} - ${this.color}`;
  }
}
let car2 = new Car("toyota", "CHR", 2020, "red");
console.log(car2.displayInfomation());
console.log("================================");
