const express = require("express")
const router = express.Router()
const { scores, accounts } = require("../db/memory")
const { getScores, addScore, register, login, getAccounts } = require("../controllers/gameController")

router.get("/scores", getScores)
router.post("/score", addScore)
router.post("/register", register)
router.post("/login", login)
router.get("/accounts", getAccounts)

module.exports = router