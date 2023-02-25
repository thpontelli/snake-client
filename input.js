// Stores the active TCP connection object.
let connection;


const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  //console.log(key);
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w" || key === "W") {
    console.log("Move: up");
    connection.write("Move: up")
  } else if (key === "a" || key === "A") {
    console.log("Move: left");
    connection.write("Move: left")
  } else if (key === "s" || key === "S") {
    console.log("Move: down");
    connection.write("Move: down")
  } else if (key === "d" || key === "D") {
    console.log("Move: right");
    connection.write("Move: right")
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
  // stdin.on("data", (key) => {
    //   console.log(key);
    //   if (key === '\u0003') {
      //     process.exit();
      //   }
      // })
      
      return stdin;
    };


module.exports = {setupInput};