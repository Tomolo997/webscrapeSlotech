require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const Jobs = require("./JobsModel");
const JobsCopy = require("./jobsModelCopy");
const { SlowBuffer } = require("buffer");
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
    if (req.headers.authorization.split(" ")[1] === "thisisforyourbest123") {
      const jobs = await JobsCopy.find();
      jobs.sort(ComparenumberOfJob);
      res.status(200).json({
        status: "success",
        jobs: jobs,
      });
    } else {
      res.status(400).json({
        status: "error",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/v1/jobs-sorted-by-pay", async (req, res) => {
  try {
    if (req.headers.authorization.split(" ")[1] === "thisisforyourbest123") {
      let jobs = await Jobs.find();
      res.status(200).json({
        status: "success",
      });
      res.json({ jobs: sortbyPlacilo(jobs) });
    } else {
      res.status(400).json({
        status: "error",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

const sortByLanguage = async (array) => {
  // let jobs = await JobsCopy.find([
  //   {
  //     $match: {
  //       programmingLanguages: {
  //         $in: array,
  //       },
  //     },
  //   },
  // ]);
  var filter = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    filter[`lang${i}`] = element;
  }
  console.log(filter);
  // let jobs = await JobsCopy.find({
  //   $and: [
  //     { programmingLanguages: "some id 1" },
  //     { programmingLanguages: "some id 2" },
  //   ],
  // });
  let jobs = await JobsCopy.find();

  let jobs2 = jobs.filter(function (item) {
    for (var key in filter) {
      console.log(key);

      if (!item.programmingLanguages.includes(filter[key])) return false;
      // if (item[key] === undefined || item[key] != filter[key]) return false;
    }
    return true;
  });
  return jobs2;
};

app.get("/api/v1/sort/:text", async (req, res) => {
  try {
    console.log(req.params.text);
    let arrayOfLang = req.params.text.split("&");
    const arrayOfJobs = await JobsCopy.find();
    //   $and: [{ programmingLanugages: "some id 1" }, { members: "some id 2" }],
    // });
    sortByLanguage(arrayOfLang);
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
