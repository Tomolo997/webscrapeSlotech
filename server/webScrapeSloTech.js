const puppeteer = require("puppeteer");

const fs = require("fs");
//server.js
var cron = require("node-cron");

const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
const port = process.env.PORT || 8000;
require("dotenv").config();
const Jobs = require("./JobsModel");
const JobsCopy = require("./jobsModelCopy");
const { async } = require("regenerator-runtime");
const { pathToFileURL } = require("url");

//connection to the DB
const DB = process.env.DATABASE;

const yea = async () => {
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

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //get 100 jbos from the slotech web page

  let programmingLanguages = [
    "python",
    "javascript",
    "/\bjs\b/",
    "Python",
    "C++",
    "c++",
    "Java",
    "java",
    "angular",
    "Microsoft 365",
    "Angular",
    "typeScript",
    "/\bC\b/",
    "/\bc\b/",
    "C#",
    "c#",
    "VueJS",
    ".NET",
    "Vue",
    "vue",
    "React",
    "react",
    "Laravel",
    "SQL",
    "Sql",
    "jQuery",
    "REACT native",
    "node",
    "HTML",
    "CSS",
    "GO",
    "RUBY",
    "SWIFT",
    "PHP",
    "xml",
    "Wordpress",
    "AWS",
    "iOS",
    "mobile",
    "android",
    "flutter",
  ];

  //get the latest delo
  await page.goto(`https://slo-tech.com/delo`);

  let TextPage = [];
  for (let i = 1; i < 10; i++) {
    //html/body/div[2]/div[5]/dl[4]
    //html/body/div[2]/div[5]/dl[4]
    //*[@id="content"]/dl[4]
    //*[@id="content"]/dl[4]/dt[1]
    let [getTextIconXPath] = await page.$x(
      `//*[@id="content"]/table/tbody/tr[${i}]/td[2]/h3/a`
    );
    const getTextIcon = await page.evaluate(
      (name) => name.href,
      getTextIconXPath
    );
    let numberOfJob = getTextIcon.split("/")[4];
    TextPage.push(Number(numberOfJob));
  }
  let jobNumberToStartWith = Math.max(...TextPage);
  let jobs = [];

  function extractEmails(text) {
    let email = "";
    if (text.match(/(https?:\/\/[^ ]*)/) !== null) {
      email = text.match(/(https?:\/\/[^ ]*)/)[0];
    } else {
      if (text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/)) {
        email = text.match(
          /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
        )[0];
      }
    }
    return email;
  }

  function extractSalary(text) {
    let salary = "";
    salary = text.replace(/[^0-9]/g, ""); // replace all leading non-digits with nothing
    let array = [salary.slice(0, 4), salary.slice(4, 8)];
    if (array[1] === "") {
      if (
        text.toLowerCase().includes("bruto") ||
        text.toLowerCase().includes("gross")
      ) {
        salary = array[0] + ` €/m`;
      } else if (
        text.toLowerCase().includes("neto") ||
        text.toLowerCase().includes("neto")
      ) {
        salary = array[0] + " €/m ";
      } else if (text.includes("uro")) {
        salary = array[0] + " €/uro ";
      } else {
        salary = array[0] + " €/m ";
      }
    } else {
      if (
        text.toLowerCase().includes("bruto") ||
        text.toLowerCase().includes("gross")
      ) {
        salary = array[0] + " - " + array[1] + " €/m ";
      } else if (
        text.toLowerCase().includes("neto") ||
        text.toLowerCase().includes("neto")
      ) {
        salary = array[0] + " - " + array[1] + " €/m ";
      } else {
        salary = array[0] + " - " + array[1] + " €/m ";
      }
    }
    if (text.includes("dogovor")) {
      salary = "Po dogovoru";
    }

    return salary;
  }

  const extractBruto = (text) => {
    let salary = "";
    // salary = text.replace(/[^0-9]/g, ""); // replace all leading non-digits with nothing
    // let array = [salary.slice(0, 4), salary.slice(4, 8)];
    if (
      text.toLowerCase().includes("bruto") ||
      text.toLowerCase().includes("BRUTO") ||
      text.toLowerCase().includes("gross")
    ) {
      salary = `bruto`;
    } else if (
      text.toLowerCase().includes("neto") ||
      text.toLowerCase().includes("Neto") ||
      text.toLowerCase().includes("NETO")
    ) {
      salary = "neto";
    } else if (text.includes("uro")) {
      salary = "bruto";
    } else {
      salary = "bruto";
    }

    return salary;
  };
  function extractMaximuNumber(text) {
    let maximumPay = "";
    maximumPay = text.replace(/[^0-9]/g, ""); // replace all leading non-digits with nothing
    let array = [maximumPay.slice(0, 4), maximumPay.slice(4, 8)];
    if (array[1] === "") {
      maximumPay = Number(array[0]);
    } else {
      maximumPay = Number(array[1]);
    }
    if (text.includes("dogovor")) {
      maximumPay = 0;
    }

    return maximumPay;
  }

  for (var i = 70 - 1; i >= 0; i--) {
    //current job number
    let delo = jobNumberToStartWith;
    let job = {
      title: "",
      numberOfJob: delo - i,
      employer: "",
      dateFrom: "",
      placilo: "",
      lokacija: "",
      zahteve: "",
      isBruto: "",
      kontakt: "",
      maximumPlacilo: "",
      opisDelovnegaMesta: "",
      programmingLanguages: [],
      email: "",
      yeaProgrammingLanguages: [],
      isRemote: false,
      AddedByUser: false,
    };
    await page.goto(`https://slo-tech.com/delo/${delo - i}`);

    //X paths
    let [dateOfPostingXPath] = await page.$x(
      "//*[@id='content']/ul[1]/li/span/time"
    );
    let [titleXPath] = await page.$x("//*[@id='content']/h3");
    let [placiloXpath] = await page.$x("//*[@id='content']/dl[2]/dd");
    let [lokacijaXPath] = await page.$x("//*[@id='content']/dl[1]/dd/a");
    let [zahteveXpath] = await page.$x("//*[@id='content']/p[2]");
    let [kontaktXpath] = await page.$x(" //*[@id='content']/p[4]");
    let [opisDelovnegaMestaXpath] = await page.$x("//*[@id='content']/p[1]");
    let [programming] = await page.$x("//*[@id='content']/dl[4]");
    let progggggggramingLang = await page.evaluate(
      (name) => name.innerText,
      programming
    );

    //*[@id="content"]/dl[4]
    // get the programming languages
    // for (let j = 1; j < 10; j + 2) {

    //   console.log(progggggggramingLang);
    // }
    //*[@id="content"]/p[1]
    //evaluating

    // ce je

    let datePosted = await page.evaluate(
      (name) => name.textContent,
      dateOfPostingXPath
    );
    const fullTitle = await page.evaluate(
      (name) => name.textContent,
      titleXPath
    );
    const placilo = await page.evaluate(
      (name) => name.textContent,
      placiloXpath
    );
    const lokacija = await page.evaluate(
      (name) => name.textContent,
      lokacijaXPath
    );
    const zahteve = await page.evaluate(
      (name) => name.textContent,
      zahteveXpath
    );
    const opisDelovnegaMesta = await page.evaluate(
      (name) => name.textContent,
      opisDelovnegaMestaXpath
    );

    const kontakt = await page.evaluate(
      (name) => name.textContent,
      kontaktXpath
    );

    let temporaryProgrammingLanugages = [];

    for (let i = 0; i < programmingLanguages.length; i++) {
      const element = programmingLanguages[i];
      if (element == "GO") {
        if (progggggggramingLang.includes(element)) {
          temporaryProgrammingLanugages.push(element);
          continue;
        }
        if (progggggggramingLang.includes(element)) {
          temporaryProgrammingLanugages.push(element);
        }
        continue;
      }
      if (progggggggramingLang.toLowerCase().includes(element.toLowerCase())) {
        temporaryProgrammingLanugages.push(element.toLowerCase());
      }
      if (progggggggramingLang.toLowerCase().includes(element.toLowerCase())) {
        temporaryProgrammingLanugages.push(element.toLowerCase());
      }
    }

    job.programmingLanguages = temporaryProgrammingLanugages.filter(function (
      item,
      pos
    ) {
      return temporaryProgrammingLanugages.indexOf(item) == pos;
    });

    const title = fullTitle.split("@")[0];
    if (title.includes("brisan")) {
      continue;
    }
    const employer = fullTitle.split("@")[1];
    if (datePosted.includes("danes")) {
      const date = new Date();
      const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
      ];
      const mothnArray = [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ];
      let dateYposted = datePosted.replace(
        "danes",
        `${day}. ${mothnArray[month]} ${year} `
      );
      job.dateFrom = dateYposted;
    } else {
      job.dateFrom = datePosted;
    }
    //const employer = await page.evaluate(name => name.textContent, employerXpath);

    for (let i = 0; i < programmingLanguages.length; i++) {
      const element = programmingLanguages[i];
      if (
        title.includes(element) &&
        !job.programmingLanguages.includes(element.toLowerCase())
      ) {
        console.log(element);
        job.programmingLanguages.push(element);
      }
    }

    if (
      lokacija.includes("remote") ||
      lokacija.includes("Remote") ||
      lokacija.includes("doma")
    ) {
      job.isRemote = true;
    }

    let locationOfTheJob = [];
    if (
      lokacija.includes("LJ") ||
      lokacija.includes("lj") ||
      lokacija.includes("Ljubljana") ||
      lokacija.includes("LJUBLJANA") ||
      lokacija.includes("Lj")
    ) {
      locationOfTheJob.push("Lj");
    }

    if (
      lokacija.includes("MB") ||
      lokacija.includes("Mb") ||
      lokacija.includes("Maribor") ||
      lokacija.includes("MARIBOR")
    ) {
      locationOfTheJob.push("Mb");
    }

    if (
      lokacija.includes("CE") ||
      lokacija.includes("Celje") ||
      lokacija.includes("CELJE") ||
      lokacija.includes("Ce")
    ) {
      locationOfTheJob.push("Ce");
    }

    if (
      lokacija.includes("Novo Mesto") ||
      lokacija.includes("NOVO MESTO") ||
      lokacija.includes("NM") ||
      lokacija.includes("Nm")
    ) {
      locationOfTheJob.push("Nm");
    }
    if (lokacija.includes("Ptuj") || lokacija.includes("ptuj")) {
      locationOfTheJob.push("Ptuj");
    }

    job.title = title;
    job.employer = employer;
    job.placilo = extractSalary(placilo);
    job.maximumPlacilo = extractMaximuNumber(placilo);
    job.lokacija =
      locationOfTheJob.length > 0 ? locationOfTheJob.join(",") : lokacija;
    job.zahteve = zahteve;
    job.kontakt = kontakt;
    job.opisDelovnegaMesta = opisDelovnegaMesta;
    job.email = extractEmails(kontakt);
    job.yeaProgrammingLanguages = progggggggramingLang;
    job.isBruto = extractBruto(placilo);
    jobs.push(job);
  }

  jobs.reverse();
  const JobsAdded = await Jobs.find({ AddedByUser: true });
  // JobsCopy.create(JobsAdded);
  // let jobsAdded = await Jobs.find({});
  // let jobsAwaited = await Jobs.find();
  await JobsCopy.remove();
  // for (let i = 0; i < 10; i++) {
  //   //nove jobe iscemo
  //   const job = jobs[i];
  //   //ce v trenutnem job filu ni novekag
  //   if (!jobsAwaited.some((el) => el.numberOfJob === job.numberOfJob)) {
  //     await Jobs.create(job);
  //   }
  // }

  // Jobs copy
  // await JobsCopy.remove();
  for (let i = 0; i < jobs.length; i++) {
    const element = jobs[i];
    let job = {
      title: element.title,
      numberOfJob: element.numberOfJob,
      employer: element.employer,
      dateFrom: element.dateFrom,
      placilo: element.placilo,
      lokacija: element.lokacija,
      zahteve: element.zahteve,
      kontakt: element.kontakt,
      // AddedByUser: element.AddedByUser ? element.AddedByUser : false,
      maximumPlacilo: element.maximumPlacilo,
      opisDelovnegaMesta: element.opisDelovnegaMesta,
      programmingLanguages: element.programmingLanguages,
      email: element.email,
      isBruto: element.isBruto,
      isRemote: element.isRemote,
      AddedByUser: element.AddedByUser,
    };

    await JobsCopy.create(job);
  }

  // Jobs copy
  for (let i = 0; i < JobsAdded.length; i++) {
    const element = JobsAdded[i];
    let remote = false;
    if (
      element.lokacija.includes("remote") ||
      element.lokacija.includes("Remote") ||
      element.lokacija.includes("doma")
    ) {
      remote = true;
    }
    let job = {
      title: element.title,
      numberOfJob: element.numberOfJob,
      employer: element.employer,
      dateFrom: element.dateFrom,
      placilo: element.placilo,
      lokacija: element.lokacija,
      zahteve: element.zahteve,
      kontakt: element.kontakt,
      // AddedByUser: element.AddedByUser ? element.AddedByUser : false,
      maximumPlacilo: element.maximumPlacilo,
      opisDelovnegaMesta: element.opisDelovnegaMesta,
      programmingLanguages: element.programmingLanguages,
      email: element.email,
      isRemote: remote,
      isBruto: "bruto",
      AddedByUser: true,
    };

    await JobsCopy.create(job);
  }
  // await Jobs.create(jobsAwaited);
  // for (let i = 0; i < jobsAwaited.length; i++) {
  //   const element = jobsAwaited[i];
  //   await Jobs.create(element);
  // }

  //const data = JSON.stringify(jobs.reverse());

  // write JSON string to a file
  // fs.writeFile("jobsSorted.json", data2, (err) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log("JSON data is saved.");w
  // });
  // fs.writeFile("jobs.json", data, (err) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log("JSON data is saved.");
  // });con

  // function compare(a, b) {
  //   if (a.numberOfJob < b.numberOfJob) {
  //     return 1;
  //   }
  //   if (a.numberOfJob > b.numberOfJob) {
  //     return -1;
  //   }
  //   return 0;
  // }
  // const sortbyPlacilo = (array) => {
  //   const sortedArray = array.sort(compare);
  //   return sortedArray;
  // };
  await browser.close();

  console.log("done with the task at " + new Date());
};
// cron.schedule("*/2 * * * *", () => {
yea();
// });
