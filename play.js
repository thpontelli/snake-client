const connect = require("./client");
const {setupInput} = require("./input");



console.log("Connecting ...");
setupInput(connect());

// console.log("Awaiting for key comands");
// setupInput();
    