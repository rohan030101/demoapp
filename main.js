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

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.genSalt(salt, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      console.log(hash);
      console.log(`The UserID and Password is ${username} and ${hash}`);
      const token = jwt.sign({username},"soc",{
        expiresIn:"1m"
      })
      console.log(token);
    });
  });

  //   res.send("Login Successfull ");
  res.sendFile(__dirname + "/public/dashboard.html");
});

app.listen(port, () => {
  console.log(`Server Listening on port http://localhost:${port}`);
});
