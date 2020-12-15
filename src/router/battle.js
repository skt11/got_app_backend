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

router.get("/count", async (_, res) => {
    try {
        const count = await Battle.countDocuments({})
        res.send({ count })
    }
    catch (e) {
        res.status(500).send({ msg: "Internal server error." })
    }
})

router.get("/search", async ({ query }, res) => {
    try {
        if (query.king) {
            query = { $or: [{ atacker_king: query.king }, { defender_king: query.king }], ...query }
            delete query.king
        }
        const battleList = await Battle.find(query)
        if (battleList.length === 0) {
            return res.sendStatus(404)
        }
        res.send(battleList).status(200)
    }
    catch (e) {
        res.status(500).send({ msg: "Internal server error." })
    }
})



module.exports = router