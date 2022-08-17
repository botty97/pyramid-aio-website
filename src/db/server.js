const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// eslint-disable-next-line no-unused-expressions
require("dotenv").config;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(String(process.env.DB_CONNECTION));

app.use("/", require("../routes/emailRoute"));

app.listen(3001, () => {
  console.log("The backend is now up and running on PORT 3001");
});
