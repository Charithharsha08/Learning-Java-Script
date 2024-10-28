console.log("DataType file is loaded . . . . .");

// 1 primitive data types
console.log("Primitive Data Types");
console.log("=====================");

// 1.1 Number
let a = 10;
console.log(a);
console.log(typeof a);

// 1.2 String

console.log("=====================");
let b = "charith";
console.log(b);
console.log(typeof b);

// 1.3 Boolean
console.log("=====================");
let c = true;
console.log(c);
console.log(typeof c);

let d = false;
console.log(d);
console.log(typeof d);

// 1.4 undefined
console.log("=====================");
var x;
console.log(x);
console.log(typeof x);

// 1.5 null
console.log("=====================");
var y = null;
console.log(y);
console.log(typeof y);

// 1.6 symbol
console.log("=====================");
let z = Symbol("charith");
console.log(z);
console.log(typeof z);

// 2 Reference data types
console.log("Reference Data Types");

// 2.1 Object
console.log("=====================");
let obj = {
  name: "charith",
  age: 20,
};
console.log(obj);
console.log(typeof obj);
//2.2 Array
let color = ["red", "blue", "black"];
console.log(color);
console.log(typeof color);
console.log(Array.isArray(color));

// 2.3 Function
console.log("=====================");
let fun = function () {
  console.log("this is function");
};
console.log(fun);
console.log(typeof fun);

// 2.4 Date
console.log("=====================");
let date = new Date();
console.log(date);
console.log(typeof date);
