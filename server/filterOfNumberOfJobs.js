const puppeteer = require("puppeteer");

const fs = require("fs");
//server.js
var cron = require("node-cron");
const jobsData = require("./jobs.json");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
const port = process.env.PORT || 8000;
require("dotenv").config();
const Jobs = require("./JobsModel");
const JobsCopy = require("./jobsModelCopy");
const { async } = require("regenerator-runtime");
const { pathToFileURL } = require("url");

const yea = async () => {
  try {
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

    const jobs = await Jobs.find();

    // function compare(a, b) {
    //   if (a.numberOfJob < b.numberOfJob) return 1;
    //   if (a.numberOfJob > b.numberOfJob) return -1;
    //   return 0;
    // }
    const data = JSON.stringify(jobs.reverse());
    fs.writeFile("jobs.json", data, (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON data is saved.");
    });
    await JobsCopy.remove({});
    jobsData.reverse();
    await JobsCopy.create(jobsData);
  } catch (error) {
    console.log(error);
  }
};

yea();
