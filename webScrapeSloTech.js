const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //get 100 jbos from the slotech web page

  let programmingLanguages = [
    "python",
    "javascript",
    "JS",
    "Js",
    "javaScript",
    "JAVASCRIPT",
    "Python",
    "C++",
    "c++",
    "Java",
    "java",
    "angular",
    "ANGULAR",
    "Angular",
    "TypeScript",
    "typescript",
    "Typescript",
    "typeScript",
    "/\bC\b/",
    "C#",
    "c#",
    "VueJS",
    "Vue",
    "vue",
    "React",
    "react",
    "SQL",
    "Sql",
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
    "Wordpress",
  ];

  //get the latest delo
  await page.goto(`https://slo-tech.com/delo`);

  let TextPage = [];
  for (let i = 1; i < 10; i++) {
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
      opisDelovnegaMesta: "",
      programmingLanguages: [],
    };
    await page.goto(`https://slo-tech.com/delo/${delo - i}`);

    //X paths
    let [dateOfPostingXPath] = await page.$x(
      "//*[@id='content']/ul[1]/li/span/time"
    );
    let [titleXPath] = await page.$x("//*[@id='content']/h3");
    let [employerXpath] = await page.$x("//*[@id='content']/h3/a");
    let [placiloXpath] = await page.$x("//*[@id='content']/dl[2]/dd");
    let [lokacijaXPath] = await page.$x("//*[@id='content']/dl[1]/dd/a");
    let [zahteveXpath] = await page.$x("//*[@id='content']/p[2]");
    let [opisDelovnegaMestaXpath] = await page.$x("//*[@id='content']/p[1]");
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

    let temporaryProgrammingLanugages = [];

    for (let i = 0; i < programmingLanguages.length; i++) {
      const element = programmingLanguages[i];
      if (element == "GO") {
        if (zahteve.includes(element)) {
          temporaryProgrammingLanugages.push(element);
          continue;
        }
        if (opisDelovnegaMesta.includes(element)) {
          temporaryProgrammingLanugages.push(element);
        }
        continue;
      }
      if (zahteve.toLowerCase().includes(element.toLowerCase())) {
        temporaryProgrammingLanugages.push(element.toLowerCase());
      }
      if (opisDelovnegaMesta.toLowerCase().includes(element.toLowerCase())) {
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
      console.log(date);
      console.log(month, day, year);
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
    job.placilo = placilo;
    job.lokacija = lokacija;
    job.zahteve = zahteve;
    job.opisDelovnegaMesta = opisDelovnegaMesta;
    jobs.push(job);
  }
  console.log(jobs);
  console.log(jobs.length);
  await browser.close();
})();
