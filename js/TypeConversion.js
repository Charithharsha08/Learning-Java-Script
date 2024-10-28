console.log("TypeConversion typing file is loaded . . . . .");

// 1. Implicitly Type Conversion

let result = "The answer is " + 100;
console.log(typeof result); // string

let sum = "37" + 10;
console.log(typeof sum); // string

let sub = "37" - 10;
console.log(sub); // 27
console.log(typeof sub); // number

let mul = "37" * 10;
console.log(mul); // 370
console.log(typeof mul); // number

let div = "37" / 10;
console.log(div); // 3.7
console.log(typeof div); // number

let mod = "37" % 10;
console.log(mod); // 7
console.log(typeof mod); // number

// 2. Explicitly Type Conversion

let Number1 = "10";
console.log(Number1); // 10
console.log(typeof Number1); // string

let Number2 = Number(Number1); // 10
console.log(Number2); // 10
console.log(typeof Number2); // number

console.log("-------------------------");

let Number3 = Number("10px"); // 10
console.log(Number3); // naN
console.log(typeof Number3); // number

console.log("-------------------------");

let Number4 = Number(true); //  1
console.log(Number4); //  1
console.log(typeof Number4); // number

console.log("-------------------------");

let Number5 = Number(false); //  0
console.log(Number5); //  0
console.log(typeof Number5); // number

console.log("-------------------------");

let Number6 = Number(null); //  0
console.log(Number6); //  NaN
console.log(typeof Number6); // number

console.log("-------------------------");

let Number7 = Number(undefined); //  0
console.log(Number7); //  0
console.log(typeof Number7); // number

console.log("-------------------------");

let Number8 = parseInt("100"); //  100
console.log(Number8); //  100
console.log(typeof Number8); // number

console.log("-------------------------");

let Number9 = parseInt("100.59"); //  100
console.log(Number9); //  100
console.log(typeof Number9); // number
