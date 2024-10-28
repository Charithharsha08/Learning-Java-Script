console.log("Arrays file is loaded . . . . .");

let car = new Array("Bmw", "Mercedes", "Audi", "Volkswagen", "Ferrari");
console.log(car);

console.log("-------------------------");

// 2 accessing the array elements
console.log(car[0]);
console.log(car[1]);
console.log(car[2]);
console.log(car[3]);
console.log(car[4]);

console.log("-------------------------");

// 3. changing the array elements
let fruits = ["apple", "banana", "orange"];

fruits[0] = "mango";

console.log(fruits[0]);

console.log("-------------------------");

// 4. Building an array function

// 4.1 push
fruits.push("grapes");
console.log(fruits);

console.log("-------------------------");

// 4.2 pop () removes the last element
console.log(fruits);
let lastElement = fruits.pop();
console.log(lastElement);
console.log(fruits);

console.log("-------------------------");

// 4.3 Shift () removes the first element
console.log(fruits);
let firstElement = fruits.shift();
console.log(firstElement);
console.log(fruits);

console.log("-------------------------");

// 4.4 unshift () adds an element at the beginning
console.log(fruits);
fruits.unshift("lemon");
console.log(fruits);

console.log("-------------------------");

// 4.5 Splice () removes the element at the specified index
console.log(fruits);
fruits.splice(1, 3); // remove 3 elements starting from index 1
console.log(fruits);

console.log("-------------------------");

console.log(fruits);
fruits.splice(1, 0, "banana", "mango", "orange", "strawberry", "watermelon"); // add elements at index 1
console.log(fruits);

console.log("-------------------------");

// 4.6 slice () removes the element at the specified index
console.log(fruits);
let removedFruits = fruits.slice(1, 4); // remove 3 elements starting from index 1
console.log(removedFruits);
console.log(fruits);

console.log("-------------------------");

// 4.7 concat () combines two arrays

let contractArray = fruits.concat(car);
console.log(contractArray);

console.log("-------------------------");

// 4.8 forEach () executes a function for each element in an array

let person = ["charith", "harsha", "suresh"];

person.forEach(function (element) {
  console.log(element);
});

console.log("-------------------------");

// 4.9 map () creates a new array with the results of calling a function for each element in the array

let UppercaseFruits = fruits.map((fruits) => fruits.toUpperCase());
console.log(UppercaseFruits);

console.log("-------------------------");

let length = "ssssssssssssssss";
console.log(length.length);

// 4.10 filter () creates a new array with all elements that pass the test implemented by the provided function

let lengthFruits = fruits.filter((fruits) => fruits.length > 5);
console.log(lengthFruits);

console.log("-------------------------");
