const { scores, accounts } = require("../db/memory")

function getScores(req, res)
{
    res.json({ scores: scores })
}

function addScore(req, res)
{
    const { score } = req.body

    scores.push(score)

    res.json({ score: score })
}

function register(req, res)
{
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
}

function login(req, res)
{
    const { username, password } = req.body

    if (accounts.some(account => account.username === username && account.password === password))
    {
        res.json({ allowLogin: true })
    }
    else
    {
        res.json({ allowLogin: false })
    }
}

function getAccounts(req, res)
{
    res.json({ accounts })
}

module.exports = {
    getScores,
    addScore,
    register,
    login,
    getAccounts
}