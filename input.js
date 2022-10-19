const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, Messages } = require('./constants');

let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit(); // ctrl + c to exit the game
  }

  if (key === MOVE_UP_KEY) {
    console.log("here it is", connection);
    connection.write('Move: up');
  }

  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }

  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }

  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }

  if (Messages[key]) {
    connection.write(Messages[key]);
  }
};


module.exports = { setupInput };