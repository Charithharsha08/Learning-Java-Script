console.log("Timer Function file is loaded . . . . .");

// setTimeout function = it will run after a certain amount of time

setTimeout(() => {
  // 5 second delay
  console.log("Hello world !");
}, 5000);

// setInterval function = repeadly execute the same function after a certain interval
const interval = setInterval(() => {
  console.log("hi there !");
}, 2000);

clearInterval(interval);
