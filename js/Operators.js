console.log("Operators file is loaded . . . . .");

// Arithmetic Operators

let a = 10;
let b = 20;

let c = a + b;
console.log(c);

let d = a - b;
console.log(d);

let e = a * b;
console.log(e);

let f = a / b;
console.log(f);

let g = a % b;
console.log(g);

// Assignment Operators

let h = 10; //assignment operator
let i = 20;

h += i; //   h = h + i
console.log(h); // 30

h -= i; // h = h - i
console.log(h); // 10

h *= i; // h = h * i
console.log(h); // 200

h /= i; // h = h / i
console.log(h); // 10

h %= i; // h = h % i
console.log(h); // 0

// Comparison Operators

let j = 10;
let k = 20;

let l = j == k;
console.log(l); // false

let m = "10";
let n = 10;

console.log(m == n); // true   * is check value only
console.log(m === n); // false   * is check value and type

console.log("=======================");

console.log(j != k); // true
console.log(j !== k); // true
console.log(j > k); // false
console.log(j < k); // true
console.log(j >= k); // false
console.log(j <= k); // true

console.log("=======================");

// Logical Operators

let o = 10;
let p = 20;

// &&  return true if both are true
console.log(o == 10 && p == 20); // true
console.log(o == 10 && p == 30); // false

// || return true if one of them is true
console.log(o == 10 || p == 20); // true
console.log(o == 10 || p == 30); // true

// ! return true if it is false
console.log(!(o == 10)); // false
console.log(!(p == 20)); // true

console.log("=======================");

// Ternary Operator
let q = 10;

// if q is 10 then print yes else print no
console.log(q > 10 ? "yes" : "no"); // yes

// if q is not 10 then print yes else print no
console.log(q < 10 ? "yes" : "no"); // no

// if q is equal to 10 then print yes else print no
console.log(q == 10 ? "yes" : "no");
