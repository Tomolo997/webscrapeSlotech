require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const Jobs = require("./JobsModel");
const JobsCopy = require("./jobsModelCopy");
const app = express();
const port = process.env.PORT || 4001;
//connection to the DB

function compare(a, b) {
  if (a.maximumPlacilo < b.maximumPlacilo) {
    return 1;
  }
  if (a.maximumPlacilo > b.maximumPlacilo) {
    return -1;
  }
  return 0;
}
function ComparenumberOfJob(a, b) {
  if (a.numberOfJob < b.numberOfJob) {
    return 1;
  }
  if (a.numberOfJob > b.numberOfJob) {
    return -1;
  }
  return 0;
}
const sortbyPlacilo = (array) => {
  const sortedArray = array.sort(compare);
  return sortedArray;
};
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
app.use(cors());
app.use(express.json());

app.listen(port, (_) => console.log(`The server is listening on port ${port}`));

app.get("/api/v1/jobs", async (req, res) => {
  try {
    const jobs = await JobsCopy.find();
    jobs.sort(ComparenumberOfJob);
    res.status(200).json({
      status: "success",
      jobs: jobs,
    });
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/v1/jobs-sorted-by-pay", async (req, res) => {
  try {
    let jobs = await Jobs.find();
    res.status(200).json({
      status: "success",
      jobs: sortbyPlacilo(jobs),
    });
  } catch (error) {
    console.log(error);
  }
});

const sortByLanguage = async (array) => {
  let sendJobs = [];

  let jobs = await Jobs.aggregate([
    {
      $match: {
        programmingLanguages: {
          $in: array,
        },
      },
    },
  ]);

  return jobs;
};

app.get("/api/v1/sort/:text", async (req, res) => {
  try {
    console.log(req.params.text);
    let arrayOfLang = req.params.text.split("&");
    res.status(200).json({
      status: "success",
      jobs: await sortByLanguage(arrayOfLang),
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.send("Express server is up and running.");
});
