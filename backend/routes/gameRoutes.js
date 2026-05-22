const express = require("express")
const router = express.Router()
const { scores, accounts } = require("../db/memory")

router.get("/scores", (req, res) => {
    res.json({ scores: scores })
})

router.post("/score", (req, res) => {
    const { score } = req.body

    scores.push(score)

    res.json({ score: score })
})

router.post("/register", (req, res) => {
    const { username, password } = req.body


    if (accounts.some(account => account.username === username))
    {
        res.json({ allowLogin: false })
    }
    else
    {
        const newAccount = { username: username, password: password }
        accounts.push(newAccount)
        res.json({ allowLogin: true, account: newAccount })
    }

})

router.post("/login", (req, res) => {
    const { username, password } = req.body
    console.log(username, password)

    if (accounts.some(account => account.username === username && account.password === password))
    {
        res.json({ allowLogin: true })
    }
    else
    {
        res.json({ allowLogin: false })
    }

})

router.get("/accounts", (req, res) => {
    res.json({ accounts })
})

module.exports = router