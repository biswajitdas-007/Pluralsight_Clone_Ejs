const mongoose = require("mongoose");

const courseDomainSchema = new mongoose.Schema(
  {
    courseDomain_name: { type: String, required: true }
  },
  {
    versionKey: false
  }
);

const courseDomain = mongoose.model("coursedomain", courseDomainSchema);

module.exports = courseDomain;