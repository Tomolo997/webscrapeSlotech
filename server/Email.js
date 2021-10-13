const mailjet = require("node-mailjet").connect(
  "6d44955f1e826b7a61e95c1b664c8fd0",
  "cfca376d8e59e027dd9e6538fcd0141b"
);

const sendEmail = (receiver) => {
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
        HTMLPart: "<h3>Welcome to the party</h3> ",
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
