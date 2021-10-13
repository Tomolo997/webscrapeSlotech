require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const Jobs = require("./JobsModel");
const JobsCopy = require("./jobsModelCopy");
const Users = require("./UserModel");
const UsersProd = require("./UsersProd");
const { sendEmail } = require("./Email");
const { type } = require("os");
const { resolveSoa } = require("dns");
const app = express();
const port = process.env.PORT || 4001;
//connection to the DB =>
//8081 port for production

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
      const jobs = await Jobs.find();
      console.log(jobs.length);
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
    let jobs = await Jobs.find();
    res.status(200).json({
      status: "success",
      jobs: sortbyPlacilo(jobs),
    });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/v1/add-email", async (req, res) => {
  try {
    const email = req.body.email;
    sendEmail(email);
    let foundEmail = await Users.find({ email: email });
    if (foundEmail.length > 0) {
      return res.status(200).json({
        status: "error",
        message: "User with this email already exits",
      });
    } else {
      await Users.create({
        email: email,
        isRemote: req.body.isRemote,
        filters: req.body.filters,
      });
    }

    res.status(200).json({
      status: "success",
      message: "Congrats you are ready to receive new job emails 😀",
    });
  } catch (error) {
    console.log(error);
  }
});

const sortByLanguage = async (array, remote) => {
  // let jobs = await Jobs.find([
  //   {
  //     $match: {
  //       programmingLanguages: {
  //         $in: array,
  //       },
  //     },
  //   },
  // ]);
  console.log(typeof remote);
  console.log("remote", remote);
  let jobs = [];

  if (remote == "true" || remote == undefined) {
    jobs = await Jobs.find({ isRemote: true });
  } else if (remote == "false") {
    jobs = await Jobs.find();
  }
  if (array[0] == "") {
    return jobs.sort(ComparenumberOfJob);
  }
  var filter = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    filter[`lang${i}`] = element;
  }

  // let jobs = await Jobs.find({
  //   $and: [
  //     { programmingLanguages: "some id 1" },
  //     { programmingLanguages: "some id 2" },
  //   ],
  // });

  let jobs2 = jobs.filter(function (item) {
    for (var key in filter) {
      if (!item.programmingLanguages.includes(filter[key])) return false;
      // if (item[key] === undefined || item[key] != filter[key]) return false;
    }
    return true;
  });
  return jobs2.sort(ComparenumberOfJob);
};

app.get("/api/v1/sort/:text", async (req, res) => {
  try {
    let arrayOfparameters = req.params.text.split("&");
    let arrayOfLangParamers = arrayOfparameters[0].split("=");
    let arrayOfLang = arrayOfLangParamers[1].split("-");

    let remote = arrayOfparameters[1].split("=")[1];

    console.log("remote", remote);
    console.log("array of lang ", arrayOfLang);

    if (arrayOfLang.includes("chashtag")) {
      arrayOfLang.splice(arrayOfLang.indexOf("chashtag"), 1, "c#");
    }
    // const arrayOfJobs = await Jobs.find();
    //   $and: [{ programmingLanugages: "some id 1" }, { members: "some id 2" }],
    // });
    res.status(200).json({
      status: "success",
      jobs: await sortByLanguage(arrayOfLang, remote),
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/v1/post-job", async (req, res) => {
  try {
    const numberOfjob = await Jobs.find({ AddedByUser: true });
    const max = numberOfjob.reduce(function (prev, current) {
      return prev.numberOfJob > current.numberOfJob ? prev : current;
    }); //returns object
    console.log(max.numberOfJob);
    console.log(req.body);
    //title je position

    const job = {
      title: req.body.title,
      employer: req.body.employer,
      dateFrom: req.body.dateFrom,
      numberOfJob: max.numberOfJob + 1,
      AddedByUser: true,
      placilo: req.body.placilo,
      lokacija: req.body.lokacija,
      email: req.body.email,
      howToApply: req.body.howToApply,
      emailCompany: req.body.emailCompany,
      zahteve: req.body.zahteve,
      kontakt: req.body.kontakt,
      isBruto: req.body.isBruto,
      isRemote: req.body.isRemote,
      maximumPlacilo: Number(req.body.maximumPlacilo),
      opisDelovnegaMesta: req.body.opisDelovnegaMesta,
      programmingLanguages: req.body.programmingLanguages,
    };
    await Jobs.create(job);
    console.log("jobs created");
    res.status(200).json({
      status: "success",
      message: "You have succesfully created a Job",
    });
  } catch (error) {
    console.log(error);
  }
});

// {
//   title: String,
//   numberOfJob: Number,
//   employer: String,
//   dateFrom: String,
//   placilo: String,
//   lokacija: String,
//   zahteve: String,
//   kontakt: String,
//   isBruto: String,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   AddedByUser: Boolean,
//   isRemote: Boolean,
//   maximumPlacilo: Number,
//   opisDelovnegaMesta: String,
//   programmingLanguages: [],
//   email: String,
//   yeaProgrammingLanguages: String,
// },
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true },
// }

app.get("/", (req, res) => {
  res.send("Express server is up and running.");
});
