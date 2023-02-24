const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  //console.log(key);
  if (key === '\u0003') {
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function () {
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