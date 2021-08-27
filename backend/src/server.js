const path = require('path');
const express = require("express");

const connect = require("./configs/db");

const streamController = require("./controllers/stream.controller");
const subStreamController = require("./controllers/substream.controller");
const courseDomainController = require("./controllers/coursedomain.controller");
const videoHeadController = require("./controllers/videoHead.controller");

const app = express();
app.use(express.json());




////////////////////////////////////////////////////

// app.use(express.urlencoded({ extended: false }));
// app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));    // this is setting path directory
app.set("view engine", "ejs");         // this is telling us which engine we want to use     

///////////////////////////////////////////////////


app.use("/stream",streamController)
app.use("/substream", subStreamController)
app.use("/coursedomain", courseDomainController)
app.use("/videoHead", videoHeadController)



app.listen(3251, async () => {
  await connect();
  console.log("Listening on port 3251");
});