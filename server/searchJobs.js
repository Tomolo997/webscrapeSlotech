//server.js
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
const port = process.env.PORT || 8000;
require("dotenv").config();
const Jobs = require("./JobsModel");
const { async } = require("regenerator-runtime");
const { pathToFileURL } = require("url");

//connection to the DB
const DB = process.env.DATABASE;
mongoose
  .connect(
    "mongodb+srv://tomaz:tomaz@nobullshit.g3lx5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB collection succesfull");
  });

const yeaa = async () => {
  const jobs = await Jobs.find();
  await Jobs.create({ yea: "yea" });
  console.log(jobs);
};
yeaa();
