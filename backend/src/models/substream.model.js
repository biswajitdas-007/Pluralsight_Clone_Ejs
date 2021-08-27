const mongoose = require("mongoose");

const substreamSchema = new mongoose.Schema(
  {
        subStream_name: { type: String, required: true },
      courseDomain_name: [{type:mongoose.Schema.Types.ObjectId, ref:"coursedomain", required:true }]
  },
  {
    versionKey: false
  }
);

const SubStream = mongoose.model("substream", substreamSchema);

module.exports = SubStream;