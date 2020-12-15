const express = require('express');
const Battle = require('../models/battle');
const mongoose = require('mongoose');

const router = express.Router()

router.get("/list", async (_, res) => {
    try {
        const battleList = await Battle.find({})
        const locationList = battleList.map(({ location }) => location)
        res.send(locationList)
    }
    catch (e) {
        res.status(500).send({ msg: "Internal server error." })
    }
})


module.exports = router