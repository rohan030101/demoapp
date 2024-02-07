const express = require('express');
const { MongoClient } = require("mongodb");
const router = express.Router(); 
const dotenv = require('dotenv')
dotenv.config();

const client = new MongoClient(process.env.DB_URl);
const database  = client.db('esocietyapp');

router.get("/", async (req, res) => {
    const users = database.collection('users');
    let results = await users.find({});
    res.status(200).json(results);
});


router.post('/adduser',async(req,res)=>{
   let username = req.body.username;
   let password = req.body.password;    
   console.log(username, password);
   res.sendStatus(200);
});


module.exports = router;