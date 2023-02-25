// Input Module

const { connect } = require("http2");

// Stores the active TCP connection object.
let connection;


const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  // configuring WASD for movements  
  } else if (key === "w" || key === "W") {
    connection.write("Move: up")
  } else if (key === "a" || key === "A") {
    connection.write("Move: left")
  } else if (key === "s" || key === "S") {
    connection.write("Move: down")
  } else if (key === "d" || key === "D") {
    connection.write("Move: right")
  // configuring T and B for messages  
  } else if (key === "t" || key === "T") {
    connection.write("Say: Thank You")
  } else if (key === "b" || key === "B") {
    connection.write("Say: Bye :)")
  }
};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
  };


module.exports = {setupInput};