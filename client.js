// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You have connected to the game");
    conn.write("Name: AF");

  });

  conn.on("data", (data) => {
    console.log("You ded cuz you idled");
  });

  return conn;
};

module.exports = { connect };