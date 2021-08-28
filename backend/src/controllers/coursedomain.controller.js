const express = require("express");

const router = express.Router();

const courseDomain = require("../models/coursedomain.model");

router.get("/", async function (req, res) {
    
    try {
       const coursedomain = await courseDomain.find().lean().exec();
        return res.send(coursedomain);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

/////////////////////////////////////////////////////////////////
router.get("/checking2", async function (req, res) {
    try {
        const streams = await courseDomain.find().lean().exec();
        return res.render("users/practice", {
            streams:streams                       // path then the data to be fetched
        });
    } catch (error) {
        return res.status(400).send(error.message);
    }
});
//////////////////////////////////////////////////////////////

router.post("/", async function (req, res) {
     try {
       const coursedomain = await courseDomain.create(req.body);
    return res.send(coursedomain);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const stream = await courseDomain.findById(req.params.id).lean().exec();
        return res.status(201).send(stream);
    } catch (error) {
        return res.status(400).send(error.message);
    }
})
router.get("/lastPage", async function (req, res) {
    try {
        const streams = await courseDomain.find().lean().exec();
        return res.render("users/lastPage", {
            streams:streams                       // path then the data to be fetched
        });
    } catch (error) {
        return res.status(400).send(error.message);
    }
});


module.exports = router;
