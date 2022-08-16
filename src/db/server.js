const express = require("express");

const app = express();

app.get("/testingAPI", (req, res) => {
  res.send("Connection successful");
});

app.listen(3000, () => {
  console.log("We are online!");
});
