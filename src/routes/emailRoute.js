const express = require("express");
const router = express.Router();
const Email = require("../db/emailModel");

router.route("/create").post((req, res) => {
  const email = req.body.email;

  const newEmail = new Email({
    email,
  });

  newEmail.save();
});

module.exports = router;
