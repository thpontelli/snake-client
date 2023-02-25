// Play Module

const connect = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");
// passing the connection object returned by connect() as an argument for the setupInput function
setupInput(connect());
