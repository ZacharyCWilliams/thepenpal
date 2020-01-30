const mongoose = require("mongoose");

const CitizenSchema = mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  location: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Citizen', CitizenSchema);