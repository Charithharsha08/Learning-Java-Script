console.log("start");
let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log(counter);
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 10500);

// clearInterval(interval);
