console.log("Variable JS is loaded . . . . .");

// VAR

var firstName = "charith"; //globule scope

console.log(firstName);

function testVar() {
  console.log("text function");
  var x = 10;
  console.log(x);
}
testVar();
// console.log(x); getting error

// LET

function testLet() {
  let y = 10;
  console.log(y);

  if (true) {
    let z = 20;
    console.log(z);
  }
  console.log(y);
}
testLet();

// CONST

if (true) {
  const m = 25;
  console.log(m);
}
