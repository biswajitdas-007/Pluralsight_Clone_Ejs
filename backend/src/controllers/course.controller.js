const express = require("express");

const router = express.Router();

const Course = require("../models/course.model");

router.get("/", async function (req, res) {
    
    try {
       const coursedomain = await Course.find().lean().exec();
        return res.send(coursedomain);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});


router.post("/", async function (req, res) {
    console.log(Course())
     try {
       const coursedomain = await Course.create(req.body);
    return res.send(coursedomain);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});


module.exports = router;
