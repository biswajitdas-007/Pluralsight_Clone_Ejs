const mongoose = require("mongoose");

const videoHeadSchema = new mongoose.Schema(
  {
        courseName: { type: String, required: true },
        contentType: { type: String, required: true },
        author: { type: String, required: true },
        dateOfCourse: { type: String, required: true },
        difficulty: { type: String, required: true },
        rating: { type: Number, required: true },
        duration: { type: String,required: true }
  },
  {
    versionKey: false
  }
);

const VideoHead = mongoose.model("videoHead", videoHeadSchema);

module.exports = VideoHead;