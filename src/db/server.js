const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
// eslint-disable-next-line no-unused-expressions
require("dotenv").config;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECTION);

const emailSchema = {
  email: String,
};

const Email = mongoose.model("Email", emailSchema);

app.post("/testingAPI", (req, res) => {
  console.log(req.body);
  let newEmail = new Email({
    email: req.body.email,
  });
  newEmail.save();
  res.redirect("/testingAPI");
});

// app.get("/testingAPI", (req, res) => {
//   res.sendFile(path.resolve("./index.html"));
// });

app.listen(3000, () => {
  console.log("We are online!");
});
