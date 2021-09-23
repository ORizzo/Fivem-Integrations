const express = require("express");
const Query = require("../sql/db");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/", async function (req, res) {
  console.log("Request feito");
  res.send(await Query());
});

app.listen(8080);
