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
        <p>You can expect to receive jobs daily, it depends on your filters ofcourse.</p> 
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
module.exports = { sendEmailWelcome };
