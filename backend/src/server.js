const path = require('path');
const express = require("express");

const connect = require("./configs/db");

const streamController = require("./controllers/stream.controller");
const subStreamController = require("./controllers/substream.controller");
const courseDomainController = require("./controllers/coursedomain.controller");
const userController = require("./controllers/user.controller");
const courseController = require("./controllers/course.controller");
const vidioController = require("./controllers/videoHead.controller");

const app = express();




////////////////////////////////////////////////////



app.set("views", path.join(__dirname, "views"));    // this is setting path directory
app.set("view engine", "ejs");         // this is telling us which engine we want to use     

///////////////////////////////////////////////////

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/stream",streamController)
app.use("/substream", subStreamController)
app.use("/coursedomain", courseDomainController)
app.use("/", userController);
app.use("/vidio", vidioController);
app.use("/us",courseController);


app.listen(3251, async () => {
  await connect();
  console.log("Listening on port 3251");
});