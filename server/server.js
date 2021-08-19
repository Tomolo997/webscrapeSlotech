require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;

//connection to the DB
const DB =
  "mongodb+srv://tomaz:tomaz@nobullshit.g3lx5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB collection succesful");
  });

app.listen(port, (_) => console.log(`The server is listening on port ${port}`));

app.get("/", (req, res) => {
  res.send("Express server is up and running.");
});
