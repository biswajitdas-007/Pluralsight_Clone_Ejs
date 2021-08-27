const mongoose = require("mongoose");

const streamSchema = new mongoose.Schema(
  {
    stream_name: { type: String, required: true },
    subStream_name: [{type:mongoose.Schema.Types.ObjectId, ref:"substream", required:true }]
  },
  {
    versionKey: false
  }
);

const Stream = mongoose.model("stream", streamSchema);

module.exports = Stream;