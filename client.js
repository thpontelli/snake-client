// Client Module

const net = require("net");
const { IP, PORT, ENCODING, PLAYER_INITIALS } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT   // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding(ENCODING);

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write("Name: " + PLAYER_INITIALS);
    // setInterval(()=> {
    //   conn.write("Move: up");
    // },1000);
  });

  return conn;
};

module.exports = connect;