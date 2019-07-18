var express = require("express");
var exphbs = require("express-handlebars")
var mongoose = require("mongoose");
var logger = require("morgan");
var cheerio = require("cheerio");
var axios = require("axios");
// var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });