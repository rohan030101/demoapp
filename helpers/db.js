const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const connectionstrint = process.env.DB_URL
const client = new MongoClient(connectionstrint);

async function connectdb(){
    try {
        const database = client.db('esociety');
        console.log(database);
    } catch (e) {   
        console.log(e);
    }
}


exports.connectdb= connectdb;
