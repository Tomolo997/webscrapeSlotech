const mongoose = require("mongoose");
const JobsSchema = mongoose.Schema(
  {
    title: String,
    numberOfJob: Number,
    employer: String,
    dateFrom: String,
    placilo: String,
    lokacija: String,
    zahteve: String,
    kontakt: String,
    maximumPlacilo: Number,
    opisDelovnegaMesta: String,
    programmingLanguages: [],
    email: String,
    yeaProgrammingLanguages: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const Jobs = mongoose.model("Jobs", JobsSchema);

module.exports = Jobs;
