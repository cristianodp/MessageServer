const nodemailer = require("nodemailer");

const sendEmail = (transporterParams, mailOptions, callback) => {

  const transporter = nodemailer.createTransport(transporterParams);
  transporter.sendMail(mailOptions, callback);

};

module.exports = {
  sendEmail
};


//https://myaccount.google.com/u/1/lesssecureapps?pageId=none permitir modo nao seguro na conta caso gmail 