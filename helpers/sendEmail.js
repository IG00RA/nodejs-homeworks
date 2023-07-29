const nodemailer = require("nodemailer");
require("dotenv").config();
const { MAIL_APP_PASS } = process.env;

const nodemailerConfig = {
  host: "smtp.fastmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "igoora@fastmail.com",
    pass: MAIL_APP_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "igoora@fastmail.com" };
  await transport
    .sendMail(email)
    .then(() => {
      console.log("Email Send Success");
    })
    .catch((error) => console.log(error));
  return true;
};

module.exports = sendEmail;
