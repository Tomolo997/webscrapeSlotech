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

const sendEmail = (receiver, jobs) => {
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
        TextPart: "From now on you will not miss on the",
        HTMLPart: makeHTML(jobs),
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
module.exports = { sendEmail };
