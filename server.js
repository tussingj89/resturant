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

    newReservation.routeName = newReservation.name.replace();
})
//routes

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/api/reservationArray/:reservationArray", function(req, res) {
    var chosen = req.params.reservationsArray;
  
    console.log(chosen);
  
    for (var i = 0; i < reservationsArray.length; i++) {
      if (chosen === reservationsArray[i].routeName) {
        return res.json(reservationsArray[i]);
      }
    }
  
    return res.json(false);
  });
// listener
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });