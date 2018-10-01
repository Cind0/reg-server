const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

const express = require('express');

const app = express();

const port = process.env.PORT || 3010;
app.listen(port);
console.log(`Server is listening at ${port}`);