const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(() => {
    console.log("request placeholder")
})

app.listen(3000, () => {
    
})


app.use((req, res) => {

})

app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "hot resturant.html"  ))
})