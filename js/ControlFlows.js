console.log("Control Flows file is loaded . . . . .");

// 1. if else

let a = 10;
let b = 20;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}

// 2. if else if else

let c = 10;
let d = 20;

if (c > d) {
  console.log("c is greater than d");
} else if (c < d) {
  console.log("d is greater than c");
} else {
  console.log("c and d are equal");
}

// 3. switch case

let e = 10;
let f = 20;

switch (e) {
  case 10:
    console.log("e is 10");
    break;
  case 20:
    console.log("e is 20");
    break;
  default:
    console.log("e is not 10 or 20");
    break;
}

switch (f) {
  case 10:
    console.log("f is 10");
    break;
  case 20:
    console.log("f is 20");
    break;
  default:
    console.log("f is not 10 or 20");
    break;
}

// 4. for loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for in loop

let person = {
  name: "charith",
  age: 20,
};

for (let key in person) {
  console.log(key, person[key]);
}

// for of loop

for (let key of Object.keys(person)) {
  console.log(key, person[key]);
}

arr.forEach((element) => {
  console.log(element);
});

// for in loop

for (let i in arr) {
  console.log(arr[i]);
}

// for of loop

for (let i of arr) {
  console.log(i);
}

// for each loop

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 5. while loop

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// 6. do while loop

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 5);

// 7. break

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    break;
  }
  console.log(i);
}

// 8. continue

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}

// 9. label

outer: for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i === 2) {
      break outer;
    }
    console.log(i, j);
  }
}

// 10. return

function add(a, b) {
  return a + b;
}

let result = add(10, 20);
console.log(result);

// 11. throw

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
