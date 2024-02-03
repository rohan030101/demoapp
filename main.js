const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const salt = 10;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});



app.listen(port, () => {
  console.log(`Server Listening on port http://localhost:${port}`);
});
