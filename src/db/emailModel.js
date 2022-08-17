const mongoose = require("mongoose");

const emailSchema = {
  email: String,
};

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
