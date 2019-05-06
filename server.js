const express = require("express");
const bodyParser = require("body-parser");

const server = express();
server.use(bodyParser.json());

server.post("/sendEmail", (req, res, next) => {
  const par = req.body;
  const { sendEmail } = require("./sendEmail");
  sendEmail(par.conf, par.mail, (error, sucess) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(sucess);
    }
  });
});

server.listen(3000, () => {
  console.log("running on port " + 3000);
});
