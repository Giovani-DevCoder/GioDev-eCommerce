const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: String,
    confirmpassword: String,
    agreeToTerms: {
      type: Boolean,
      required: false
    },
    role: {
      type: String,
      default: "GENERAL"
    }
  }, {
    timestamps: true
  });
  
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

