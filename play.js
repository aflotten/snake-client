const connect = require("./client");

const handleUserInput = function() {
  console.log(data)
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

console.log("Connecting ...");
connect();