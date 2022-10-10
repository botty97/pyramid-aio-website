const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// eslint-disable-next-line no-unused-expressions
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://connor:testingfun@cluster0.nfbl0.mongodb.net/pyramidAIO');

app.get("/healthcheck", (req, res) => {
  res.send({
    message: "Backend is up and running. Connected successfully.",
  });
});

app.use("/", require("../routes/emailRoute"));

app.listen(3001, () => {
  console.log("The backend is now up and running on PORT 3001");
});
