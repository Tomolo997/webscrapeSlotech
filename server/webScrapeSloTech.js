const puppeteer = require("puppeteer");
const fs = require("fs");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //get 100 jbos from the slotech web page

  let programmingLanguages = [
    "python",
    "javascript",
    "/\bjs\b/",
    "javaScript",
    "JAVASCRIPT",
    "Python",
    "C++",
    "c++",
    "Java",
    "java",
    "angular",
    "ANGULAR",
    "Microsoft 365",
    "Angular",
    "typeScript",
    "/\bC\b/",
    "/\bc\b/",
    "C#",
    "c#",
    "VueJS",
    "Vue",
    "vue",
    "React",
    "react",
    "Laravel",
    "SQL",
    "Sql",
    "jQuery",
    "REACT native",
    "node.js",
    "node",
    "Node",
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
    console.log("TEXTTTT ==> " + text);
    salary = text.replace(/[^0-9]/g, ""); // replace all leading non-digits with nothing
    let array = [salary.slice(0, 4), salary.slice(4, 8)];
    if (array[1] === "") {
      salary = array[0] + " Eur/mon";
    } else {
      salary = array[0] + " - " + array[1] + " Eur/mon";
    }
    if (text.includes("dogovor")) {
      salary = "Po dogovoru";
    }

    return salary;
  }
  function extractMaximuNumber(text) {
    let maximumPay = "";
    console.log("TEXTTTT ==> " + text);
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

  for (var i = 100 - 1; i >= 0; i--) {
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
      kontakt: "",
      maximumPlacilo: "",
      opisDelovnegaMesta: "",
      programmingLanguages: [],
      email: "",
      yeaProgrammingLanguages: [],
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
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
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

    job.title = title;
    job.employer = employer;
    job.placilo = extractSalary(placilo);
    job.maximumPlacilo = extractMaximuNumber(placilo);
    job.lokacija = lokacija;
    job.zahteve = zahteve;
    job.kontakt = kontakt;
    job.opisDelovnegaMesta = opisDelovnegaMesta;
    job.email = extractEmails(kontakt);
    job.yeaProgrammingLanguages = progggggggramingLang;
    jobs.push(job);
  }
  const data = JSON.stringify(jobs.reverse());

  function compare(a, b) {
    if (a.maximumPlacilo < b.maximumPlacilo) {
      return 1;
    }
    if (a.maximumPlacilo > b.maximumPlacilo) {
      return -1;
    }
    return 0;
  }

  const sortbyPlacilo = (array) => {
    const sortedArray = array.sort(compare);
    return sortedArray;
  };
  const data2 = JSON.stringify(sortbyPlacilo(jobs));
  // write JSON string to a file
  fs.writeFile("jobsSorted.json", data2, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
  fs.writeFile("jobs.json", data, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
  await browser.close();
})();
