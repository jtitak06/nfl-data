const express = require("express");
const cors = require("cors");
const app = express();
const passingData = require("./passing.json");
const rushingData = require("./rushing.json");
const receivingData = require("./receiving.json");


const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("NFL Stat Leaders");
});

app.get("/passing", (req, res) => {
    res.send(passingData);
});

app.get("/rushing", (req, res) => {
    res.send(rushingData);
});

app.get("/receiving", (req, res) => {
    res.send(receivingData);
});

app.listen(port, () => {
    console.log(`Port is listening on port 3000`);
});