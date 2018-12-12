const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require("path");

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect(
  'mongodb+srv://joey:15Goh66XqDdr9pE4@cluster0-qgyoy.mongodb.net/node-angular?retryWrites=true',
  { useNewUrlParser: true },
  )
.then(() => {
  console.log('Connected to database!');
})
.catch(() => {
  console.log('Connection failed!')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //not need, just example
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS",
  )
  next();
});

app.use('/api/posts', postRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
