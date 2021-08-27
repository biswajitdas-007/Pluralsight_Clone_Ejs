const express = require("express");

const router = express.Router();

const Stream = require("../models/stream.model");

router.get("/", async function (req, res) {
    try {
        const stream = await Stream.find().populate("subStream_name").lean().exec();
        return res.send(stream);
    } catch (error) {
        return res.status(400).send(error.message);
    }
    
});
/////////////////////////////////////////////////////////////////
router.get("/checking", async function (req, res) {
    try {
        const streams = await Stream.find().lean().exec();
        return res.render("practice/practice", {
            streams:streams                       // path then the data to be fetched
        });
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

//////////////////////////////////////////////////////////////
router.post("/", async function (req, res) {
     try {
        const stream = await Stream.create(req.body);
        return res.send(stream);
    } catch (error) {
        return res.status(400).send(error.message);
    }

});

router.get("/:id", async (req, res) => {
    try {
        const stream = await Stream.findById(req.params.id).populate("subStream_name").lean().exec();
        return res.status(201).send(stream);
    } catch (error) {
        return res.status(400).send(error.message);
    }
})


router.patch("/:id", async (req, res) => {
    try {
        const product = await Stream.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.status(201).send(product);
    } catch (error) {
        return res.status(400).send(error.message);
    }
})


module.exports = router;
