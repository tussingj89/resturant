var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// reservation array starts empty
let reservationsArray = [];

app.post("/reservation", function(req, res) {

    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
//routes

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "resturant.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
// listener
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });