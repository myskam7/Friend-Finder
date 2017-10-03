
const express = require("express");
const bodyParser = require("body-parser");
const runServer = require("./app/routing/runServer");
const htmlRouter = require("./app/routing/htmlRoutes");


var friends = require('./app/data/friends.js')
const path = require("path");




var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = 8080;

htmlRouter(app, __dirname, friends, path)

runServer(app, PORT);

