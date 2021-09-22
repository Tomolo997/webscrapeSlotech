const mongoose = require("mongoose");
const JobsCopySchema = mongoose.Schema(
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
const JobsCopy = mongoose.model("JobsCopy", JobsCopySchema);

module.exports = JobsCopy;
