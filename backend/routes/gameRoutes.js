const express = require("express")
const router = express.Router()
const { scores } = require("../db/memory")

router.get("/scores", (req, res) => {
    res.json({ scores: scores })
})

router.post("/score", (req, res) => {
    console.log(req)
    const { score } = req.body

    scores.push(score)

    res.json({ score: score})
})

module.exports = router