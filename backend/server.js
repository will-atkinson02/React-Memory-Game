const express = require("express")
const cors = require("cors")
const gameRoutes = require("./routes/gameRoutes")

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use("/api", gameRoutes) 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})