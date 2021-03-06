require("dotenv").config({ path: ".env" });

const mailjet = require("node-mailjet").connect(
  process.env.MAILJETAPI,
  process.env.MAILJETAPI2
);

const makeHTML = (jobs) => {
  let html = "";
  for (let i = 0; i < jobs.length; i++) {
    const element = jobs[i];
    html += `<h3>${jobs.title}</h3> </br>`;
  }
  return html;
};
const makeHTMLFilters = (filters) => {
  let html = "";
  for (let i = 0; i < filters.length; i++) {
    const element = filters[i];
    html += `<p>                 - ${element}</p> </br>`;
  }
  return html;
};

const sendEmailWelcome = (receiver, filters) => {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "support@costfriendlyflights.com",
          Name: "Slo IT jobs",
        },
        To: [
          {
            Email: receiver,
            Name: "",
          },
        ],
        Subject: "Great to have you on board",
        TextPart: "From now on you will not miss on the latest jobs",
        HTMLPart: `<h3>Welcome to the Slovenia IT jobs email list </h3>
        <p >You can expect to receive jobs daily, it depends on your filters ofcourse.</p> 
        <p>Your filters are: ${makeHTMLFilters(filters)}</p>
        <p>Thanks for applying to this email list</p>
        <p>BR Slovenia IT jobs team</p>`,
        CustomID: "AppGettingStartedTest",
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
};
const makeHTMLJobs = (jobs) => {
  let html = "";
  for (let i = 0; i < jobs.length; i++) {
    const element = jobs[i];
    html += `<div style="border: 2px solid black;
    width: 80%;
    height: 150px;
    display: flex;
    margin: 1rem;
    padding: 1rem;
    border-radius: 10px;">
    <table style="border-collapse: collapse;" width = "100%">
    <tr>
       <td style="border-bottom: 1px solid black;">Title</td><td style="border-bottom: 1px solid black;">${
         element.title
       }</td>
    </tr>
    
    <tr>
       <td style="border-bottom: 1px solid black;">Employer</td><td style="border-bottom: 1px solid black;">${
         element.employer
       }</td>
    </tr>

    <tr>
       <td style="border-bottom: 1px solid black;">Placilo</td><td style="border-bottom: 1px solid black;">${
         element.placilo
       } ${element.isBruto}</td>
    </tr>

    <tr>
       <td style="border-bottom: 1px solid black;">Lokacija</td><td style="border-bottom: 1px solid black;">${
         element.lokacija
       } ${element.isRemote ? ", Remote" : ""}</td>
    </tr>

    <tr>
       <td colspan = "2" style="text-align: center; "><a  style="width: 100%;
       height: 100%;
       background-color: red;
       display: block;
       text-decoration: none;
       font-size: 1.2rem;
       color: white;"
       href=${
         element.email.includes("@") ? `mailto:${element.email}` : element.email
       }
     >
       APPLY
     </a></td>
    </tr>
 </table>
      
    </div> </br>`;
  }
  return html;
};
const sendEmailJobs = (receiver, jobs) => {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "support@costfriendlyflights.com",
          Name: "Slo IT jobs",
        },
        To: [
          {
            Email: receiver,
            Name: "",
          },
        ],
        Subject: "We have found some jobs for you ",
        TextPart: "From now on you will not miss on the latest jobs",
        HTMLPart: `<h3>Here are your jobs for today. </h3>
        <p>This</p> 
        <div>Your Jobs are: ${makeHTMLJobs(jobs)}</div>
        <p>Thanks for using our service.</p>
        <p>BR Slovenia IT jobs team</p>`,
        CustomID: "AppGettingStartedTest",
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err);
      console.log(err.statusCode);
    });
};
module.exports = { sendEmailWelcome, sendEmailJobs };
