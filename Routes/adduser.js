const express = require("express");
const { MongoClient } = require("mongodb");
const router = express.Router();
const dotenv = require("dotenv");
const UserModel = require("../Models/UserModel");
dotenv.config();
const bcrypt = require("bcrypt");
const client = new MongoClient(process.env.DB_URl);
const database = client.db("esocietyapp");
const userCollection = database.collection("users");

router.get("/", async (req, res) => {
  const users = database.collection("users");
  let results = await users.find({}).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
  });
  console.log(results);
  res.status(200).json(results);
});

router.post("/adduser", async (req, res) => {
  let user = UserModel(req.body);
  bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    console.log(user.password);
  });
  res.sendStatus(200);
  let result = await userCollection
    .insertOne(user)
    .then(() => {
      res.status(200);
    })
    .catch((e) => {
      console.log(e);
      res.status(500);
    });
});
module.exports = router;
