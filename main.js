const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const salt = 10;
const users = require('./Routes/adduser');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/users',users);

app.listen(port, () => {
  console.log(`Server Listening on port http://localhost:${port}`);
});
