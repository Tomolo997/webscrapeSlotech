const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
   
//get 100 jbos from the slotech web page 

const jobs = [

];


for (var i =100- 1; i >= 0; i--) {
    //current job number
    let delo = 4178
    let job = {
      title:"",
      numberOfJob:"",
      employer:"",
      dateFrom:"",
      placilo:"",
      lokacija:""
    };
    await page.goto(`https://slo-tech.com/delo/${delo-i}`);

    //X paths
    let [dateOfPostingXPath] = await page.$x("//*[@id='content']/ul[1]/li/span/time");
    let [titleXPath] = await page.$x("//*[@id='content']/h3");
    let [employerXpath] = await page.$x("//*[@id='content']/h3/a");
    let [placiloXpath] = await page.$x("//*[@id='content']/dl[2]/dd");
    let [lokacijaXPath] = await page.$x("//*[@id='content']/dl[1]/dd/a");
    //evaluating
    const datePosted = await page.evaluate(name => name.textContent, dateOfPostingXPath);
    const fullTitle = await page.evaluate(name => name.textContent, titleXPath);
    const placilo = await page.evaluate(name => name.textContent, placiloXpath);
    const lokacija = await page.evaluate(name => name.textContent, lokacijaXPath);
    
    
    const title = fullTitle.split("@")[0]
    const employer = fullTitle.split("@")[1]
    
    //const employer = await page.evaluate(name => name.textContent, employerXpath);
    job.dateFrom = datePosted;
    job.title = title;
    job.employer = employer;
    job.placilo = placilo;
    job.lokacija= lokacija;
    jobs.push(job);
  }
  console.log(jobs)
  await browser.close();
})();