const mongoose = require("mongoose");

const signUpUser = new mongoose.Schema({
  email: String,
  password: String,
});

module.exports = mongoose.model("signUpUser", signUpUser);
