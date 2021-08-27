const express = require("express");

const router = express.Router();

const SubStream = require("../models/substream.model");

router.get("/", async function (req, res) {
     try {
       const substream = await SubStream.find().populate("courseDomain_name").lean().exec();
        return res.send(substream);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

//////////////////////////////////////////////////



/////////////////////////////////////////////////

router.post("/", async function (req, res) {
    try {
       const substream = await SubStream.create(req.body);
    return res.send(substream);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const stream = await SubStream.findById(req.params.id).lean().exec();
        return res.status(201).send(stream);
    } catch (error) {
        return res.status(400).send(error.message);
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const product = await SubStream.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.status(201).send(product);
    } catch (error) {
        return res.status(400).send(error.message);
    }
})

module.exports = router;
