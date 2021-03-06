const express = require("express");

const router = express.Router();

const videoHead = require("../models/videoHead.model");


router.post("/", async function (req, res) {
     try {
       const coursedomain = await videoHead.create(req.body);
    return res.send(coursedomain);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});
router.get("/", async function (req, res) {
    try {
        const videos = await videoHead.find().lean().exec();
        return res.render("filterPage/filter", {
            videos:videos                       // path then the data to be fetched
        });
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

module.exports = router;
