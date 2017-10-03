const express = require("express");
const app = express();

function runServer(express, PORT){
express.listen(PORT, function(){
    console.log("App works, on port" + PORT);
});
};

module.exports = runServer;
